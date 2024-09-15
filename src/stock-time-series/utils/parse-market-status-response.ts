import { ParseResponseError } from '../../errors'
import {
  MarketStatusAPIResponse,
  MarketStatusResponse
} from '../dto/market-status-response.dto'

export function parseMarketStatusResponse(
  data: MarketStatusAPIResponse
): MarketStatusResponse {
  try {
    return {
      endpoint: data.endpoint,
      markets: data.markets.map((market) => ({
        marketType: market.market_type,
        region: market.region,
        primaryExchanges: market.primary_exchanges,
        localOpen: market.local_open,
        localClose: market.local_close,
        currentStatus: market.current_status,
        notes: market.notes
      }))
    }
  } catch (err) {
    throw new ParseResponseError('fail to parse market status response', err)
  }
}
