import type { IUserInfo } from './user';

export interface IComment {
  id: number;
  parent_id: number;
  mentions: string | null;
  comment: string;
  position_x: number;
  position_y: number;
  resolved: number;
  user_id: number;
  screens_id: number;
  number: number;
  commenttype_id: number;
  comment_start: string | null;
  comment_end: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  user_info: IUserInfo;
}
