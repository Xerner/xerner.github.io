import { IAppSettings } from "../models/appsettings";

export const APP_SETTINGS: IAppSettings = {
  environment: "development",
  user: "xerner",
  portfolioJsonFilePath: "portfolio.json",
  token: "",
  caching: {
    enabled: false,
    useCacheFile: false,
    cacheFile: "cache.json",
  },
}
