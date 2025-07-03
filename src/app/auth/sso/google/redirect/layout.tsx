import React from "react";
import "@/styles/home.scss";
import LayoutLogin from "@/components/layout/layout-login";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutLogin>{children}</LayoutLogin>;
}
