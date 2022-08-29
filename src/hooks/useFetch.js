const useFetch = async (url) => {
  const api = await fetch(url);
  const data = await api.json();
  return data;
};

export default useFetch;
