export default function IngredientsList(props){

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return(
        <section className='ingredient-container'>  
                <h2>Ingredients on hand:</h2>

                <ul className='ingredient-list'>
                    {ingredientsListItems}
                </ul>

                {props.ingredients.length > 3 && //conditional redering using '&&' operator
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggleRecipeShown}>Get a Recipe</button>
                </div>}
            </section>
    )
}