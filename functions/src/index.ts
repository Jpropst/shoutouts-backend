import * as functions from "firebase-functions"
import express from "express"
import cors from "cors"
import shoutouts from "./routes/shoutouts"

// CONFIG

const app = express()
app.use(cors())
app.use(express.json())

// ROUTES

app.use("/shoutouts", shoutouts)

// EXPORT API

export const api = functions.https.onRequest(app)
