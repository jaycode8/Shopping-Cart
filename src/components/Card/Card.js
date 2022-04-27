import './Card.css'
import Fruits from './data';
import { useCart } from 'react-use-cart';

const TheCard = (props) =>{
    const { addItem } = useCart()
    return(
        <div className="card">
        <img src={props.img}/>
        <div className="details">
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <button onClick={() => addItem(props.item)}>Purchase</button>
        </div>
    </div>
    )
}


const Card = () => {
    return (
        <div className="container">
            <div className='cards'>
                {
                    Fruits.map( (fruit, index) =>(
                        <TheCard  
                            name={fruit.name} 
                            price={fruit.price} 
                            img={fruit.img} 
                            key={index} 
                            item={fruit}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Card;