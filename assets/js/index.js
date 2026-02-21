---
---

{% assign posts = site.posts | where: "project", page.project | sort: "date" %}
    
{% assign curr_index = -1 %}
{% for post in posts %}
    {% if post.id == page.id %}
        {% assign curr_index = forloop.index0 %}
        {% break %}
    {% endif %}
{% endfor %}

console.log("{{ curr_index }}");