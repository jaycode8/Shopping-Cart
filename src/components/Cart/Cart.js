import React from 'react';
import './Cart.css'
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart()
    if (isEmpty) return (<h1 className='empty'>cart is empty</h1>)
    return (
        <div className='bag' id='cart'>
            <table border='0' cellPadding='0' cellspacing='0'>
                <tbody>
                    <tr>
                        <th colSpan='2'>Product</th>
                        <th>price</th>
                        <th colSpan='2'>quantity</th>
                    </tr>
                    {
                        items.map( (item, index) =>(
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height:'40px',width:'50px'}}/>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td className='buttons'>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                    <button onClick={() => removeItem(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <div className='totals'>
                <h2>cart total: {cartTotal}</h2>
                <button onClick={()=> emptyCart()}>Clear Cart</button>
                <button>Buy Now</button>
            </div>
            </table>
            {/* <div className='totals'>
                <h2>cart total: {cartTotal}</h2>
                <button onClick={()=> emptyCart()}>Clear Cart</button>
                <button>Buy Now</button>
            </div> */}
        </div>
    );
};

export default Cart;