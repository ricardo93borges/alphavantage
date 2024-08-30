export type Market = {
  market_type: "Equity" | "Forex" | "Cryptocurrency";
  region: string;
  primary_exchanges: string;
  local_open: string;
  local_close: string;
  current_status: "open" | "close";
  notes: string;
};

export type MarketStatusResponse = {
  endpoint: string;
  markets: Market[];
};
