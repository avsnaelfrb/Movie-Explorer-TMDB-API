import express, { json, type Application } from 'express'

const app: Application = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

export default app
