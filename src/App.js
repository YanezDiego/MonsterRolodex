import {Component} from 'react';

//import logo from './logo.svg';
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

  filterOnChange = (event) => {
    this.setState( () => { return {searchedText: event.target.value.toLowerCase()}});

    // const filteredMonsters = this.state.monsters.filter((monster) => {
    //   return monster.name.toLowerCase().includes(this.state.searchedText);
    // });

    // if (searchedText !== "") {
    //   this.setState(() => {
    //     return { monsters: filteredMonsters };
    //   });
    // } else {
    //   this.fetchMonsters();
    // }
  };

  render() {

    const {monsters, searchedText} = this.state;
    const {filterOnChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchedText);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={filterOnChange}
        />

        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
