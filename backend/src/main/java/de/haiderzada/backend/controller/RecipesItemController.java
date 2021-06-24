package de.haiderzada.backend.controller;

import de.haiderzada.backend.model.Recipe;
import de.haiderzada.backend.service.RecipesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipesItemController {
    private final RecipesService service;

    @Autowired
    public RecipesItemController(RecipesService service) {
        this.service = service;
    }

    @GetMapping
    public List<Recipe> listIngredients() {
        return service.listRecipes();
    }

}
