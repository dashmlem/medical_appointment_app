"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-2">
       
          {!isSignedIn ? (
            <>
              <SignInButton >
                <Button variant="secondary">Sign In</Button>
              </SignInButton>
              <SignUpButton />
            </>
          ) : (
            <UserButton appearance={{
              elements:{
                avatarBox:"w-10 h-10",
                userButtonPopoverCard: "shadow-xl",
                userPreviewMainIdentifier:"font-semibold",
              },
            }}/>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;