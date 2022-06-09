module.exports = async () => {
    const res = await fetch('http://localhost:1337/api/projects',
        {
            method: 'GET',
            headers : {
                Authorization: "Bearer 6d1e960bc7cb9a1d2459ac05e98c4f9e8bb84f515385473f27d314d3b035c914b787eeb9fb23de21cad2b510fec63309f322afd859c96d97ae207324fd4ed30022891dff745c1dbb27ea94952dbc35572624e26fc3f5a0410f04c817c474f2978cb17203b745f83bf01bafe10cb9c9e38dd1e7ef65c14859bb03d2de43cbbaa4"
            }
        });
    const projects = await res.json();
    return [
        { url: "/" },
        { url: "/projects", projects },

    ];
};