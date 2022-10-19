import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Acai from './acai'
import Libra from './libra'
import Sorvete from './sorvete'
import Salario from './salario'
import Paradas from './paradas'
import Febre from './febre'
import Cinema from './cinema'
import Sit from './situacaoOrcamento'
import Cont from './contador'
import Cafe from './cafe'
import Caractere from './caractere'
import Retangulo from './retangulo'

import App from './App.js'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/acai' element={<Acai/>} />
                <Route path='/libra' element={<Libra/>} />
                <Route path='/sorvete' element={<Sorvete/>} />
                <Route path='/salario' element={<Salario/>} />
                <Route path='/paradas' element={<Paradas/>} />
                <Route path='/febre' element={<Febre/>} />
                <Route path='/cinema' element={<Cinema/>} />
                <Route path='/situacao' element={<Sit/>} />
                <Route path='/contador' element={<Cont/>} />
                <Route path='/cafe' element={<Cafe/>} />
                <Route path='/caractere' element={<Caractere/>} />
                <Route path='/retangulo' element={<Retangulo/>} />


            </Routes>
        </BrowserRouter>
    )
}