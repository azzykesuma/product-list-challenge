import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
  } from "@/components/ui/drawer";
  import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CircleCheck } from 'lucide-react';
import CartPreviewItems from './CartPreviewItems';
import { Button } from './ui/button';
import { ICartObject } from '@/context/CartContext';

interface CartDrawerProps {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
    cart: ICartObject[];
    handleClearCart: () => void;
    totalCartPrice: number;
}

const CartDrawer = ({
    openDrawer,
    setOpenDrawer,
    cart,
    handleClearCart,
    totalCartPrice
} : CartDrawerProps) => {
  return (
    <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
      <DrawerContent className="p-3">
        <DrawerHeader>
          <VisuallyHidden>
            <DrawerTitle></DrawerTitle>
          </VisuallyHidden>
          <CircleCheck size={40} className="text-rose-400" />
          <h2 className="text-left text-3xl font-bold">
            Order <br /> Confirmed
          </h2>
          <p className="text-left text-rose-500">
            We hope you enjoy your food!
          </p>
        </DrawerHeader>
        <VisuallyHidden>
          <DrawerDescription></DrawerDescription>
        </VisuallyHidden>
        <div className="p-4 bg-rose-100 rounded-lg space-y-4">
          {cart.map((item) => (
            <CartPreviewItems key={item.id} {...item} confirmOrder />
          ))}
          <div className="flex justify-between items-center">
            <h3>Order Total</h3>
            <p className="text-3xl font-bold">${totalCartPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-auto">
          <Button
            onClick={handleClearCart}
            className="w-full rounded-full py-5 bg-red my-6"
          >
            Start New Order
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default CartDrawer
