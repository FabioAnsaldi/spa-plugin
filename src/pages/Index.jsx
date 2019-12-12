import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import Select from '../components/Select'
import Save from '../components/Save'

const Index = (props) => {
    const [data, setData] = useState({value: 'promo'});
    const init = () => {
        window.template = JSON.stringify({});
        const onSaveJsonFile = function (jsonFile) {
            window.template = window.localStorage.getItem("template") || JSON.stringify({});
            var obj = JSON.parse(window.template);
            obj.json = jsonFile;
            window.localStorage.setItem("template", JSON.stringify(obj));
        };
        const onSaveHtmlFile = function (htmlFile) {
            window.template = window.localStorage.getItem("template") || JSON.stringify({});
            var obj = JSON.parse(window.template);
            obj.html = htmlFile;
            window.localStorage.setItem("template", JSON.stringify(obj));
        };
        const config = {
            uid: 'IlMioUserIdInventato', //needed for identify resources of the that user and billing stuff
            container: 'bee-plugin-container', //Identifies the id of div element that contains BEE Plugin
            language: 'en-US',
            onSave: (jsonFile, htmlFile) => {
                console.log('onSave', jsonFile, htmlFile);
                onSaveJsonFile(jsonFile);
                onSaveHtmlFile(htmlFile);
            },
            onSaveAsTemplate: (jsonFile) => {
                console.log('onSaveAsTemplate', jsonFile);
            },
            onSend: (htmlFile) => {
                console.log('onSend', htmlFile)
            },
            onError: (errorMessage) => {
                console.log('onError ', errorMessage)
            }
        };

        window.beePluginInstance;
        window.BeePlugin.create(window.token, config, function(bee) {
            window.template = window.localStorage.getItem("template") || JSON.stringify({});
            let json = JSON.parse(window.template).json;
            let value = JSON.parse(window.template).name;
            if(json) {
                bee.start(JSON.parse(json));
                setData({value: value});
                return;
            }
            let endpoint = "/promo.json";
            window.beePluginInstance = bee;
            $.get(endpoint)
                .done(function(data) {
                    bee.start(data);
                    window.template = window.localStorage.getItem("template") || JSON.stringify({});
                    let obj = JSON.parse(window.template);
                    obj.name = 'promo';
                    window.localStorage.setItem("template", JSON.stringify(obj));
                });
        });
    };
    useEffect(() => {
        init();
    }, []);
    return (
        <Layout>
            <br/>
            <Select data={data}/>
            <span>&nbsp;</span>
            <Save/>
            <hr/>
            <div id="bee-plugin-container" style={{height: '500px'}}/>
        </Layout>
    )
};

export default Index
