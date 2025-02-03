import emptyIllustration from '@/assets/images/illustration-empty-cart.svg';
import useCartContext from '@/hooks/useCartContext';
import CartPreview from './CartPreview';
import { ScrollArea } from './ui/scroll-area';

const Cart = () => {
    const {cart} = useCartContext();
    const totalCartItems = cart.reduce((acc, item) => acc + item.qty, 0);
  return (
    <div className='bg-white p-4 rounded-lg'>
      <h1 className='text-red font-bold text-lg'>Your Cart ({totalCartItems})</h1>
      {!cart.length ? (
        <div className='flex flex-col gap-4 items-center'>
            <img src={emptyIllustration} alt='empty-cart-illustration' />
            <p className='font-semibold text-rose-500'>Your added item will appear here</p>
        </div>
      ) : (
        <ScrollArea className='h-[300px]'>
          <CartPreview />
        </ScrollArea>
      )}
    </div>
  )
}

export default Cart
