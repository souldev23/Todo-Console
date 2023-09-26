//This way to use inquirer works fine with inquirer version 8.2.5
const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `${'1.'.red} Create a task`
            },
            {
                value: 2,
                name: `${'2.'.red} List tasks`
            },
            {
                value: 3,
                name: `${'3.'.red} List completed tasks`
            },
            {
                value: 4,
                name: `${"4.".red} List pending tasks`
            },
            {
                value: 5,
                name: `${'5.'.red} Complete task(s)`
            },
            {
                value: 6,
                name: `${'6.'.red} Delete a task`
            },
            {
                value: 0,
                name: `${'0.'.red} Exit`
            },
        ]
    }
];

const inquireMenu = async() => {
    console.clear();
    console.log('============================='.green);
    console.log(`${'===='.green}  ${'Select an option'.bold}   ${'===='.green}`);
    console.log('=============================\n'.green);

    const {option} = await inquirer.prompt(questions);
    
    return option;
};

const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} to continue`
        }

    ];
    console.log('\n');
    await inquirer.prompt(question);
};

const readInput = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if(value.length === 0){
                return 'Please type a value';
            }
            return true;
        }
    }];

    const {desc} = await inquirer.prompt(question);
    return desc;
};

const listTasksToDelete = async( tasks = []) => {

    const choices = tasks.map( (task, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    });
    const questions = [{
        type: 'list',
        name: 'id',
        message: 'Delete',
        choices
    }];
    const {id} = await inquirer.prompt(questions);
    return id;
};

const getConfirm = async(message) => {
    const question = [{
        type: 'confirm',
        name: 'response',
        message
    }];
    const {response} = await inquirer.prompt(question);  
    return response;
};

module.exports = {
    inquireMenu,
    pause,
    readInput,
    listTasksToDelete,
    getConfirm
}