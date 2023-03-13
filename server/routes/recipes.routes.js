const recipeController = require("../controllers/recipes.controllers");

module.exports = (app) => {
  app.get("/api/recipes", recipeController.getAllRecipes);
  app.get("/api/recipes/:recipeId", recipeController.getOneRecipe);
  app.get("/api/recipes/search/:searchTerm", recipeController.searchRecipes);
  app.post("/api/recipes/create", recipeController.createRecipe);
  app.put("/api/recipes/edit/:recipeId", recipeController.updateRecipe);
  app.delete("/api/recipes/delete/:recipeId", recipeController.deleteRecipe);
};
