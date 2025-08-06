import express from "express";
import cursosRota from './routes/cursosRoutes.js';
const cors = require('cors');

const app = express();

app.use(cors()); 
app.use(express.json());

const port = 3000;

app.use("/cursos", cursosRota);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});