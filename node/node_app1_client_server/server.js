// import Express
const express = require("express");

// tworzymy aplikację
const app = express();

// port serwera
const PORT = 3000;

// aktualna liczba (wspólna dla wszystkich klientów)
let currentNumber = "";

// lista klientów podłączonych przez SSE
const clients = [];

// pozwala odbierać JSON z przeglądarki
app.use(express.json());

// serwowanie plików (index.html)
app.use(express.static("public"));

/**
 * SSE - klient się podłącza i "nasłuchuje" zmian
 */
app.get("/events", (req, res) => {
  // nagłówki wymagane dla SSE
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // dodajemy klienta do listy
  clients.push(res);

  // wysyłamy aktualną liczbę po połączeniu
  res.write(`data: ${currentNumber}\n\n`);

  // gdy klient zamknie stronę - usuwamy go z listy
  req.on("close", () => {
    const index = clients.indexOf(res);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });
});

/**
 * odbieranie liczby od klienta
 */
app.post("/number", (req, res) => {
  const number = req.body.number;

  // zapisujemy nową wartość
  currentNumber = number;

  // wysyłamy ją do wszystkich klientów
  clients.forEach((client) => {
    client.write(`data: ${currentNumber}\n\n`);
  });

  res.sendStatus(200);
});

// uruchomienie serwera
app.listen(PORT, () => {
  console.log("Serwer działa: http://localhost:3000");
});