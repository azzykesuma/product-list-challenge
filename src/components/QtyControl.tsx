import { CircleMinus, CirclePlus } from "lucide-react";
import { motion as m } from "motion/react";

interface QuantityControlProps {
  qty: number;
  handleAddQty: () => void;
  handleReduceQty: () => void;
}

const QuantityControl = ({ qty, handleAddQty, handleReduceQty }: QuantityControlProps) => {
  return (
      <m.div
        className="mx-auto bg-red absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex gap-2 justify-between items-center w-[150px] rounded-full"
      >
        <m.button
          className="text-sm font-semibold px-4 py-2 rounded-full text-black"
          onClick={handleReduceQty}
          whileTap={{scale: 0.9}}
        >
          <CircleMinus color="white" size={20} />
        </m.button>

        <div className="flex items-center justify-center text-lg font-semibold text-white">
          {qty}
        </div>

        <m.button
          whileTap={{scale: 0.9}}
          className="text-sm font-semibold px-4 py-2 rounded-full text-black"
          onClick={handleAddQty}
        >
          <CirclePlus color="white"  size={20} />
        </m.button>
      </m.div>
  );
};

export default QuantityControl;
