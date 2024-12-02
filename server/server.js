import cors from "cors";
import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const dbPath = "./db.json";

const readDatabase = () => {
  try {
    const data = fs.readFileSync(dbPath);
    return JSON.parse(data);
  } catch (err) {
    console.error("Erro ao ler o arquivo:", err);
    return { users: [] };
  }
};

const writeDatabase = (data) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Erro ao escrever o arquivo:", err);
  }
};

app.get("/api/users", (req, res) => {
  const users = readDatabase().users;
  res.json(users);
});

app.post("/credit-score/:type", (req, res) => {
  const { type } = req.params;

  if (type === "person") {
    const { income } = req.body;
    if (!income) {
      return res.status(400).json({ error: "Renda Mensal é obrigatória" });
    }
    if (income < 500) {
      res.status(201).json({
        status: "DENIED",
      });
    } else {
      res.status(201).json({
        status: "APPROVED",
        max_amount: 10000,
      });
    }
  }

  if (type === "company") {
    const { revenue } = req.body;
    if (!revenue) {
      return res.status(400).json({ error: "Faturamento é obrigatória" });
    }

    if (revenue < 500) {
      res.status(201).json({
        status: "DENIED",
      });
    } else {
      res.status(201).json({
        status: "APPROVED",
        max_amount: 10000,
      });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
