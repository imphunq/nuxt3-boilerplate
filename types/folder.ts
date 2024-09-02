export interface ICreateFolder {
  folder_name: string
  folder_description?: string
}

export interface IFolder {
  id: number;
  user_id: number;
  folder_name: string;
  team_id: number | null;
  cover_id: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  projects_count: number;
  cover_url: string | null;
  cover_url_thumb: string | null;
  category?: string
}
