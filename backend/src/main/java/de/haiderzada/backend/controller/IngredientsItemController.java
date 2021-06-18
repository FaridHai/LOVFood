package de.haiderzada.backend.controller;

import de.haiderzada.backend.model.Ingredient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.cdi.Eager;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import de.haiderzada.backend.service.IngredientsService;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

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

    @GetMapping({"{name}"})
    public Ingredient findById(@PathVariable String name) {
        Optional<Ingredient> response = service.findByName(name);
        if (response.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ingredient with name " + name + " not found");
        }
        return response.get();
    }
}