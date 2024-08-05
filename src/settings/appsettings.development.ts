import { IAppSettings } from "../models/appsettings";

export const APP_SETTINGS: IAppSettings = {
  environment: "development",
  user: "xerner",
  portfolioJsonFilePath: "portfolio.json",
  token: "",
  api: {
    limitRepos: 10,
  },
  caching: {
    enabled: true,
    enableInterceptor: true,
    cacheSource: "file",
  },
  features: {
    repos: true,
    languages: true,
    portfolioFiles: false,
  }
}
