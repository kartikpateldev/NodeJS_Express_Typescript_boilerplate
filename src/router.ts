import express from 'express';
import { itemsRouter } from "./items/items.router";

const Router = express.Router();

const routes = [
    {
        route: '/items',
        router: itemsRouter,
    },
];

routes.forEach(item => {
    Router.use(item.route, item.router);
});

export default Router;
