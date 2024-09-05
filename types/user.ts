export interface ILogin {
  email: string
  password: string
  remember?: boolean
}

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  email: string;
  username: string;
  email_verified_at: string;
  privacy: string;
  status: string;
  duracy: any | null;
  type: any | null;
  active: number;
  job_role: any | null;
  plan_id: any | null;
  group: any | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  userdetails: any | null;
  avatar_url?: string
}

export interface ILoginUserResponse {
  id: number;
  name: string;
  lastname: string;
  email: string;
  username: string;
  email_verified_at: string;
  privacy: string;
  status: string;
  duracy: any | null;
  type: any | null;
  active: number;
  job_role: any | null;
  plan_id: any | null;
  group: any | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}


export interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: string;
  refresh_token?: string;
  user: ILoginUserResponse;
}

export interface IUserInfo {
  id: number;
  name: string;
  lastname: string;
  email: string;
  username: string;
  avatar_url: string | null;
  avatar_url_thumb: string | null;
}

export interface IMemberShare {
  id: number;
  name: string;
  lastname: string;
  email: string;
  username: string;
  role: string;
}
