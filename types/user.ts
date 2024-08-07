export interface ILogin {
  email: string
  password: string
  remember?: boolean
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at: string | null;
  privacy: string;
  status: string;
  created_at: string;
  updated_at: string;
  detail: any | null;
  avatar_url?: string
}

export interface ILoginUserResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at: string | null;
  privacy: string;
  status: string;
  created_at: string;
  updated_at: string;
}


export interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: string;
  refresh_token: string;
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
