import { Component, useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import CardList from "./Components/Card-List/CardList";
import SearchBox from "./Components/Search-box/SearchBox";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");

  const fetchData = useCallback(() => {
    console.log("sou chamado callback");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((robots) => {
        return setMonsters(robots);
      });
  }, []);

  useEffect(() => {
    // console.log("aqui");
    console.log("sou chamado effect");

    fetchData();
  }, [fetchData]);

  const handleSearchChange = (event) => {
    const searchStringReceived = event.target.value.toLowerCase();
    setSearchString(searchStringReceived);
  };

  return (
    <>
      <div className="App">
        <h1 className="app-title"> Monsters Rolodex </h1>
        {monsters && monsters.length > 0 && (
          <>
            <SearchBox
              className="monsters-search-box"
              placeHolder="Search monsters..."
              handleSearchChange={handleSearchChange}
            />

            <CardList monsters={monsters} searchString={searchString} />
          </>
        )}
      </div>
    </>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         return this.setState({ monsters: users }, () => {});
//       });
//   }

//   handleSearchChange = (event) => {
//     const searchStringReceived = event.target.value.toLowerCase();
//     this.setState({ searchString: searchStringReceived });
//     // My solution.
//     // this.setState({
//     //   filteredMonsters: monsters.filter(
//     //     ({ name }) => name.toLowerCase().includes(searchStringReceived) //name === event.target.value
//     //   ),
//     // });
//   };
//   render() {
//     const { monsters, searchString } = this.state;
//     const { handleSearchChange } = this;

//     return (
//       <>
//         <div className="App">
//           <h1 className="app-title"> Monsters Rolodex </h1>
//           <SearchBox
//             className="monsters-search-box"
//             placeHolder="Search monsters..."
//             handleSearchChange={handleSearchChange}
//           />
//           <CardList monsters={monsters} searchString={searchString} />
//         </div>
//       </>
//     );
//   }
// }

export default App;
