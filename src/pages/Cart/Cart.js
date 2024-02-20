import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { addItem } from "../../redux/slices/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [qty, setQty] = useState();
  const bgImage =
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80";

    const addToCart = (product) => {
        console.log(qty);
    const newObj = Object.assign({ qty: qty }, product);
    dispatch(addItem(newObj));
  };
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
                onChange={(e) => [
                  addToCart(item),
                  setQty(e.target.value),
                ]}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
              <span className="prod_price">₨ {item?.price * item?.qty}</span>
              <TiDelete className="delete_btn" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
