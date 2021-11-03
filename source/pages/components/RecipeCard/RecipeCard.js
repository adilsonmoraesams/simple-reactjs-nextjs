
import { Link } from '@material-ui/core';
import RecipeCardStyled from './RecipeCard.styled';

export default function RecipeCard(props) {

    return (
        <figure className="recipe-card">
            <style jsx>{RecipeCardStyled}</style>

            <Link href={props.link}>
                <img className="recipe-picture" src={props.picture} />
            </Link>
            <div className="recipe-category">
                {props.category}
            </div>
            <figcaption className="recipe-name">
                {props.name}
            </figcaption>

        </figure>
    )

}


