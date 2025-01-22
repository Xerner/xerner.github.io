import { IProjectCard } from "./project-card";
import { Feature } from "./features";
import { IHttpCacheSettings } from "common/angular/services";
import { IFeatureFlag } from "common/angular/services/feature-flags/interfaces/IFeatureFlag";

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
  features: IFeatureFlag<Feature>[];
}
