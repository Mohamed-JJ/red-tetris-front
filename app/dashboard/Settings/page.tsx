"use client";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DisplayPersonalInfo from "@/components/DisplayPersonalInfo";
import ModifyPersonalInfo from "@/components/ModifyPersonalInfo";
import Switcher from "@/components/Switcher";
import { User } from "@/lib/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "@/utils";
import LoadingSpinner from "@/components/LoadingSpinner";
import { RootState } from "@/app/state/store";
import { useSelector } from "react-redux";
import { api } from "@/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMod, setIsMod] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const ToggleViewMod = (arg: boolean) => {
    setIsMod(arg);
  };
  const notify = (message: string) => toast(message);

  const usere = useSelector((state: RootState) => state.user);
  console.log("the user is in settings:", usere);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // fetch the user from the backend
        const response = await api.get(`user/${usere.id}`);
        console.log(response.data); // Access the data from the response
        setUser(response.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
      } catch (error: any) {
        notify("Error in fetching the user");
      }
    };
    fetchUser(); // Call the function to fetch user data
  }, []);

  useEffect(() => {
    if (!isClient) setIsClient(true);
  }, [isClient]);
  if (!isClient) return null;
  if (!user) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <LoadingSpinner text="loading..." />;
      </div>
    );
  }
  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-6 border-white border-2">
      <Tabs
        defaultValue="View"
        className="flex w-full pb-32 items-center justify-center"
      >
        <div className="w-[60%] h-[70px] bg-lighterblue rounded-[14px] flex  gap-5 items-center justify-center">
          <TabsList className="w-[60%]">
              <TabsTrigger value="View">View</TabsTrigger>
            <TabsTrigger value="Modify">Modify</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="View" className="w-[60%]">
          <DisplayPersonalInfo user={user!} />
        </TabsContent>
        <TabsContent value="Modify" className="w-[60%]">
          <ModifyPersonalInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
