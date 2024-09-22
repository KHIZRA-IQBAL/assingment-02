import Link from "next/link";
export default function Contact(){
    return(
        <div className=" pb-3">
        <h1>Contact Us</h1>
       <p className="text-2xl"> Email:</p>
       <p className="pb-4">xyziqbal002@gmail.com</p>
        <Link href="/" className="text-2xl border stroke-slate-200 bg-gray-600">Go to back</Link>
        </div>
        
    )
}