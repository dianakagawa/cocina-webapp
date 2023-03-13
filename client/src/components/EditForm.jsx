import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {Label, TextInput, Button, Card, Textarea} from "flowbite-react";

const EditForm = () => {
  const {id} = useParams();
  const [recipe, setRecipe] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:7900/api/recipes/" + id)
      .then((response) => {
        console.log(response.data);
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const updatedRecipe = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:7900/api/recipes/edit/" + id, recipe)
      .then((res) => {
        console.log(res);
        console.log("Recipe updated successfully!");
        Navigate("/recipes/" + id);
      })
      .catch((err) => {
        console.log("Error updating recipe!");
        console.log(err);
      });
  };

  return (
    <div>
      <Card className="max-w-screen-md mx-auto">
        {recipe ? (
          <form onSubmit={updatedRecipe}>
            <div className="text-1xl pb-2">
              <div className="mb-1 block">
                <Label className="font-bold" htmlFor="title" value="Title" />
              </div>
              <TextInput
                id="title"
                type="text"
                value={recipe.title}
                onChange={(event) =>
                  setRecipe({...recipe, title: event.target.value})
                }
              />
            </div>
            <div className="text-1xl pb-2">
              <div className="mb-1 block">
                <Label className="font-bold" htmlFor="image" value="Image" />
              </div>
              <TextInput
                id="image"
                type="text"
                value={recipe.image}
                onChange={(event) =>
                  setRecipe({...recipe, image: event.target.value})
                }
              />
            </div>
            <div className="text-1xl pb-2">
              <div className="mb-1 block">
                <Label
                  className="font-bold"
                  htmlFor="servings"
                  value="Servings"
                />
              </div>
              <TextInput
                id="servings"
                type="number"
                value={recipe.servings}
                onChange={(event) =>
                  setRecipe({...recipe, servings: event.target.value})
                }
              />
            </div>
            <div className="text-1xl pb-2">
              <div className="mb-1 block">
                <Label
                  className="font-bold"
                  htmlFor="cookTime"
                  value="Cooking Time in minutes"
                />
              </div>
              <TextInput
                id="cookTime"
                type="number"
                value={recipe.cookTime}
                onChange={(event) =>
                  setRecipe({...recipe, cookTime: event.target.value})
                }
              />
            </div>
            <div className="text-1xl pb-2">
              <div className="mb-1 block">
                <Label
                  className="font-bold"
                  htmlFor="importantIngredients"
                  value="Core Ingredients"
                />
              </div>
              <TextInput
                id="importantIngredients"
                type="text"
                value={recipe.importantIngredients}
                onChange={(event) =>
                  setRecipe({
                    ...recipe,
                    importantIngredients: event.target.value,
                  })
                }
              />
            </div>
            <div className="text-1xl pb-2">
              <div className="mb-1 block">
                <Label
                  className="font-bold"
                  htmlFor="secondaryIngredients"
                  value="Other Ingredients"
                />
              </div>
              <TextInput
                id="secondaryIngredients"
                type="text"
                value={recipe.secondaryIngredients}
                onChange={(event) =>
                  setRecipe({
                    ...recipe,
                    secondaryIngredients: event.target.value,
                  })
                }
              />
            </div>
            <div className="text-1xl pb-2">
              <div className="mb-1 block">
                <Label
                  className="font-bold"
                  htmlFor="steps"
                  value="How to make it"
                />
              </div>
              <Textarea
                id="steps"
                type="text"
                value={recipe.steps}
                onChange={(event) =>
                  setRecipe({...recipe, steps: event.target.value})
                }
              />
            </div>
            <div className="text-1xl pb-2">
              <div className="mb-1 block">
                <Label className="font-bold" htmlFor="tags" value="Tags" />
              </div>
              <TextInput
                id="tags"
                type="text"
                value={recipe.tags}
                onChange={(event) =>
                  setRecipe({...recipe, tags: event.target.value})
                }
              />
            </div>
            <div className="flex gap-4 py-4">
              <Button
                color="success"
                className="lg:w-1/3 mx-auto"
                type="submit"
              >
                Edit the recipe
              </Button>
              <Button
                color="failure"
                className="lg:w-1/3 mx-auto"
                onClick={() => Navigate("/my-recipes/")}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div>Loading...</div>
        )}
      </Card>
    </div>
  );
};

export default EditForm;
