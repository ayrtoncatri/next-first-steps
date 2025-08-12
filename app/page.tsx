import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 background-red-500">
      <span className="flex items-center">hola mundo</span>
      <Link href={'/about'}>About Page</Link>
    </main>
  );
}
