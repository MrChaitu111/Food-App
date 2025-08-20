// import { useContext } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import { food_list } from '../../assets/assets';
// import {StoreContext} from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {/* {food_list.map((item,index)=>{
                    if (cartItems[item._id]>0){
                        return(
                            <>
                           <div className='cart-items-title cart-items-item'>
                            <img src={item.image} alt='item'/>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>₹ {item.price *cartItems[item._id]}</p>
                            <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
                            
                            </div> 
                            <hr/>
                            </>
                        )
                    }else{
                        return null;
                    }
                })} */}
        {food_list?.map((item, index) => {
          // Ensure cartItems exists and the item count > 0
          if (cartItems && cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹ {item.price * cartItems[item._id]}</p>
                  <p
                    className="cross"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}

      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fees</p>
              <p>₹{getTotalCartAmount()===0?0:30}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+30}</b>
            </div>
          </div>
          <Link
          to={getTotalCartAmount()===0?"/problem":"/order"}
          ><button>PROCEED TO CHECKOUT</button></Link>
        </div>
        <div className='cart-promocard'>
          <div>
            <p>If you have a promocard,Enter it here</p>
            <div className='promocart-input'>
              <input type='text' placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart