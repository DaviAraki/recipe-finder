import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-screen w-full homepage'>
      <div className='text-center w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2'>
        <h1 className='my-8 text-5xl'>Explore food from around the world</h1>
        <Link
          href='/types'
          className='shadow-grey-50 bg-gray-300 rounded text-xl py-2 px-2 font-bold hover:bg-blue-300'
        >
          List of Cuisines
        </Link>
      </div>
    </div>
  )
}
