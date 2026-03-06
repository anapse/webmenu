import "./index.css"
import MenuRotador from "./components/MenuRotador"
import BannerTitulo from "./components/BannerTitulo"
import Logo from "./components/Logo"

export default function App() {
  return (
    <div className="app">

      <div className="left-zone">
        <div className="left-inner">

          {/* fila superior: titulo + logo */}
          <div className="top-row">
            <BannerTitulo />
            <Logo />
          </div>

          {/* menú grande */}
          <MenuRotador />

        </div>
      </div>

    </div>
  )
}

