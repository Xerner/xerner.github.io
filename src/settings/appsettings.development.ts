import { IAppSettings } from "../models/appsettings";

export const APP_SETTINGS: IAppSettings = {
  environment: "development",
  user: "xerner",
  portfolioJsonFilePath: "portfolio.json",
  token: "",
  api: {
    limitRepos: 100,
  },
  caching: {
    enabled: true,
    enableInterceptor: false,
    cacheSource: "file",
  },
  features: {
    repos: true,
    languages: true,
    portfolioFiles: false,
  }
}
