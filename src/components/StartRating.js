import React from 'react'
import StarIcon from '@material-ui/icons/Star';

const StartRating = ({rating}) => {
  const starStyle = {
    color: 'gold', 
  };

  const renderStars = () => {
    const stars = [];
    const maxStars = 5; // 총 별 개수
  
    // 숫자에 따라서 별 아이콘을 생성
    for (let i = 0; i < maxStars; i++) {
      const lowerBound = i * 2.5;
  
      // 현재 별의 인덱스가 해당 범위 내에 있거나 그 이전에 있으면 채워진 별을 추가
      if (Math.floor(rating) > lowerBound) {
        stars.push(<StarIcon key={i} style={starStyle} />);
      } else {
        // 범위에 속하지 않으면 빈 별을 추가
        stars.push(<StarIcon key={i} style={{ color: 'lightgray' }} />);
      }
    }
    return stars;
  }
  return (
    <div>
      {renderStars()}
      <span>{rating.toFixed(1)}</span>
    </div>
  );
};

export default StartRating;