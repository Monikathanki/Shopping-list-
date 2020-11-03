import React from 'react'

function ShoppingList(props) {
    
    return (
        <form onSubmit = {props.addItem}>
            <input
                type="text"
                placeholder="Banana"
                name = "item"
            />
            <button type= "submit">Add Item</button>
        </form>
    )
}





export default ShoppingList;