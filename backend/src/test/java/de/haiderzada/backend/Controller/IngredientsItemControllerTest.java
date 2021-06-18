package de.haiderzada.backend.Controller;

import de.haiderzada.backend.model.Ingredient;
import de.haiderzada.backend.repository.IngredientsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class IngredientsItemControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private IngredientsRepository repository;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getIngredientByNameShouldReturnIngredientItem() {
        //GIVEN
        repository.save(new Ingredient("Cola"));

        //WEN
        ResponseEntity<Ingredient> response = restTemplate.getForEntity("http://localhost:" + port + "/api/ingredients/Cola", Ingredient.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(new Ingredient("Cola")));
    }
}
