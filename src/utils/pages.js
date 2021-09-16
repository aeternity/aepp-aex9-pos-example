import config from "@/assets/content/config.json"

export const SETUP = 'SETUP'
export const SELECT_ITEMS = 'SELECT_ITEMS'
export const REQUEST_FUNDING = 'REQUEST_FUNDING'
export const REQUEST_PAYMENT = 'REQUEST_PAYMENT'
export const AMOUNT_INPUT = 'AMOUNT_INPUT'
export const PAID = 'PAID'


function startpageForMode() {
  return config.mode === 'AMOUNT' ? AMOUNT_INPUT : SELECT_ITEMS
}

export function nextPageFromCurrent(currentPage) {
  switch (currentPage) {
    case SETUP:
      return startpageForMode()
    case REQUEST_FUNDING:
      return startpageForMode()
    case PAID:
      return startpageForMode()
    case REQUEST_PAYMENT:
      return PAID
    case SELECT_ITEMS:
      return REQUEST_PAYMENT
    case AMOUNT_INPUT:
      return REQUEST_PAYMENT
    default:
      return SETUP
  }
}

export function previousPageFromCurrent(currentPage) {
  switch (currentPage) {
    case REQUEST_PAYMENT:
      return config.mode === 'AMOUNT' ? AMOUNT_INPUT : SELECT_ITEMS
  }
}
