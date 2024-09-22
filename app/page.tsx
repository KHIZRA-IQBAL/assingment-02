import Link from "next/link";

export default function Home() {
  return (
        <>
        <h1 className="text-center text-6xl ">hello world</h1>
         <ul className="flex flex-row gap-6 text-4xl">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul> 
        </>
  );
}
