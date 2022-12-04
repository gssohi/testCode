//import { DocumentClient } from "aws-sdk/clients/dynamodb";
import User from "../model/users";
import { DynamoDBDocumentClient, GetCommand, PutCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";


export default class service {

    private Tablename: string = "usersTable";

    constructor(private docClient: DynamoDBDocumentClient) { }

    async createUser(user: User): Promise<User> {
        await this.docClient.send(new PutCommand({
            TableName: this.Tablename,
            Item: user
        }))
        return user as User;

    }
    async getUser(name: string): Promise<any> {
        const param = {
            TableName: this.Tablename,
            Key: {
                name: name
            }
        }
        console.log(param)
        const user = await this.docClient.send(new GetCommand(param))
        console.log(user)
        if (!user.Item) {
            throw new Error("user does not exit");
        }
        return user.Item as User;

    }

    async deleteUser(name: string): Promise<any> {
        return await this.docClient.send(new DeleteCommand({
            TableName: this.Tablename,
            Key: {
                name: name
            }
        }))
    }
}