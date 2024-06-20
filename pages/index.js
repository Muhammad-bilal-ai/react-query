import Image from "next/image";
import { Inter } from "next/font/google";
import { useData } from "@/util/useDataHook";
import Products from "@/components/Products";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Product List</h1>
      <Products />
    </div>
  );
}
