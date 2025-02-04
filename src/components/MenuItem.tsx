import useCartContext from "@/hooks/useCartContext";
import { menuData } from "@/lib/data";
import AddToCartButton from "./AddtoCartBtn";
import QuantityControl from "./QtyControl";

interface MenuItemProps {
  id: number;
  title: string;
  type: string;
  price: number;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
    thumbnail: string;
  };
  index: number;
}

const MenuItem = ({ id, price, title, type, images, index }: MenuItemProps) => {
  const { setCart, cart } = useCartContext();
  const cartItem = cart.find((item) => item.id === id);
  const handleCart = (id: number) => {
    const item = menuData.find((item) => item.id === id);
    if (item) {
      setCart((prevCart) => [...prevCart, { ...item, qty: 1 }]);
    }
  };

  const handleAddQty = (id: number) => {
    const item = cart.find((item) => item.id === id);

    if (item) {
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        })
      );
    }
  };

  const handleReduceQty = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            if (item.qty === 1) {
              return null;
            }
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  return (
    <div>
      <div
        className={`shadow-lg rounded-lg ${
          cartItem ? "border border-red" : undefined
        }`}
      >
        <picture className={`relative`}>
          <source media="(min-width: 1024px)" srcSet={images.desktop} />
          <source media="(min-width: 768px)" srcSet={images.tablet} />
          <img
            src={images.mobile}
            alt={title}
            className="rounded-lg w-full"
            width={300}
            height={200}
            fetchPriority={index === 0 ? "high" : "auto"}
          />

          {cartItem ? (
            <QuantityControl
              qty={cartItem.qty}
              handleAddQty={() => handleAddQty(id)}
              handleReduceQty={() => handleReduceQty(id)}
            />
          ) : (
            <AddToCartButton handleAddToCart={() => handleCart(id)} />
          )}
        </picture>
      </div>

      <div className="my-5 space-y-1">
        <h2 className="text-black">{type}</h2>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-price font-semibold" aria-label="price">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
