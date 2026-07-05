import ListaTalleres from "../components/listaTalleres";
import Navbar from "../components/navbar";
import type { ReactElement } from "react";

export default function Talleres(): ReactElement {
  return (
    <div className="centered-container">
        <Navbar />
        <ListaTalleres />
      </div>
  )
}
