// Noah: helper fallback quotes for offline / error cases
const fallbackQuotes = [
  { content: "Discipline beats motivation.", author: "Unknown" },
  { content: "Small steps every day add up.", author: "Unknown" },
  {
    content: "You don't need to be perfect, just consistent.",
    author: "Unknown",
  },
];

export const getRandomQuote = async () => {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) {
      throw new Error("Could not fetch quote please try again later");
    }
    const data = await response.json();
    return {
      content: data.quote,
      author: data.author || "Unknown",
    };
  } catch (error) {
    // Fallback: so the app always has something to show
    const random =
      fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    return random;
  }
};
