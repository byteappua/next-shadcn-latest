"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutBtn = ({ size, clsN }: { size?: "default" | "sm" | "lg" | "icon"; clsN?: string }) => {
  const handleClick = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };

  return (
    <Button size={size || "default"} className={clsN} onClick={handleClick}>
      LogOut
    </Button>
  );
};
export default LogoutBtn;
