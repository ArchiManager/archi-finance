import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <h1 className="text-6xl font-bold" style={{ margin: 0, padding: 0, border: "1px solid red" }}>Welcome to Next.js</h1>
      <Button variant="contained" color="primary" className="w-fit">
        Hello World
      </Button>
    </main>
  );
}
