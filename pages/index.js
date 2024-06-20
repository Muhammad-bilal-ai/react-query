import Image from "next/image";
import { Inter } from "next/font/google";
import { useData } from "@/util/useDataHook";
import Products from "@/components/Products";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Product List</h1>
      <Products />
    </div>
  );
}
