import type { IComment } from './comment';

export interface IScreen {
  id: number;
  orders: number;
  project_id: number;
  name: string;
  image_width: number;
  image_height: number;
  image_size: number;
  filestore_id: number;
  revisionof_id?: number | null;
  watermark_id?: number | null;
  user_id: number;
  team_id?: number | null;
  status: string;
  archived: string;
  section_id: number | null;
  video_length?: number | null;
  label?: string | null;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
  screen_url: string;
  screen_url_thumb: string;
  comments_count: number;
  comments: IComment[];
  number_order?: number
}
