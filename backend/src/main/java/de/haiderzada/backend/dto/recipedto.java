package de.haiderzada.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class recipedto {
    private int id;
    private String title;
    private String anleitung;
    private int dauer;
    private int portionen;
    private int difficulty_id;
}