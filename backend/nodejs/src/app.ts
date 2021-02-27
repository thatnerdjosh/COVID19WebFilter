import express from "express"
import * as searchController from "./controllers/search"

const app = express()

app.set("port", process.env.PORT || 3000)
app.set("scheme", process.env.SECURE || false ? "https" : "http")
app.set("host", process.env.HOST || "localhost")
app.get("/search", searchController.index);


export default app

