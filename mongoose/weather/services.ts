// here we will implement all the CRUD operations we need

import WeatherModel from "./model";
import { WeatherInterface } from "./interface";

// the .create() method is used in both creating and updating a dataset
export async function storeDocument(doc: WeatherInterface): Promise<boolean> {
  try {
    await WeatherModel.create(doc);
  } catch (err) {
    return false;
  }
  return true;
}

export async function findByZip(
  paramZip: string,
): Promise<Array<WeatherInterface> | null> {
  try {
    return await WeatherModel.findOne({ zip: paramZip });
  } catch (err) {
    console.log(err);
  }
  return [];
}

export async function updateByZip(
  paramZip: string,
  newData: WeatherInterface,
): Promise<boolean> {
  try {
    await WeatherModel.updateOne({ zip: paramZip }, newData);
    return true;
  } catch (err) {
    console.log(err);
  }
  return true;
}

export async function deleteByZip(paramsZip: string): Promise<boolean> {
  try {
    await WeatherModel.deleteOne({ zip: paramsZip });
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
}
