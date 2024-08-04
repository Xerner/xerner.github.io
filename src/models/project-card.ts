import { IRepository } from "./github-api/repository";
import { ILanguages } from "./github-api/languages";
import { IContributor } from "./github-api/contributor";

export interface IProjectCard {
  repo: IRepository;
  languages: ILanguages | null;
  contributors: IContributor[] | null;
  // image?: IProjectCardImage;
}

export interface IProjectCardLegacy {
  isPrivate?: boolean;
  // repo: IProjectCardRepo;
  name: string;
  subtitle?: string;
  chips: string[];
  desc: string;
  image?: IProjectCardImage | IProjectCardImage[];
  // imageStyle?: CSSProperties;
  iconButtons?: IProjectCardActionButton[];
}

export interface IProjectCardImage {
  url: string;
  alt?: string;
  title?: string;
  imageFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

export interface IProjectCardActionButton {
  title: string;
  icon: string;
  href: string;
}
