import {Node, Universal, MemoryAccount} from '@aeternity/aepp-sdk/es';
import FUNGIBLE_TOKEN_CONTRACT_INTERFACE from './fungible-token-custom-interface.aes';
import POS_CONTRACT_INTERFACE from './pos-contract-interface.aes';

const TESTNET_URL = 'https://testnet.aeternity.io';
const COMPILER_URL = 'https://compiler.aepps.com';

const PUBLIC_KEY = 'ak_BSr9fg46v1iEs7opXEu4i8GjJ5YBassrAf6L2ZBNefbUDJZcq';
const PRIVATE_KEY = '333ba7ad1f085eb77004d2efbbce9c799f0dae92355f5fe07388bde3b3e8235a17b7d65b741ae288c56638f004e42d52c0e0442b94f1bdd0689b2dae1c65511c';
const TOKEN_CONTRACT_ADDRESS = 'ct_45FezzKwHQyenzW8SZxFJUKVWtZ4UMgVG4kAbeKcAAqsA91K3';
const POS_CONTRACT_ADDRESS = 'ct_2ndDv1QzkrgXfr1UJ2pnpjMZpTJDB4GuytH143bjNMTGRbBkL7';

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
