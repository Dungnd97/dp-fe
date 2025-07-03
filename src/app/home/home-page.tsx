"use client";
import { useAppContext } from "@/providers/AppProvider";
import React from "react";

export default function HomePage() {
  const { user } = useAppContext();

  return (
    <div className="text-center">Chào mừng đến với Donation {user.email} !</div>
  );
}
