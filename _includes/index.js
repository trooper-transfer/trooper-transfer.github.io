const pages = {{ posts | map: "url" | jsonify }};
const baseUrl = "{{ site.url }}";

function change_page(newPage)
{
    const requestedIndex = Math.min(Math.max(newPage - 1, 0), 2);
    window.Location.href = pages[requestedIndex];
}