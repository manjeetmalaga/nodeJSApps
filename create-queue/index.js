const createQueue = (tasks, maxNumOfWorkers = 4) => {
    let numOfWorkers = 0;
    let taskIdx = 0;

    return new Promise(resolve => {
        const handleResult = idx => result => {
            tasks[idx] = result;
            numOfWorkers--;
            getNextTask();
        }        

        const getNextTask = () => {
            if ((numOfWorkers < maxNumOfWorkers) && (taskIdx < tasks.length)) {
                tasks[taskIdx]()
                    .then(handleResult(taskIdx))
                    .catch(handleResult(taskIdx));
                
                taskIdx++;
                numOfWorkers++;
                getNextTask();
            } else if (numOfWorkers === 0 && taskIdx === tasks.length) {
                resolve(tasks);
            }
        }

        getNextTask();
    })
}

const createTask = (value) => () => {
    if (value === 6) 
        return Promise.reject(new Error("Sorry"));
    return new Promise(resolve => setTimeout(() => resolve(value), value));
}


createQueue([
    createTask(1000),
    createTask(20),
    createTask(80),
    createTask(500),
    createTask(100)
]).then(result => console.log(result));
