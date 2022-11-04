import { Component } from 'react';

class SearchBox extends Component{

    render(){
        return (
          <input
            className={`search-box ${this.props.className}`}
            type="search"
            placeholder={this.props.placeHolder}
            onChange={this.props.handleSearchChange}
          />
        );
    }
}

export default SearchBox;