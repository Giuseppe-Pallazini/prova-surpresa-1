import axios from 'axios'
import {useState } from 'react'

export default function Index(){
    const [qtd, setQtd] = useState()
    const [resposta, setResposta] = useState()

    async function asteristico() {
        const resp = await axios.post('http://localhost:5000/caractere', {
            qtd
        })
        setResposta(resp.data)

    }
    return(

        <main>
            <h1> caractere </h1>

            <p> Quantidade de '*': </p>
            <input type='text' value={qtd} onChange={e => setQtd(e.target.value)} />

            <button onClick={asteristico}> Calcular </button>

            <p> {resposta} </p>

        </main>


    );
}