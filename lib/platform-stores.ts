import type { PlatformStore } from "@/lib/types";

/**
 * Official Fusion download hrefs scraped from live fusionmarkets.com
 * (MT4 / MT5 / cTrader platform pages, 2026-08-17).
 * Linux is in the Figma store-button set but not on the live MT5 page — omit until Fusion lists it.
 */
export const platformStores = {
  mt4: [
    {
      id: "mt4-mac",
      store: "mac",
      href: "https://download.terminal.free/cdn/web/metaquotes.software.corp/mt4/MetaTrader4.pkg.zip?utm_source=support.metaquotes.net&utm_campaign=download.mt4.macos",
    },
    {
      id: "mt4-windows",
      store: "windows",
      href: "https://download.terminal.free/cdn/web/fusion.markets.pty/mt4/fusionmarkets4setup.exe",
    },
  ],
  mt5: [
    {
      id: "mt5-mac",
      store: "mac",
      href: "https://download.terminal.free/cdn/web/metaquotes.ltd/mt5/MetaTrader5.pkg.zip?utm_source=support.metaquotes.net&utm_campaign=download.mt5.macos",
    },
    {
      id: "mt5-windows",
      store: "windows",
      href: "https://download.terminal.free/cdn/web/fusion.markets.pty/mt5/fusionmarkets5setup.exe",
    },
  ],
  ctrader: [
    {
      id: "ctrader-mac",
      store: "mac",
      href: "https://getctradermac.com/fusionmarkets/ctrader-fusionmarkets-setup.dmg",
    },
    {
      id: "ctrader-windows",
      store: "windows",
      href: "https://getctrader.com/fusionmarkets/ctrader-fusionmarkets-setup.exe",
    },
  ],
} as const satisfies Record<string, PlatformStore[]>;
