package de.haiderzada.backend.controller;

import de.haiderzada.backend.model.Ingredient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import de.haiderzada.backend.service.IngredientsService;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
public class IngredientsItemController {

    private final IngredientsService service;

    @Autowired
    public IngredientsItemController(IngredientsService service) {
        this.service = service;
    }

    @GetMapping
    public List<Ingredient> listIngredients() {
        return service.listIngredients();
    }

    @PostMapping
    public Ingredient addIngredientItem(@RequestBody Ingredient ingredient) {
        return service.addNewIngredient(ingredient);
    }

    @DeleteMapping("{name}")
    public void deleteIngredient(@PathVariable String name){
        service.deleteIngredient(name);
    }

}