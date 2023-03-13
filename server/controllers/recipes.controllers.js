const Recipe = require("../models/recipes.model");

module.exports = {
  // Create a new recipe
  createRecipe: (req, res) => {
    const {
      title,
      servings,
      cookTime,
      importantIngredients,
      secondaryIngredients,
      steps,
      tags,
      image,
    } = req.body;
    Recipe.create({
      title,
      servings,
      cookTime,
      importantIngredients,
      secondaryIngredients,
      steps,
      tags,
      image,
    })
      .then((newRecipe) => res.json(newRecipe))
      .catch((err) => res.status(400).json(err));
  },

  // Get all recipes
  getAllRecipes: (req, res) => {
    Recipe.find()
      .then((allRecipes) => res.json(allRecipes))
      .catch((err) => res.json(err));
  },

  // Get one recipe
  getOneRecipe: (req, res) => {
    Recipe.findOne({_id: req.params.id})
      .then((oneRecipe) => res.json(oneRecipe))
      .catch((err) => res.json(err));
  },

  // Update a recipe
  updateRecipe: (req, res) => {
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedRecipe) => res.json(updatedRecipe))
      .catch((err) => res.status(400).json(err));
  },

  // Delete a recipe
  deleteRecipe: (req, res) => {
    Recipe.deleteOne({_id: req.params.id})
      .then((deleteConfirmation) => res.json(deleteConfirmation))
      .catch((err) => res.json(err));
  },

  // Search for recipes
  searchRecipes: async (req, res) => {
    try {
      const searchTerm = req.params.searchTerm;
      const recipes = await Recipe.find();
      const results = matchSorter(recipes, searchTerm, {
        keys: ["title", "tags"],
      });
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).json;
    }
  },
};
