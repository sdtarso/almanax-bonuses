import {
  fetchAlmanaxDay,
  getYearRange,
  parseJsonToCsv,
  saveFile,
} from "./src/index.js";

(async () => {
  console.log("Script started:", new Date());

  const { start, end } = getYearRange();
  const buffer = [];
  const [, , fileType = "json"] = process.argv;

  const current = new Date(start);
  while (current < end) {
    current.setDate(current.getDate() + 1);
    const data = await fetchAlmanaxDay(current);
    buffer.push(data);
  }

  if (fileType === "json") {
    saveFile(JSON.stringify(buffer));
    return;
  }

  const csvParsed = parseJsonToCsv(buffer);
  saveFile(csvParsed, "almanax.csv");
})();
