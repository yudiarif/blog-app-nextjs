"use client";
import Link from "next/link";
import { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";
  return (
    <>
      {status === "authenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/login">Write</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
