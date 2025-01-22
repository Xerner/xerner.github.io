import { Feature } from "models/features";
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
    enableInterceptor: false,
  },
  features: [
    { feature: Feature.repos, enabled: true },
    { feature: Feature.languages, enabled: true },
    { feature: Feature.portfolioFiles, enabled: false },
  ]
}
