import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Gallery from '../pages/Gallery/Gallery.jsx'
// import Header from '../components/Header/Header.jsx'

const Router = () => {

    return (
        <>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Gallery/>} />

                {/* <Route path='*' element={<Header/>} lembrar de fazer a pagina nao encontrada /> */}
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router