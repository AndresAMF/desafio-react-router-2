export const getApi = async () => {
  try {
    const api_fetch = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=151`
    );
    const { results } = await api_fetch.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};
