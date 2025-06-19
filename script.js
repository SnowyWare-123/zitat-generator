// Ein Array mit inspirierenden Zitaten
const zitate = [
  "Der Weg ist das Ziel.",
  "Wer nicht wagt, der nicht gewinnt.",
  "Man lernt nie aus.",
  "Kleine Schritte führen zum großen Ziel.",
  "Erfolg ist das Ergebnis von Ausdauer.",
  "Technik versteht man durch Tun, nicht nur durch Lesen.",
  "Support ist mehr als nur Antworten – es ist Zuhören.",
];

// Diese Funktion wird aufgerufen, wenn der Button geklickt wird
function zeigeZitat() {
  // Wählt einen zufälligen Index basierend auf der Länge des Arrays
  const zufallsIndex = Math.floor(Math.random() * zitate.length);
  // Holt das HTML-Element mit der ID 'quote' und ändert seinen Textinhalt
  document.getElementById("quote").innerText = zitate[zufallsIndex];
}
