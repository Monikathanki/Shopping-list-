import React from 'react'
import ShoppingList from './ShoppingList/ShoppingList'


class App extends React.Component {
  state = {
    items: [
     
      { name: 'apples'},
      { name: 'oranges'},
      { name: 'bread' },
    ]
    

  }
  addItem = (event) => {
    console.log({name: event })
    event.preventDefault();
    let newItem = {
      name:  event.target.value
    }
    let currentItems = this.state.items;
    currentItems.push(newItem);
    this.setState({
      items: currentItems
    })
    
    
  }
  deleteItem = (event) => {
    console.log(event.target.value)
    

  }
  

  
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        <ShoppingList addItem={this.addItem} /> 
        {
          this.state.items.map((item, i) => {
            return (
              <h2 key={i}>
                {item.name}
                <button onClick={this.deleteItem} value={item.name}>Delete</button>

              </h2>
            );
          })
        }
      </div>
    );
  }
}

export default App;