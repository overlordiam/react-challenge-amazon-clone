import React from 'react'
import './Order.css'
import {useHistory} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Order() {
    const history = useHistory();
    const [{basket},dispatch] = useStateValue();
    
    const handleChange = () => {
        dispatch({
            type:'EMPTY_BASKET'
        });
       
          history.push("/");
        

    }
   
    return (
        <div className='order'>
            <h2>Orders</h2>  
         
           
            <p className="order__id">
                <small>{basket.id}</small>
            </p>
            {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   

             <button className="order__button" onClick={handleChange}>
                 Go To Home
            </button>       
        </div>
    )
}

export default Order
