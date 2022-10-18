import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Index() {
    const [inicio, setInicio] = useState();
    const [fim, setFim] = useState();
    const [resposta, setResposta] = useState([]);
    console.log(resposta)


    async function contador() {
        const resp = await axios.post('http://localhost:5000/contador', {
            inicio,
            fim
        })
        console.log(resp.data)
        setResposta([resp.data])
    }

    return(
        <main>
            <h1> Contador </h1>
            
            <p> Inicio </p>
            <input type='text' value={inicio} onChange={e => setInicio(Number(e.target.value))} />
            <br /> <br />

            <p> Fim </p>
            <input type='text' value={fim} onChange={e => setFim(Number(e.target.value))} />            
            <br /> <br />

            <button onClick={contador}> Calcular </button>

            <div> {resposta.map(item =>
                <div> 
                <p> {item} </p>
                </div>
                )}
            </div>
        </main>
    );
}