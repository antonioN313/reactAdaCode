import { useState } from "react";
import styles from './button.module.css'

export default function MeuContador() {
    const [contador,setContador] = useState(0)

    function adicionar() {
        setContador(contador + 1)
        
    }
    function diminuir() {
        setContador(contador - 1)
        
    }
    if (contador > 9) {
        return(
        <div className="container">
            <h1>Contador: {contador}</h1>
            <h1>Valor Muito Grande</h1>
            <button className={styles.button} onClick={adicionar}>Pressione para Aumentar o valor</button>
            <button className={styles.button} onClick={diminuir}>Pressione para Diminuir o valor</button>
        </div>
        )
    }
    else if (contador < 2) {
        return(
            <div className="container">
                <h1>Contador: {contador}</h1>
                <h1>Valor Muito Pequeno</h1>
                <button className={styles.button} onClick={adicionar}>Pressione para Aumentar o valor</button>
                <button className={styles.button} onClick={diminuir}>Pressione para Diminuir o valor</button>
            </div>
        )
    }
    else if (contador >= 2 && contador <= 9) {
        return(
            <div className="container">
                <h1>Contador: {contador}</h1>
                <h1>Valor Médio</h1>
                <button className={styles.button} onClick={adicionar}>Pressione para Aumentar o valor</button>
                <button className={styles.button} onClick={diminuir}>Pressione para Diminuir o valor</button>
            </div>
        )
    }
    return(
        <div className="container">
        <h1>Contador: {contador}</h1>
        <button className={styles.button} onClick={adicionar}>Pressione para Aumentar o valor</button>
        <button className={styles.button} onClick={diminuir}>Pressione para Diminuir o valor</button>
        </div>

    )
}