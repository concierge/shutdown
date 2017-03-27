const shutdownResponses = [
    $$`Good Night`,
    $$`I don't blame you`,
    $$`There you are`,
    $$`Please.... No, Noooo!`
];

exports.run = (api, event) => {
    api.sendMessage(api.random(shutdownResponses), event.thread_id);
    exports.platform.shutdown();
    return true;
};
