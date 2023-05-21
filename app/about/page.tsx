import Link from "next/link";

export default function About() {
  return (
    <div className="text-center mt-10">
      <p>Oh bro! on about page</p>
      <Link href={"/"}>Return to home</Link>
    </div>
  );
}
