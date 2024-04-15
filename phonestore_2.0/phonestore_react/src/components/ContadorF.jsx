import { useState, useEffect, useRef } from "react";


export default function ContadorF() {
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const menssageCount = useRef();
  const buttonOff = useRef();
  const incrementar = () => {
    setCount(a => a + 1)
  }

  const decrementar = () => {
    setCount(a => a - 1)
  }

  const nextPage = () => {
    setPage(a => a + 1)
  }

  const previewPage = () => {
    setPage(a => a - 1)
  }

  useEffect(()=>{
    page < 1 ? console.log("No hay paginas negativas o nulas") : console.log(`se encuentra en la pagina ${page}`)  
    count < 1 ? console.log("El contador no debe tener valores negativos") : console.log(`El contador se encuentra en ${count}`)
    if (count > 5) {
      menssageCount.current.style.color = 'red';
      menssageCount.current.innerText = 'El valor maximo para el contador es 6'
      buttonOff.current.disabled = true;
    }

    if(count <= 5) {
      menssageCount.current.style.color = 'grey';
      menssageCount.current.innerText = `El contador se encuentra en: ${count}`;
      buttonOff.current.disabled = false;
    } 
  }
,[page,count])
  return (
    <>
      <h1 ref={menssageCount}>El contador se encuentra en: {count}</h1>
      <button ref={buttonOff} onClick={incrementar}>Aumentar</button>
      <button onClick={decrementar}>Disminuir</button>
      <h1>Page se encuentra en: {page}</h1>
      <button onClick={nextPage}>Next</button>
      <button onClick={previewPage}>Preview</button>
    </>
  );
}
