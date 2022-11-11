//import {Component} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';


const App = () => {
  //setting up state hook
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  handleOnChange = (event) => {
    this.setState( () => { 
      return {searchedText: event.target.value.toLowerCase()}
    }
    )};

  return (
          <div className="App">
            <h1 className='appTitle'>Monster Rolodex</h1>
            <SearchBox 
              className='monsters-search-box'
              handleSearchChange={onSearchChange}
              placeHolder='search monsters'
             />
         <CardList monsters={filteredMonsters} />
          </div>
        );

}

// commenting out this the class section and converted into a functional component
// this is to practice functional components and how they differ.
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       monsters: [],
//       searchedText: ''
//     };
//   }

//   componentDidMount() {
//     this.fetchMonsters();
//   }

//   fetchMonsters() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   handleOnChange = (event) => {
//     this.setState( () => { return {searchedText: event.target.value.toLowerCase()}});

//   };

//   render() {

//     const {monsters, searchedText} = this.state;
//     const { handleOnChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchedText);
//     });

//     return (
//       <div className="App">
//         <h1 className='appTitle'>Monster Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box'
//           handleSearchChange={handleOnChange}
//           placeHolder='search monsters'
//          />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
