import { type ReactElement } from "react"
import Navbar from "../components/navbar"
import Horario from "../pages/Horario" 
export default function Inicio(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <Horario />
    
    </div>
  )
}
