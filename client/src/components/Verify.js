export default async function Verify(token, axios) {
  const result = await axios.get("/register/verify/" + token);
  if (result.data) {
    return { error: "Invalid token" };
  } else {
    return {};
  }
}
