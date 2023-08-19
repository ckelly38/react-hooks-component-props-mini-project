import React from "react";

function Article({title, preview, minutes, date = "January 1, 1970"})
{
    let minutesisnotvalid = false;
    if (minutes === undefined || minutes === null || isNaN(minutes))
    {
        minutesisnotvalid = true;
    }
    else
    {
        if (minutes < 0) minutesisnotvalid = true;
        //else;//do nothing
    }

    const mycupimgchar = "☕️";//for less than 30 minutes add one every 5 minutes
    const mybrkfstimgchar = "🍱";//for 30 minutes or more add one every 10 minutes
    
    let mystr = null;
    if (minutesisnotvalid);
    else
    {
        let roundnearestfive = (minutes < 30);
        const myroundnum = (roundnearestfive ? 5 : 10);
        let numcupsorbkfst = Math.trunc((minutes / myroundnum) + ((minutes % myroundnum === 0) ? 0 : 1));
        mystr = "•";
        for (let i = 0; i < numcupsorbkfst; i++)
        {
            if (roundnearestfive) mystr += mycupimgchar;
            else mystr += mybrkfstimgchar;
        }
        mystr += "" + minutes + " min read";
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {mystr}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
