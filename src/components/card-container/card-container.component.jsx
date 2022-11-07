import { Component } from "react";

class CardContainer extends Component {

    render(){
        const { name, id, email } = this.props.monsterInfo; 
        return (
          <div key={this.props.monsterInfo.id}  className='card-container'>
            <img
              alt={`monster-${name}`}
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
    }

};

export default CardContainer;