import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/productCard";

export default function Home() {
  return (

    <main>
      <h1>helllo world</h1>
      <Link href="/users">users</Link>
      <ProductCard />
      
      </main>  );
}
