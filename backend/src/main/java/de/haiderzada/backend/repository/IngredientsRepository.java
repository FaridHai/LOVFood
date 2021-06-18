package de.haiderzada.backend.repository;

import de.haiderzada.backend.model.Ingredient;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientsRepository extends PagingAndSortingRepository<Ingredient, String> {

    List<Ingredient> findAll();
}
