import {Link} from "react-router-dom"

function Navbar (){
    const linkStyle = {
        "textDecoration" : "none"
    }
    return (
       
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <Link to="/" style={linkStyle}>
                        <span className="navbar-brand mb-0 h1">Golang Microservice</span>
                    </Link>
                    <Link to="/items/add/new" style={linkStyle}>
                        <span className="btn btn-info ">Add Item</span>
                    </Link>
                    
                </div>
            </nav>
       
    )
}

export default Navbar