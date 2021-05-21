import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import IngredientsList from "../ConfigurationPanel/IngredientsPanel/IngredientsList";
import OrderOverview from "../OrderOverview";
import { API_BASE_URL } from '../../../../../../../../constants';

const StepDetails = (props: any) => {
    const params: any = useParams();
    //   const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [ingredients, setIngredients]: any = useState([]);
    //   const [hasFetchedData, setHasFetchedData]: any = useState(false);
    const [content, setContent] = useState(<p>Found no Ingredients.</p>);
    //const [initialLoading, setInitialLoading] = useState(false);

    const {steps} = props;

    async function fetchAndRenderContent() {
        for (let i = 0; i < steps.length; i++) {
            if (steps[i].linkText === params.stepId) {
                if (steps[i].category !== "") {
                    const category = steps[i].category;
                    const ingredients = await fetchCatalog(category);
                    setIngredients(ingredients);
                } else if (steps[i] === steps[steps.length - 1]) {
                    setContent(<OrderOverview onSubmit={props.onSubmit}/>);
                } else {
                    setContent(<p>flasche anzeigen und so</p>);
                }
            }
        }
    }

    async function fetchCatalog(category: string): Promise<any> {
        const response = await fetch(
            API_BASE_URL + "/api/v1/catalog?category=" + category
        );
        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        const data = await response.json();

        return await data.result["_embedded"].map((ingredientData: any) => {
            return {
                id: ingredientData.id,
                title: ingredientData.name,
                //   category: ingredientData.categories,
                price: ingredientData.price.amount,
            };
        });
        // setIngredients(transformedIngredients);
        // setHasFetchedData(true);
    }

    useEffect((): any => {
        const fetchIngredients = async () => {
            // setIsLoading(true);
            // setError(null);
            // console.log(steps.length);
            await fetchAndRenderContent();
            // setIsLoading(false);
        };
        fetchIngredients();
    }, [params.stepId]);
    // (!initialLoading)?fetchIngredientsHandler():setInitialLoading(true);

    if (ingredients.length > 0) {
        setContent(
            <IngredientsList ingredients={ingredients} onChange={props.onChange}/>
        );
    }

    //   if (error) {
    //     setContent(<p>{error}</p>);
    //   }

    //   if (isLoading) {
    //     setContent(<p>Loading...</p>);
    //   }
    return (
        <section>
            <h4>
                {steps[params.stepId.slice(-1) - 1].name
                    ? steps[params.stepId.slice(-1) - 1].name
                    // + ` (${ingredients[0].price})`
                    : "Found no category."}
                {/*steps[params.id]*/}
            </h4>
            <section>{content}</section>

            <p>{params.stepId}</p>
        </section>
    );
};

export default StepDetails;
