"use client";
import * as React from "react";
import { auth } from "@/firebase";
import Button from "@mui/material/Button";
import { useRouter } from "nextjs13-progress";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const router = useRouter();

  // For Loading
  const [user, loadingAuth, errorAuth] = useAuthState(auth);

  React.useEffect(() => {
    if (user) {
      console.log("User @ User ==> ", user);
    } else {
      console.log("User is null");
    }
  });

  return (
    <div className="flex flex-col justify-evenly h-screen">
      <h1 className="text-center text-6xl font-bold font-mono text-indigo-500">
        Arics Finance
      </h1>
      <div className="flex justify-center items-center">
        <Button
          variant="contained"
          className="bg-blue-700"
          onClick={() => router.push("/auth/login")}
        >
          Move to Login
        </Button>
      </div>
    </div>
  );
}
