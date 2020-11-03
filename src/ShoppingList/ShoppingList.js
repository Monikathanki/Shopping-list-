import React from 'react'

function ShoppingList(props) {
    
    return (
        <form onSubmit = {props.addItem}>
            <input
                type="text"
                placeholder="Banana"
                name = "itemToAdd"
            />
            <button type= "button">Add Item</button>
        </form>
    )
}





export default ShoppingList;