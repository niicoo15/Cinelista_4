/**
 * TarjetaEstreno
 * ---------------
 * Componente de React (sin build, cargado via Babel Standalone) que
 * muestra un estreno como una tarjeta simple.
 *
 * Se guarda en static/js/componentes/TarjetaEstreno.js y se carga desde
 * templates/estrenos.html con:
 *   <script type="text/babel" src="/js/componentes/TarjetaEstreno.js"></script>
 *
 * Props que debe recibir:
 *  - título        (string) Título del estreno.
 *  - fechaEstreno  (string) Fecha de estreno del título.
 *  - género        (string) Género cinematografico.
 *  - plataforma    (string) Plataforma de emision (por defecto "Por confirmar").
 *
 * Evento:
 *  - Boton "Marcar interes": Alterna el estado local "interesado" entre true y false al hacer clic, cambiando el icono entre ★ y ☆.
 *
 * Ejemplo de uso:
 *   <TarjetaEstreno
 *       título="Nebula Roja"
 *       fechaEstreno="2026-11-14"
 *       género="Ciencia ficcion"
 *       plataforma="Netflix"
 *   />
 */

// TODO 1: declara la funcion TarjetaEstreno y recibe las props con
//         desestructuracion: { titulo, fechaEstreno, genero, plataforma }.
//         Dale a "plataforma" el valor por defecto "Por confirmar".
function TarjetaEstreno({ titulo, fechaEstreno, genero, plataforma = "Por confirmar." }) {

    // TODO 2: crea el estado local "interesado" (false por defecto) con
    //         React.useState y guarda tambien su funcion "setInteresado".


    // TODO 3: devuelve (return) el JSX de la tarjeta. La raiz debe ser un
    //         <li> con className="tarjeta-estreno" (ojo: en JSX se escribe
    //         className, no class), porque la tarjeta se pinta dentro del
    //         <ul id="lista-estrenos"> de estrenos.html. Dentro:
    //           - <h3> con el titulo
    //           - <p> "Fecha de estreno: ..." con la fecha
    //           - <p> "Genero: ..." con el genero
    //           - <p> "Plataforma: ..." con la plataforma
    //           - <button type="button" className="btn-interes"> con el
    //             texto "Marcar interes" precedido del icono:
    //               ★ si interesado es true, ☆ si es false
    //             (usa un operador ternario dentro de llaves { }).
    //
    // TODO 4: al boton anadele onClick para invertir el estado:
    //           onClick={() => setInteresado(!interesado)}
    //
    // Mientras no lo completes, la tarjeta no pinta nada:

    const [interesado, setInteresado] = React.useState(false);

    return (
        <li className="tarjeta-estreno">
            <h3>{titulo}</h3>
            <p>Fecha de estreno: {fechaEstreno}</p>
            <p>Genero: {genero}</p>
            <p>Plataforma: {plataforma}</p>
            <button
                type="button"
                className="btn-interes"
                onClick={() => setInteresado(!interesado)}
            >
                {interesado ? "★" : "☆"} Marcar interes
            </button>
        </li>
    );
}