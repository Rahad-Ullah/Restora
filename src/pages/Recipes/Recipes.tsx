import { useEffect, useState } from "react";
import Kichen from "../../components/Kichen/Kichen";
import RecipeItem from "../../components/RecipeItem/RecipeItem";
import toast, { Toaster } from "react-hot-toast";

interface Recipe {
  // Define the structure of your recipe object
  name: string;
  description: string;
  // Add other properties as needed
}


const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [kichenItems, setKichenItems] = useState([])

  useEffect(() => {
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, [])  


  // Add to kichen items
  const addToKichenItems = (recipe: Recipe) => {
    if(!kichenItems.includes(recipe)){
      const newItems = [...kichenItems, recipe]
      setKichenItems(newItems)
    }
    else{
      toast.error('Already added');
    }
  }
  
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8">
      <div className="w-11/12 max-w-screen-2xl mx-auto space-y-12">
        {/* Recipe Header */}
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          <h1 className="text-4xl font-semibold text-secondary">Our Recipes</h1>
          <p className="max-w-screen-md text-secondary text-opacity-60">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.{" "}
          </p>
        </div>

        {/* Recipe Body */}
        <div className="inline-flex gap-6">
          <div className="grid grid-cols-2 gap-6 lg:w-3/5">
            {
              recipes.map((recipe, index) => <RecipeItem 
                key={index}
                recipe={recipe}
                addToKichenItems={addToKichenItems}
              />)
            }
          </div>
          <Kichen kichenItems={kichenItems} setKichenItems={setKichenItems}/>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Recipes;
