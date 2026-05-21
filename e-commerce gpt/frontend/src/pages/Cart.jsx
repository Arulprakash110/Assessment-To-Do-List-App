import { useState } from "react";

function Cart() {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Nike Shoes",
            price: 2999,
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        },

        {
            id: 2,
            name: "T-Shirt",
            price: 999,
            quantity: 2,
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        },
    ]);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div style={{ padding: "20px" }}>

            <h1>Cart Page</h1>

            {
                cartItems.length === 0 ? (
                    <h2>Your Cart is Empty</h2>
                ) : (
                    <>
                        {
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    style={{
                                        border: "1px solid #ddd",
                                        marginBottom: "20px",
                                        padding: "15px",
                                        display: "flex",
                                        gap: "20px",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        width="120"
                                        height="120"
                                    />

                                    <div>
                                        <h2>{item.name}</h2>

                                        <p>
                                            Price: ₹ {item.price}
                                        </p>

                                        <p>
                                            Quantity: {item.quantity}
                                        </p>

                                        <h3>
                                            Total:
                                            ₹ {item.price * item.quantity}
                                        </h3>
                                    </div>
                                </div>
                            ))
                        }

                        <hr />

                        <h2>
                            Grand Total: ₹ {totalPrice}
                        </h2>

                        <button>
                            Proceed To Checkout
                        </button>
                    </>
                )
            }

        </div>
    );
}

export default Cart;