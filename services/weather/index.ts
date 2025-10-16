import { Hono } from "hono";
import { City, WeatherResponse } from "./types";
import { logger } from "hono/logger";

const data: Record<City, WeatherResponse["temperature"]> = {
  "New York": 70,
  "Los Angeles": 75,
  Chicago: 65,
};

const app = new Hono();

app.use("*", logger());

app.get("/weather/:city", (c) => {
  const city = c.req.param("city") as City;

  if (!Object.keys(data).includes(city)) {
    return c.json({ error: "City not found" }, 404);
  }

  const temperature = data[city];
  return c.json({ city, temperature });
});

app.get("/healthz", (c) => {
  return c.json({ status: "ok" });
});

export default app;
