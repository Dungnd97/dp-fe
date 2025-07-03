/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import authApiRequest from "@/apis/auth";
import { useMutation } from "@tanstack/react-query";

// SSO
export const useSSOLoginMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.loginSSO,
  });
};

// Get User Info
export const useGetUserInfoMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.getUserInfo,
  });
};

// Login

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (body: any) => authApiRequest.login(body),
  });
};

// Register

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (body: any) => authApiRequest.login(body),
  });
};
