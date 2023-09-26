const {v4: uuid} = require('uuid');

class Task {
    id = '';
    desc = '';
    completedOn = null;

    constructor(desc, ){
        this.id = uuid();
        this.desc = desc;
        this.completedOn = null;
    }
}

module.exports = Task;