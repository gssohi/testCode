import dynamoDBClient from "../model";
import service from "./service"

const usersService = new service(dynamoDBClient());
export default usersService;