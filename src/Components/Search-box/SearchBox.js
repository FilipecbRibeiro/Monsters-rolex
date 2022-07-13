import { Component } from "react";
import "./SearchBox.css";
class SearchBox extends Component {
  render() {
    const { handleSearchChange, className, placeHolder } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeHolder}
        onChange={handleSearchChange}
      />
    );
  }
}

export default SearchBox;
