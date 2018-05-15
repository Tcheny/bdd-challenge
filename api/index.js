import express, { Router } from "express";

import users from "./controllers/users"

const apiRoutes = new Router();

apiRoutes.use(express.urlencoded({ extended: false }));
apiRoutes.use(express.json());

apiRoutes.get('/users', (req, res) => {
  users.find(req, res)
});
apiRoutes.post('/users/create',(req, res) => {
  users.create(req,res)
});



export default apiRoutes;
