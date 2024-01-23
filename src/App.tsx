import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import { Navbar } from "./components/Navbar"

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

