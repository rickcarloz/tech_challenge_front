# Documentação da Aplicação

Apresentação: https://www.youtube.com/watch?v=a6N6jYB-IZ8
Repositóriohttps://github.com/rickcarloz/tech_challenge_front: 

A aplicação foi desenvolvida em **React** com **TypeScript**, utilizando **Vite** para otimização do ambiente de desenvolvimento.

## 2. Tecnologias Utilizadas

- **React** com **hooks** e **componentes funcionais**
- **Styled Components** para estilização
- **Vite** para otimização do ambiente de desenvolvimento
- **Docker** para conteinerização
- **GitHub Actions** para **CI/CD**
- **JWT** para autenticação

## 3. Configuração do Ambiente

### 3.1. Clonando o Repositório

```
  git clone <URL_DO_REPOSITORIO>
  cd nome-do-projeto
```

### 3.2. Instalando Dependências

```
  npm install
```

### 3.3. Executando a Aplicação

```
  npm run dev
```

### 3.4. Construindo para Produção

```
  npm run build
```

## 4. Estrutura do Projeto

```
src/
├── components/ # Componentes reutilizáveis
├── pages/      # Páginas da aplicação
├── services/   # Integração com API
├── hooks/      # Hooks personalizados
├── context/    # Context API para gerenciamento de estado
├── styles/     # Estilização global e temas
├── App.tsx     # Componente raiz
├── main.tsx    # Ponto de entrada da aplicação
```

## 5. Integração com o Back-End

A aplicação se comunica com a API REST utilizando os seguintes endpoints:

- **GET /posts** - Lista de postagens
- **POST /posts** - Cria uma nova postagem
- **PUT /posts/:id** - Atualiza uma postagem existente
- **DELETE /posts/:id** - Exclui uma postagem
- **POST /auth/login** - Autenticação e geração de token JWT

## 6. Rotas da Aplicação

A navegação entre as páginas é gerenciada pelo **React Router**.

- **/** - Página inicial
- **/login** - Tela de login
- **/create** - Criação de postagens (apenas para professores)
- **/edit/:id** - Edição de postagens (apenas para professores)
- **/admin** - Painel de administração

## 7. Papel dos Usuários

- **Professor:** Pode criar, editar e excluir postagens.
- **Aluno:** Pode acessar apenas a página inicial.

## 8. Implantação e Integração

### 8.1. Docker

A aplicação foi conteinerizada com Docker, garantindo um ambiente padronizado para desenvolvimento e produção.

### 8.1.1. Construção e Execução do Container

```
  docker build -t nome-da-aplicacao .
  docker run -p 3000:3000 nome-da-aplicacao
```

### 8.2. CI/CD com GitHub Actions

Um workflow foi configurado para automatizar o processo de build e push da imagem Docker.

### 8.2.1. Fluxo do GitHub Actions:

1. Faz checkout do repositório
2. Instala dependências
3. Realiza o build da aplicação
4. Cria e publica a imagem Docker

## 9. Segurança

A autenticação é feita utilizando **JWT**, garantindo segurança na comunicação entre front-end e back-end.