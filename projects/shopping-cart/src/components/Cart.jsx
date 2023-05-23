import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useId } from "react";
import './Cart.css'
import { useCart } from "../hooks/useCart";

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              alt="Iphone X"
            />
            <div>
              <strong>Iphone</strong> - $899
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
            <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
