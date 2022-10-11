import axios from 'axios'
import { useState } from 'react'

export default function Index() {
    const [capaci, setCapaci] = useState()
    const [cons, setCons] = useState()
    const [dista, setDista] = useState()
    const [resposta, setResposta] = useState()

    async function paradas() {
        const resp = await axios.post('http://localhost:5000/paradas', {
            capac: capaci,
            consumo: cons,
            dist: dista
        })
        setResposta(resp.data.x)

    }





    return (

        <main>

            <h1> Paradas para Abastecer</h1>

            <p> Capacidade: </p>
            <input type='text' value={capaci} onChange={e => setCapaci(Number(e.target.value))} />
            <br /> <br />


            <p> Consumo </p>
            <input type='text' value={cons} onChange={e => setCons(Number(e.target.value))} />
            <br /> <br />


            <p> Distância </p>
            <input type='text' value={dista} onChange={e => setDista(Number(e.target.value))}/>
            <br /> <br /> <br />


            <button onClick={paradas}> Calcular </button>

            <p> Você precisará fazer {resposta} paradas para abastecer</p>
        </main>

    )
}