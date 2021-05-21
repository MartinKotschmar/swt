import React, { useState } from "react";
import { useParams } from "react-router-dom";
import IngredientsList from "../ConfigurationPanel/IngredientsPanel/IngredientsList";

const StepDetails = (props: any) => {
  const params: any = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ingredients, setIngredients]: any = useState([]);
  const [hasFetchedData, setHasFetchedData]: any = useState(false);

  async function fetchIngredientsHandler() {
    for (let i = 0; i <= props.steps.length; i++) {
      if (props.steps[i] === params.stepId) {
        setIsLoading(true);
        setError(null);

        try {
          const category = props.steps[i].category;
          const response = await fetch(
            "http://localhost:8080/api/v1/catalog?category=" + category
          ); /*update to our api*/
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }

          const data = await response.json();

          const transformedIngredients = data.result.map(
            (ingredientData: any) => {
              return {
                id: ingredientData.id,
                title: ingredientData.name,
                //   category: ingredientData.categories,
                price: ingredientData.price.amount,
              };
            }
          );
          setIngredients(transformedIngredients);
          setHasFetchedData(true);
        } catch (error) {
          setError(error.message);
        }
        setIsLoading(false);
      }
    }
  }

  let content = <p>Found no Ingredients.</p>;

  if (ingredients.length > 0) {
    content = <IngredientsList ingredients={ingredients} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <section>
      <h4>
        {ingredients.category
          ? ingredients.category + ` (${ingredients.price})`
          : "Found no category."}
      </h4>
      <section>{content}</section>

      <p>{params.stepId}</p>
    </section>
  );
};

export default StepDetails;
