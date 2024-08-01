import { IProjectCardRaw } from "./project-card";

export interface IAppSettings {
  environment: 'development' | 'production';
  user: string;
  portfolioJsonFilePath: string;
  token: string;
  projectCards?: IProjectCardRaw[];
  caching?: {
    enabled: boolean;
    useCacheFile: boolean;
    cacheFile: string;
  };
}
