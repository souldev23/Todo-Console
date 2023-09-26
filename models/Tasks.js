const Task = require("./Task");

class Tasks {    

    constructor(){
        this._list = {};
    }

    get listOfTask(){
        const list = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }

    deleteTask( id = ''){
        if(this._list[id]){
            delete this._list[id];
        }
    }

    loadFromFile(list = []){
        list.forEach(task => {
            this._list[task.id] = task;
        });
    }

    createTask( desc = ''){
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    listAllTask (){
        let allTask = '';
        let listIdex = 0;
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            listIdex++;
            allTask += `${(listIdex + '.').green} ${task.desc} :: ${task.completedOn ? 'Completed'.green : 'Pending'.red}\n`;
        });
        return allTask;
    }

    listFilteredTasks( filter = true ){
        let FilteredTasks = ''
        let listIdex = 0;
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            listIdex++;
            if(filter)
            {
                if(task.completedOn)
                FilteredTasks += `${(listIdex + '.').green} ${task.desc}\n`;
            }else{
                if(!task.completedOn)
                FilteredTasks += `${(listIdex + '.').green} ${task.desc}\n`;
            }

        });
        return FilteredTasks;
    }

}

module.exports = Tasks;