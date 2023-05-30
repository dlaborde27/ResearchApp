import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { People } from "./pages/People"
import { Publications } from "./pages/Publications"
import { Research } from "./pages/Research"
import { Teaching } from "./pages/Teaching"
import { Openpositions } from "./pages/Openpositions"
import { Contact } from "./pages/Contact"

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/people/" element={<People />}></Route>
              <Route path="/publications/" element={<Publications />}></Route>
              <Route path="/research/" element={<Research />}></Route>
              <Route path="/teaching/" element={<Teaching />}></Route>
              <Route path="/openpositions/" element={<Openpositions />}></Route>
              <Route path="/contact/" element={<Contact />}></Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
