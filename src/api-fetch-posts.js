export async function getCatalogPosts() {
  const api = await fetch("/couses");
  console.log(api);
  const data = await api.json();
  console.log(data);
}
