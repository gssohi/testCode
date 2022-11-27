import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import usersService from '../../service'


export const createUser = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {

        const user = await usersService.createUser({
            name: event.body.name,
            email: event.body.email,
            dob: event.body.dob,
        })
        return formatJSONResponse({
            user
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const getUser = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const name = event.pathParameters.name;
    try {
        const user = await usersService.getUser(name)
        return formatJSONResponse({
            user, name
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const deleteUser = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const name = event.pathParameters.name;
    try {
        const user = await usersService.deleteUser(name)
        return formatJSONResponse({
            user, name
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})