import carImg from '../../assets/OldCart.jpg';
import Button from '../Button';
import'./styles.css';
export default function Card(){
    return(
        <>
            <div className="latavelha-card">
                <img src={carImg} alt="Carro" />
                <h3> Renault Largadini 1953</h3>
                <p>Isopor largado ao vento espalha neve artificial!Largadini em movimento sopra pó de ferrugem!</p>
                <Button />
            </div>
            

        </>
        

    );
}