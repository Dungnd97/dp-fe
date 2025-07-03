/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import envConfig from "@/config";
import { useLoginMutation } from "@/queries/auth";
import "@/styles/home.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z
    .string()
    .min(8, {
      message: "Email ít nhất 8 kí tự",
    })
    .max(100, {
      message: "Email tối đa 100 kí tự",
    }),
  password: z
    .string()
    .min(6, {
      message: "Mật khẩu ít nhất 6 kí tự",
    })
    .max(20, {
      message: "Mật khẩu tối đa 20 kí tự",
    }),
  confirmPassword: z
    .string()
    .min(6, {
      message: "Mật khẩu ít nhất 6 kí tự",
    })
    .max(20, {
      message: "Mật khẩu tối đa 20 kí tự",
    }),
});

export default function RegisterPage() {
  //define
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });
  //state

  //function
  const loginMutation = useLoginMutation();

  const onSubmit = async (data: any) => {
    const res = await loginMutation.mutateAsync(data);
    console.log("res", res);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input placeholder="Nhập mật khẩu" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nhập lại mật khẩu</FormLabel>
              <FormControl>
                <Input placeholder="Nhập lại mật khẩu" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-lg text-white">Quên mật khẩu?</div>
        <Button
          type="submit"
          title="Đăng ký"
          className="mt-9 flex w-full bg-[#FA9021] py-5 text-center text-xl font-semibold text-white"
        >
          Đăng ký
        </Button>
        <div className="mt-9 text-center text-lg font-medium text-white">
          Hoặc tiếp tục với
        </div>
        <div className="mt-9">
          <div className="w-fit rounded-[10px] border-[1px] border-[#BCBEC0] bg-white px-8 py-3 text-center">
            <Link
              href={`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/auth/sso/google`}
            >
              <Image
                src={"/icon/ic_google.svg"}
                alt="ic"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        <div className="mt-9 text-center">
          Bạn chưa có tài khoản?{" "}
          <span className="font-semibold">Đăng ký ngay</span>
        </div>
      </form>
    </Form>
  );
}
