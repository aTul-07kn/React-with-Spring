package com.example.SpringReact.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Userdto {
    private long id;
    private String username;
    private String name;
    private String email;
}
