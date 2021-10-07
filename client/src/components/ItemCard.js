function  ItemCard (props) {
    return (
       <>
           <div className="card shadow p-3 mb-5 bg-white rounded">
               <img src={props.data.imgURL} className="card-img-top img-fluid" alt="..." style={{
                   height : "200", width:"100"
               }} />
               <div className="card-body">
                   <h5 className="card-title">{props.data.name}</h5>
                   <p className="card-text" >
                       {props.data.description}
                       <br />
                       Ksh. <span className="text text-danger">{props.data.price}</span>
                   </p>
                   
                   <a href="/" className="btn btn-primary">View</a>
               </div>
           </div>
       </>
    )
}

export default ItemCard