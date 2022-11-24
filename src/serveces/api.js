const SERVER_URL =
  "https://deliver.kontent.ai/c5c47978-33d9-0022-146a-e31bed62d5ec/items";

export const getItems = async () => {
  const request = await fetch(SERVER_URL);
  if (request.ok) return await request.json();
};
