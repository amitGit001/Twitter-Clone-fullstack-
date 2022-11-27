$( document).ready(()=>{

    $.get("/api/posts", results => {
        outPutPosts(results, $(".postsContainer"))
    })
})

function outPutPosts(results, container){
    container.html("");

    results.forEach(result => {
        var html = createPostHtml(result);
        container.append(html);
    })

    if(results.length == 0)
    {
        container.append("<span class='noResults'>'Nothing to show'</span>");
    }
}