import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom"


function ItemDetails ({match}) {
    const itemID = match.params.id
    let history = useHistory();
    useEffect(() =>{
        apiRequest()
    }, [])

    const [item, setItem] = useState([])

    const apiRequest = () => {
         // Simple GET request using fetch API
        fetch(`http://localhost:8080/items/${itemID}`)
        .then(response => response.json())
            .then(data => 
                setItem(data)
        );
    }

    const deleteHandle = () => {
        fetch(`http://localhost:8080/items/delete/${itemID}`, { method: 'DELETE' })
        .then(() => {
            history.push('/');
        });
        
    }

    const handleUpdate = () =>{

    }

    const handleChange = () =>{

    }

    const handleSubmit = () =>{

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
                       <div>
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
                                <button onClick={handleUpdate} className="btn btn-success btn-md m-1">Update </button>
                                <button onClick={deleteHandle} className="btn btn-danger btn-md m-1">Delete </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} style={{display : "none"}}>
                            <div className="form-group">
                                <label for="exampleInputName">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={item.name}
                                    onChange={handleChange || ""}
                                    className="form-control" 
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputName">Image URL</label>
                                <input 
                                    type="url" 
                                    name="imgURL" 
                                    value={item.imgURL}
                                    onChange={handleChange || ""}
                                    className="form-control" 
                                    placeholder="Enter image URL"
                                /> 
                            </div>
                            <div className="form-group">
                                <label for="exampleInputName">Price</label>
                                <input 
                                    type="text" 
                                    name="price" 
                                    value={item.price}
                                    onChange={handleChange || 0}
                                    className="form-control" 
                                    placeholder="Enter Price"
                                /> 
                            </div>

                            <div className="form-group">
                                <label for="exampleInputDescription">Descriptiion</label>
                                <textarea 
                                    className="form-control"
                                    rows="3"
                                    name="description"
                                    value = {item.description}
                                    onChange={handleChange || ""} 
                                    />
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetails