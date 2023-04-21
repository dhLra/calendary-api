import routes from "./routes/index";
import express from 'express';
import cors from 'cors'

const app = express();

app.use(cors({
    origin: '*',
    methods: '*'
}))

app.use(express.json())
app.use(routes);



export default app