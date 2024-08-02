export interface ITeamCreate {
  name: string
  description?: string
  type: string
  emails: string
}

export interface ITeam {
  id: number;
  name: string;
  color: string;
  archived: boolean;
  user_create_id: number;
  privacy: string;
  description: string;
  website_url: string;
  members_count: number;
  created_at: string;
  updated_at: string;
}
