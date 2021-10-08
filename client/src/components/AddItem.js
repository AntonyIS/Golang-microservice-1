// import {Link} from "react-router-dom"

function  AddItem () {
    return (
       <>
         <div className="container">
            <div className="card shadow mt-3 p-5 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col-6">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputName">Name</label>
                                <input type="email" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name" />
                                <small id="nameHelp" class="form-text text-muted">Item Name.</small>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputDescription">Descriptiion</label>
                                <input type="email" class="form-control" id="exampleInputDescription" aria-describedby="nameHelp" placeholder="Enter description" />
                                <small id="nameHelp" class="form-text text-muted">Item Descriptiion.</small>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPrice">Price</label>
                                <input type="email" class="form-control" id="exampleInputPrice" aria-describedby="nameHelp" placeholder="Enter price" />
                                <small id="nameHelp" class="form-text text-muted">Item Price.</small>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
               
            </div>
        </div>
       </>
    )
}

export default AddItem