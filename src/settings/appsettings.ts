import { IAppSettings } from "../models/appsettings";

export const APP_SETTINGS: IAppSettings = {
  environment: "production",
  user: "xerner",
  portfolioJsonFilePath: "portfolio.json",
  token: "",
  features: {
    repos: false,
    languages: false,
    portfolioFiles: false,
  }
}
