import{Router} from 'express'

import { acai, sorvete, libra } from './services.js'

const server = Router();

server.post('/calcular/acai', (req, resp) => {
    try{
        const {Peq, Med, Gra, Desc} = req.body;
        const x = acai(Peq, Med, Gra, Desc);
        resp.send({
            x:x
        })
    }
    catch(err){

    }
})

server.post('/verificar/libra', (req,resp) => {
    try {
        const { dia, mes} = req.body;
        const x = libra(dia, mes);
        resp.send({
            x:x
        })
    } catch (err) {
        
    }
})

server.post('/sorveteria', (req,resp) => {
    try{
        const { gramas } = req.body;
        const x = sorvete(gramas);
        resp.send({
            x:x
        })
    }
    catch(err){

    }
})


export default server