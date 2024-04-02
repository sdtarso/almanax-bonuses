import fs from "fs";

export const saveFile = (data, fileName = "almanax.json") => {
  fs.writeFile(`./output/${fileName}`, data, (err) => {
    if (err) throw err;
    console.log("File saved as", fileName);
    console.log("Script finished:", new Date());
  });
};

export const readFile = (path) => {
  try {
    return JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  } catch (e) {
    return false;
  }
};
