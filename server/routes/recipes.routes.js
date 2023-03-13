const recipeController = require("../controllers/recipes.controllers");
const upload = require("../config/multer.config");

module.exports = (app) => {
  app.get("/api/recipes", recipeController.getAllRecipes);
  app.get("/api/recipes/:id", recipeController.getOneRecipe);
  app.get("/api/recipes/search/:searchTerm", recipeController.searchRecipes);
  app.post("/api/recipes/create", recipeController.createRecipe);
  app.put("/api/recipes/:recipeId", recipeController.updateRecipe);
  app.delete("/api/recipes/:recipeId", recipeController.deleteRecipe);
};
