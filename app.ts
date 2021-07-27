import express from "express";
import helmet from "helmet";
import { connectToDb } from "./src/db/connections";
import { User } from "./src/db/schemas/user";
import Logger from "./src/logger/logger";
import routes from "./src/routes";

const app = express();
// (async () => {
//   await connectToDb();

//   const hi = new User({
//     firstName: 'addada',
//     lastName: 'string',
//     isActive: true,
//     phone: '0543000830',
//     email: 'koren.e3@gmail.com',
//     gender: 'male',
//     dateOfBirth: new Date(),
//   });
//   hi.save((err) => {
//     if (err) {
//       Logger.error(err);
//     }
//   });
// }
// )();

app.use(express.json());
app.use(helmet());
app.use("/api", routes);

export default app;
