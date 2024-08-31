import type { IScreen } from './screen'

type Privacy = 'private' | 'public'

export interface IProject {
  id: number
  watermark_id: number | null
  project_title: string
  project_folder: string
  project_description: string | null
  color: string | null
  archived: number
  projecttype_id: number
  projectdevice_id: number
  projectable_id: number
  team_id: number | null
  projectable_type: string
  privacy: string
  folder_id: number | null
  finished: string // Có thể dùng boolean nếu API trả về đúng boolean
  completed_date: string | null
  icon_id: number | null
  background_color: string | null
  cover_id: number | null
  last_activity: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  cover_url: string
  cover_url_thumb: string
  screen_count: number
  members: IProjectMember[]
  screens?: IScreen[]
}

export interface IProjectMember {
  id: number
  name: string
  lastname: string
  email: string
  username: string
  role: string | null
  project_id: number
  avatar_url: string | null
  avatar_url_thumb: string | null
}

export interface IIcon {
  id?: number
  icon: string
}

export interface IProjectCreate {
  project_title: string
  privacy: Privacy
  project_description?: string
  background_color?: string
  projectdevice?: string
}

export interface INewProjects {
  id: number
  type: string
  name: string
  folder_id: number | null
  archived: number
  privacy: string
  original_id: number | null
  status: string
  user_create_id: number
  created_at: string
  updated_at: string
}

export interface IUploadRequestResponse {
  file_md5: string | null
  type: string
  file_name: string | null
  file_size: number | null
  folder_id: number | null
  upload_id: string
  upload_url: string
}
