package de.haiderzada.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "recipes")
public class Recipe {
        @Id
        private String title;
        private String instruction;
        @DBRef
        private List<Ingredient> ingredients;
        private int duration;
        private int level;
        private int portion;
}
