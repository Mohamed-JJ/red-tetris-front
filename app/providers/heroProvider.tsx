"use client";
import { HeroUIProvider } from "@heroui/react";
import React from "react";
const HeroProvider = ({ children }: { children: React.ReactNode }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default HeroProvider;
