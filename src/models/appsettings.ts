import { IProjectCardRaw } from "./project-card";

export interface IAppSettings {
  environment: 'development' | 'production';
  user: string;
  portfolioJsonFilePath: string;
  token: string;
  projectCards?: IProjectCardRaw[];
  caching?: {
    enabled: boolean;
    enableInterceptor: boolean;
    cacheSource: "file" | "cookies";
  };
  features: {
    repos: boolean,
    languages: boolean,
    portfolioFiles: boolean,
  }
}
