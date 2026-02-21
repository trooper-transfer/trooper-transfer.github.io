function change_page(newPage)
{
    const requestedIndex = Math.min(Math.max(newPage - 1, 0), {{ last_index }});
    const posts = {{ posts | jsonify }};
    const baseUrl = {{ site.url }};

    console.log(baseUrl);
    window.Location.href = posts[requestedIndex].url;
}