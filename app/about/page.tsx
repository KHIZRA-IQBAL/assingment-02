import Link from "next/link";
export default function About(){
      return(
    <div className="pb-3">
    <h1>About details</h1>
     <p className="pt-4">Hello guys, here some  information about myself</p>
     <h2>Education</h2>
     <p>I passed my intermediate from FG collage hyderabad Cantt ,Now i am focusing at some unbeatalble technologies </p>
     <h2 className="text-3xl">Skills</h2>
     <ul className="text-1xl">
      <li>HTML,CSS</li>
      <li>Typescript</li>
      <li className="pb-6">Next.js</li>
     </ul>
     <Link href="/" className="text-2xl border stroke-indigo-200 bg-gray-600">Go to back</Link>
    </div>

      )
}