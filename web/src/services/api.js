export default async function api(method, route, body, options) {
  return await fetch(`${process.env.REACT_APP_API_URL}${route}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    ...options,
  }).then((r) => r.json());
}
