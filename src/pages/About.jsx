import React from 'react'
import Layout from '../components/Layout'

const About = () => (
    <Layout>
        <h3>What is BEE?</h3>
        <p>Long story short: it's a drag-&-drop editor to author responsive design emails. It makes it easy and quick to create a great-looking email message that can be used to send a company newsletter, announce a new product, promote a sale, etc.</p>
        <p>You can embed it into your application :) Using with the BEE free version, you can embed the editor anywhere, regardless of the pricing model.</p>
        <h3>How to use it</h3>
        <ul>
            <li>go to the developer portal <a href="https://developers.beefree.io/signup" rel="nofollow">https://developers.beefree.io/signup</a></li>
            <li>sign up with the free plan</li>
            <li>create your application</li>
            <li>get the clientId and the clientSecret</li>
        </ul>
    </Layout>
);

export default About