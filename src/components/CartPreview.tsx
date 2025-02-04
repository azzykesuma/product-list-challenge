import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle
} from "@/components/ui/dialog";
import useCartContext from '@/hooks/useCartContext';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { CircleCheck, TreeDeciduous } from 'lucide-react';
import { useState } from 'react';
import CartDrawer from "./CartDrawer";
import CartPreviewItems from './CartPreviewItems';
import { Button } from './ui/button';
import { ScrollArea } from "./ui/scroll-area";

const   CartPreview = () => {
  const { cart, setCart } = useCartContext();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const isMobile = window.innerWidth < 768;
  const totalCartPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const handleClearCart = () => {
    setCart([]);
    setOpenDrawer(false);
  }
  const handleOpenConfirmation = () => {
    if(isMobile) {
      setOpenDrawer(true);
    } else {
      setOpenModal(true);
    }
  }
  return (
    <>
      <div className="mt-4 space-y-4 flex flex-col justify-center h-full">
        {cart.map((item) => (
          <CartPreviewItems key={item.id} {...item} />
        ))}
        <div className="mt-4 flex justify-between items-center">
          <h3>Order Total</h3>
          <p className="text-3xl font-bold">${totalCartPrice.toFixed(2)}</p>
        </div>
        <div className="flex gap-2 items-center text-sm bg-rose-100 p-3 rounded">
          <TreeDeciduous className="text-rose-500" />
          <p>
            This is a <strong>carbon-neutral</strong> delivery
          </p>
        </div>
        <div className="absolute md:static bottom-0 w-full mx-auto mt-auto">
          <Button
            onClick={handleOpenConfirmation}
            className=" w-full rounded-full py-6 bg-red"
          >
            Confirm Order
          </Button>
        </div>
      </div>
      <div className="block md:hidden">
        <CartDrawer
          cart={cart}
          handleClearCart={handleClearCart}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          totalCartPrice={totalCartPrice}
        />
      </div>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-[425px]">
          <ScrollArea className="h-[400px]">
            <VisuallyHidden>
              <DialogTitle></DialogTitle>
              <DialogDescription> </DialogDescription>
            </VisuallyHidden>
            <CircleCheck size={40} className="text-rose-400 mb-4" />
            <h2 className="text-left text-2xl font-bold text-black">
              Order Confirmed
            </h2>
            <p className="text-left text-rose-500">
              We hope you enjoy your food!
            </p>
            <div className="p-4 bg-rose-100 rounded-lg space-y-4 my-4">
              {cart.map((item) => (
                <CartPreviewItems key={item.id} {...item} confirmOrder />
              ))}
              <div className="flex justify-between items-center">
                <h3>Order Total</h3>
                <p className="text-2xl font-bold">
                  ${totalCartPrice.toFixed(2)}
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleClearCart}
                className="w-full rounded-full mt-4 bg-red"
              >
                Start New Order
              </Button>
            </DialogFooter>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CartPreview
