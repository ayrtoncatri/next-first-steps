'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props{
  path: string;
  text: string;
}

export const ActiveLink = ( { path, text}: Props) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link 
      className= {`transition-all mr-2 hover:underline hover:text-blue-400 ${isActive ? 'text-blue-500' : 'text-blue-300'}`}
      href={ path} > 
      { text}
      
    </Link>
  )
}
