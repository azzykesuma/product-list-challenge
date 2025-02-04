import Cart from './components/Cart'
import Layout from './components/Layout'
import Menu from './components/Menu'
import { ScrollArea } from './components/ui/scroll-area'

function App() {
  return (
    <Layout>
      <div className="flex flex-col lg:grid lg:grid-cols-[70%_30%] lg:gap-6">
        <ScrollArea className="h-screen md:h-[80vh] pb-10" scrollHideDelay={0}>
          <Menu />
          <div className="mt-4 w-full lg:mt-0 lg:hidden">
            <Cart />
          </div>
        </ScrollArea>
        <div className="hidden lg:block mt-4 w-full lg:mt-0">
          <Cart />
        </div>
      </div>
    </Layout>
  );
}

export default App
