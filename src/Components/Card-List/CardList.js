import { Component } from "react";
import "./CardList.css";

import Card from "../Card/Card";

const CardList = ({ monsters, searchString }) => {
  // const { monsters, searchString } = this.props;
  const filteredMonsters = monsters.filter(({ name }) =>
    name.toLowerCase().includes(searchString)
  );
  return (
    <div className="card-list">
      {filteredMonsters.map(({ name, email }, index) => (
        <Card key={index} name={name} email={email} index={index} />
      ))}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters, searchString } = this.props;
//     const filteredMonsters = monsters.filter(({ name }) =>
//       name.toLowerCase().includes(searchString)
//     );
//     return (
//       <div className="card-list">
//         {filteredMonsters.map(({ name, email }, index) => (
//           <Card key={index} name={name} email={email} index={index} />
//         ))}
//       </div>
//     );
//   }
// }

export default CardList;
