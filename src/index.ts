import dotenv from "dotenv";
import { logger } from "./app/logging";
import { web } from "./app/web";

dotenv.config();

const port: any = process.env.APP_PORT || 4000;

web.listen(port, () => logger.info(`Listening on server http://localhost:${port}`));
