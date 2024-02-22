import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { addItem, removeItem } from "../../redux/slices/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  const bgImage =
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80";

  const addToCart = (product, qty) => {
    const newObj = { ...product, qty: qty };
      dispatch(addItem(newObj));
  };
  const deleteItem = (prod) => {
    dispatch(removeItem(prod));
  }
    useEffect(() => {
      console.log(cartItems);
    }, [dispatch, cartItems]);
  return (
    <div className="main_cart">
      <div className="list_card glass_background">
        {cartItems?.map((item, i) => (
          <div className="prod_details" key={i}>
            <img src={bgImage} />
            <div className="det_dev">
              <span className="prod_name">{item?.name}</span>
              <select
                name="qty"
                className="select_inpt"
                value={item?.qty}
                onChange={(e) => addToCart(item, parseInt(e.target.value))}
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <span className="prod_price">₨ {item?.price * item?.qty}</span>
              <TiDelete
                className="delete_btn"
                onClick={() => deleteItem(item)}
              />
            </div>
          </div>
        ))}
        {cartItems.length <= 0 && <h2 style={{textAlign:"center", color:"#cb0023"}}> Your Cart is Empty!!! 😮🙄🙄</h2>}
      </div>
    </div>
  );
};

export default Cart;
