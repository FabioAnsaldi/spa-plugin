import React, {useEffect} from 'react'
import Layout from '../components/Layout'

const Index = (props) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "/plugin/index.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <Layout>
            <div id="bee-plugin-container" style={{height: '500px'}}/>
        </Layout>
    )
};

export default Index
