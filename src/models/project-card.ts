export interface IProjectCard {
  repo: IProjectCardRepo;
  name: string;
  subtitle?: string;
  desc: string;
  image?: IProjectCardImage;
  isPrivate?: boolean;
  chips: string[];
}

export interface IProjectCardLegacy {
  isPrivate?: boolean;
  repo: IProjectCardRepo;
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

export interface IProjectCardRepo {
  name: string;
  owner: string;
}

export interface IProjectCardActionButton {
  title: string;
  icon: string;
  href: string;
}
