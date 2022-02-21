import React from 'react';
import List1 from './list1';

class Items extends React.Component{

    constructor(){
        super();
        this.state = {
            item: [
                {
                    id: 101,
                    Name: "mobile",
                    Brand: "OnePlus",
                    price: 5000
                },
                {
                    id: 102,
                    Name: "book",
                    Brand: "NCERT",
                    price: 3000
                },
                {
                    id: 103,
                    Name: "Lappy",
                    Brand: "Mac",
                    price: 10000000
                },
                {
                    id: 104,
                    Name: "clock",
                    Brand: "titan",
                    price: 5000
                },
                {
                    id: 105,
                    Name: "headPhones",
                    Brand: "OnePlus",
                    price: 5000
                }
            ]
        }
    }

    renderList = () =>{
        var listItems = this.state.item.map((items) => {

            return(
                <li key={items.id}> {items.id} {items.Name} {items.Brand} {items.price} </li>
            )
        })
        return listItems;
    }

    render(){
        return(
            <div>
                <h1>
                    "MAP()" function used to add elements in form of list
                </h1>
                
                <ul>
                    {this.renderList()}
                </ul>

                <List1></List1>
            </div>
        )
    }
}
export default Items;