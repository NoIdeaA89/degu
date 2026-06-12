import type { ReactElement } from "react"
import Navbar from "../components/navbar"
import Schedule from "../components/Horario/Horario"

export default function Horario(): ReactElement {
  return (
    
  
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-yellow-400 to-green-500 flex flex-col">
      <Navbar />
      <Schedule />
    </div>

   

  
  )
}
