'use client'

import Link from 'next/link'
import { NavItems as navItems } from '@/lib/constants'
import { usePathname } from 'next/navigation'

const NavItems = () => {
    const pathname = usePathname()
    const isActive=(path:string)=>{
        if (path==="/"){
            return pathname === '/'
        }
        return pathname.startsWith(path);
    }
  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-4 sm:gap-10 font-medium'>
        {navItems.map(({ href, label }) => (
            <li key={`${label}-${href}`}>
                <Link href={href} className={`hover:text-yellow-500 transition-all ${
                    isActive(href) ? 'text-gray-100' : ''
                }`}>
                    {label}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default NavItems
