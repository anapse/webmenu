export default function Botonera({ modo, setModo }) {

    const cambiar = () => {
        if (modo === "menu") {
            setModo("video")
        } else {
            setModo("menu")
        }
    }

    return (
        <div className="botonera">
            <button className="btn" onClick={cambiar}>
                {modo === "menu" ? "YouTube" : "Menú"}
            </button>
        </div>
    )
}
