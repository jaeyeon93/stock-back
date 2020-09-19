import express from "express";

const homeRouter = express.Router();

/* GET home page. */
homeRouter.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

export default homeRouter;
