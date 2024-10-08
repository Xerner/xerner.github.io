import { IAppSettings } from "../models/appsettings";

export const APP_SETTINGS: IAppSettings = {
  environment: "production",
  user: "xerner",
  portfolioJsonFilePath: "portfolio.json",
  token: "",
  features: {
    repos: true,
    languages: true,
    portfolioFiles: true,
  },
  caching: {
    enabled: true,
    enableInterceptor: false,
    cacheSource: "file",
  },
}
