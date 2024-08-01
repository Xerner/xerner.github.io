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
  created_at: string, // not rendered
  updated_at: string, // not rendered
  pushed_at: string, // not rendered
  // urls
  html_url: string;
}
