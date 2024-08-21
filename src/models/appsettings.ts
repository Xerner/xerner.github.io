import { IHttpCacheSettings } from "../../repos/common/interfaces";
import { IProjectCard } from "./project-card";

export interface IAppSettings {
  environment: 'development' | 'production';
  user: string;
  portfolioJsonFilePath: string;
  token: string;
  projectCards?: IProjectCard[];
  api?: {
    limitRepos: number;
  }
  caching?: IHttpCacheSettings;
  features: {
    repos: boolean,
    languages: boolean,
    portfolioFiles: boolean,
  }
}
