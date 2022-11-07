import { Component } from "react";

import CardContainer from "../card-container/card-container.component";
class CardList extends Component {


    render(){
        const { monsters } = this.props;
        
        return (
            monsters.map((monster) => {
               return (
                 <div className='card-list'>
                  <CardContainer monster={monster}/>
                 </div>
               );
            })
        );   
    }
}

export default CardList;