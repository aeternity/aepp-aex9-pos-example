import {Node, Universal, MemoryAccount} from '@aeternity/aepp-sdk/es';
import FUNGIBLE_TOKEN_CONTRACT_INTERFACE from 'aeternity-fungible-token/FungibleTokenFullInterface.aes';
import POS_CONTRACT from './pos-contract.aes';

const TESTNET_URL = 'https://testnet.aeternity.io';
const COMPILER_URL = 'https://compiler.aepps.com';

const PUBLIC_KEY = '';
const PRIVATE_KEY = '';
const TOKEN_ADDRESS = 'ct_288wYFo9Cpb92fzYhfZAQHffp2wBZuVFTLprYF9JHLgDJWiDNL';
const POS_ADDRESS = 'ct_2mJRqRZYkifkRkA1kDqAW4rEvSVFC42ySaxdJkXAFLsuFzPrTJ';

const aeternity = {
  client: null,
  token: null,
  pos: null,
  ready: false,
  posAddress: POS_ADDRESS.replace('ct_', 'ak_'),
};

aeternity.init = async () => {
  aeternity.client = await Universal({
    compilerUrl: COMPILER_URL,
    nodes: [{name: 'testnet', instance: await Node({url: TESTNET_URL})}],
    accounts: [MemoryAccount({keypair: {secretKey: PRIVATE_KEY, publicKey: PUBLIC_KEY}})],
  });
  aeternity.token = await aeternity.client.getContractInstance(FUNGIBLE_TOKEN_CONTRACT_INTERFACE, {contractAddress: TOKEN_ADDRESS})
  aeternity.pos = await aeternity.client.getContractInstance(POS_CONTRACT, {contractAddress: POS_ADDRESS})
  aeternity.ready = true;
};

export default aeternity;
