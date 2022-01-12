import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor(valor + 1)
    }
    
    function Remover(){
            
        valor > 0 ? setValor(valor - 1) : alert("Não é possível remover um número igual ou abaixo de 0!")
    
    }

    return(
        <div href="/" className="card">
            <div className="card-header">
                Card Example
            </div>
            <div className="card-body">

                <Button 
                    className="btn btn-success" 
                    onClick={Adicionar}>
                    Adicionar
                </Button>
                
                <Button 
                    className="btn btn-danger"
                    onClick={Remover}>
                    Remover
                </Button>

                <p>{valor}</p>
            </div>
        </div> 
    )
}

export default Card;