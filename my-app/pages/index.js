import { Contract, providers, utils } from 'ethers';
import Head from 'next/head';
import Image from 'next/image';

import React, { useEffect, useRef, useState } from 'react';
import Web3Modal from 'web3modal';
import { abi, NFT_CONTRACT_ADDRESS } from '../constants';
import styles from '../styles/Home.module.css';

export default function Home() {
  // tokenIdsMinted keeps track of the number of tokenIds that have been minted
  const [tokenIdsMinted, setTokenIdsMinted] = useState('0');

  return (
    <>
      <Head>
        <title>Crypto Devs</title>
        <meta name="description" content="Whitelist-Dapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
          <div className={styles.description}>
            It&#39;s an NFT collection for developers in Crypto.
          </div>
          <div className={styles.description}>
            {tokenIdsMinted}/20 have been minted
          </div>
          {/* {renderButton()} */}
        </div>
        <div>
          <Image
            className={styles.image}
            src="./cryptodevs/0.svg"
            alt="Crypto-Devs logo"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>

      <footer className={styles.footer}>
        Made with &#10084; by Crypto Devs
      </footer>
    </>
  );
}
