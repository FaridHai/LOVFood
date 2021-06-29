package de.haiderzada.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ZutatenParseDto {
    private int id;
    private int menge;
    private String zutat;
    private int rezept_id;
    private int global_zutat_id;
}
