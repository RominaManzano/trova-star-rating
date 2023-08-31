import React from 'react';

import Star from '../assets/star-rating-white.svg';
import Filled from '../assets/star-rating-filled.svg';

// NOTE: needed to add more props, cause the state is maintened in the parent per requirements
interface StarRatingProps {
  total: number;
  filled: number;
  onStarClick: (index: number) => void;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}

interface StarItem {
  index: number;
  filled: boolean;
}

const getStarsArray = (total: number, filled: number): StarItem[] => {
  const stars: StarItem[] =[];
  
  for (let i = 0; i < total; i++) {
    stars.push({
      filled: i < filled,
      index: i,
    });
  }

  return stars;
}

const StarRating: React.FC<StarRatingProps> = ({
  total = 5,
  filled = 0,
  onStarClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const stars = getStarsArray(total, filled);

  const handleStarClick = (index: number) => {
    onStarClick(index);
  };

  const handleStarMouseEnter = (index: number) => {
    onMouseEnter(index);
  };

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star.index}
          onClick={() => handleStarClick(star.index)}
          onMouseEnter={() => handleStarMouseEnter(star.index)}
          onMouseLeave={onMouseLeave}
        >
          <img
            src={star.filled ? Filled : Star}
            className={`star-icon ${star.filled ? 'star-icon-filled' : ''}`}
            alt="Star"
          />
        </span>
      ))}
    </div>
  )
}

export default StarRating;
