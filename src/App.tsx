import { useState } from 'react';
import './App.css';
import StarRating from './components/StarRating';

const ratings = [10, 5, 3];

function App() {
  const [filled, setFilled] = useState([0, 0, 0]);
  const [hover, setHover] = useState([0, 0, 0]);

  return (
    <main>
      <h1>Star Rating</h1>

      {ratings.map((rating, index) => (
        <div key={rating}>
          <h3>Rating with {rating} stars</h3>
          <StarRating
            total={rating}
            filled={hover[index] > 0 ? hover[index] : filled[index]}
            onStarClick={(starIndex) => {
              setFilled(prevFilled => [
                ...prevFilled.slice(0, index),
                starIndex + 1,
                ...prevFilled.slice(index + 1),
              ]);
            }}
            onMouseEnter={(starIndex) => {
              setHover(prevHover => [
                ...prevHover.slice(0, index),
                starIndex + 1,
                ...prevHover.slice(index + 1),
              ]);
            }}
            onMouseLeave={() => {
              setHover([0, 0, 0]);
            }}
          />
        </div>
      ))}

      <button onClick={() => setFilled([0, 0, 0])}>
        Reset
      </button>
    </main>
  )
}

export default App;
