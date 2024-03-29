import { useState } from "react";
interface KichenItem {
  name: string;
  description: string;
  image: string;
  ingredients: [
    { ingredient: string, measurement: string }
];
  cooking_time: string;
  calories: string;
}

interface KichenProps {
  kichenItems: KichenItem[];
  setKichenItems: React.Dispatch<React.SetStateAction<KichenItem[]>>;
}



const Kichen = ({kichenItems, setKichenItems}: KichenProps) => {
  
  const [cookingList, setCookingList] = useState<KichenItem[]>([])

  const handleCooking = (recipe: KichenItem) => {
    setCookingList([...cookingList, recipe])
    // update kichen Items
    const newKichenItems = kichenItems.filter(item => item !== recipe)
    setKichenItems(newKichenItems)
  }
  
  return (
    <div className="border rounded-2xl p-6 h-fit">
      {/* Want to Cook */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral text-center border-b py-2 pb-4">
          Want to cook: {kichenItems.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table text-sm">
            {/* head */}
            <thead className="text-sm">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-base-200 bg-opacity-20 text-neutral text-opacity-70">
              {/* row 1 */}
              {
                kichenItems.map((item, index: number) => <tr
                  key={index}
                >
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.cooking_time}</td>
                  <td>{item.calories}</td>
                  <td>
                      <button onClick={() => handleCooking(item)} className="btn btn-primary btn-sm rounded-full">Preparing</button>
                  </td>
                </tr>
                )
              }
              
            </tbody>
          </table>
        </div>
      </div>


      {/* Currently Cooking */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral text-center border-b py-8 pb-4">
        Currently cooking: {cookingList.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table text-sm">
            {/* head */}
            <thead className="text-sm">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody className="bg-base-200 bg-opacity-20 text-neutral text-opacity-70">
              {/* row 1 */}
              {
                cookingList.map((item, index) => <tr
                  key={index}
                >
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.cooking_time}</td>
                  <td>{item.calories}</td>
                </tr>
                )
              }
              <tr className="font-bold text-neutral">
                <th></th>
                <td>Total = </td>
                <td>
                  {cookingList.reduce((prevValue, item) => {
                  return prevValue += parseInt(item.cooking_time.split(' ')[0])
                  }, 0)} minutes
                </td>
                <td>
                  {cookingList.reduce((prevValue, item) => {
                    return prevValue += parseInt(item.calories.split(' ')[0])
                  }, 0)} <br /> calories
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Kichen;
