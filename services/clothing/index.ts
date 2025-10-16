import { Hono } from "hono";
import { logger } from "hono/logger";
import { determineOutfit } from "./helpers";
import { WeatherResponse } from "../weather/types";

const WEATHER_SERVICE_URL =
  process.env.WEATHER_SERVICE_URL || "http://localhost:3000";

const app = new Hono();

app.use("*", logger());

app.get("/outfit/:city", async (c) => {
  const city = c.req.param("city");

  try {
    const weather = await fetch(`${WEATHER_SERVICE_URL}/weather/${city}`);
    const weatherData = (await weather.json()) as WeatherResponse;

    if (weather.status !== 200) {
      throw new Error("Failed to get weather data");
    }

    const temperature = weatherData.temperature;
    const outfit = determineOutfit(temperature);
    return c.json({ outfit });
  } catch (error) {
    return c.json({ error: "Failed to get weather data" }, 500);
  }
});

app.get("/healthz", (c) => {
  return c.json({ status: "ok" });
});

export default {
  port: 3001,
  fetch: app.fetch,
};
