const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const PATHS = {
  ROOT: () => "/",
  HOME: () => "/dashboard/home",
  MY_PROFILE: () => "/dashboard/profile/me",
  SIGN_IN: () => "/signin",
  SIGN_UP: () => "/signup", 
}

export { API_BASE_URL, PATHS };
