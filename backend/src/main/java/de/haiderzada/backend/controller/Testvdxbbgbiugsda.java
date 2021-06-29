package de.haiderzada.backend.controller;

import de.haiderzada.backend.dto.ZutatenDTO;
import de.haiderzada.backend.dto.ZutatenParseDto;
import de.haiderzada.backend.dto.recipedto;
import de.haiderzada.backend.model.Ingredient;
import de.haiderzada.backend.model.Recipe;
import de.haiderzada.backend.model.RecipeIngredient;
import de.haiderzada.backend.repository.IngredientsRepository;
import de.haiderzada.backend.repository.RecipesRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("gnsdbg")
public class Testvdxbbgbiugsda {

    private final RecipesRepository recipesRepository;
    private final IngredientsRepository ingredientsRepository;

    public Testvdxbbgbiugsda(RecipesRepository recipesRepository, IngredientsRepository ingredientsRepository) {
        this.recipesRepository = recipesRepository;
        this.ingredientsRepository = ingredientsRepository;
    }


    @PostMapping
    public void parse(@RequestBody List<recipedto> recipes) {
        for (recipedto recipe : recipes) {
            Recipe n_Recipe = new Recipe();
            n_Recipe.setDuration(recipe.getDauer());
            n_Recipe.setInstruction(recipe.getAnleitung());
            n_Recipe.setLevel(recipe.getDifficulty_id());
            n_Recipe.setPortion(recipe.getPortionen());
            n_Recipe.setTitle(recipe.getTitle());
            n_Recipe.setId(String.valueOf(recipe.getId()));
            recipesRepository.save(n_Recipe);
        }
    }

    @PostMapping("/zutaten")
    public int parseZutaten(@RequestBody List<ZutatenParseDto> zutaten) {
        int errorcount = 0;
        for (ZutatenParseDto zutat : zutaten) {
            Optional<Recipe> recipe = recipesRepository.findById(String.valueOf(zutat.getRezept_id()));

            if (recipe.isPresent() ){
                Recipe r = recipe.get();

                RecipeIngredient r_ingrediIngredient = new RecipeIngredient();
                r_ingrediIngredient.setAmount(zutat.getMenge());
                r_ingrediIngredient.setZutat(zutat.getZutat());

                Optional<Ingredient> optionalIngredient = ingredientsRepository.findById(String.valueOf(zutat.getGlobal_zutat_id()));
                optionalIngredient.ifPresent(r_ingrediIngredient::setIngredient);

                if (r.getIngredients() == null) {
                    r.setIngredients(new ArrayList<>());
                }

                r.getIngredients().add(r_ingrediIngredient);
                recipesRepository.save(r);
            }
            else {
                errorcount++;
            }
        }
        return errorcount;
    }

    @PostMapping("/g")
    public void g(@RequestBody List<ZutatenDTO> zutaten) {
        for(ZutatenDTO zutat : zutaten) {
            Ingredient i = new Ingredient();
            i.setId(String.valueOf(zutat.getPk()));
            i.setName(zutat.getName());

            ingredientsRepository.save(i);
        }
    }
}
