import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DisplayCard from '../displayCard/DisplayCard'
//import News from '../News/news';
import CardDesk from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';


class NewsCard extends React.Component{
    constructor(props) {
        super(props)
    }

    
    render(){        
      console.log(this.props.list)
      
      const data = this.props.items.map((item, index) => (
        <DisplayCard key={index} info = {item}></DisplayCard>
      ))
        return (
         
          <CardDesk style={{width:'18rem', height:'18rem'}} content="width=device-width, initial-scale=1, shrink-to-fit=no">{data}</CardDesk>  
          
          
        ) 
    }
}

export default NewsCard