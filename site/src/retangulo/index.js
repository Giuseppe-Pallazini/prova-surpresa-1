import axios from 'axios'
import { useState} from 'react'

export default function Index() {
    const [base, setBase] = useState()
    const [altura, setAltura] = useState()
    const [resposta, setResposta] = useState()

    async function retangulo() {
        const resp = await axios.post('http://localhost:5000/retangulo', {
            base,
            altura
        })
        console.log(resp.data)
        setResposta([resp.data.x])
    }

    return(
        <main>

            <h1> Retangulo </h1>

            <p> Base: </p>
            <input type='text' value={base} onChange={e => setBase(e.target.value)} />

            <p> Altura: </p>
            <input type='text' value={altura} onChange={e => setAltura(e.target.value)} />

            <button onClick={retangulo} > ... </button>

            <p> {resposta} </p>
        </main>
    );
}