// Next, React


import { FC } from 'react';
import { SignMessage } from 'components/SignMessage';
import { MintToken } from 'components/MintToken';

export const TokenView: FC = ({ }) => {

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className=" text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">Token</h1>
        <br />
        {/* CONTENT GOES HERE */}
        <div className="text-center">
          <div className=" mx-auto bg-primary p-8 my-2 rounded-lg mb-6">
            <MintToken />
          </div>
          <div className=" mx-auto bg-primary p-8 my-2 rounded-lg mb-6">
            {/* <MintNft /> */}
            <SignMessage />

          </div>
          <div className=" mx-auto bg-primary p-8 my-2 rounded-lg mb-6">
          <SignMessage />

            {/* <SendSol /> */}
          </div>

        </div>
      </div>
    </div>
  );
};
