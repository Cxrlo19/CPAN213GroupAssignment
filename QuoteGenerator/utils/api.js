//Api fetch function to get the random quote
export const getRandomQuote = async () => {
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        if (!response.ok) {
            throw new Error('Could not fetch quote please try again later');
        }
        const data = await response.json();
        return {
            content: data.quote,
            author: data.author,
        };
    } catch (error) {
        console.error('Error fetching the quote:', error)
        throw error;
    }
}