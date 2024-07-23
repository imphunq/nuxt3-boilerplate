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
  duracy: string | null;
  type: string | null;
  active: number;
  job_role: string | null;
  plan_id: string | null;
  group: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  // userdetails: string | null;
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
