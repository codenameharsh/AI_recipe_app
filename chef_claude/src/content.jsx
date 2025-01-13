import React from 'react'


export default function Content(){
    const [ingredients, setIngredients] = React.useState([])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        setIngredients(prevIngredient => [...prevIngredient, newIngredient]);

        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  aria-label="Add ingredient"
                  placeholder="eg: Basil"
                  name="ingredient"
                />
                <button className="ingredient_btn">+ Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}