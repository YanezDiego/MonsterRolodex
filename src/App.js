import {Component} from 'react';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      monsters:[]
    };
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }, () => console.log(this.state) //loggin to make sure state has been updated on a real application we would not do this
    ));
  };

  render(){
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return(
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
          })
        }
      </div>
    );
  };
}

export default App;
