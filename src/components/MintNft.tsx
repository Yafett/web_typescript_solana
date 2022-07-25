import {
    clusterApiUrl,
    Connection,
    PublicKey,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    sendAndConfirmTransaction
} from '@solana/web3.js';
import {
    createMint,
    getOrCreateAssociatedTokenAccount,
    mintTo,
    Account,
    createSetAuthorityInstruction,
    AuthorityType
} from '@solana/spl-token';

window.Buffer = window.Buffer || require('buffer').Buffer;

function MintNft() {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const fromWallet = Keypair.generate();
    let mint: PublicKey;
    let fromTokenAccount: Account;
    const toWallet = new PublicKey('GgKUHcRkrh5N2rYwXyosDefVeMo9MVpK9ESNk2HkK1p2');

    async function createNft() {
        const fromAirdropSignature = await connection.requestAirdrop(fromWallet.publicKey, LAMPORTS_PER_SOL);
        await connection.confirmTransaction(fromAirdropSignature);

        // Create new token mint
        mint = await createMint(
            connection,
            fromWallet,
            fromWallet.publicKey,
            null,
            0 // 9 here means we have a decmial of 9 0's
        );

        console.log(`Create token: ${mint.toBase58()}`);

        // Get the token account of the fromWallet address, and if it does not exist, create it
        fromTokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,
            fromWallet,
            mint,
            fromWallet.publicKey
        );
        console.log(`Create Token Account: ${fromTokenAccount.address.toBase58()}`);

    }

    async function mintNft() {
        // Mint 1 new token to the "fromTokenAccount" account we just created
        const signature = await mintTo(
            connection,
            fromWallet,
            mint,
            fromTokenAccount.address,
            fromWallet.publicKey,
            10000000000 // 10 billion
        );
        console.log(`Mint signature: ${signature}`);
    }

    async function lockNft() {
        // Create our transaction to change minting permissions
        let transaction = new Transaction().add(createSetAuthorityInstruction(
            mint,
            fromWallet.publicKey,
            AuthorityType.MintTokens,
            null
        ));

        // Send transaction
        const signature = await sendAndConfirmTransaction(connection, transaction, [fromWallet]);
        console.log(`Lock signature: ${signature}`);
    }
    return (
        <div>
            <div>
                <p className="text-2xl text-white-600 font-bold mb-5">MINT NFT</p>

                <button className="group w-60 m-2 btn  bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... " onClick={createNft} >Create Nft</button>
                <button className="group w-60 m-2 btn  bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... " onClick={mintNft}>Mint Nft</button>
                <button className="group w-60 m-2 btn  bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... " onClick={lockNft} >Lock Nft</button>
            </div>
        </div>
    );
}

export default MintNft;
