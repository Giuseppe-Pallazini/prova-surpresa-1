import './index.scss'
import { useState } from 'react'

export default function Index() {
    const [itens, setItens] = useState([]);
    const [qtdAlunos, setQtdAlunos] = useState();
    const [nota, setNota] = useState([])

    function ok() {
        let a = []
        for (let i = 1; i <= qtdAlunos; i++) {
            a = [...a, i]
        }
        setItens(a)
    }

    function calcular() {
        
        let soma = 0
        for(let i = 0; i < nota.length; i++) {
            let a = nota[i]
            soma = soma + a
        }
        console.log(soma)
    }




    return (
        <main>

            <p> Quant. de alunos: </p>
            <input type='text' placeholder='0' onChange={e => setQtdAlunos(Number(e.target.value))} />
            <button onClick={ok}> Ok </button>

            {itens.map((item, i) =>
                <section>

                    <p> Aluno {i + 1} :</p>
                    <input type='text' onChange={e => setNota(e.target.value)} />

                </section>
            )}

            <div>
                <button onClick={calcular()}> Calcular </button>
            </div>

        </main>
    );
}