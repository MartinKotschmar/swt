import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IngredientsList from "../ConfigurationPanel/IngredientsPanel/IngredientsList";
import OrderOverview from "../OrderOverview";
import classes from "./stepDetails.module.css";

const StepDetails = (props: any) => {
    const params: any = useParams();
    const [ingredients, setIngredients]: any = useState([]);
    const initialContent = <p>Found no Ingredients.</p>;
    const [content, setContent] = useState(initialContent);
    // const [resetValues, setResetValues] = useState(false);

    const [reset, setReset] = useState(false);
    const updateResetValue = () =>{
        setReset(!reset);
    };
    const {step} = props;

    async function fetchAndRenderContent() {
        if (ingredients.length === 0) {

            if (step.category !== "") {
                const category = step.category;
                const ingredientsList = await fetchCatalog(category);
                setIngredients(ingredientsList);
                setContent(
                    <IngredientsList ingredients={ingredientsList} onChange={props.onChange} resetValues={reset}/>
                );
            } else if (step.linkText === "step-6") {
                setContent(<OrderOverview onSubmit={props.onSubmit} updateResetValue={updateResetValue} resetNavPoints={props.resetNavPoints}/>);
            } else {
                setContent(<p>flasche anzeigen und so</p>);
            }
        }

    }

    async function fetchCatalog(category: string): Promise<any> {
        const response = await fetch(
            "http://localhost:8080/api/v1/catalog?category=" + category
        );
      } else if (step.linkText === "step-6") {
        setContent(
          <OrderOverview
            onSubmit={props.onSubmit}
            setResetValues={setResetValues}
            resetNavPoints={props.resetNavPoints}
          />
        );
      } else {
        setContent(<p>flasche anzeigen und so</p>);
      }
    }
  }

    useEffect((): any => {
        const fetchIngredients = async () => {
            await fetchAndRenderContent();
        };

        fetchIngredients().catch(error => console.log(error));

    }, []);


    return (
        <section className={`${classes.stepDetails} ${props.active === props.index ? classes.active : ""}`}>
            <h4>
                {step.name
                    ? step.name
                    : "Found no category."}
            </h4>
            <section>{content}</section>

            <p>{params.stepId}</p>
        </section>
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    return await data["_embedded"].map((ingredientData: any) => {
      return {
        id: ingredientData.id,
        title: ingredientData.name,
        category: ingredientData.categories,
        price: ingredientData.price.amount,
      };
    });
  }

  useEffect((): any => {
    const fetchIngredients = async () => {
      await fetchAndRenderContent();
    };

    fetchIngredients().catch((error) => console.log(error));
  }, []);

  resetValues && setResetValues(false);

  return (
    <section
      className={`${classes.stepDetails} ${
        props.active === props.index ? classes.active : ""
      }`}
    >
      <h4>{step.name ? step.name : "Found no category."}</h4>
      <section>{content}</section>

      <p>{params.stepId}</p>
    </section>
  );
};

export default StepDetails;
