//const { showMenu, pause } = require('./helpers/messages');

require('colors');
const { saveInfo, readInfo } = require('./helpers/file');
const { inquireMenu, pause, readInput, listTasksToDelete, getConfirm } = require('./helpers/inquirer');
const Task = require('./models/Task');
const Tasks = require('./models/Tasks');


console.clear();

const main = async() => {

    let opt = '';
    const tasks = new Tasks();

    const taskFromFile = readInfo();
    if(taskFromFile){
        tasks.loadFromFile(taskFromFile);
    }

    do {
        opt = await inquireMenu();
        
        switch(opt){
            case 1:
                const desc = await readInput('Type a task description');
                tasks.createTask(desc);
                break;
            case 2:
                console.log(tasks.listAllTask());
                break;
            case 3:
                console.log(tasks.listFilteredTasks(true));
                break;
            case 4:
                console.log(tasks.listFilteredTasks(false));
                break;
            case 6:
                const id = await listTasksToDelete( tasks.listOfTask);
                const confirm = await getConfirm('Are you sure?');
                if(confirm)
                    tasks.deleteTask(id);
        }

        saveInfo(JSON.stringify(tasks.listOfTask));

        if(opt !== 0) await pause();
    } while (opt !== 0);    
    console.clear();
}


main();

