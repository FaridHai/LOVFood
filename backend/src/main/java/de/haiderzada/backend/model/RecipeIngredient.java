package de.haiderzada.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecipeIngredient {
        private String zutat;
        private int amount;
        @DBRef
        private Ingredient ingredient;
}
