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

const readDb = () => {
  try {
    const data = fs.readFileSync(dbPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return { persons: [], companies: [] };
  }
};

const writeDatabase = (data) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Erro ao escrever o arquivo:", err);
  }
};

app.get("/credit-score/list", (req, res) => {
  const persons = readDb().persons;
  const companies = readDb().companies;

  res.json({ persons, companies });
});

app.post("/credit-score/results", (req, res) => {
  try {
    const { persons, companies } = req.body;

    const dbData = readDb();

    if (persons && Array.isArray(persons)) {
      persons.forEach((person) => {
        const statusPerson =
          person.person.income >= 500
            ? {
                status: "APPROVED",
                max_amount: 500,
              }
            : {
                status: "DENIED",
              };

        if (!person.credit_result) {
          person.credit_result = {};
        }

        person.credit_result.status = statusPerson;
        dbData.persons.push(person);

        return res.status(200).json({
          statusPerson,
        });
      });
    }
    if (companies && Array.isArray(companies)) {
      companies.forEach((company) => {
        const statusCompany =
          company.company.revenue >= 500
            ? {
                status: "APPROVED",
                max_amount: 1000,
              }
            : {
                status: "DENIED",
              };

        if (!company.credit_result) {
          company.credit_result = {};
        }

        company.credit_result = statusCompany;

        dbData.companies.push(company);
        return res.status(200).json({
          statusCompany,
        });
      });
    }

    writeDatabase(dbData);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Erro ao salvar dados", error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
