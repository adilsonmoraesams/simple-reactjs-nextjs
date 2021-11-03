


import slugify from 'slugify';
import { RecipeService } from '../../../services/RecipeService';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import RecipeCategory from '../../components/RecipeCategory/RecipeCategory';

export async function getStaticPaths() {
    let categories = {};
    const recipes = (await RecipeService.listAll()); 

    recipes.forEach(recipes => {
        categories[recipes.category] = true;
    });

    const paths = Object.keys(categories).map(category =>{
        return  {
            params: {
                category: slugify(category).toLocaleLowerCase()
            }
        }
    });7

 
    

    return {paths, fallback: false};

}


export async function getStaticProps(context) {
    const { category } = context.params;
    const recipes = (await RecipeService.listAll())
    .filter(recipe => slugify(recipe.category).toLocaleLowerCase() === category);
    
    return {
        props: {
            recipes
        }
    }
}


export default function RecipeCategoryPage({ recipes = [] }) {

    if (recipes.length === 0) {
        return <div>Nenhuma receita</div>
    }

    return (
        <div>
            <Header title="TreinaCook" />

            <RecipeCategory
                category={recipes[0].category}
                recipeList={recipes}
            />

            <Footer />

        </div>);
}