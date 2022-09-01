import React from 'react';
import { MediaAluno } from './MediaAluno';


export default function App() {
      
    const[ aluno, setAluno ] = useState({
        nome: "Joaquim",
        rm: 99999,
        ruema: "1TDSZ"
    });
    
    const nota1 = 6
    const nota2 = 7
    const nota3 = 5

    return (
        <>
            <h1>CP1 de RWD 1° SEMESTRE</h1>
            <MediaAluno aulunoProps={aluno}
                        nota1Props={nota1}
                        nota2Props={nota2}
                        nota3Props={nota3}/>
        </>
    )
}