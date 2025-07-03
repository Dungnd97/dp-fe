/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAppContext } from "@/providers/AppProvider";
import { useGetUserInfoMutation, useSSOLoginMutation } from "@/queries/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function Redirect() {
  //state
  const { setUser } = useAppContext();
  const router = useRouter();

  //function
  const ssoLoginMutation = useSSOLoginMutation();
  const getUserInfoMutation = useGetUserInfoMutation();

  const searchParams = useSearchParams();
  const code = searchParams?.toString();
  const handleSSO = async (code: string) => {
    const res = await ssoLoginMutation.mutateAsync({ code: code });
    if (res.status === 200) {
      const userInfoRes = await getUserInfoMutation.mutateAsync();
      if (userInfoRes.status === 200) {
        const newUserInfo = userInfoRes.payload.data;
        if (newUserInfo) {
          localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
          setUser(newUserInfo);
        }
      }
      router.push("/home");
    }
  };
  //useEffect
  useEffect(() => {
    if (code) {
      handleSSO(code);
    }
  }, [code]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div></div>
    </Suspense>
  );
}
