import {Node, Universal, MemoryAccount, Crypto} from '@aeternity/aepp-sdk/es';
import FUNGIBLE_TOKEN_CONTRACT_INTERFACE from './fungible-token-custom-interface.aes';
import POS_CONTRACT_INTERFACE from './pos-contract-interface.aes';

const TESTNET_URL = 'https://testnet.aeternity.io';
const COMPILER_URL = 'https://compiler.aepps.com';

const TOKEN_CONTRACT_ADDRESS = 'ct_45FezzKwHQyenzW8SZxFJUKVWtZ4UMgVG4kAbeKcAAqsA91K3';
const POS_CONTRACT_ADDRESS = 'ct_2ndDv1QzkrgXfr1UJ2pnpjMZpTJDB4GuytH143bjNMTGRbBkL7';

const aeternity = {
  client: null,
  token: null,
  pos: null,
  ready: false,
  posContractAddress: POS_CONTRACT_ADDRESS,
};

aeternity.generateAccount = () => {
  return Crypto.generateKeyPair();
}

aeternity.checkBalance = async () => {
  const address = await aeternity.client.address();
  return aeternity.client.getBalance(address);
}

aeternity.init = async ({publicKey, secretKey}) => {
  aeternity.client = await Universal({
    compilerUrl: COMPILER_URL,
    nodes: [{name: 'testnet', instance: await Node({url: TESTNET_URL})}],
    accounts: [MemoryAccount({keypair: {secretKey, publicKey}})],
  });
  aeternity.token = await aeternity.client.getContractInstance(FUNGIBLE_TOKEN_CONTRACT_INTERFACE, {contractAddress: TOKEN_CONTRACT_ADDRESS})
  aeternity.pos = await aeternity.client.getContractInstance(POS_CONTRACT_INTERFACE, {contractAddress: POS_CONTRACT_ADDRESS})
  aeternity.ready = true;
};

export default aeternity;
