"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface LogoutProps {
  children: React.ReactNode;
  className?: string;
}

const logout = ({ children, className }: LogoutProps) => {
  const router = useRouter();
  return (
    <span
      className={className}
      onClick={() =>
        signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/login");
            },
          },
        })
      }>
      {children}
    </span>
  );
};

export default logout;
