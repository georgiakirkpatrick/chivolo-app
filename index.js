// The 'use strict' expression executes JavaScript code in strict mode, which prevents the use of undeclared
// variables.
'use strict';

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
            $('main').append(`
                <article class="item" data-key="${vid}">
                    <img src=${vidThumbnail} alt=${vidTitle} class="thumb">
                    <h4 class="title">${vidTitle}<span class="show"> | Bino and Fino</span></h4>
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
            <iframe width="560" height="315" 
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

