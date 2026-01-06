import Login from "@/module/auth/component/login";
import { requireUnAuth } from "@/module/auth/utils/auth-utils";
import React from "react";

const page = async () => {
  await requireUnAuth();
  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
