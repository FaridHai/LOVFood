package de.haiderzada.backend.repository;

import de.haiderzada.backend.model.Recipe;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipesRepository extends PagingAndSortingRepository<Recipe, String> {

    List<Recipe> findAll();
}
