const request = require('request');
const cheerio = require('cheerio');

request("https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/full-scorecard", callback);


function callback(error, response, html) {

    if(!error){
        const manipulationtool = cheerio.load(html);
        let comment = manipulationtool(".Collapsible__contentInner tbody a.small");

        for(let i=0;i<comment.length;i++){

            let names=manipulationtool(comment[i]).text();
            let href = manipulationtool(comment[i]).attr("href");
            dob(names,"https://www.espncricinfo.com"+href);
        }    
}
}
function dob(names,href){
    request(href, function(error,response,html){
        const manipulationtool1=cheerio.load(html);
        let list=manipulationtool1(".player-card-description.gray-900");
        let c= manipulationtool1(list[1]).text();
        console.log(names);
        console.log(c);
    });         
}