const fs = require('fs'), readLine = require('readline');

//rename file
try {
    fs.renameSync('task2/text.txt', 'task2/info.txt');
    console.log('Rename complete.');
} catch (error) {
    throw error;
}

//read file line by line
const lineReader = readLine.createInterface({
    input: fs.createReadStream('task2/greet.text')
});

lineReader.on('line', (line) => {
    console.log(line);
})

//read file sync
let content = null;
try {
    content = fs.readFileSync('task2/data.json');
    console.log(content);
} catch (error) {
    throw error;
}

//read file async
fs.readFile('task2/data.json', (err, data) => {
    if(err)
        throw err;
    console.log(data);
});

//write to file
try {
    fs.writeFileSync('task2/info.txt', content);
} catch (error) {
    throw error;
}

//create durectory
if(!fs.existsSync('task2/newdir'))
    fs.mkdirSync('task2/newdir');


//remove file
fs.unlink('task2/info.txt', (err) => {
    if(err)
        throw err;
    console.log('File removed.');
});