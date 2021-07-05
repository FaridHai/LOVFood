package de.haiderzada.backend.controller;

import de.haiderzada.backend.model.Ingredient;
import de.haiderzada.backend.model.Recipe;
import de.haiderzada.backend.service.RecipesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import de.haiderzada.backend.service.IngredientsService;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
public class IngredientsItemController {

    private final IngredientsService service;
    private final RecipesService recipesService;

    @Autowired
    public IngredientsItemController(IngredientsService service, RecipesService recipesService) {
        this.service = service;
        this.recipesService = recipesService;
    }

    @GetMapping
    public List<Ingredient> listIngredients() {
        return service.listIngredients();
    }

    @PostMapping
    public List<Recipe> enteredIngredient(@RequestBody List<Ingredient> ingredientsList){
        List<Recipe> recipeList = recipesService.filteredRecipes(ingredientsList);
        return recipeList;
    }
}