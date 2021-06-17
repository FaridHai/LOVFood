package de.haiderzada.backend.service;

import de.haiderzada.backend.model.Ingredient;
import de.haiderzada.backend.repository.IngredientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientsService {

    private final IngredientsRepository ingredientsRepository;

    @Autowired
    public IngredientsService(IngredientsRepository ingredientsRepository) {
        this.ingredientsRepository = ingredientsRepository;
    }

    public List<Ingredient> listIngredients() {
        return ingredientsRepository.findAll();
    }

    public Ingredient addNewIngredient(Ingredient ingredient) {
        return ingredientsRepository.save(ingredient);
    }

    public void deleteIngredient(String name) {
        ingredientsRepository.deleteById(name);
    }
}