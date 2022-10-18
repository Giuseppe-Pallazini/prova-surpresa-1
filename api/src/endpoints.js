import{Router} from 'express'

import { acai, sorvete, libra, abastecimento, funcaoSalario, funcaoFebre, funcaoCinema, funcaoGastos, funcaoContador } from './services.js'

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

server.post('/verificar/libra', (req, resp) => {
    try {
        const { dia, mes} = req.body;
        const x = libra(dia, mes);
        resp.send({
            x:x
        })
    } catch (err) {
        
    }
})

server.post('/sorveteria', (req, resp) => {
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


server.post('/paradas', (req, resp) => {
    try{
        const { capac, consumo, dist } = req.body
        const x = abastecimento(capac,consumo,dist)
        resp.send({
            x:x
        })
    }
    catch(err){

    }
})

server.post('/salario', (req, resp) => {
    try{
        const { salario, bonus, desc } = req.body;
        const x = funcaoSalario(salario, bonus, desc)
        resp.send({
            x:x
        })

    }
    catch(err){
    
    }
})

server.post('/febre', (req, resp) => {
    try{
        const { temp } = req.body;
        const x = funcaoFebre(temp);
        resp.send({
            x:x
        })
    }
    catch(err){
        
    }
})


server.post('/cinema', (req, resp) => {
    try {
        const {inteiras, meias, diaSemana, nacional} = req.body
        const x = funcaoCinema(inteiras, meias, diaSemana, nacional)
        resp.send({
            x:x
        })
    } catch (err) {
        err.message
    }
})


server.post('/gastos', (req, resp) => {
    try {
        const {ganhos, gastos} = req.body
        const x = funcaoGastos(ganhos, gastos)
        resp.send({
            x:x
        })
    } catch (err) {
        err.message
    }
})


server.post('/contador', (req, resp) => {
    try {
        const {inicio, fim} = req.body
        const x = funcaoContador(inicio, fim)
        resp.send([
            x
        ])
    } catch (err) {
        err.message
    }
})


export default server