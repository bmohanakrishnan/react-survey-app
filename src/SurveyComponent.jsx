import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";



export function call_api(item) {
return fetch('https://hnhmywkgva.execute-api.us-east-1.amazonaws.com/sync-to-dynamo', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ item })
})
    .then(data => data.json())
}

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        call_api(JSON.stringify(sender.data, null, 3))
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;