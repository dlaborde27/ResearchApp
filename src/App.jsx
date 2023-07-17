import { HashRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { People } from "./pages/People"
import { Publications } from "./pages/Publications"
import { Research } from "./pages/Research"
// import { Contact } from "./pages/Contact"
import { ChakraProvider } from '@chakra-ui/react'
import "./App.css"

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <HashRouter>
          <div id="content">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/people/" element={<People />}></Route>
                <Route path="/publications/" element={<Publications />}></Route>
                <Route path="/research/" element={<Research />}></Route>
                {/* <Route path="/contact/" element={<Contact />}></Route> */}
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </div>
    </ChakraProvider>
  )
}

export default App
