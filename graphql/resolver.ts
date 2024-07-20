import { db } from "./data";

declare interface WeatherInterface {
  zip: string;
  weather: string;
  tempC: string;
  tempF: string;
  friends: string[];
}

export const resolvers = {
  Query: {
    weather: async (_: any, params: WeatherInterface) => {
      return [db.find((item) => item.zip === params.zip)];
    },
  },
  Mutation: {
    weather: async (_: any, params: { data: WeatherInterface }) => {
      return [db.find((item) => item.zip === params.data.zip)];
    },
  },
};
