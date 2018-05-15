import express from "express";
import routes from "./routes";

const app = express();

app.use(routes);

app.listen(8000, () => {
  console.log('Server listening on port 8000')
})

export default app;