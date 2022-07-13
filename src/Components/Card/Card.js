import { Component } from "react";

import "./Card.css";

const Card = ({ index, name, email }) => {
  return (
    <div key={index} className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${index}?set=set2&size=180x180`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//     render() {
//       const { index, name, email } = this.props;
//       return (
//         <div key={index} className="card-container">
//           <img
//             alt={`monster ${name}`}
//             src={`https://robohash.org/${index}?set=set2&size=180x180`}
//           ></img>
//           <h2>{name}</h2>
//           <p>{email}</p>
//         </div>
//       );
//     }
//   }

export default Card;
