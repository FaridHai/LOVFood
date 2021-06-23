package de.haiderzada.backend.service;

import de.haiderzada.backend.model.Recipe;
import de.haiderzada.backend.repository.RecipesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

}
