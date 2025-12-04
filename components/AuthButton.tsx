"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AuthButtonProps {
  className?: string;
}

export function AuthButton({ className }: AuthButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login");
            router.refresh();
          },
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!session?.user) {
    return (
      <Button onClick={() => router.push("/login")} variant="outline" className={className}>
        Sign In
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={className}>{session.user.name || session.user.email}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push("/account")}>
          Account
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/settings")}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} disabled={isLoading}>
          {isLoading ? "Logging out..." : "Log out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

