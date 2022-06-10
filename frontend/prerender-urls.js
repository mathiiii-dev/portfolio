module.exports = async function () {
    const res = await fetch(`https://portfolio-strapi-mathias.herokuapp.com/api/projects`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer be799decf5d25b77a22857c3e931221fd44e0f60f43d94ec164363de8b1cfe19c08d02effdb6b0192fac06dcc17bcc8335080d623cc46441435b0d451cca6617177d4d5735465037333ed09c84b5da5e81ceba24057110e314429032e608c0ed4a91b675de2e17ac99091821e0fe171999dda7b4d4f7f7e10ae57091e0e3f416`
            }
        })
    const data = await res.json();

    return [
        {
            url: '/'
        },
        {
            url: "/projects",
            title: "Projets",
            data
        }
    ];
};
