import { FaStar } from "react-icons/fa";

const StarRating = (props) => {
  const starSet = [];
  // const [rating, setRating] = useState(0);

  function Star({ filled }) {
    return (
      <FaStar 
       color={filled ? "orange" : "lightgray"} 
       />
    );
  }

  for (let n = 1; n <= 10; n++) {
    let filled;
    starSet.push(
      <Star 
        filled={props.score>=n? true:false}
          key={n}         
        />
    )
  }

  return (
    <span>
      {starSet}
      <>  </>
      {props.score}
    </span>
  )
}

export default StarRating;