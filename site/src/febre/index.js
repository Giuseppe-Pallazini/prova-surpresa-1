import axios from 'axios'
import { useState } from 'react'

export default function Index(){
    const [temp, setTemp] = useState(0)
    const [resposta, setResposta] = useState(0)

    async function febre(){
        const resp = await axios.post('http://localhost:5000/febre', {
            temp: temp
        })
        setResposta(resp.data.x)
    }



    return(
        <main>

            <h1> Termometro </h1>

            <p> Temperatura atual: </p>
            <input type='text' value={temp} onChange={e => setTemp(Number(e.target.value))}/>


            <button onClick={febre}> Situação </button>

            <p> A situação para sua temperatura é: {resposta} </p>
        </main>
    )
}