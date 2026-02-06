import { useState } from "react"
import "./index.css"

import MenuRotador from "./components/MenuRotador"
import Logo from "./components/Logo"
import Botonera from "./components/Botonera"
import VideoBox from "./components/BoxVideo"
import BannerTitulo from "./components/BannerTitulo"

export default function App() {

  const [modo, setModo] = useState("menu")
  // "menu" = menu grande
  // "video" = video grande

  return (
    <div className="app">

      {/* IZQUIERDA GRANDE */}
      <div className="left-zone">
        <div className="left-inner">
          <BannerTitulo />

          {modo === "menu" && <MenuRotador />}
          {modo === "video" && <VideoBox />}
        </div>
      </div>

      <div className="right-zone">
        <div className="top-panel">
          <Logo />
          <Botonera modo={modo} setModo={setModo} />
        </div>

        {modo === "menu" && <VideoBox />}
        {modo === "video" && <MenuRotador />}
      </div>


    </div>
  )
}
