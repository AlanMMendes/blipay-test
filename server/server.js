import cors from "cors";
import express from "express";
import fs from "fs";

const app = express();

// Middleware para processar o corpo da requisição como JSON
app.use(express.json()); // Isso é importante para que o corpo da requisição seja interpretado como JSON

app.use(
  cors({
    origin: "*",
  })
);

// Caminho correto para o arquivo db.json
const dbPath = "./db.json"; // Certifique-se de que 'db.json' esteja na mesma pasta do server.js

// Função para ler os dados do arquivo JSON
const readDatabase = () => {
  try {
    const data = fs.readFileSync(dbPath);
    return JSON.parse(data);
  } catch (err) {
    console.error("Erro ao ler o arquivo:", err);
    return { users: [] }; // Retorna um valor padrão caso o arquivo não exista ou haja erro
  }
};

// Função para escrever os dados de volta no arquivo JSON
const writeDatabase = (data) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Erro ao escrever o arquivo:", err);
  }
};

// Rota para obter todos os usuários
app.get("/api/users", (req, res) => {
  const users = readDatabase().users;
  res.json(users);
});

app.post("/credit-score/person", (req, res) => {
  const { rendaMensal } = req.body;

  if (!rendaMensal) {
    return res.status(400).json({ error: "Credit score is required" });
  }

  if (rendaMensal < 500) {
    res.status(201).json({
      status: "DENIED",
    });
  } else {
    res.status(201).json({
      status: "APPROVED",
      max_amount: 10000,
    });
  }
});

app.post("/credit-score/company", (req, res) => {
  const { income } = req.body;

  if (!income) {
    return res.status(400).json({ error: "Credit score is required" });
  }

  res.status(201).json(newUser);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
