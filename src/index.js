import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

connectDB().catch((error) => {
    console.error("Failed to connect to database:", error);
    process.exit(1);
});