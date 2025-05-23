'use client';

import { signOut } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <Button
      onClick={() => signOut()}
      className="btn-secondary rounded-full"
    >
      Logout
    </Button>
  );
}
