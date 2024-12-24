// import express from "express";
// import { sendMessage } from "../controllers/messageControllers.js";

// const router = express.router();


// router.post("/send", sendMessage);

// export default router;

import express from "express";
import { sendMessage } from "../controllers/messageControllers.js";

const router = express.Router(); // Note the uppercase "R"

router.post("/send", sendMessage);

export default router;
