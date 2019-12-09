import React from 'react'
import Layout from '../components/Layout'
import fetch from 'node-fetch'

const Index = (props) => (
    <Layout>
        <p>Hello Next.js</p>
        {props.data.access_token}
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('http://localhost:3000/api/token');
    const json = await res.json();
    return {
        data: json.data
    };
};

export default Index
