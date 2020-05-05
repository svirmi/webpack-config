async function start() {
    return  await Promise.resolve('async in action')
}

start().then(console.log);

class Util {
    static id = Date.now();
}

console.log("Util ID: ", Util.id);
