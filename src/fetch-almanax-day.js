import fetch from "node-fetch-cache";
import { readFile } from "./file-helper.js";

const BASE_URL = "https://api.dofusdb.fr/almanax";
const almanaxData = readFile("../output/almanax.json");

const stripTags = (input) => input.replace(/<\/?[^>]+(>|$)/g, "");

const getQueryDate = (date) => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

const checkDayInFile = (day) => {
  if (!almanaxData) return false;

  return almanaxData.find(({ Data }) => Data === day);
};

const parseDateToBrazilianFormat = (date) => {
  const [month, day, year] = date.split("/");

  return `${day}/${month}/${year}`;
};

export const fetchAlmanaxDay = async (date = new Date()) => {
  const queryDate = getQueryDate(date);
  const found = checkDayInFile(queryDate);
  if (!!found) {
    console.log(`Day ${queryDate} load from json file.`);
    return found;
  }

  console.log(`Fetching day ${queryDate} from API.`);
  const response = await fetch(`${BASE_URL}?date=${queryDate}`);
  const {
    name: { pt: name },
    desc: { pt: description },
  } = await response.json();
  return {
    Nome: name,
    Data: parseDateToBrazilianFormat(queryDate),
    Descrição: stripTags(description),
  };
};
