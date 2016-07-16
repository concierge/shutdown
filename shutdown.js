var shutdownResponses = [$$`Good Night`, $$`I don't blame you`, $$`There you are`, $$`Please.... No, Noooo!`];

exports.run = function(api, event) {
    var index = Math.floor(Math.random() * shutdownResponses.length);
    api.sendMessage(shutdownResponses[index], event.thread_id);
    this.shutdown();
    return true;
};
