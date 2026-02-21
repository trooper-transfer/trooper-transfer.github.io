function change_page(newPage)
{
    const requestedIndex = min(max(newPage - 1, 0), {{ last_index }});
    console.log(requestedIndex);
    console.log("{{ curr_page }}");
}