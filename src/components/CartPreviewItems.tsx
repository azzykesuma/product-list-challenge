import { ICartObject } from '@/context/CartContext';
import { CircleX } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import useCartContext from '@/hooks/useCartContext';
import { motion as m, AnimatePresence } from 'framer-motion';
import { menuData } from '@/lib/data';

const CartPreviewItems = ({ id, price, qty, title, confirmOrder }: ICartObject & {confirmOrder? : boolean}) => {
  const totalPrice = price * qty;
  const { cart, setCart } = useCartContext();
  const imgThumbnail = menuData.find((item) => item.id === id)?.images.thumbnail;

  const removeItem = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }
  };

  let content; 
  if(confirmOrder) {
    content = (
      <div className="grid grid-cols-[10%_80%_10%] justify-center items-center pb-3 rounded">
        <img src={imgThumbnail} alt={title} className='w-14 rounded' />
        <div className='place-self-start ml-4'>
          <h2 className="font-semibold text-sm">{title}</h2>
          <p className="text-sm text-rose-500">
            <span className="text-red font-semibold mr-5">{qty}x</span> @${" "}
            {price.toFixed(2)}{" "}
          </p>
        </div>
        <h2 className="font-semibold text-rose-500 place-self-end">
          ${totalPrice.toFixed(2)}
        </h2>
      </div>
    );
  } else {
    content = (
      <div className="flex items-center justify-between pb-3">
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm text-rose-500">
          <span className="text-red font-semibold mr-5">{qty}x</span> @$ {price}{' '}
          <span className="font-semibold text-rose-500">${totalPrice}</span>
        </p>
      </div>
      <Button variant={'ghost'} onClick={() => removeItem(id)}>
        <CircleX className="text-rose-500" />
      </Button>
    </div>
    )
  }

  return (
    <AnimatePresence>
      <m.div
        key={id}
        layout
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 100,
          mass: 0.5,
          duration: 0.5,
        }}
        className="cart-item"
      >
        {content}
        <Separator />
      </m.div>
    </AnimatePresence>
  );
};

export default CartPreviewItems;

