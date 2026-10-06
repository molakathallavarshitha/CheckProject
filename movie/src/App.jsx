import React, { useState } from "react";

function App() {
  const [movie, setMovie] = useState("");
  const [tickets, setTickets] = useState(1);
  const [message, setMessage] = useState("");

  const bookTicket = () => {
    if (movie === "") {
      setMessage("Please select a movie.");
      return;
    }

    let price = 0;

    if (movie === "Pushpa 2") {
      price = 250;
    } else if (movie === "Kalki 2898 AD") {
      price = 200;
    } else if (movie === "Salaar") {
      price = 180;
    }

    let total = price * tickets;

    setMessage(
      "Booking Successful!\n" +
        "Movie: " +
        movie +
        "\nTickets: " +
        tickets +
        "\nTotal Amount: ₹" +
        total,
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Movie Ticket Booking System</h1>

      <label>Select Movie:</label>
      <br />
      <select value={movie} onChange={(e) => setMovie(e.target.value)}>
        <option value="">--Select Movie--</option>
        <option value="Pushpa 2">Pushpa 2</option>
        <option value="Kalki 2898 AD">Kalki 2898 AD</option>
        <option value="Salaar">Salaar</option>
      </select>

      <br />
      <br />

      <label>Number of Tickets:</label>
      <br />
      <input
        type="number"
        value={tickets}
        min="1"
        onChange={(e) => setTickets(Number(e.target.value))}
      />

      <br />
      <br />

      <button onClick={bookTicket}>Book Ticket</button>

      <h3 style={{ whiteSpace: "pre-line" }}>{message}</h3>
    </div>
  );
}

export default App;
