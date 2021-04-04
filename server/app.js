if(!process.env.NODE_ENV||process.env.NODE_ENV === 'development'){
  require('dotenv').config()
}

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const routes = require("./routes")
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(routes)

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})