// import Dashboard from "./pages/Dashboard"
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import {Signup} from "./components/Signup"
import {Login} from "./components/Login"
import { Create } from "./components/Create"


function App() {

  return (
    <>


      <div class="absolute top-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        

        <Create />

        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  )
}

export default App
