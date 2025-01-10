export default function Content(){
    return (
        <main>
            <form>
                <input 
                  type="text"
                  aria-label="Add ingredient"
                  placeholder="eg: Basil"
                />
                <button className="ingredient_btn">+ Add Ingredient</button>

            </form>
        </main>
    )
}