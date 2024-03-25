
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

interface RecipeItem {
    name: string;
    description: string;
    image: string;
    ingredients: [
        { ingredient: string, measurement: string }
    ];
    cooking_time: string;
    calories: string;
}

interface RecipeItemProps {
    recipe: RecipeItem;
    addToKichenItems: (recipe: RecipeItem) => void;
}

const RecipeItem = ({recipe, addToKichenItems}: RecipeItemProps) => {
    const {name, description, image, ingredients, cooking_time, calories} = recipe
    
    return (
        <div className="p-6 border rounded-2xl space-y-6">
            <img src={image} alt="recipe" className="w-full rounded-2xl"/>
            <div className="space-y-2 border-b pb-4">
                <h2 className="text-xl font-semibold text-neutral">{name}</h2>
                <p className="text-accent">{description}</p>
            </div>
            <div className="border-b pb-4">
                <h3 className="text-lg font-medium text-neutral">Ingredients: 6</h3>
                <ul className="list-disc list-inside text-lg text-accent">
                    {
                        ingredients.map((item, index) => <li
                            key={index}
                        >{item.ingredient}, {item.measurement}</li>
                        )
                    }
                </ul>
            </div>
            <div className="flex items-center gap-4 text-neutral text-opacity-80">
                <p className="flex items-center gap-2"><FontAwesomeIcon icon={faClock}/>{cooking_time}</p>
                <p className="flex items-center gap-2"><FontAwesomeIcon icon={faFire}/>{calories}</p>
            </div>
            <div>
                <button onClick={() => addToKichenItems(recipe)} className="btn btn-primary rounded-full text-base">Want to Cook</button>
            </div>
        </div>
    );
};

export default RecipeItem;