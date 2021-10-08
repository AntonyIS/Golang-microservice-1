import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"

function ItemDetails ({match}) {
    const itemID = match.params.id
    useEffect(() =>{
        apiRequest()
    }, [])

    const [item, setItem] = useState([])

    const apiRequest = () => {
         // Simple GET request using fetch API
        fetch(`http://localhost:80/items/${itemID}`)
        .then(response => response.json())
            .then(data => 
                setItem(data)
        );
    }
   
    const imgStyle = {
        height : "300px"
    }
    return (
        <div className="container">
            <div className="card shadow mt-3 p-1 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <img className="img-fluid" src={item.imgURL} style={imgStyle} />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div className="card-header m-1">
                            <p>{item.name}</p>
                        </div>
                        <div className="card-body">
                            <p>{item.description}
                            <br />
                            Ksh.<span className="text text-danger">{item.price}</span>
                            </p>
                        </div>
                        <div>
                            <Link to="/" className="btn btn-info btn-md m-1">Go back home </Link>
                            <Link to="/items/update" className="btn btn-success btn-md m-1">Update </Link>
                            <Link to="/items/delete" className="btn btn-danger btn-md m-1">Delete </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails