# Desafio Backend Server

# Instruções para rodar

Um sistema que permite visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks.
## 💻 Instalando o projeto

Clone o repositório:  
```
git clone git@github.com:LeandroGoerck/desafio-backend-server.git
```
    
Acesse a pasta do repositório  
```
cd desafio-backend-server
```

Instale as dependências:
```  
npm install
```
  
Execute a aplicação
```  
npm start  
```
  
# Descritivo do desafio

## Backend
O desafio é implementar um backend REST para uma aplicação de músicas utilizando typescript.

Com as seguintes funcionalidades:
  - [ ] Criar uma playlist
  - [ ] Editar uma playlist
  - [ ] Deletar uma playlist
  - [ ] Listar todas as playlists
  - [ ] Criar um usuário
  - [ ] Editar um usuário
  - [ ] Deletar um usuário
  - [ ] Listar todos os usuários
  - [x] Login
  - [x] Registrar-se
  - [x] Obs.: Todos os usuário que se cadastram possuem a role USER.

  - [x] As rotas de login e registro devem ser as únicas de acesso público. Todas as outras rotas devem ser restritas a usuários autenticados.
  - [ ] As funcionalidades referente a usuários devem ser acessíveis apenas para usuários com a role "ADMIN" e retornando 403 para os demais usuários.
  - [x] Se o usuário autenticado tiver a role "USER", então apenas as playlists criadas pelo mesmo devem ser acessíveis.
  - [x] Importante: O usuário inicial deve se chamar "admin" e a senha "admin" e utilizando a role "ADMIN".

  ## Banco de dados
O banco de dados utilizado é o mysql.

### Estrutura de dados
  ```
  user:
    id: number
    name: string
    email: string
    password: string
    role: ADMIN | USER
  ```

  ```
  playlist:
    id: number
    name: string
    genre: string;
    musics: string[];
    user_id: number
  ```
