import React, {useState} from 'react';
import ConfigurationPanel from "./BierKonfigurator/Configuration/ConfigurationPanel";
import ConfigurationBottle from "./BierKonfigurator/Configuration/ConfigurationBottle";
import './index.css';
import IngredientsList from "./BierKonfigurator/Configuration/ConfigurationPanel/IngredientsPanel/IngredientsList";

const ConfiguratorScreen = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [ingredients, setIngredients]: any = useState([]);

    async function fetchIngredientsHandler() {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://goggle.com');/*update to our api*/
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const transformedIngredients = data.result.map((ingredientData: any) => {
                return {
                    id: ingredientData.id,
                    title: ingredientData.name,
                    category: ingredientData.category,
                    price: ingredientData.price
                };
            });
            setIngredients(transformedIngredients);

        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }

    let content = <p>Found no Ingredients.</p>;

    if (ingredients.length > 0) {
        content = <IngredientsList ingredients={ingredients}/>
    }

    if (error) {
        content = <p>{error}</p>
    }

    if (isLoading) {
        content = <p>Loading...</p>
    }


    return (
        <section>
            <section>{content}</section>{/*content/data: The Ingredients List (the select fields of which the user can choose from)*/}
            <div className={'flex-wrapper'}>
                <ConfigurationPanel/>
                <ConfigurationBottle/>

            </div>
        </section>
    )
};

export default ConfiguratorScreen;
