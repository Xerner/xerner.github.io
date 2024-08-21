import { IHttpCacheSettings } from "../../repos/common/interfaces/IHttpCacheSettings";
import { FeatureFlags } from "../../repos/common/types/IFeatureFlags";
import { IProjectCard } from "./project-card";
import { IFeatures } from "./features";

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
  features: FeatureFlags<IFeatures>;
}
