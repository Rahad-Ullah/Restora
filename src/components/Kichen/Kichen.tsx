const Kichen = () => {
  return (
    <div className="border rounded-2xl p-6">
      {/* Want to Cook */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral text-center border-b py-2 pb-4">
          Want to cook: 01
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
              <tr >
                <th>1</th>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <td>
                    <button className="btn btn-primary btn-sm rounded-full">Preparing</button>
                </td>
              </tr>
              {/* row 2 */}
              <tr >
                <th>2</th>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <td>
                    <button className="btn btn-primary btn-sm rounded-full">Preparing</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* Currently Cooking */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral text-center border-b py-8 pb-4">
        Currently cooking: 02
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
              <tr >
                <th>1</th>
                <td>Spaghetti Bolognese</td>
                <td>30 minutes</td>
                <td>600 calories</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Spaghetti Bolognese</td>
                <td>30 minutes</td>
                <td>600 calories</td>
              </tr>
              {/* Total row */}
              <tr className="text-neutral font-semibold">
                <th></th>
                <td>Total = </td>
                <td>30 minutes</td>
                <td>600 calories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Kichen;
