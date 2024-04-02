const replacer = function (_, value) {
  return value === null ? "" : value;
};

export const parseJsonToCsv = (json) => {
  const header = Object.keys(json[0]);
  const csv = json.map((row) =>
    header.map((key) => JSON.stringify(row[key], replacer)).join(",")
  );
  csv.unshift(header.join(","));
  return csv.join("\r\n");
};
