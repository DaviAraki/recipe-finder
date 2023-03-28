import Link from 'next/link'

type area = {
  strArea: string
}

const fetchRecipesAreas = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
  )
  const data = await response.json()
  return data.meals.map((area: area) => area.strArea)
}

const page = async () => {
  const areas = await fetchRecipesAreas()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
      {areas.map((area: string) => (
        <Link
          key={area}
          href={`/types/${area}`}
          className='shadow-gray-500 bg-gray-300 text-2xl rounded text-center py-10 font-bold hover:bg-blue-500 hover:text-white '
        >
          {area}
        </Link>
      ))}
    </div>
  )
}

export default page
