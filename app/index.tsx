const axios = require('axios')

// An api key is emailed to you when you sign up to a plan
// Get a free API key at https://api.the-odds-api.com/
const apiKey = 'fc59dfe46d29792a9af1e9f28dbe1360'

const sportKey = 'upcoming' // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

const regions = 'us' // uk | us | eu | au. Multiple can be specified if comma delimited

const markets = 'h2h' // h2h | spreads | totals. Multiple can be specified if comma delimited

const oddsFormat = 'decimal' // decimal | american

const dateFormat = 'iso' // iso | unix

/*
    First get a list of in-season sports
        the sport 'key' from the response can be used to get odds in the next request

*/
axios.get('https://api.the-odds-api.com/v4/sports', {
    params: {
        apiKey
    }
})
.then((response: { data: any }) => {
    console.log(response.data);
})

.catch((error: { data: any }) => {
    console.log('Error status', error.data.status)
    console.log(error.data)
})


/*
    Now get a list of live & upcoming games for the sport you want, along with odds for different bookmakers
    This will deduct from the usage quota
    The usage quota cost = [number of markets specified] x [number of regions specified]
    For examples of usage quota costs, see https://the-odds-api.com/liveapi/guides/v4/#usage-quota-costs

*/
axios.get(`https://api.the-odds-api.com/v4/sports/${fc59dfe46d29792a9af1e9f28dbe1360}/odds`, {
    params: {
        apiKey,
        regions,
        markets,
        oddsFormat,
        dateFormat,
    }
})
.then((response: { data: any }) => {
    // response.data.data contains a list of live and 
    //   upcoming events and odds for different bookmakers.
    // Events are ordered by start time (live events are first)
    console.log(JSON.stringify(response.data))

    // Check your usage
    console.log('Remaining requests',response.data['x-requests-remaining'])
    console.log('Used requests',response.data['x-requests-used'])

})
.catch((error: { data: any })=> {
    console.log('Error status', error.data.status)
    console.log(error.data)
})