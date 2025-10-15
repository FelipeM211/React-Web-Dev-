import NavBar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Home />
    <Footer />
    </BrowserRouter>
    </>
    
  )
}

export default App