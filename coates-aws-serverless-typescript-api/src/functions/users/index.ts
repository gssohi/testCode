import { handlerPath } from '@libs/handler-resolver';

export const createUser = {
    handler: `${handlerPath(__dirname)}/handler.createUser`,
    events: [
        {
            http: {
                method: 'post',
                path: 'user',
            },
        },
    ],
};

export const getUser = {
    handler: `${handlerPath(__dirname)}/handler.getUser`,
    events: [
        {
            http: {
                method: 'get',
                path: 'user/{name}',
            },
        },
    ],
};

export const deleteUser = {
    handler: `${handlerPath(__dirname)}/handler.deleteUser`,
    events: [
        {
            http: {
                method: 'delete',
                path: 'user/{name}',
            },
        },
    ],
};