import {Component} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchedText: ''
    };
  }

  componentDidMount() {
    this.fetchMonsters();
  }

  fetchMonsters() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  OnSearchChange = (event) => {
    this.setState( () => { return {searchedText: event.target.value.toLowerCase()}});

  };

  render() {

    const {monsters, searchedText} = this.state;
    const { OnSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchedText);
    });

    return (
      <div className="App">
        <SearchBox className='search-box'
        OnSearchChange={ OnSearchChange } 
        placeHolder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
