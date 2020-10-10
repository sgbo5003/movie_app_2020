import React from "react";
import PropTypes from 'prop-types';
import img01 from "./images/1.jpg";
import img02 from "./images/2.jpg";
import img03 from "./images/3.jpg";
import img04 from "./images/4.jpg";
import img05 from "./images/5.jpg";

function Food({ name, picture, message, rating}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={message} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "치킨",
    image: img01,
    message: "치킨 사진",
    rating: 5,
  },
  {
    id: 2,
    name: "닭발",
    image: img02,
    message: "닭발 사진",
    rating: 5,
  },
  {
    id: 3,
    name: "만두",
    image: img03,
    message: "만두 사진",
    rating: 5,
  },
  {
    id: 4,
    name: "피자",
    image: img04,
    message: "피자 사진",
    rating: 5,
  },
  {
    id: 5,
    name: "떡볶이",
    image: img05,
    message: "떡볶이 사진",
    rating: 5,
  },
];

function App() {
  //return <div className="App" />;
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          message={dish.message}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired, 
  picture: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  rating: PropTypes.number
}
export default App;
