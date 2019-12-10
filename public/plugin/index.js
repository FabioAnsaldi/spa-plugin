var config = {
    uid: 'A7C6jXi8clOZ', //needed for identify resources of the that user and billing stuff
    container: 'bee-plugin-container', //Identifies the id of div element that contains BEE Plugin
    language: 'en-US',
    onSave: (jsonFile, htmlFile) => {
        console.log('onSave', jsonFile, htmlFile)
    },
    onSaveAsTemplate: (jsonFile) => {
        console.log('onSaveAsTemplate', jsonFile)
    },
    onSend: (htmlFile) => {
        console.log('onSend', htmlFile)
    },
    onError: (errorMessage) => {
        console.log('onError ', errorMessage)
    }
};
const beeTest = window.BeePlugin.create(window.token, config, function(instance) {
    bee = instance;
    console.log(instance);
    // You may now use this instance...
});

console.log(beeTest);