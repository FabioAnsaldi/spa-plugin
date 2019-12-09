import beefree from "../../modules/beefree";

const getInitialProps = async function() {
    const data = await new Promise(
        (resolve, reject) => {
            beefree.auth(process.env.CLIENT_ID, process.env.CLIENT_SECRET, function (err, data) {
                if (err) reject(err);
                resolve(data);
            });
        }
    );
    return {
        data
    };
};

export default async (req, res) => {
    const data = await getInitialProps();
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(data));
}