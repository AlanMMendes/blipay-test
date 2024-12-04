# Projeto

Este projeto envolve tanto o **client** (front-end) quanto o **server** (back-end). Para que o projeto funcione corretamente, é necessário inicializar ambos os ambientes (cliente e servidor) separadamente.

## Requisitos

Antes de começar, certifique-se de que você tem os seguintes requisitos instalados em seu sistema:

- **Node.js** (você pode verificar a versão instalada com o comando `node -v`)
- **npm** (gerenciador de pacotes do Node.js, geralmente instalado junto com o Node.js)

## Estrutura do Projeto

O projeto está dividido em duas pastas principais:

- `client`: Contém o front-end da aplicação.
- `server`: Contém o back-end da aplicação.

## Inicializando o Client (Front-end)

1. Acesse a pasta `client`:

   ```bash
   cd client
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Para rodar o cliente, execute o seguinte comando:

   ```bash
   npm run dev
   ```

   Isso iniciará o servidor de desenvolvimento do front-end. O cliente estará disponível em `http://localhost:3000` ou outro endereço especificado no terminal.

### Rodando os Testes no Client

Se você quiser rodar os testes de interface (UI) do front-end, execute o seguinte comando na pasta `client`:

```bash
npm run test:ui
```

## Inicializando o Client (Back-end)

1. Acesse a pasta `server`:

   ```bash
   cd server
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Para rodar o cliente, execute o seguinte comando:

   ```bash
   node server.js
   ```

   Isso iniciará o servidor. O servidor estará disponível em `http://localhost:5000` ou outro endereço especificado no terminal.
