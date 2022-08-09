package io.SPS.POKEMON.services;

import io.SPS.POKEMON.entities.Pokedex;
import io.SPS.POKEMON.entities.Pokemon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class PokemonService {
    @Autowired
    RestTemplate restTemplate=new RestTemplate();
    public Pokedex findAllPokemons() {
        String urlall="https://pokeapi.co/api/v2/pokemon?limit=100";
        return restTemplate.getForObject(urlall,Pokedex.class);
    }

    public Object findPokemon(String id) {
        String urlsingle="https://pokeapi.co/api/v2/pokemon/"+id+"/";
        return restTemplate.getForObject(urlsingle,Object.class);
    }
}
