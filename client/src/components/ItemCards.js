
import React, {useState, useEffect} from "react";
import ItemCard from "./ItemCard";
function ItemCards (){

    const [items, setItems] = useState([])

    const apiRequest = () => {
         // Simple GET request using fetch
        fetch('http://localhost:80/items')
        .then(response => response.json())
            .then(data => 
                setItems(data)
        );
    }
   

    useEffect(() =>{
        apiRequest()
    }, [])

    console.log(items)
    return (
        <div className="container mt-3 mb-1 p-3">
            <div className="row mb-0">
                {
                    items.map((item) => (
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <ItemCard data={item}/>
                        </div>
                        )
                    )
                }
             </div>
           
        </div>
    )
}

export default ItemCards