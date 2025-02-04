import { menuData } from '@/lib/data';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
      <section className="w-full">
        <h1 className="font-bold text-black text-2xl mb-4">Desserts</h1>
        <div className='flex flex-col space-y-6 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-3 lg:justify-end'>
        {menuData.map((item, index) => (
          <MenuItem key={item.id} index={index} {...item} />
        ))}
        </div>
      </section>
  );
}

export default Menu
