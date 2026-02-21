function change_page(newPage)
{
    const requestedIndex = Math.min(Math.max(newPage - 1, 0), {{ last_index }});
    const posts = {{ posts | jsonify }};
    window.Location.href = {{ site.url }} + posts[requestedIndex].url;
}