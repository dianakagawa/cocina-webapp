const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please tell us the title of this recipe"],
  },
  image: {
    type: String,
    required: false,
  },
  servings: {
    type: Number,
    required: [true, "Please tell us how many servings this recipe makes"],
  },
  cookTime: {
    type: Number,
    required: [true, "Please tell us how long this recipe takes to cook"],
  },
  importantIngredients: {
    type: [String],
    required: true,
  },
  secondaryIngredients: {
    type: [String],
  },
  steps: {
    type: [String],
    required: true,
  },
  tags: {
    type: [String],
    enum: [
      "breakfast",
      "lunch",
      "dinner",
      "dessert",
      "appetizer",
      "snack",
      "drink",
      "sauce",
      "side dish",
      "soup",
      "salad",
      "vegan",
      "vegetarian",
      "gluten free",
      "dairy free",
      "paleo",
      "keto",
      "whole30",
      "low carb",
    ],
  },
});

RecipeSchema.index({
  title: "text",
  tags: "text",
  "importantIngredients.name": "text",
});

module.exports = mongoose.model("Recipe", RecipeSchema);
