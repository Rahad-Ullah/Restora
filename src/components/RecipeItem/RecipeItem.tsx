import recipe_item from "../../assets/recipe-1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const RecipeItem = () => {
    return (
        <div className="p-6 border rounded-2xl space-y-6">
            <img src={recipe_item} alt="recipe" className="w-full rounded-2xl"/>
            <div className="space-y-2 border-b pb-4">
                <h2 className="text-xl font-semibold text-neutral">Spaghetti Bolognese</h2>
                <p className="text-accent">Classic Italian pasta dish with savory meat sauce.</p>
            </div>
            <div className="border-b pb-4">
                <h3 className="text-lg font-medium text-neutral">Ingredients: 6</h3>
                <ul className="list-disc list-inside text-lg text-accent">
                    <li>500g ground beef</li>
                    <li>1 onion, chopped</li>
                    <li>2 cloves garlic, minced</li>
                </ul>
            </div>
            <div className="flex items-center gap-4 text-neutral text-opacity-80">
                <p className="flex items-center gap-2"><FontAwesomeIcon icon={faClock}/> 30 minutes</p>
                <p className="flex items-center gap-2"><FontAwesomeIcon icon={faFire}/> 600 calories</p>
            </div>
            <div>
                <button className="btn btn-primary rounded-full text-base">Want to Cook</button>
            </div>
        </div>
    );
};

export default RecipeItem;