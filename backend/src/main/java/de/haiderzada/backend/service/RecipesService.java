package de.haiderzada.backend.service;

import de.haiderzada.backend.controller.IngredientsItemController;
import de.haiderzada.backend.model.Ingredient;
import de.haiderzada.backend.model.Recipe;
import de.haiderzada.backend.repository.RecipesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecipesService {
    private final RecipesRepository recipesRepository;

    @Autowired
    public RecipesService(RecipesRepository recipesRepository) {
        this.recipesRepository = recipesRepository;
    }

    public List<Recipe> listRecipes() {
        return recipesRepository.findAll();
    }

    public List<Recipe> filteredRecipes(List<Ingredient> ingredientsList) {
        System.out.println(ingredientsList);
        List<Recipe> recipeList = listRecipes()
                .stream()
                .filter(recipe -> ingredientsList.containsAll(recipe.getIngredients()))
                .collect(Collectors.toList());
        return recipeList;
    }

}
