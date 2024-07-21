import mongoose, { model } from "mongoose";
import { WeatherInterface } from "./interface";
import { WeatherSchema } from "./schema";

// we set up the weather model using weatherInterface to type it
export default mongoose.models.Weather ||
  model<WeatherInterface>("Weather", WeatherSchema);
