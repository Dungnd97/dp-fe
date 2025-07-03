import http from "@/lib/http";
import {
  LoginBodyType,
  LoginResType,
  RegisterBodyType,
  RegisterResType,
  SSOLoginBodyType,
  UserResType,
} from "@/schema/auth.schema";

const authApiRequest = {
  // SSO Login
  loginSSO: (body: SSOLoginBodyType) =>
    http.post<LoginResType>("/api/auth/sso", body, {
      baseUrl: "",
    }),

  sLoginSSO: (body: SSOLoginBodyType) =>
    http.get<LoginResType>(`/api/auth/sso/google/redirect?${body.code}`),

  // USER INFO
  getUserInfo: () =>
    http.post<UserResType>("/api/user/user-info", null, {
      baseUrl: "",
    }),

  // LOGIN
  login: (body: LoginBodyType) =>
    http.post<LoginResType>("/api/auth/login", body, {
      baseUrl: "",
    }),
  sLogin: (body: LoginBodyType) =>
    http.post<LoginResType>(`/api/auth/login`, body),

  //Register

  register: (body: RegisterBodyType) =>
    http.post<RegisterResType>("/api/auth/register", body, {
      baseUrl: "",
    }),

  sRegister: (body: RegisterBodyType) =>
    http.post<RegisterResType>(`/api/auth/user/register`, body),
};

export default authApiRequest;
