async function start() {
    return  await Promise.resolve('async in action')
}

start().then(console.log);
