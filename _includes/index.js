function change_page(newPage, pages)
{
    const requestedIndex = Math.min(Math.max(newPage - 1, 0), {{ last_index }});
    const new_page_url = `{{ posts[$requestedIndex].url | absolute_url }}`;
    console.log(pages);
}