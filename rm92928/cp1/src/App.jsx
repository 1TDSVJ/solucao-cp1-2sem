import React, { useState } from "react";
import MediaAluno from "./components/mediaAluno/MediaAluno";

export default function App() {

    const [aluno, setAluno] = useState({
        'nome': 'Dio',
        'rm': '99999',
        'turma': '1TDZ'
    });

    const nota1 = 7;
    const nota2 = 9;
    const nota3 = 5;

    return (
        <>
            <h1>CP1 - 2°Semestre</h1>

            <div className="container">
                
                <p>Apresentando com SASS</p>

            </div>

            <MediaAluno aluno = {aluno} nota1={nota1} nota2={nota2} nota3={nota3} />
        </>
    )
}