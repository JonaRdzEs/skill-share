export async function login({ email, password }: { email: string, password: string }) {
  console.log("Logging", { email, password });
  const resp = await fetch("http://localhost:3000");
  return resp.ok;
}