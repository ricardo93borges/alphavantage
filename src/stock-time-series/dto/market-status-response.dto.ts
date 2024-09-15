import { MarketStatus, MarketType } from "../../enum";

export type MarketStatusAPIResponse = {
  endpoint: string;
  markets: {
    market_type: MarketType;
    region: string;
    primary_exchanges: string;
    local_open: string;
    local_close: string;
    current_status: MarketStatus;
    notes: string;
  }[];
};

export type MarketStatusResponse = {
  endpoint: string;
  markets: Market[];
};

export type Market = {
  marketType: MarketType;
  region: string;
  primaryExchanges: string;
  localOpen: string;
  localClose: string;
  currentStatus: MarketStatus;
  notes: string;
};
