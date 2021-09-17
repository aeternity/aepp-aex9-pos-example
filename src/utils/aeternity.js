import {Node, Universal, MemoryAccount, Crypto} from '@aeternity/aepp-sdk/es'
import FUNGIBLE_TOKEN_CONTRACT_INTERFACE from '../assets/contracts/fungible-token-custom-interface.aes'
import POS_CONTRACT_INTERFACE from '../assets/contracts/pos-contract-interface.aes'
import config from "@/assets/content/config.json"

const MAINNET_URL = 'https://mainnet.aeternity.io'
const COMPILER_URL = 'https://compiler.aepps.com'

const aeternity = {
  client: null,
  token: null,
  pos: null,
  ready: false,
  posContractAddress: config.posContractAddress,
};

aeternity.generateAccount = () => {
  return Crypto.generateKeyPair()
}

aeternity.checkBalance = async () => {
  const address = await aeternity.client.address()
  return aeternity.client.getBalance(address)
}

aeternity.getPublicKey = () => {
  return aeternity.client.address()
}

aeternity.init = async ({publicKey, secretKey}) => {
  aeternity.client = await Universal({
    compilerUrl: COMPILER_URL,
    nodes: [{name: 'mainnet', instance: await Node({url: MAINNET_URL})}],
    accounts: [MemoryAccount({keypair: {secretKey, publicKey}})],
  })
  aeternity.token = await aeternity.client.getContractInstance(FUNGIBLE_TOKEN_CONTRACT_INTERFACE, {contractAddress: config.tokenContractAddress})
  aeternity.pos = await aeternity.client.getContractInstance(POS_CONTRACT_INTERFACE, {contractAddress: aeternity.posContractAddress})
  aeternity.ready = true;
}

aeternity.getTokenMetaInfo = () => aeternity.token.methods.meta_info().then(res => res.decodedResult)

export default aeternity
