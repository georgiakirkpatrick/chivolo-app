// The 'use strict' expression executes JavaScript code in strict mode, which prevents the use of undeclared
// variables.
'use strict';

// The allChivoloPlaylists array includes information about all the shows approved for the Chivolo app.
const allChivoloPlaylists = [

    {playlistTitle: "Andi Mack",
    playlistId: "PLiv1IUQDVSNLrez97DYcPXJ4swHBaZDlb",
    recommendedMinAge: 10,
    iconImg: "images/andi-mack.png"},

    {playlistTitle: "Bino and Fino",
    playlistId: "PLWpyJMXD1C42sM5hjoKxgpYA606Q4KK8X",
    recommendedMinAge: 2,
    iconImg: "bino-and-fino.png"},

    {playlistTitle: "Blue's Clues",
    playlistId: "PL3qHjxSSl7AFH8-E_Oz2_G1scCUuYV_WW",
    recommendedMinAge: 3,
    iconImg: "images/blues-clues.jpg"},

    {playlistTitle: "Burka Avenger",
    playlistId: "PLWpyJMXD1C41AX7zXnbq9DO5SQvuwd0ot",
    recommendedMinAge: 7,
    iconImg: "images/burka-avenger.png"},

    {playlistTitle: "Chhota Bheem",
    playlistId: "PL0rMr_qVm_FLXkMOjpPleUrdD4GvHwYev",
    recommendedMinAge: "3",
    iconImg: "images/chhota-bheem.png"},

    {playlistTitle: "Dinosaur Train",
    playlistId: "PLa8HWWMcQEGRwHO2UzoBBWnbByuCpbRAE",
    recommendedMinAge: "3",
    iconImg: "images/dinosaur-train.png"},

    {playlistTitle: "Doc McStuffins",
    playlistId: "PL3ADDC3A56EAFB37C",
    recommendedMinAge: "4",
    iconImg: "images/doc-mcstuffins.png"},

    {playlistTitle: "Dora and Friends",
    playlistId: "PL3qHjxSSl7AFXgXVoF4cB6Wd1cjy50goi",
    recommendedMinAge: "5",
    iconImg: "images/dora-and-friends.png"},

    {playlistTitle: "Elena of Avalor",
    playlistId: "PL2m1vjiMH_hPMvLfmmiMXQUIVMrr_JovZ",
    recommendedMinAge: "5",
    iconImg: "images/elena-of-avalor.png"},

    {playlistTitle: "Legendary Dudas",
    playlistId: "PLJb1AL9zU1GqdTD3cvhjRCEHaxYBXUlXs",
    recommendedMinAge: "9",
    iconImg: "images/legendary-dudas.png"},

    {playlistTitle: "Lou and Lou",
    playlistId: "PL2m1vjiMH_hPDuAk-RYiciqlh6wf99onV",
    recommendedMinAge: "3",
    iconImg: "images/lou-and-lou.png"},

    {playlistTitle: "Molly of Denali",
    playlistId: "PLWpyJMXD1C42wh_BKrkVw1aC8znACSIUs",
    recommendedMinAge: "5",
    iconImg: "images/molly-of-denali.png"},

    {playlistTitle: "Mouk",
    playlistId: "PLbsU5JkEtkPQPQJBG52a1k9KckIQbuTaU",
    recommendedMinAge: "4",
    iconImg: "images/mouk.png"},

    {playlistTitle: "Nella the Princess Knight",
    playlistId: "PL3qHjxSSl7AFFYNsE2JNvFI_S8Q2Xw0jb",
    recommendedMinAge: "3",
    iconImg: "images/nella-the-princess-knight.png"},

    {playlistTitle: "Nina's World",
    playlistId: "PL_EANcmOcL7JcpmtUW6bRpPz6ov6UW55G",
    recommendedMinAge: "3",
    iconImg: "images/ninas-world.png"},

    {playlistTitle: "Reading Rainbow",
    playlistId: "PLWpyJMXD1C43xoD_ecslzUsgcps71xEKm",
    recommendedMinAge: "4",
    iconImg: "images/reading-rainbow.png"},

    {playlistTitle: "Sci Girls",
    playlistId: "PLeE9Z9we25wQVs5-eyjeq_aWLUin0PQeS",
    recommendedMinAge: "7",
    iconImg: "images/scigirls.png"},

    {playlistTitle: "Sesame Street",
    playlistId: "PL8TioFHubWFuzQJ8mGfvjv70pmuorq-ZM",
    recommendedMinAge: "2",
    iconImg: "images/sesame-street.png"},

    {playlistTitle: "Super Wings",
    playlistId: "nQOC8BAGD0YFJqr1R_XTbjokhRh2jv5",
    recommendedMinAge: "3",
    iconImg: "images/super-wings.png"},

    {playlistTitle: "Yo Gabba Gabba",
    playlistId: "PLc7QkGFtZUZ73cexJsrEzjXkiKxv5qi_N",
    recommendedMinAge: "3",
    iconImg: "images/yo-gabba-gabba.png"},
]

function showsByAgeGroup(age) {
    // this function will return the shows that are appropriate for children over the age specified.
}

// This jQuery function tells the enclosed functions to run When the page is done loading.
$(document).ready(function(){

    // This series of variables include Georgia's API Key (APIkey), which is required for using the YouTube APIs,
    // the playlist id (playlistID) for a selection of videos that feature diverse characters, and the base
    // URL (playlistItemsURL) for the playlistItem resource of the YouTube Data API.
    let APIkey='AIzaSyDzfQ-Btr2BRJm4kmrsYT6JqLTWu-RPbsk'
    let playlistID='PLWpyJMXD1C41280o8dCUfhPg9I97JbDUt'
    let playlistItemsURL='https://www.googleapis.com/youtube/v3/playlistItems'

    // The vidSelector function causes the video player to play a video selected by the user from the
    // video options.
    function vidSelector() {
        $('main').on('click', 'article', function() {
            let selectedVidID = $(this).attr('data-key')
            vidPlayer(selectedVidID)
        })
    }    

    // The vidLooper function creates a series of video options from the API response for the playlist in playlistID.
    // Video options are represented by video screenshots (vidThumbnail) with titles (vidTitle).
    function vidLooper(data) {
        for (let i = 1; i < data.items.length; i++) {
            let vidThumbnail = data.items[i].snippet.thumbnails.high.url
            let vidTitle = data.items[i].snippet.title
            let vid = data.items[i].snippet.resourceId.videoId
            $('main').prepend(`
                <article class="video-option" data-key="${vid}">
                    <img src=${vidThumbnail} alt=${vidTitle} class="vid-thumbnail">
                    <h4 class="title">${vidTitle}</h4>
                </article>
            `
            )    
        }
    }

    // The vidPlayer function inserts a YouTube iframe video player into the section element with a 'video' id
    // When the page loads, the vidPlayer will automatically start playing the first video in the playlist
    // specified by playlistID.
    function vidPlayer(vidID) {
        $('#video').html(`
            <iframe class="main-vid" width="560" height="315" 
            src="https://www.youtube.com/embed/${vidID}" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>`
        )
    }

    // The displayVids function passes the YouTube Data API response to the video player and the video looper.
    function displayVids(responseJson) {
        let data = responseJson
        let vidID = data.items[0].snippet.resourceId.videoId
        vidPlayer(vidID)
        vidLooper(data)
    }

    // The formatParams function sends a request to the YouTube Data API, then
    function formatParams(params) {
        const paramsItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            
            let formattedParams = paramsItems.join('&')
            
            console.log('`formattedParams` is', formattedParams)
            return formattedParams
    }

    // The getVids function sends a request to the YouTube Data API.
    function getVids() {
        console.log('`getVids` ran`')

        // The params variable is an object that contains information to include in the request.
        const params = {
            part: 'snippet',
            key: APIkey,
            playlistId: playlistID,
            maxResults: 20
        }

        // The paramsString variable formats the information contained in params for the request URL with the formatParams function.
        // The paramsString is inserted after the playlistItemsURL to create the apiURL, which 
        // will be sent as a request to the YouTube Data API.
        const paramsString = formatParams(params)
        const apiURL = `${playlistItemsURL}?${paramsString}`

        console.log('`apiURL` is', apiURL)

        // Once the apiURL is generated, it is sent to the YouTube Data API with fetch(apiURL).
        // If the response is ok, it is returned. If not, an error is thrown.
        fetch(apiURL)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                console.log('error text', response.statusText)    
            })
            .then(responseJson => {
                displayVids(responseJson)
                console.log('responseJson', responseJson)
            })
            .catch(err => {
                console.log(`Something went wrong: ${err.message}`);
              })
    }
    
    // Finally, the getVids and vidSelector functions are called to load the video player and video options
    // as soon as the page loads.
    getVids()
    vidSelector()
})