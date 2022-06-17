import React, { useEffect, useState , useCallback} from "react";
import Nutrition from "./Nutrition";

const FetchData = ({query}) => {
const [nutrition, setNutrition] = useState([
    {
      sugar_g: " ",
      fiber_g: " ",
      serving_size_g: " ",
      sodium_mg: " ",
      name: " ",
      potassium_mg: " ",
      fat_saturated_g: " ",
      fat_total_g: " ",
      calories: " ",
      cholesterol_mg: " ",
      protein_g: " ",
      carbohydrates_total_g: " ",
    },
  ]);

  const fetchNutrition = useCallback(async () => {
    const url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query="+query;
    console.log(url)
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "59a1ed6959mshd3995aae4929d99p14e246jsnd8b7b3daa451",
        "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
      },
    };
    const data = await fetch(url, options);
    const nutritiondata = await data.json();
    setNutrition(nutritiondata.items);
  },[query]);
  
  useEffect(() => {
    fetchNutrition();
  }, [fetchNutrition, query ]);

  return (
    <div className="App">
      <h2>Nutrition data</h2>
      <div>
        <Nutrition item={nutrition[0]} />
      </div>
    </div>
  );
};
export default FetchData;