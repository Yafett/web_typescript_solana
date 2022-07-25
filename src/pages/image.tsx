import type { NextPage } from "next";
import Head from "next/head";
import { ImageView } from "views";


const Image: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <ImageView />
    </div>
  );
};

export default Image;
