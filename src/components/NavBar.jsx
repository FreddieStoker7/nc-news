import { Link } from "react-router-dom";

export default function NavBar({allUsers, setSingleUser}) {

    const toggleUser = (user) => {
        setSingleUser(user.username)
      } 

      function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }


  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" className="active">
        Home
      </Link>
      <div className="dropdown">
        <button className="dropbtn">
         Topics
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/topics/football">Football</Link>
          <Link to="/topics/coding">Coding</Link>
          <Link to="/topics/cooking">Cooking</Link> 
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
         Users
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
        { allUsers.map((user) => {
              return (
                <Link to="#" key={user.username} value={user.username} onClick={() => toggleUser(user)}>{user.username}</Link>
              )
            })
          }
        </div>
      </div>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        &#9776;
      </a>
    </div>
  );
}
