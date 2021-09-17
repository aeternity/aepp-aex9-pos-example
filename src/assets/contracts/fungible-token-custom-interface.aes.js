module.exports = `
@compiler >= 6

contract interface PoS =
  stateful entrypoint set_paid : (int, int) => unit

main contract FungibleTokenFull =
  record meta_info = { name : string, symbol : string, decimals : int }

  stateful entrypoint burn_trigger_pos : (int, PoS, int) => unit
  entrypoint meta_info : () => meta_info
`
