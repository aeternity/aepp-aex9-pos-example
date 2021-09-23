export const SETUP = 'SETUP'
export const SELECT_ITEMS = 'SELECT_ITEMS'
export const REQUEST_FUNDING = 'REQUEST_FUNDING'
export const REQUEST_PAYMENT = 'REQUEST_PAYMENT'
export const AMOUNT_INPUT = 'AMOUNT_INPUT'
export const PAID = 'PAID'
export const SELECT_ITEMS_CART = 'SELECT_ITEMS_CART'
export const CART = 'CART'
export const CONFIGURATION = 'CONFIGURATION'

function startpageForMode(mode) {
  switch (mode) {
    case 'AMOUNT':
      return AMOUNT_INPUT
    case 'ITEMS':
      return SELECT_ITEMS
    case 'CART':
      return SELECT_ITEMS_CART
  }
}

export function nextPageFromCurrent(mode, currentPage) {
  switch (currentPage) {
    case SETUP:
      return startpageForMode(mode)
    case CONFIGURATION:
      return startpageForMode(mode)
    case REQUEST_FUNDING:
      return SETUP
    case PAID:
      return startpageForMode(mode)
    case REQUEST_PAYMENT:
      return PAID
    case SELECT_ITEMS:
      return REQUEST_PAYMENT
    case AMOUNT_INPUT:
      return REQUEST_PAYMENT
    case SELECT_ITEMS_CART:
      return CART
    case CART:
      return REQUEST_PAYMENT
    default:
      return SETUP
  }
}

export function previousPageFromCurrent(mode, currentPage) {
  switch (currentPage) {
    case CONFIGURATION:
      return startpageForMode(mode)
    case REQUEST_PAYMENT:
      return mode === 'AMOUNT' ? AMOUNT_INPUT : SELECT_ITEMS
    case CART:
      return SELECT_ITEMS_CART
  }
}
