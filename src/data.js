import { getDB } from './utils';

export function writeDataToDB(table) {
  const DB = getDB();
  const [numofRows, numofCols] = [table.length, table[0].length];
  const range = DB.getRange(1, 1, numofRows, numofCols);
  range.setValues(table);
}

export function parseData(response) {
  return response.split('\n').map(row => row.split(','));
}

export function fetchData() {
  // TODO get config
  return UrlFetchApp
    .fetch('http://ghost.mggen.nau.edu:8081/basic/csv/lite')
    .getContentText();
}

// In order for functions to be exposed to the Google Apps Script
// Engine, we need to register them on the `global` context.
// See https://github.com/fossamagna/gas-webpack-plugin
// for more details.

global.writeDataToDB = writeDataToDB;
global.parseData = parseData;
global.fetchData = fetchData;
