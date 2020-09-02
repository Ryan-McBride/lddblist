const axios = require('axios');
const fs = require('fs');

const list = fs.readFileSync('input.csv', 'utf-8');
const parsedList = list.split('\r\n').filter((val) => val !== '').map((val) => val.split(','));

if (fs.existsSync('./output.csv')) {
  fs.unlink('./output.csv', (err) => {
    if (err) throw err;
    console.log('old output file deleted');
  });
}

parsedList.forEach((val) => {
  const searchString = val[0].replace(/ /g, '+');
  const url = `https://www.lddb.com/search.php?search=${searchString}&sort=title&format=ld`;
  axios.get(url)
    .then((response) => {
      if (response.data.includes('Database found')) {
        console.log(`${val[0]} has results`);
        fs.appendFileSync('output.csv', `${val[0]}, ${url}\n`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
