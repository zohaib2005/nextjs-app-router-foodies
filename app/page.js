import Link from "next/link";
import classes from "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meal</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
