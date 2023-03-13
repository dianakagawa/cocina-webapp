import Navibar from "../components/Navbar";
// import SweetWhimsicalColors from "../components/Colors";
import SearchBar from "../components/SearchBar";
import ListRecipes from "../components/ListRecipes";
// import UserRecipes from "../components/UserRecipes";
import {useState} from "react";

function Main() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    setSearchResults(term);
  };
  return (
    <div>
      <Navibar />
      {/* <SweetWhimsicalColors /> */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center py-4 my-4">
        {" "}
        Welcome, Diana!{" "}
      </h1>
      <h5 className="text-lg font-bold text-gray-900 dark:text-white text-center pt-4 mt-4">
        {" "}
        What would you like to cook today?{" "}
      </h5>
      <SearchBar onSearch={handleSearch} />
      <ListRecipes searchResults={searchResults} />
      <br />
      <br />
      {/* <UserRecipes /> */}
    </div>
  );
}

export default Main;
