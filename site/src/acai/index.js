import axios from 'axios'
import {useState} from 'react'

export default function Index(){
    const [Peq, setPeq] = useState(0);
    const [Med, setMed] = useState(0);
    const [Gra, setGra] = useState(0);
    const [Desc, setDesc] = useState(0);
    const [total, setTotal] = useState(0);
    
    async function Acai(){
        const resp = await axios.post('http://localhost:5000/calcular/acai', {
            qtdPeq: Peq,
            qtdMed: Med,
            qtdGra: Gra,
            desc: Desc
        })
        setTotal(resp.data.x);
    }


    return(
        <main>
            <h1>Açai</h1>

            <p> Pequeno = 13,50 </p>
            <p> Medio = 15,00 </p>
            <p> Grande = 17,50 </p>

            <h1> Pedido </h1>

            <div>
            Açai Pequeno :
            <input type='text' value={Peq} onChange={e => setPeq(Number(e.target.value))} />
            </div>

            <div>
                 Açai Medio :
                <input type='text' value={Med} onChange={e => setMed(Number(e.target.value))} />
            </div>

            <div>
                Açai Grande :
                <input type='text' value={Gra} onChange={e => setGra(Number(e.target.value))} />
            </div>

            <div>
                Desconto:
                <input type='text' value={Desc} onChange={e => setDesc(Number(e.target.value))} />
            </div>

            <button onClick={Acai}> Calcular </button>

            <div>
                O Total é : {total}
            </div>

        </main>
    )
}