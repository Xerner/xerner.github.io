import { IUser } from "./user";

export interface IRepository {
  name: string;
  full_name: string;
  description: string;
  owner: IUser;
  fork: boolean;
  private: boolean;
  topics: string[];
  stargazers_count: number;
  watchers_count: number;
  open_issues_count: number;
  license: string; // not rendered
  created_at: string,
  updated_at: string,
  pushed_at: string,
  // urls
  html_url: string;
}
