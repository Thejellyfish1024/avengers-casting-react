import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Cards from './components/Cards';
import Carts from './components/Carts';

function App() {
  const [cards, setCards] = useState([]);
  const [casting, setCasting] = useState([]);
  const [remaining, setRemaining] = useState(40000);
  const [castingCost, setCastingCost] = useState(0);

  useEffect(() => {
    fetch('avengers.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])
  const handleCast = card => {
    const isExist = casting.find(member => member.id === card.id);
    if (isExist) {
      return alert('This member is already in the casting ')
    }
    else {
      if ((remaining-card.salary) < 0) {
        return alert('You are out of budget')
      }
      else {
        const newCasting = [...casting, card]
        setCasting(newCasting);
        setRemaining(remaining - card.salary)
        setCastingCost(castingCost + card.salary)
      }
    }
  }

  return (
    <div className='flex max-w-7xl mx-auto'>
      <div className='w-2/3'>
        <Cards cards={cards}
          handleCast={handleCast}></Cards>
      </div>
      <div className='w-1/3'>
        <Carts casting={casting}
          remaining={remaining}
          castingCost={castingCost}></Carts>
      </div>
    </div>
  )
}

export default App
