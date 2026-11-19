/**
 * estrenos.js
 * -----------
 * Pide los estrenos a la API (GET /api/estrenos) y monta un
 * <TarjetaEstreno> por cada uno dentro de <ul id="lista-estrenos">.
 *
 * Se carga desde templates/estrenos.html DESPUES de TarjetaEstreno.js:
 *   <script type="text/babel" src="/js/componentes/TarjetaEstreno.js"></script>
 *   <script type="text/babel" src="/js/estrenos.js"></script>
 *
 * La API devuelve un array JSON con este formato (ver static/data/estrenos.json):
 *   [
 *     { "id": 1, "titulo": "Nebula Roja", "fechaEstreno": "2026-11-14",
 *       "genero": "Ciencia ficcion", "plataforma": "Netflix" },
 *     ...
 *   ]
 */
function ListaEstrenos() {
    // TODO 1: estado "estrenos" (array vacio por defecto)
    const [estrenos, setEstrenos] = React.useState([]);

    // TODO 2: fetch("/api/estrenos") una sola vez al montar
    React.useEffect(() => {
        fetch("/api/estrenos")
            .then(res => res.json())
            .then(data => setEstrenos(data))
            .catch(error => console.error("Error al cargar estrenos:", error));
    }, []);

    // TODO 3: devolver un <TarjetaEstreno> por cada estreno con su key
    return (
        <React.Fragment>
            {estrenos.map(estreno => (
                <TarjetaEstreno
                    key={estreno.id}
                    titulo={estreno.titulo}
                    fechaEstreno={estreno.fechaEstreno}
                    genero={estreno.genero}
                    plataforma={estreno.plataforma}
                />
            ))}
        </React.Fragment>
    );
}

// Monta la lista en el <ul id="lista-estrenos"> de estrenos.html.
// (Este bloque ya viene resuelto, no hace falta tocarlo.)
const contenedor = document.getElementById("lista-estrenos");
const raiz = ReactDOM.createRoot(contenedor);
raiz.render(<ListaEstrenos />);