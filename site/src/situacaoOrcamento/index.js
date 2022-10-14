import axios from 'axios'
import { useState } from 'react'


export default function Index() {
    const [gan, setGan] = useState()
    const [gas, setGas] = useState()
    const [resposta, setResposta] = useState()

    async function resultado() {
        const resp = await axios.post('http://localhost:5000/gastos', {
            ganhos: gan,
            gastos: gas
        })
        setResposta(resp.data.x)

    }

    return(
        <main>
            
            <h1> Situação Orçamento: </h1>
            <br /> <br /> <br />


            <p> Ganhos: </p>
                <input type='text' placeholder='0' value={gan} onChange={e => setGan(Number(e.target.value))} />
            <br /> <br />

            <p> Gastos: </p>
                <input type='text' placeholder='0' value={gas} onChange={e => setGas(Number(e.target.value))} />
            <br /> <br />

            <button onClick={resultado}> calcular </button>
            
            <p> <b> {resposta} </b> </p>
        </main>
    );
}