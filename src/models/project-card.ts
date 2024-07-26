import { IRepository } from "./github-api/repository";

export interface IProjectCard {
  repo: IRepository;
  image?: IProjectCardImage;
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
