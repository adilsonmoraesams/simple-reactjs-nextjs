import { useState, useEffect, useMemo } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RecipeCategory from './components/RecipeCategory/RecipeCategory';
import { RecipeService } from '../services/RecipeService';

export async function getStaticProps(context){
  const totalItems = 30;
  const recipes = (await RecipeService.listAll()).slice(0, totalItems);
  return {
    props: {
      recipes
    }
  }
}

export default function Home({recipes}) {
 

  const categories = useMemo(() => {
    const categoriesList = {};
    recipes.forEach(recipe => {
      categoriesList[recipe.category] = true;
    });
    return Object.keys(categoriesList).sort();
  }, [recipes]);
 


  return (
    <div>
      <Header title="Treina Cook" />

      {categories.map(category => (
        <RecipeCategory
          key={category}
          recipeList={recipes}
          category={category} />
      ))}


      <Footer />
    </div>
  )
}
