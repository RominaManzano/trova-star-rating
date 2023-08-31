import { useState } from 'react'
import './App.css'
import StarRating from './components/StarRating'

function App() {
  const [filled, setFilled] = useState(0);

  return (
    <main>
      <h1>Star Rating</h1>

      <StarRating
        total={5}
        filled={filled}
        onStarClick={(index) => {
          setFilled(index + 1);
        }}
      />

      <button onClick={() => setFilled(0)}>
        Reset
      </button>
    </main>
  )
}

export default App
