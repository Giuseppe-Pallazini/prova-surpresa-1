import axios from 'axios'
import { useState } from 'react'

export default function Index(){
    const [gramas, setGramas] = useState(0);
    const [total, setTotal] = useState(0);

    async function calcularPreco(){
        const resp = await axios.post('http://localhost:5000/sorveteria', {
            gramas: gramas
        })

        setTotal(resp.data.x)
    }

    return(
        <main>
            <h1> Sorveteria </h1>

            <h2> Faça seu Pedido </h2>
            <div>
                Informe as Gramas:
                <input type='text' value={gramas} onChange={e => setGramas(Number(e.target.value))} />
            </div>
            
            <div>
                <button onClick={calcularPreco} >Calcular</button>
            </div>

            <div>
                O valor total é : {total}
            </div>
        </main>
    )
}