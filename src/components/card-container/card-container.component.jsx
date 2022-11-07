import { Component } from "react";

class CardContainer extends Component {

    render(){
        const { id, name, email} = this.props.monsterInfo; 
        return (
          <div key={id}  className='card-container'>
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