package de.haiderzada.backend.service;


import de.haiderzada.backend.model.Ingredient;
import de.haiderzada.backend.model.Recipe;
import de.haiderzada.backend.model.RecipeIngredient;
import de.haiderzada.backend.repository.RecipesRepository;
import jdk.swing.interop.SwingInterOpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
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
        return listRecipes()
                .stream()
                .filter(recipe -> ingredientsList.containsAll(recipe.getIngredients().stream().map((ingredient) -> ingredient.getIngredient()).toList()))
                .collect(Collectors.toList());
    }

}
