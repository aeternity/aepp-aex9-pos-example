module.exports = `
@compiler >= 6

main contract PoS =
  stateful entrypoint new_invoice : (int) => int
  entrypoint has_paid : (int) => bool
`;
