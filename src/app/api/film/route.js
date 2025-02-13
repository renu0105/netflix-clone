import axios from "axios";

export async function POST(req) {
  const encodedParams = new URLSearchParams();

  const options = {
    method: "POST",
    url: "https://anilistmikilior1v1.p.rapidapi.com/createThread",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY, // Use environment variable
      "x-rapidapi-host": "Anilistmikilior1V1.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return Response.json(response.data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
