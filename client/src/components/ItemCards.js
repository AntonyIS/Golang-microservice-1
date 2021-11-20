
import React, {useState, useEffect} from "react";
import ItemCard from "./ItemCard";
function ItemCards (){

    const [items, setItems] = useState([])

    const apiRequest = () => {
         // Simple GET request using fetch API
        fetch('http://localhost:8080/items')
        .then(response => response.json())
            .then(data => 
                setItems(data)
        );
    }
   

    useEffect(() =>{
        apiRequest()
    }, [])

    return (
        <div className="container mt-3 mb-1 p-3">
            <div className="row mb-0">
                {
                    items.map((item, index) => (
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <ItemCard data={item} key={index} />
                        </div>
                        )
                    )
                }
             </div>
           
        </div>
    )
}

export default ItemCards