export default function MenuRotador() {
    return (
        <div className="menu-container">
            <div className="menu-row">

                {/* FILA ARRIBA — pocas items (3 o menos) */}

                <div className="menu-card">
                    <h2>Tequeños</h2>
                    <div className="menu-card-body">
                        <p><span className="nombre">Tequeños de queso</span><span className="precio">S/.1.50</span></p>
                    </div>
                </div>

                <div className="menu-card">
                    <h2>Salchipapas</h2>
                    <div className="menu-card-body">
                        <p><span className="nombre">Salchipapas</span><span className="precio">S/.6.00</span></p>
                        <p><span className="nombre">Choripapas</span><span className="precio">S/.7.00</span></p>
                        <p><span className="nombre">Salchimix</span><span className="precio">S/.8.00</span></p>
                    </div>
                </div>

                <div className="menu-card">
                    <h2>Broster</h2>
                    <div className="menu-card-body">
                        <p><span className="nombre">Broster</span><span className="precio">S/.10.00</span></p>
                        <p><span className="nombre">Mostrito</span><span className="precio">S/.10.00</span></p>
                        <p><span className="nombre">Broster Mix</span><span className="precio">S/.12.00</span></p>
                        <p><span className="nombre">Mostrito Mix</span><span className="precio">S/.12.00</span></p>
                    </div>
                </div>

                <div className="menu-card">
                    <h2>Adicionales +S/.1.00</h2>
                    <div className="menu-card-body">
                        <p><span className="nombre">Huevo</span><span className="precio">S/.1.00</span></p>
                        <p><span className="nombre">Jamón</span><span className="precio">S/.1.00</span></p>
                        <p><span className="nombre">Queso rallado</span><span className="precio">S/.1.00</span></p>
                        <p><span className="nombre">Palta</span><span className="precio">S/.1.00</span></p>
                    </div>
                </div>

                {/* FILA ABAJO — más items (5 o más) */}

                <div className="menu-card">
                    <h2>Empanadas</h2>
                    <div className="menu-card-body">
                        <p><span className="nombre">Pollo</span><span className="precio">S/.3.00</span></p>
                        <p><span className="nombre">Carne molida</span><span className="precio">S/.3.00</span></p>
                        <p><span className="nombre">Queso</span><span className="precio">S/.3.00</span></p>
                        <p><span className="nombre">Jamón y queso</span><span className="precio">S/.3.00</span></p>
                        <p><span className="nombre">Caraota y queso</span><span className="precio">S/.3.00</span></p>
                        <p><span className="nombre">Tajada y queso</span><span className="precio">S/.3.00</span></p>
                        <p><span className="nombre">Pabellon</span><span className="precio">S/.6.00</span></p>
                    </div>
                </div>

                <div className="menu-card">
                    <h2>Hamburguesas</h2>
                    <div className="menu-card-body">
                        <p><span className="nombre">Carne</span><span className="precio">S/.5.00</span></p>
                        <p><span className="nombre">Chorizo</span><span className="precio">S/.5.50</span></p>
                        <p><span className="nombre">Carne + chorizo</span><span className="precio">S/.6.00</span></p>
                        <p><span className="nombre">Carne casera</span><span className="precio">S/.7.00</span></p>
                        <p><span className="nombre">Casera + chorizo</span><span className="precio">S/.7.50</span></p>
                    </div>
                </div>

                <div className="menu-card">
                    <h2>Bebidas</h2>
                    <div className="menu-card-body">
                        <p><span className="nombre">Papelón con limón</span><span className="precio">S/.1.00</span></p>
                        <p><span className="nombre">Gaseosa KR</span><span className="precio">S/.1.50</span></p>
                        <p><span className="nombre">Agua Natural</span><span className="precio">S/.1.00</span></p>
                        <p><span className="nombre">Agua Helada</span><span className="precio">S/.1.50</span></p>
                        <p><span className="nombre">Café</span><span className="precio">S/.1.00</span></p>
                        <p><span className="nombre">Gelatina</span><span className="precio">S/.1.00</span></p>
                    </div>
                </div>

                <div className="menu-card">
                    <h2>Panadería</h2>
                    <div className="menu-card-body">
                        <p><span className="nombre">Pan queso</span><span className="precio">S/.7.00</span></p>
                        <p><span className="nombre">Jamón y queso</span><span className="precio">S/.8.00</span></p>
                        <p><span className="nombre">Torta piña volteada</span><span className="precio">S/.5.00</span></p>
                        <p><span className="nombre">Pan de manjar</span><span className="precio">S/.3.00</span></p>
                        <p><span className="nombre">Golfiao</span><span className="precio">S/.3.00</span></p>
                        <p><span className="nombre">Pan de coco</span><span className="precio">S/.3.00</span></p>
                        <p><span className="nombre">Roll de canela</span><span className="precio">S/.3.00</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
