'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname().split('/')
  const currentArea = pathname[2]
  const recipeId = pathname[3]
  return (
    <header className='py-5 px-2 sm:px-10 bg-slate-300 flex items-center justify-between client'>
      <div>
        <Link href='/'>
          <h1 className='text-blue-700 font-bold text-5xl text-center'>
            Foode
          </h1>
        </Link>
      </div>
      {pathname && currentArea && (
        <Link href={recipeId ? `/types/${currentArea}` : `/types`}>
          Back to {recipeId ? `${currentArea} Recipes` : 'Cuisines'}
        </Link>
      )}
    </header>
  )
}
