require('colors');


const showMenu = () => {
    return new Promise( resolve => {
        console.clear();
        console.log('============================='.green);
        console.log('====  Select an option   ===='.green);
        console.log('=============================\n'.green);
        
        console.log(`${'1'.green}. Create a task`);
        console.log(`${'2'.green}. List tasks`);
        console.log(`${'3'.green}. List completed tasks`);
        console.log(`${'4'.green}. List pending tasks`);
        console.log(`${'5'.green}. Complete task(s)`);
        console.log(`${'6'.green}. Delete a task`);
        console.log(`${'0'.green}. Exit\n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Enter your choose: ', (opt) => {
            readLine.close();
            resolve(opt);
        });
    });
};

const pause = () => {
    return new Promise( resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPress ${'ENTER'.green} to continue \n`, (opt) => {        
            readLine.close();
            resolve();
        });
    });
};

module.exports = {
    showMenu,
    pause
}