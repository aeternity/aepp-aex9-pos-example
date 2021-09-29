import {Node, Universal, MemoryAccount, Crypto} from '@aeternity/aepp-sdk/es'
import FUNGIBLE_TOKEN_CONTRACT_INTERFACE from '../assets/contracts/fungible-token-custom-interface.aes'
import POS_CONTRACT_INTERFACE from '../assets/contracts/pos-contract-interface.aes'
import FUNGIBLE_TOKEN_CONTRACT from '../assets/contracts/fungible-token-custom.aes'
import POS_CONTRACT from '../assets/contracts/pos-contract.aes'

const MAINNET_URL = 'https://mainnet.aeternity.io'
const COMPILER_URL = 'https://compiler.aepps.com'

const aeternity = {
  client: null,
  token: null,
  pos: null,
  ready: false,
};

aeternity.generateAccount = () => {
  return Crypto.generateKeyPair()
}

aeternity.isValidAddress = Crypto.isAddressValid

aeternity.checkBalance = async () => {
  const address = await aeternity.client.address()
  return aeternity.client.getBalance(address)
}

aeternity.init = async ({publicKey, secretKey}) => {
  aeternity.client = await Universal({
    compilerUrl: COMPILER_URL,
    nodes: [{name: 'mainnet', instance: await Node({url: MAINNET_URL})}],
    accounts: [MemoryAccount({keypair: {secretKey, publicKey}})],
  })
}

aeternity.initContracts = async(config) => {
  aeternity.token = await aeternity.client.getContractInstance(FUNGIBLE_TOKEN_CONTRACT_INTERFACE, {contractAddress: config.tokenContractAddress})
  aeternity.pos = await aeternity.client.getContractInstance(POS_CONTRACT_INTERFACE, {contractAddress: config.posContractAddress})

  aeternity.ready = true
}

aeternity.deployContracts = async(name, symbol, decimals, mintedAmount, mintToAccount) => {
  aeternity.token = await aeternity.client.getContractInstance(FUNGIBLE_TOKEN_CONTRACT)
  await aeternity.token.methods.init(name, decimals, symbol, mintedAmount)
  await aeternity.token.methods.transfer(mintToAccount, mintedAmount)

  aeternity.pos = await aeternity.client.getContractInstance(POS_CONTRACT)
  await aeternity.pos.methods.init(aeternity.token.deployInfo.address)

  aeternity.ready = true

  return {
    posContractAddress: aeternity.pos.deployInfo.address,
    tokenContractAddress: aeternity.token.deployInfo.address
  }
}

aeternity.getTokenMetaInfo = () => aeternity.token.methods.meta_info().then(res => res.decodedResult)

export default aeternity
