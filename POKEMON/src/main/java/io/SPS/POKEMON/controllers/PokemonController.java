package io.SPS.POKEMON.controllers;

import io.SPS.POKEMON.entities.Pokedex;
import io.SPS.POKEMON.entities.Pokemon;
import io.SPS.POKEMON.services.PokemonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pokeapp")
public class PokemonController {
    private final PokemonService pokemonService;
    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @GetMapping("/all")
    public ResponseEntity<Pokedex> getAllPokemons () {
        Pokedex pokemons = pokemonService.findAllPokemons();
        return new ResponseEntity<>(pokemons, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getSinglePokemon(@PathVariable("id") String id) {
        Object pokemons = pokemonService.findPokemon(id);
        return new ResponseEntity<>(pokemons, HttpStatus.OK);
    }
}
