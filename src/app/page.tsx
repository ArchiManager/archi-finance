"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

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

  React.useEffect(() => {
    if (!loadingAuth) {
      if (user) {
        // alert("User is already Signed In" + user.email);
        // do something with the user
        console.log("User ==> ", user);
      } else {
        console.log("user is null");
        /*    router.push("/login"); */
        // alert("User is not Signed In");
        // if user is not logged in, redirect to login page
      }
    }
  }, [user, loadingAuth, router]);

  return (
    <div className="flex flex-col justify-evenly h-screen">
      <h1 className="text-center text-6xl font-bold font-mono text-indigo-500">
        Arics Finance
      </h1>
      <div className="flex justify-center items-center">
        <Button
          variant="contained"
          className="bg-blue-700"
          onClick={() => router.push("/login")}
        >
          Move to Login
        </Button>
      </div>
    </div>
  );
}
