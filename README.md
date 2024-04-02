# Alamnax Bonuses

Simples crawler to fetch every alamanax bonuses days and serve into a file

## How to Run

Install the project

```bash
npm i
```

Run the command to fetch the data

```bash
npm run fetch
```

By default it will create a alamax.json file under the `output` folder (not versioned).
If you want to create a csv file, pass the csv flag to the script like so.

```bash
npm run fetch -- csv
```

### Steps

- [x] Setup the project
- [x] Fetch the alamanax day and extract the info (Formated,date, bonus type and description)
- [x] Create fn to iterate over the year
- [x] Fetch every day and save to a single array
- [x] Check for data in json before fetching
- [x] Create option so save file as csv
- [x] Save to csv
