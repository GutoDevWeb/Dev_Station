import express from "express";
import cursosRota from './routes/cursosRoutes.js';

const app = express();
app.use(express.json());

const port = 3000;

app.use("/cursos", cursosRota);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});