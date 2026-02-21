const pages_json = "{{ posts | map: "url" }}";

function change_page(newPage)
{
    const requestedIndex = Math.min(Math.max(newPage - 1, 0), 2);
    console.log(pages);
    
    //window.Location.href = posts[requestedIndex].url;
}