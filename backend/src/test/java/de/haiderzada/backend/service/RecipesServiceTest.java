package de.haiderzada.backend.service;


import de.haiderzada.backend.model.Ingredient;
import de.haiderzada.backend.model.Recipe;
import de.haiderzada.backend.model.RecipeIngredient;
import de.haiderzada.backend.repository.IngredientsRepository;
import de.haiderzada.backend.repository.RecipesRepository;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;

public class RecipesServiceTest {

    private final RecipesRepository repository = mock(RecipesRepository.class);
    private final RecipesService service = new RecipesService(repository);

    @Test
    public void listRecipesShouldReturnRecipesFromRepository() {
        //GIVEN
        Ingredient ingredient = new Ingredient("9999","Banane");
        RecipeIngredient recipeIngredient = new RecipeIngredient("Banane", 1, ingredient);
        when(repository.findAll()).thenReturn(List.of(
                new Recipe("2345", "Nutellabrot mit Banane", "Brot schmieren, bananen rauf.", new ArrayList<>(List.of(recipeIngredient)), 1, "https://google.de", 1, 1)));


        //WHEN
        List<Recipe> recipeList = service.listRecipes();

        //THEN
        assertThat(recipeList, containsInAnyOrder(
                new Recipe("2345", "Nutellabrot mit Banane", "Brot schmieren, bananen rauf.", new ArrayList<>(List.of(recipeIngredient)), 1, "https://google.de", 1, 1)));
    }

    @Test
    public void listRecipesShouldReturnFilteredRecipesFromRepository() {
        //GIVEN
        Ingredient ingredient = new Ingredient("9999","Banane");
        Ingredient ingredient1 = new Ingredient("9998","Brot");
        Ingredient ingredient2 = new Ingredient("9997","Nutella");

        List<Ingredient> ingredientsList = new ArrayList<>(List.of(ingredient, ingredient1, ingredient2));

        RecipeIngredient recipeIngredient = new RecipeIngredient("Banane", 1, ingredient);
        RecipeIngredient recipeIngredient1 = new RecipeIngredient("Brot", 1, ingredient1);
        RecipeIngredient recipeIngredient2 = new RecipeIngredient("Nutella", 1, ingredient2);

        Recipe recipe = new Recipe("2345", "Nutellabrot mit Banane", "Brot schmieren, bananen rauf.", new ArrayList<>(List.of(recipeIngredient, recipeIngredient1,recipeIngredient2)), 1, "https://google.de", 1, 1);

        when(repository.findAll()).thenReturn(List.of(recipe));

        //WHEN
        List<Recipe> filteredRecipeList = service.filteredRecipes(ingredientsList);

        //THEN
        assertThat(filteredRecipeList, containsInAnyOrder(
                new Recipe("2345", "Nutellabrot mit Banane", "Brot schmieren, bananen rauf.", new ArrayList<>(List.of(recipeIngredient, recipeIngredient1, recipeIngredient2)), 1, "https://google.de", 1, 1)));

    }
}
