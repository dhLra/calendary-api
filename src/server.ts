import app from './app'
import * as dotenv from 'dotenv'

const port = 3000;
dotenv.config()

app.listen(port, () => {
  console.log(`Aplicação iniciado com sucesso em http://localhost:${port}`)
})