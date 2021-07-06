package de.haiderzada.backend.controller;

import de.haiderzada.backend.model.Ingredient;
import de.haiderzada.backend.model.Recipe;
import de.haiderzada.backend.model.RecipeIngredient;
import de.haiderzada.backend.repository.IngredientsRepository;
import de.haiderzada.backend.repository.RecipesRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class IngredientsItemControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private IngredientsRepository repository;

    @Autowired
    private RecipesRepository recipesRepository;

    @Autowired
    private TestRestTemplate restTemplate;

    @BeforeEach
    public void clearRepository() {
        repository.deleteAll();
    }

    @Test
    public void getIngredientsListfromDB() {
        //GIVEN
        repository.save(new Ingredient("1520", "Manti"));
        repository.save(new Ingredient("1521", "Teigtasche"));

        //WHEN
        ResponseEntity<Ingredient[]> response = restTemplate.getForEntity("http://localhost:" + port + "/api/ingredients", Ingredient[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(new Ingredient("1520", "Manti"), new Ingredient("1521", "Teigtasche")));

    }

    @Test
    public void getfilteredRecipeListfromDB() {
        //GIVEN
        Ingredient ingredient = new Ingredient("9999","Banane");
        Ingredient ingredient1 = new Ingredient("9998","Brot");
        Ingredient ingredient2 = new Ingredient("9997","Nutella");

        repository.save(ingredient);
        repository.save(ingredient1);
        repository.save(ingredient2);

        RecipeIngredient recipeIngredient = new RecipeIngredient("Banane", 1, ingredient);
        RecipeIngredient recipeIngredient1 = new RecipeIngredient("Brot", 1, ingredient1);
        RecipeIngredient recipeIngredient2 = new RecipeIngredient("Nutella", 1, ingredient2);

        List<Ingredient> ingredientsList = new ArrayList<>(List.of(ingredient, ingredient1, ingredient2));

        Recipe recipe = new Recipe("2345", "Nutellabrot mit Banane", "Brot schmieren, bananen rauf.", new ArrayList<>(List.of(recipeIngredient, recipeIngredient1, recipeIngredient2)), 1, "https://google.de", 1, 1);
        recipesRepository.save(recipe);

        //WHEN
        ResponseEntity<Recipe[]> response = restTemplate.postForEntity("http://localhost:" + port + "/api/ingredients", ingredientsList, Recipe[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(recipe));

    }
}