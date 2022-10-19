import axios from 'axios'
import { useState } from 'react'

export default function Index() {
    const [ml, setMl] = useState()
    const [garrafa, setGarrafa] = useState()
    const [estudantes, setEstudantes] = useState()
    const [resp, setResp] = useState()

    async function cafe() {
        const resposta = await axios.post('http://localhost:5000/cafe',{
            garrafa,
            ml,
            estudantes
        })
        setResp(resposta.data.x)
    }
    return(
        <main>
                <h1> Função Café </h1>

                <p> Quantos mL cabe na garrafa? </p>
                <input type='text' value={garrafa} onChange={e => setGarrafa(e.target.value)} />

                <p> Quantos mL de café bebe cada aluno? </p>
                <input type='text' value={ml} onChange={e => setMl(e.target.value)} />

                <p> Quantos alunos são? </p>
                <input type='text' value={estudantes} onChange={e => setEstudantes(e.target.value)} />

                <button onClick={cafe}> Calcular </button>

                <p> São necessário(s) {resp}L de café </p>
        </main>
    );
}