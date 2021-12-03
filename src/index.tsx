import express, {Router, Request, Response, Application} from "express";
import {Server} from "typescript-rest";
// import {dbConnection} from './dbconnect';

const BlocksAPI = async (req: Request, res: Response) => {

  const queryString: string = req.body
  // const db = dbConnection.getClient()
  // const response = await dbConnection.conn.query(queryString)

  return res.status(200).json({
    message: queryString
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


const app: Application = express();
Server.buildServices(app);

app.listen(3000, function() {
  console.log('Rest Server listening on port 3000!');
});
