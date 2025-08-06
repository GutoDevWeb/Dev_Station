import express from 'express';
import { getTodosCursos, getCursosPorId, postCursos, patchCursos, deleteCursos } from '../modules/cursosServices.js';

const router = express.Router();

router.delete("/:id", deleteCursos);
router.patch("/:id", patchCursos);
router.post("/", postCursos);
router.get("/", getTodosCursos);
router.get("/:id", getCursosPorId);

export default router;