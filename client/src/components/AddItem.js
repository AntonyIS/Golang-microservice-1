// import {Link} from "react-router-dom"
import {useState, useEffect} from "react"

function  AddItem () {
    const [item, setItem] = useState({})
    const handleChange = (event) =>{
        
        var name = event.target.name;
        var value = event.target.value;
        if (name === "price") {
            value = parseFloat(value)
        }
        setItem (values => ({...values, [name]: value}))
        
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const requestOptions ={
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }
        
        
        
        fetch('http://localhost:8080/items/post', requestOptions)
        .then(response => response.json())
        .then(data => 
            console.log(data)
        );
    }
   

   
    return (
       <>
         <div className="container">
            <div className="card shadow mt-3 p-5 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col-6">
                        <form onSubmit={handleSubmit}>
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
       </>
    )
}

export default AddItem