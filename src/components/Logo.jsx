import logo from "/logo.png"
export default function Logo() {
    return (
        <div className="logo-box">
            {/* logo del local */}
            <img
                src={logo}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </div>
    )
}
