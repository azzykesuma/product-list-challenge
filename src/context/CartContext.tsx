/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useState, useMemo } from "react";
export interface ICartObject {
    title : string;
    price : number;
    qty : number;
    id: number
}

export type CartContextType = {
    cart: ICartObject[];
    setCart: React.Dispatch<React.SetStateAction<ICartObject[]>>;
};

export const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
    const [cart , setCart] = useState<ICartObject[]>([])
    const value = useMemo(() => ({ cart, setCart }), [cart, setCart]);
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
