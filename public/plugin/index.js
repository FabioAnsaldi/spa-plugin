var config = {
    uid: 'IlMioUserIdInventato', //needed for identify resources of the that user and billing stuff
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
window.BeePlugin.create(window.token, config, function(bee) {
    var endpoint = "/base-m-bee.json";
    var template;
    $.get(endpoint)
        .done(function(data) {
            template = data;
            bee.start(template);
        });
    // You may now use this instance...
});