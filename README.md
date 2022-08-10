# POKEMON REST

## DOCUMENTACIÓN

> ## Definir mensajes de entrada y salida para usar el API
> - Ver el tipo de dato de salida del api 
>> ![2datosAPI](https://user-images.githubusercontent.com/23283111/183944090-f76fb745-bcaf-4ad7-aa78-89a120950fb1.png)

> - Definir la entra y salida de los datos en el servicio del Servidor
>> ![in_out](https://user-images.githubusercontent.com/23283111/183944297-8acaf055-c59d-4208-8ebe-93c0f53922cb.png)

> ## Usar Cliente REST en el API
> - Se usara a travez de la siguente URL **https://pokeapi.co/api/v2/pokemon?limit=100** de donde obtendremos a 100 pokemones
>> ![respAPI_postman](https://user-images.githubusercontent.com/23283111/183945782-56615d87-502f-48d8-a14a-d92ed8658284.png)
> - Se usara a travez de la siguente URL **https://pokeapi.co/api/v2/pokemon/1** donde el 1 indica el id del pokemon
>> ![respAPI_postman3](https://user-images.githubusercontent.com/23283111/183945971-07e8ce54-4bed-443e-a5ae-d5eafd8a4b15.png)

> ## Se usara este servidor en una pagina web
> - Se configura el servidor
>> ![61](https://user-images.githubusercontent.com/23283111/183946224-cb191fa5-86bf-49a0-8dc3-11e77bb0d3a3.png)
> - Se configura el servicio de la pagina web
>> ![servicio_angular](https://user-images.githubusercontent.com/23283111/183946315-b40d38c6-9c22-4c21-b59f-5530bf9a0057.png)
> - se prueba que los datos se obtengan
> ![4consultaweb](https://user-images.githubusercontent.com/23283111/183946457-6b9617ca-f80f-4b02-bfb0-6a840ad9aa9d.png)

> ## Se crea la pagina web
> Funcionamiento de la pagina web haciendo uso del servidor que usa un API.
>> ![final](https://user-images.githubusercontent.com/23283111/183946707-63f7de78-a27c-4b98-a499-e5205c224681.png)







## UML

```mermaid
sequenceDiagram
USUARIO->>PAGINA_WEB: Ingresa a la pagina
PAGINA_WEB->>SERVER: Realiza una petición
SERVER->>API: Utiliza el API
API->>API: Extrae datos
API-->>SERVER:Envia datos
SERVER-->>PAGINA_WEB:Utiliza los datos
PAGINA_WEB-->>USUARIO:Vizualiza datos
```
##

## ARQUITECTURA DE SOFTWARE POR CAPAS

```mermaid
flowchart LR
    subgraph CLIENT
    UI-->COMPONENT
    end
    subgraph CLIENT
    COMPONENT-->SERVICE_HTTPS_REQUEST
    end
    subgraph SERVER
    CONTROLLER-->SERVICE
    end
    SERVICE_HTTPS_REQUEST-->CONTROLLER
    SERVICE-->REST_CONTROLLER
    subgraph API
    REST_CONTROLLER
    end
```
