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
public class RecipesItemControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private RecipesRepository repository;

    @Autowired
    private IngredientsRepository ingredientsRepository;

    @Autowired
    private TestRestTemplate restTemplate;

    @BeforeEach
    public void clearRepository() {
       ingredientsRepository.deleteAll();
    }

    @Test
    public void getRecipeListfromDB() {
        //GIVEN
        Ingredient ingredient = new Ingredient("9999","Banane");
        RecipeIngredient recipeIngredient = new RecipeIngredient("Banane", 1, ingredient);
        Recipe recipe = new Recipe("2345", "Nutellabrot mit Banane", "Brot schmieren, bananen rauf.", new ArrayList<>(List.of(recipeIngredient)), 1, "https://google.de", 1, 1);
        repository.save(recipe);
        ingredientsRepository.save(ingredient);

        //WHEN
        ResponseEntity<Recipe[]> response = restTemplate.getForEntity("http://localhost:" + port + "/api/recipes", Recipe[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(recipe));

    }
}