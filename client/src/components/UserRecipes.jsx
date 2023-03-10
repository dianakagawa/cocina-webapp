import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {Card, Button, Rating} from "flowbite-react";

const UserRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  // const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:7900/api/recipes")
      .then((response) => {
        // if (response.data.deleteStatus !== true) {
        setRecipes(response.data);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (id) => {
    let confirm = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (confirm) {
      try {
        const response = await axios.delete(
          "http://localhost:7900/api/recipes/delete/" + id
        );
        setRecipes(recipes.filter((recipe) => recipe._id !== id));
        // response.data.deleteStatus = true;
        alert("Recipe deleted");
      } catch (error) {
        error.response && alert(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="max-w-lg items-center mx-auto">
        {recipes.map((recipe) => (
          <div key={recipe._id}>
            <Card
              horizontal={true}
              imgSrc={recipe.image}
              alt={recipe.title}
              className="my-4"
            >
              <Link to={`/recipes/${recipe._id}`}>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {recipe.title}
                </h2>
              </Link>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Principal Ingredients:{" "}
                <span classname="font-bold">
                  {" "}
                  {recipe.importantIngredients.join(", ")}
                </span>
              </p>
              <Rating>
                <Rating.Star />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  4.7
                </p>
                <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  12 reviews
                </a>
              </Rating>
              <Button color="failure" onClick={() => handleDelete(recipe._id)}>
                Delete
              </Button>
              <Link to={`/recipes/${recipe._id}/edit`}>
                <Button color="success" className="w-full">
                  Edit
                </Button>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserRecipes;
