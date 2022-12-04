import { expect } from "chai";
import * as sinon from "sinon";
import * as AWSMock from 'aws-sdk-mock';
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { mockClient } from "aws-sdk-client-mock";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const ddbMock = mockClient(DynamoDBDocumentClient);
import usersService from "../../service/index"

describe("Get user test", () => {
  beforeEach(() => {
    ddbMock.reset();
  });
  afterEach(() => {
    sinon.restore();
  });
  it("Should return a name value John", async () => {

    ddbMock
      .on(GetCommand)
      .resolves({
        Item: undefined,
      })
      .on(GetCommand, { TableName: 'usersTable', Key: { name: 'john' } })
      .resolves({
        Item: { name: "john" },
      })
      .on(GetCommand, {
        TableName: "usersTable",
        Key: { name: "user2" },
      })
      .resolves({
        Item: { name: "user2" },
      });

    const result = await usersService.getUser("john");
    console.log(result)
    expect(result).to.be.not.empty;
    expect(result).to.have.property("name");
    expect(result).to.have.property("name", "john");
    AWSMock.restore('DynamoDB');
  });
})

