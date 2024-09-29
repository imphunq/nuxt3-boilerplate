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
  user_info?: IUserInfo | null;
  displayX?: number;
  displayY?: number;
  percent_x: number;
  percent_y: number;
}

export interface ICommentCreate {
  comment: string;
  position_x: number;
  position_y: number;
  percent_x: number;
  percent_y: number;
  screens_id: number;
  parent_id?: number;
  commenttype_id: number;
}

export interface ScreenInfoComment {
  id: number;
  name: string;
  screen_url: string;
  screen_url_thumb: string;
}

export interface IListComments {
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
  percent_x: number;
  percent_y: number;
  user_info: IUserInfo;
  screen_info: ScreenInfoComment;
  project_info?: ProjectInfoComment;
}

export interface IUpdateComment {
  comment?: string;
  position_x?: number;
  position_y?: number;
  percent_x?: number;
  percent_y?: number;
  screens_id?: number;
  parent_id?: number;
}

export interface ProjectInfoComment {
  id: number;
  project_title: string
  cover_url: string
  cover_url_thumb: string
}
