import React from 'react';

import Star from '../assets/star-rating-white.svg';
import Filled from '../assets/star-rating-filled.svg';

interface StarRatingProps {
  total: number;
  filled: number;
  onStarClick: (index: number) => void;
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
}) => {
  const stars = getStarsArray(total, filled);

  const handleStarClick = (index: number) => {
    onStarClick(index);
  };

  return (
    <div>
      {stars.map((star) => (
        <span key={star.index} onClick={() => handleStarClick(star.index)}>
          {star.filled ? (
            <img src={Filled} className="star-icon" alt="Filled star" />
          ) : (
            <img src={Star} className="star-icon star-icon-filled" alt="Empty star" />
          )}
        </span>
      ))}
    </div>
  )
}

export default StarRating;
