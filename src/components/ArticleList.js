import React from "react";
import Article from "./Article";

function ArticleList({posts})
{
    //console.log(posts);
    let myArticlesArr = null;
    if (posts === undefined || posts === null);
    else
    {
        myArticlesArr = posts.map((post) => {
            return (
                <Article key={post.id}
                    title={post.title}
                    preview={post.preview}
                    date={post.date}
                    minutes={post.minutes} />
            );
        });
    }
    //console.log(myArticlesArr);

    return (
        <main>
            {myArticlesArr}
        </main>
    );
}

export default ArticleList;
