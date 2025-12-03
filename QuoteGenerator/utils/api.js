// utils/api.js

// Noah: helper fallback quotes for offline mode
const fallbackQuotes = [
  { content: "Discipline beats motivation.", author: "Unknown" },
  { content: "Small steps every day add up.", author: "Unknown" },
  { content: "You don't need to be perfect, just consistent.", author: "Unknown" },
];

export const getRandomQuote = async () => {
  try {
    // Noah: using HTTPS so iOS doesn’t block it
    const response = await fetch("https://api.quotable.io/random");

    if (!response.ok) {
      throw new Error("Bad response from server");
    }

    const data = await response.json();

    return {
      content: data.content,
      author: data.author || "Unknown",
    };
  } catch (error) {
    // Noah: no console.error so Expo doesn’t spam red logs in demo

    // Fallback: so your demo ALWAYS shows something
    const random =
      fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    return random; // Same shape { content, author }
  }
};
