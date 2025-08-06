import fs from 'fs';

function getTodosCursos (){
    return JSON.parse(fs.readFileSync("cursos.json"));
};

function getCursosPorId (id){
    const cursos = JSON.parse(fs.readFileSync("cursos.json"));
    const cursosFiltrados = cursos.filter(curso => curso.id === id)[0];
    return cursosFiltrados;
};

function postCursos(cursoNovo) {
    const cursos = JSON.parse(fs.readFileSync("cursos.json"));
    const newArrayCursos = [...cursos, cursoNovo];
    fs.writeFileSync("cursos.json", JSON.stringify(newArrayCursos));
};

function patchCursos(modificacoes, id) {
    let cursosAtuais = JSON.parse(fs.readFileSync("cursos.json"));
    const indiceModificado = cursosAtuais.findindex(modificacoes => modificacoes.id === id);
    const conteudoMudado = {...cursosAtuais[indiceModificado], ...modificacoes};
    cursosAtuais [indiceModificado] = conteudoMudado;
    fs.writeFileSync("cursos.json", JSON.stringify(cursosAtuais));
};

function deleteCursos (id) {
    const cursos = JSON.parse(fs.readFileSync("brinquedos.json"));
    const cursosFiltrados = cursos.filter(curso => curso.id !== id);
    fs.writeFileSync("cursos.json", JSON.stringify(cursosFiltrados));
};

export { getTodosCursos, getCursosPorId, postCursos, patchCursos, deleteCursos };