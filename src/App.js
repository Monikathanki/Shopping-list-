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
      name:  event.target.item.value
    }
    let currentItems = this.state.items;
    currentItems.push(newItem);
    this.setState({
      items: currentItems
    })
    
    
  }
  deleteItem = (event) => {
    let itemToRemove = event.target.value;
    let currentItems = this.state.items;
    let indexToRemove = currentItems.findIndex((item) => {
      if (item === itemToRemove) {
        return item;
      }

    })
    console.log(indexToRemove);
    currentItems.splice(indexToRemove, 1);
    console.log(currentItems)
    this.setState({
      items: currentItems
    });
    

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
                <button
                  onClick={this.deleteItem} value={item}>
                  Delete</button>

              </h2>
            );
          })
        }
      </div>
    );
  }
}

export default App;