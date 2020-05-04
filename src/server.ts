import express from 'express'
import dotenv from 'dotenv'

const result = dotenv.config()
if (result.error) throw result.error
if (result.parsed?.SHOW_ENV) {
  const envString = JSON.stringify(result.parsed, null, 2)
  console.debug('### env: ', envString)
}

const app = express()
const port = process.env.PORT || 4000

app.get('/', (_, res) => res.send('Hello World!'))

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
