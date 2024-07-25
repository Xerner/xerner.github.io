import { IOwner } from "./owner";

export interface IRepository {
  name: string;
  full_name: string;
  description: string;
  owner: IOwner;
  url: string;
  html_url: string;
  fork: boolean;
  private: boolean;
}
