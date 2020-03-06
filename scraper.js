const cheerio = require("cheerio");
const axios = require("axios");

const siteURL = "https://basketball-reference.com"

const teams = new Set();
const number = new Set();

const fetchData = async () => {
    const result = await axios.get(siteURL);
    return cheerio.load(result.data);
}

const results = async () => {
    const $ = await fetchData();

    $("th.left a").each((index, element) => {
        teams.add({url: siteURL+($(element).attr('href')), 
        teamName: $(element).attr('title')
    });
    })

    console.log(teams);
    
    return {
        teams: [...teams]
    }
}

module.exports = results;