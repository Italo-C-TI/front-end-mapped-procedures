import { Procedure } from "./procedure";

export type Area = {
  id: string;
  name: string;
  description: string;
  update_at: string;
  procedure: Procedure[];
};

export type PostArea = {
  name: string;
  description: string;
};

