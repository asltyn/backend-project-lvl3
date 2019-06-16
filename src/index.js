import { promises as fs } from 'fs';
import path from 'path';
import axios from 'axios';

export default (httpAddress, pathToSavingDirectory) => {
  const url = new URL(httpAddress);
  const fileName = `${(url.hostname + url.pathname).replace(/[^a-x]/gi, '-')}.html`;
  const pathToFile = path.resolve(pathToSavingDirectory, fileName);
  return axios.get(httpAddress).then(response => fs.writeFile(pathToFile, response.data));
};
