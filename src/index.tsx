import express, {Router, Request, Response, Application} from "express";
import {Server} from "typescript-rest";
import {connection} from './dbconnect';

const BlocksAPI = async (req: Request, res: Response) => {
  console.log(req)
  const queryString: string = req.body
  console.log(queryString)
  const response = await connection.query(queryString)

  return res.status(200).json({
    message: response
});
}

const HelloWorld = (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello World"
  });
}

const router = Router();
router.get('/', HelloWorld)
router.post('/api', BlocksAPI)


const app: Application = express().use(router);
Server.buildServices(app);

app.listen(3000, function() {
  console.log('Rest Server listening on port 3000!');
});
