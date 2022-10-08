
import axios from 'axios'
import { useState } from 'react';

export default function Index(){
    const [dia, setDia] = useState(0);
    const [mes, setMes] = useState('');
    const [resposta, setResposta] = useState('');

    async function libra(){
    const resp = await axios.post('http://localhost:5000/verificar/libra', {
            dia: dia,
            mes: mes
        })

        setResposta(resp.data.x)
    }
    return(
        <main>
            <h1>Astrologia</h1>
            
            <div> Informe o Dia: 
                <input type='text' value={dia} onChange={e => setDia(Number(e.target.value))} />
            </div>

            <div> Informe o mês: 
                <input type='text' value={mes} onChange={e => setMes(e.target.value)} />
            </div>

        <div>
            <button onClick={libra}> Conferir </button>
            Resposta: {resposta}
        </div>
        </main>
    )
}