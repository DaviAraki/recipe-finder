import Image from 'next/image'
import Link from 'next/link'

type FoodProps = {
  params: {
    type: string
    id: string
  }
}

const getRecipesDetail = async (id: string) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
  const response = await res.json()
  return response.meals[0]
}

export default async function Page({ params }: FoodProps) {
  const recipeDetail = await getRecipesDetail(params.id)
  const ingredients = Object.keys(recipeDetail)
    .filter((key) => key.indexOf('Ingredient') > 0)
    .map((ingredientKey) => recipeDetail[ingredientKey])
    .filter((ingredient) => ingredient !== '' && ingredient !== null)

  console.log(ingredients)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Image
          src={recipeDetail.strMealThumb}
          width={500}
          height={500}
          alt={recipeDetail.strMeal}
          className='w-full'
        />
      </div>
      <div className='p-5'>
        <h1 className='text-3xl font-bold'>
          Recipe Name: {recipeDetail.strMeal}
        </h1>
        <div className='tags mt-3'>
          <p>Ingredients List:</p>
          {ingredients.map((ingredient) => (
            <span
              className='bg-blue-500 text-white rounded px-2 py-1 m-1 inline-block'
              key={ingredient}
            >
              {ingredient}
            </span>
          ))}
        </div>
        {recipeDetail.strYoutube && (
          <div>
            <p className='mt-3'>Video Link:</p>
            <a
              target='_blank'
              rel='noreferrer'
              className='text-blue-500'
              href={recipeDetail.strYoutube}
            >
              How to make {recipeDetail.strMeal}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
