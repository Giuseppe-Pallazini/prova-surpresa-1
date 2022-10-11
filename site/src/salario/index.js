import axios from 'axios'
import { useState } from 'react'

export default function Index(){
    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)
    const [resposta, setResposta] = useState(0)

    async function liquido(){
        const resp = await axios.post('http://localhost:5000/salario', {
            salario: salario,
            bonus: bonus,
            desc: desc
        })
        setResposta(resp.data.x)
    }

    return(
        <main>

            <h1> Calcule o Salário </h1>


            <p> salario </p>
            <input type='text' value={salario} onChange={e => setSalario(Number(e.target.value))}/>
            <br/> <br/>


            <p> Bônus </p>
            <input type='text' value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
            <br/> <br/>


            <p> Desconto </p>
            <input type='text' value={desc} onChange={e => setDesc(Number(e.target.value))}/>
            <br/> <br/> <br/>



            <button onClick={liquido}> Calcular </button>
            


            <p> Seu salário liquido é de: {resposta} </p>
        </main>
    )
}