function slave (cb) {

    function start () {
        console.log("Запустили cлейв");
        cb();
    }
    return {
        start
    }
}


