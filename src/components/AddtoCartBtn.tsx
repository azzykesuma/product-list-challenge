import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  handleAddToCart: () => void;
}

const AddToCartButton = ({ handleAddToCart }: AddToCartButtonProps) => {
  return (
    <Button
      variant="outline"
      className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] text-sm font-semibold px-4 py-2 rounded-full bg-white text-black border-[1px] border-rose-500 w-[150px]"
      onClick={handleAddToCart}
    >
      <ShoppingCart color="hsl(12, 20%, 44%)" />
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
