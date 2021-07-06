package de.haiderzada.backend.service;


import de.haiderzada.backend.model.Ingredient;
import de.haiderzada.backend.repository.IngredientsRepository;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;

public class IngredientsServiceTest {

    private final IngredientsRepository repository = mock(IngredientsRepository.class);
    private final IngredientsService service = new IngredientsService(repository);

    @Test
    public void listIngredientsShouldReturnIngredientsFromRepository() {
        //GIVEN
        when(repository.findAll()).thenReturn(List.of(
                new Ingredient("4002", "Manti"),
                new Ingredient("3003", "Teigtasche")));

        //WHEN
        List<Ingredient> ingredientList = service.listIngredients();

        //THEN
        assertThat(ingredientList, containsInAnyOrder(
                new Ingredient("4002", "Manti"),
                new Ingredient("3003", "Teigtasche")));
    }
}
