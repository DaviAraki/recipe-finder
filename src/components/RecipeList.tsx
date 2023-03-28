import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type RecipeListProps = {
  recipes: Recipe[]
  type: string
}

export type Recipe = {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export const RecipeList = ({ recipes, type }: RecipeListProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
      {recipes.map((recipe: Recipe) => {
        return (
          <div
            className='rounded bg-slate-300 overflow-hidden'
            key={recipe.idMeal}
          >
            <Image
              src={recipe.strMealThumb}
              width={500}
              height={500}
              alt={recipe.strMeal}
            />
            <div className='p-5'>
              <h2 className='text-center text-xl font-bold'>
                {recipe.strMeal}
              </h2>
              <Link
                className='text-center text-white bg-blue-500 rounded py-1 px-3 mt-5 block hover:bg-blue-600'
                href={`/types/${type}/${recipe.idMeal}`}
              >
                Get Recipe Details
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
