module.exports = `
@compiler >= 6

contract interface PoS =
  stateful entrypoint set_paid : (int) => bool

main contract FungibleTokenFull =
  stateful entrypoint burn_trigger_pos : (int, PoS, int) => bool
`
