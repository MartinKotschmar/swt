import React from "react";
import {useParams} from "react-router-dom";

const StepDetails = () => {
    const params:any = useParams();
    return (
        <section>

            <p>{params.stepId}</p>
        </section>
    )
};

export default StepDetails;
