import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome To Recipe Finder</h1>
      <Link href={"/recipe-list"}>Explore Recipes</Link>
    </div>
  );
}
