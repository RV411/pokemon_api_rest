# POKEMON REST

## DOCUMENTACIÓN

> ## Creacion de proyectos para el Server y la Pagina Web
Se crean los proyectos con la herramienta de spring.io para el servidor y para el frontend con node_modules
>>Server
![1createspring](https://user-images.githubusercontent.com/23283111/183775604-8d6b9d83-6d43-4474-910d-21198b6813a1.png)
>>Pagina Web
![1createapp](https://user-images.githubusercontent.com/23283111/183775584-04dd4a2a-4149-49ae-951b-fa62cf57f9b7.png)

##


![2createCompHeader](https://user-images.githubusercontent.com/23283111/183775608-93129c73-50e7-4239-bc84-aec8f7704301.png)
![2index](https://user-images.githubusercontent.com/23283111/183775611-f876ea3c-13b0-4323-8ff3-d4e2af318b46.png)





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
