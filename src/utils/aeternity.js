import {Node, Universal, MemoryAccount, Crypto} from '@aeternity/aepp-sdk/es';
import FUNGIBLE_TOKEN_CONTRACT_INTERFACE from '../assets/contracts/fungible-token-custom-interface.aes';
import POS_CONTRACT_INTERFACE from '../assets/contracts/pos-contract-interface.aes';

const MAINNET_URL = 'https://mainnet.aeternity.io';
const COMPILER_URL = 'https://compiler.aepps.com';

const TOKEN_CONTRACT_ADDRESS = 'ct_2t7TnocFw7oCYSS7g2yGutZMpGEJta6dq2DTX38SmuqmwtN6Ch';
const POS_CONTRACT_ADDRESS = 'ct_213B8EVmEzuAG9FiqpvSQA4h4D9v8eNKLTYaBaDUVVp9fnY67A';

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

aeternity.getPublicKey = () => {
  return aeternity.client.address();
}

aeternity.init = async ({publicKey, secretKey}) => {
  aeternity.client = await Universal({
    compilerUrl: COMPILER_URL,
    nodes: [{name: 'mainnet', instance: await Node({url: MAINNET_URL})}],
    accounts: [MemoryAccount({keypair: {secretKey, publicKey}})],
  });
  aeternity.token = await aeternity.client.getContractInstance(FUNGIBLE_TOKEN_CONTRACT_INTERFACE, {contractAddress: TOKEN_CONTRACT_ADDRESS})
  aeternity.pos = await aeternity.client.getContractInstance(POS_CONTRACT_INTERFACE, {contractAddress: POS_CONTRACT_ADDRESS})
  aeternity.ready = true;
};

export default aeternity;
