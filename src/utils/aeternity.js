import {Node, Universal, MemoryAccount} from '@aeternity/aepp-sdk/es';
import FUNGIBLE_TOKEN_CONTRACT_INTERFACE from './fungible-token-custom-interface.aes';
import POS_CONTRACT_INTERFACE from './pos-contract-interface.aes';

const TESTNET_URL = 'https://testnet.aeternity.io';
const COMPILER_URL = 'https://compiler.aepps.com';

const PUBLIC_KEY = '';
const PRIVATE_KEY = '';
const TOKEN_CONTRACT_ADDRESS = 'ct_2VdM5w1WYv3DAETbiEefvQT4UMgar4YWi3FNoTZ2DQTg95MTpE';
const POS_CONTRACT_ADDRESS = 'ct_2SQD59RZ7CjysiK1Amm1xSwN4YpbZjwfyGuZyMQ1iddsmqdAZC';

const aeternity = {
  client: null,
  token: null,
  pos: null,
  ready: false,
  posContractAddress: POS_CONTRACT_ADDRESS,
};

aeternity.init = async () => {
  aeternity.client = await Universal({
    compilerUrl: COMPILER_URL,
    nodes: [{name: 'testnet', instance: await Node({url: TESTNET_URL})}],
    accounts: [MemoryAccount({keypair: {secretKey: PRIVATE_KEY, publicKey: PUBLIC_KEY}})],
  });
  aeternity.token = await aeternity.client.getContractInstance(FUNGIBLE_TOKEN_CONTRACT_INTERFACE, {contractAddress: TOKEN_CONTRACT_ADDRESS})
  aeternity.pos = await aeternity.client.getContractInstance(POS_CONTRACT_INTERFACE, {contractAddress: POS_CONTRACT_ADDRESS})
  aeternity.ready = true;
};

export default aeternity;
