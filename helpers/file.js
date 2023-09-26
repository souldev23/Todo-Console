const fs = require('fs');

const file = './db/tasks.json';

const saveInfo = (data) => {
    fs.writeFileSync(file, data);
};

const readInfo = () => {
    if(!fs.existsSync(file))
        return null;
    const info = fs.readFileSync(file, {encoding: 'utf-8'});
    const data = JSON.parse(info);

    return data;
};

module.exports = {
    saveInfo,
    readInfo
}