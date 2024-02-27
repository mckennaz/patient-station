import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl"href="">Patient Station</Link>
      <nav className="flex items-center gap-8 font-semibold">
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>Patients</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 font-semibold">
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">Register</Link>
      </nav>
    </header>
  )
}