import React from 'react'
import huggingFaceApi from './huggingFaceApi';
import ClaudeRecipe from './ClaudeRecipe.jsx'
import IngredientsList from './IngredientsList.jsx'


export default function Content(){
    const [ingredients, setIngredients] = React.useState([])

    const [recipeShown, setRecipeShown] = React.useState(false)

    function addIngredient(event) {
        event.preventDefault()
        const newIngredient = event.target.ingredient.value
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.target.ingredient.value = '' // Clear the input field
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown);
    }

    return (
        <main>
            <form onSubmit={addIngredient}>
                <input 
                  type="text"
                  aria-label="Add ingredient"
                  placeholder="eg: Basil"
                  name="ingredient"
                />
                <button className="ingredient_btn">+ Add Ingredient</button>
            </form>
             {/* conditional rendering using ternary operator */}
            {ingredients.length > 0 ? <IngredientsList
              ingredients={ingredients}
              toggleRecipeShown={toggleRecipeShown}            
            /> : null} 


            {/* placeholder recipe */}

            {recipeShown && <ClaudeRecipe/>}

        </main>
    )
}