import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeCard from './CoffeCard';
import { useState } from 'react';

function App() {

  const coffees = useLoaderData();
  const [alCoffees,setAllCoffees] = useState(coffees)
  

  return (
    <div className='m-20'>

      <h1 className='lg:text-5xl text-xl text-purple-500 text-center my-12'>Hot Hot Cold Coffee {alCoffees.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-7 gap-y-4  '>
        {
          alCoffees.map(coffee => <CoffeCard
            key={coffee._id}
            coffee={coffee} alCoffees={alCoffees}
            setAllCoffees={setAllCoffees}
          ></CoffeCard>)
        }
      </div>

    </div>
  )
}

export default App
