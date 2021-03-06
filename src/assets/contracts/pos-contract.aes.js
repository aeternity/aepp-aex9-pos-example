module.exports = `
// ISC License
// Copyright (c) 2021, aeternity developers
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
// AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
// LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
// OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.


// THIS IS NOT SECURITY AUDITED
// DO NEVER USE THIS WITHOUT SECURITY AUDIT FIRST

@compiler >= 6

// dummy contract for interfaceing
contract interface FungibleToken =
  entrypoint owner : () => address

main contract PoS =

  record invoice_data = { paid : bool, price : int }
  record state = { invoices : map(int, invoice_data), token : FungibleToken }

  entrypoint init(token : FungibleToken) : state = { invoices = {}, token = token }

  stateful entrypoint new_invoice(price : int) : int =
    let next_id = Map.size(state.invoices)
    put(state{ invoices[next_id] = { paid = false, price = price } })
    next_id

  entrypoint has_paid(id : int) : bool =
    switch(Map.lookup(id, state.invoices))
      None => false
      Some(invoice_data) => invoice_data.paid

  stateful entrypoint set_paid(value : int, id : int) : unit =
    require(Call.caller == state.token.address, "ONLY TOKEN CAN SET PAID")
    switch(Map.lookup(id, state.invoices))
      None => abort("INVOICE NOT FOUND")
      Some(invoice_data) =>
        if(invoice_data.paid)
          abort("INVOICE ALREADY PAID")
        else
          require(value == invoice_data.price, "BURN VALUE HAS TO MATCH INVOICE PRICE")
          put(state{ invoices[id].paid = true })
`
