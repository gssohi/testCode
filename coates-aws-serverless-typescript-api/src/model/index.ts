//import { DocumentClient } from "aws-sdk/clients/dynamodb";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";


const dynamoDBClient = () => {
    let dynamodb = new DynamoDBClient({});
   // const ddb = DynamoDBDocumentClient.from(dynamodb);

    if (process.env.IS_OFFLINE) {
        dynamodb = new DynamoDBClient({
            region: "localhost",
            endpoint: "http://localhost:6100",
        });
    }
    // return new AWS.DynamoDB.DocumentClient();

    return DynamoDBDocumentClient.from(dynamodb);
}

export default dynamoDBClient;
