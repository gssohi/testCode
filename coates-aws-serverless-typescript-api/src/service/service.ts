import { DocumentClient } from "aws-sdk/clients/dynamodb";
import User from "../model/users";


export default class service {

    private Tablename: string = "usersTable";

    constructor(private docClient: DocumentClient) { }

    async createUser(user: User): Promise<User> {
        await this.docClient.put({
            TableName: this.Tablename,
            Item: user
        }).promise()
        return user as User;

    }
    async getUser(name: string): Promise<any> {

        const user = await this.docClient.get({
            TableName: this.Tablename,
            Key: {
                name: name
            }
        }).promise()
        if (!user.Item) {
            throw new Error("user does not exit");
        }
        return user.Item as User;

    }

    async deleteUser(name: string): Promise<any> {
        return await this.docClient.delete({
            TableName: this.Tablename,
            Key: {
                name: name
            }
        }).promise();
    }
}