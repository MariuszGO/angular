const { MongoClient, ObjectId } = require('mongodb');
 // Importujemy bibliotekę Express, która służy do tworzenia serwera
const express = require('express');
// Importujemy CORS, aby Angular mógł komunikować się z serwerem
const cors = require('cors');


// Tworzymy aplikację Express
const app = express();

// Zezwalamy na komunikację Angulara z serwerem
app.use(cors());

// Umożliwiamy odbieranie danych w formacie JSON
app.use(express.json());

// Tworzymy klienta do połączenia z lokalnym MongoDB
const klient = new MongoClient('mongodb://127.0.0.1:27017');

// Wybieramy bazę danych o nazwie "szkola"
const baza = klient.db('szkola');

// Wybieramy kolekcję "osoby", w której będą przechowywane dane
const osoby = baza.collection('osoby');


// ------------------------------------
// POBIERANIE WSZYSTKICH OSÓB Z BAZY
// ------------------------------------

// GET /osoby - żądanie pobrania danych
app.get('/osoby', async (req, res) => {

    // Pobieramy wszystkie dokumenty z kolekcji osoby
    // find() wyszukuje dokumenty
    // toArray() zamienia wyniki na tablicę
    const dane = await osoby.find().toArray();

    // Wysyłamy pobrane dane do Angulara jako JSON
    res.json(dane);

});


// ------------------------------------
// DODAWANIE NOWEJ OSOBY DO BAZY
// ------------------------------------

// POST /osoby - żądanie zapisania nowej osoby
app.post('/osoby', async (req, res) => {

    // Pobieramy dane osoby przesłane z formularza Angulara
    // req.body zawiera imię, nazwisko i wiek
    const osoba = req.body;

    // Zapisujemy nową osobę w kolekcji MongoDB
    // insertOne() dodaje jeden dokument
    await osoby.insertOne(osoba);

    // Wysyłamy odpowiedź do Angulara
    res.json({ komunikat: 'Dodano' });

});


// ------------------------------------
// URUCHOMIENIE SERWERA
// ------------------------------------

 // Importuj ObjectId na początku pliku razem z MongoClient:
// const { MongoClient, ObjectId } = require('mongodb');

// ------------------------------------
// USUWANIE OSOBY Z BAZY DANYCH
// ------------------------------------

// DELETE /osoby/:id - usuwanie osoby o podanym identyfikatorze
app.delete('/osoby/:id', async (req, res) => {

    // Pobieramy identyfikator osoby z adresu URL
    const id = req.params.id;

    // Usuwamy osobę z bazy MongoDB
    await osoby.deleteOne({ _id: new ObjectId(id) });

    // Wysyłamy odpowiedź do Angulara
    res.json({ komunikat: 'Usunięto osobę' });

});





// Funkcja uruchamiająca połączenie z MongoDB i serwer
async function start() {

    // Łączymy się z bazą MongoDB
    await klient.connect();

    // Uruchamiamy serwer na porcie 3000
    app.listen(3000, () => {
        console.log('Serwer działa');
    });

}

// Wywołujemy funkcję start()
// Jeśli pojawi się błąd, wyświetlamy go w konsoli
start().catch(console.error);