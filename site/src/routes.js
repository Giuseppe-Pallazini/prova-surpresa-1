import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Acai from './acai'
import Libra from './libra'
import Sorvete from './sorvete'
import Salario from './salario'
import Paradas from './paradas'
import Febre from './febre'

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
            </Routes>
        </BrowserRouter>
    )
}