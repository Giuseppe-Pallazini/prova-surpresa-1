import axios from 'axios'
import { useState } from 'react'


export default function Index() {
    const [int, setInt] = useState();
    const [meia, setMeia] = useState();
    const [dia, setDia] = useState(false);
    const [nacio, setNacio] = useState(false);
    const [resposta, setResposta] = useState([]);


    async function cinema(){
        const resp = await axios.post('http://localhost:5000/cinema', {
            inteiras: int,
            meias: meia,
            diaSemana: dia,
            nacional: nacio
        })
        setResposta(resp.data.x)
    }

    return(
        <main>
            <h1> Cinema </h1>

            <p> Inteiras: </p>
            <input type='text' value={int} onChange={e => setInt(Number(e.target.value))} />
            <br /> <br />
        

            <p> Meias: </p>
            <input type='text' value={meia} onChange={e => setMeia(Number(e.target.value))} />
            <br /> <br />


            <p> Quarta-Feira? </p>
            <input type='checkbox' value={dia} onChange={e => setDia(e.target.checked)} />
            <br /> <br />


            <p> Nacional? </p>
            <input type='checkbox' value={nacio} onChange={e => setNacio(e.target.checked)} />
            <br /> <br />

            <button onClick={cinema} > Calcular </button>

            <p> O valor total é: {resposta}</p>
        </main>
    );
}