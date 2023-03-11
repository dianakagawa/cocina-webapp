import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Navbar} from "flowbite-react";
import icon from "../assets/icon.png";

export const Navibar = () => {
  const [isLogged, setIsLogged] = useState(true);
  const navigate = useNavigate();

  function handleClick() {
    setIsLogged(false);
    navigate("/");
  }

  if (isLogged) {
    return (
      <>
        {/* Logueado */}
        <Navbar fluid={true} rounded={false} className="my-navbar">
          <Navbar.Brand href="/">
            <img src={icon} className="mr-3 icon" alt="CC icon" />
            <span className="self-center whitespace-nowrap font-bold dark:text-white">
              Cauldron Cuisine
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link className="nav-text" href="/my-recipes/new">
              My Recipes
            </Navbar.Link>
            <Navbar.Link className="nav-text" href="/my-recipes/new">
              New Recipe
            </Navbar.Link>
            <Navbar.Link className="nav-text" href="/saved-recipes">
              Saved Recipes
            </Navbar.Link>
            <Navbar.Link className="nav-text" onClick={handleClick}>
              Log Out
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        {/* No Logueado */}
        <Navbar fluid={true} rounded={false} className="my-navbar">
          <Navbar.Brand href="/">
            <img src={icon} className="mr-3 icon" alt="CC icon" />
            <span className="self-center whitespace-nowrap font-bold dark:text-white">
              Cauldron Cuisine
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link className="nav-text" href="/register">
              Register
            </Navbar.Link>
            <Navbar.Link className="nav-text" href="/login">
              Log In
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
};

export default Navibar;

// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import {Link} from "react-router-dom";

// function Navbar() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   console.log("loggedIn: ", loggedIn);

//   useEffect(() => {
//     const isUserLoggedIn = async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/api/isLoggedIn", {
//           withCredentials: true,
//         });
//         console.log(res.data);
//         setLoggedIn(res.data.loggedIn);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     isUserLoggedIn(); // call the function to check if the user is logged in or not when the page loads
//     console.log("loggedIn: ", loggedIn);
//   }, []);

//   return (
//     <nav className="navbar" role="navigation">
//       <Link to="/" className="navbar__logo" aria-label="Go to homepage">
//         <img src="#" alt="logo" />
//       </Link>
//       <ul className="navbar__links">
//         {loggedIn ? (
//           <>
//             <li>
//               <Link to="/new-recipe" className="navbar__link">
//                 New Recipe
//               </Link>
//             </li>
//             <li>
//               <Link to="/saved-recipes" className="navbar__link">
//                 Saved Recipes
//               </Link>
//             </li>
//             <li>
//               <Link to="/my-recipes" className="navbar__link">
//                 My Recipes
//               </Link>
//             </li>
//             <li>
//               <Link to="/logout" className="navbar__link">
//                 Logout
//               </Link>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/login" className="navbar__link">
//                 Login
//               </Link>
//             </li>
//             <li>
//               <Link to="/register" className="navbar__link">
//                 Register
//               </Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
