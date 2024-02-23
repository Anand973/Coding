import logo from './logo.svg';

import display1 from '.components/display1'

function App() {
    const obj =
        {
            price:999,
            name: "Nice",
            quantity:3
    
        }
        
    
  return (
   <>

   <display1 price={obj.price} name={obj.name} quantity={obj.quantity} />
   </>
  );
}

export default App;
