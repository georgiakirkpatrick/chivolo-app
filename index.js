'use strict'; 

$('.selected-profile').hide()
// This prevents profile settings to affect app content until a profile is selected by the user.
    
const allChivoloShows = [
// The allChivoloPlaylists array includes information about all the shows approved for the Chivolo app.
// YouTube Data API fetch details included in "apiUrl" in allChivoloShows:
    // API key used in fetch request is 'AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM'
    // playlistItems URL='https://www.googleapis.com/youtube/v3/playlistItems'
    // maxResults is set to 20

    {playlistTitle: "Bino and Fino",
    playlistId: "PLWpyJMXD1C42sM5hjoKxgpYA606Q4KK8X",
    recommendedMinAge: 2,
    iconImg: "images/bino-and-fino.png",
    imgAlt: "Bino-and-Fino",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PLWpyJMXD1C42sM5hjoKxgpYA606Q4KK8X&maxResults=20`
    },

    {playlistTitle: "Andi Mack",
    playlistId: "PLiv1IUQDVSNLrez97DYcPXJ4swHBaZDlb",
    recommendedMinAge: 10,
    iconImg: "images/andi-mack.png",
    imgAlt: "Andi-Mack",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PLiv1IUQDVSNLrez97DYcPXJ4swHBaZDlb&maxResults=20`
    },

    {playlistTitle: "Blue's Clues",
    playlistId: "PL3qHjxSSl7AFH8-E_Oz2_G1scCUuYV_WW",
    recommendedMinAge: 3,
    iconImg: "images/blues-clues.png",
    imgAlt: "Blues-Clues",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PL3qHjxSSl7AFH8-E_Oz2_G1scCUuYV_WW&maxResults=20`
    },

    {playlistTitle: "Burka Avenger",
    playlistId: "PLWpyJMXD1C41AX7zXnbq9DO5SQvuwd0ot",
    recommendedMinAge: 7,
    iconImg: "images/burka-avenger.png",
    imgAlt: "Burka-Avenger",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PLWpyJMXD1C41AX7zXnbq9DO5SQvuwd0ot&maxResults=20`
    },

    {playlistTitle: "Chhota Bheem",
    playlistId: "PL0rMr_qVm_FLXkMOjpPleUrdD4GvHwYev",
    recommendedMinAge: 3,
    iconImg: "images/chhota-bheem.png",
    imgAlt: "Chhota-Bheem",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PL0rMr_qVm_FLXkMOjpPleUrdD4GvHwYev&maxResults=20`
    },

    {playlistTitle: "Dinosaur Train",
    playlistId: "PLa8HWWMcQEGRwHO2UzoBBWnbByuCpbRAE",
    recommendedMinAge: 3,
    iconImg: "images/dinosaur-train.png",
    imgAlt: "Dinosaur-Train",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PLa8HWWMcQEGRwHO2UzoBBWnbByuCpbRAE&maxResults=20`
    },

    {playlistTitle: "Doc McStuffins",
    playlistId: "PL3ADDC3A56EAFB37C",
    recommendedMinAge: 4,
    iconImg: "images/doc-mcstuffins.png",
    imgAlt: "Doc-McStuffins",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PL3ADDC3A56EAFB37C&maxResults=20`
    },

    {playlistTitle: "Dora and Friends",
    playlistId: "PL3qHjxSSl7AFXgXVoF4cB6Wd1cjy50goi",
    recommendedMinAge: 5,
    iconImg: "images/dora-and-friends.png",
    imgAlt: "Dora-and-Friends",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PL3qHjxSSl7AFXgXVoF4cB6Wd1cjy50goi&maxResults=20`
    },

    {playlistTitle: "Elena of Avalor",
    playlistId: "PL2m1vjiMH_hPMvLfmmiMXQUIVMrr_JovZ",
    recommendedMinAge: 5,
    iconImg: "images/elena-of-avalor.png",
    imgAlt: "Elena-of-Avalor",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PL2m1vjiMH_hPMvLfmmiMXQUIVMrr_JovZ&maxResults=20`
    },

    {playlistTitle: "Legendary Dudas",
    playlistId: "PLJb1AL9zU1GqdTD3cvhjRCEHaxYBXUlXs",
    recommendedMinAge: 9,
    iconImg: "images/legendary-dudas.png",
    imgAlt: "Legendary-Dudas",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PLJb1AL9zU1GqdTD3cvhjRCEHaxYBXUlXs&maxResults=20`
    },

    {playlistTitle: "Lou and Lou",
    playlistId: "PL2m1vjiMH_hPDuAk-RYiciqlh6wf99onV",
    recommendedMinAge: 3,
    iconImg: "images/lou-and-lou.png",
    imgAlt: "Lou-and-Lou",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PL2m1vjiMH_hPDuAk-RYiciqlh6wf99onV&maxResults=20`
    },

    {playlistTitle: "Molly of Denali",
    playlistId: "PLWpyJMXD1C42wh_BKrkVw1aC8znACSIUs",
    recommendedMinAge: 5,
    iconImg: "images/molly-of-denali.png",
    imgAlt: "Molly-of-Denali",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PLWpyJMXD1C42wh_BKrkVw1aC8znACSIUs&maxResults=20`
    },

    {playlistTitle: "Mouk",
    playlistId: "PLbsU5JkEtkPQPQJBG52a1k9KckIQbuTaU",
    recommendedMinAge: 4,
    iconImg: "images/mouk.png",
    imgAlt: "Mouk",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PLbsU5JkEtkPQPQJBG52a1k9KckIQbuTaU&maxResults=20`
    },

    {playlistTitle: "Nella the Princess Knight",
    playlistId: "PL3qHjxSSl7AFFYNsE2JNvFI_S8Q2Xw0jb",
    recommendedMinAge: 3,
    iconImg: "images/nella-the-princess-knight.png",
    imgAlt: "Nella-the-Princess-Knight",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PL3qHjxSSl7AFFYNsE2JNvFI_S8Q2Xw0jb&maxResults=20`
    },

    {playlistTitle: "Nina's World",
    playlistId: "PL_EANcmOcL7JcpmtUW6bRpPz6ov6UW55G",
    recommendedMinAge: 3,
    iconImg: "images/ninas-world.png",
    imgAlt: "Ninas-World",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PL_EANcmOcL7JcpmtUW6bRpPz6ov6UW55G&maxResults=20`
    },

    {playlistTitle: "Sci Girls",
    playlistId: "PLeE9Z9we25wQVs5-eyjeq_aWLUin0PQeS",
    recommendedMinAge: 7,
    iconImg: "images/scigirls.png",
    imgAlt: "Sci-Girls",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PLeE9Z9we25wQVs5-eyjeq_aWLUin0PQeS&maxResults=20`
    },

    {playlistTitle: "Sesame Street",
    playlistId: "PL8TioFHubWFuzQJ8mGfvjv70pmuorq-ZM",
    recommendedMinAge: 2,
    iconImg: "images/sesame-street.png",
    imgAlt: "Sesame-Street",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PL8TioFHubWFuzQJ8mGfvjv70pmuorq-ZM&maxResults=20`
    },

    {playlistTitle: "Super Wings",
    playlistId: "PL-nQOC8BAGD0YFJqr1R_XTbjokhRh2jv5",
    recommendedMinAge: 3,
    iconImg: "images/super-wings.png",
    imgAlt: "Super-Wings",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PL-nQOC8BAGD0YFJqr1R_XTbjokhRh2jv5&maxResults=20`
    },

    {playlistTitle: "Yo Gabba Gabba",
    playlistId: "PLc7QkGFtZUZ73cexJsrEzjXkiKxv5qi_N",
    recommendedMinAge: 3,
    iconImg: "images/yo-gabba-gabba.png",
    imgAlt: "Yo-Gabba-Gabba",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB62M6Hvk8QxhFLK4BgJTkjS6mz_iQm4vM&playlistId=PLc7QkGFtZUZ73cexJsrEzjXkiKxv5qi_N&maxResults=20`
    },
]

let allChivoloShowsWithItems = []
// This array combines all the info from allChivoloShows array above with video detials from the YouTube Data API.

// Main page
    // fetchAllShowData runs on launch and supplies the Chivolo app with video data from the YouTube Data API.
    // filterOutPrivateVids filters out private videos in the playlist before 
    // vidPlayer inserts a YouTube iframe video player at the top of the page.
    // displayShowAndVidOptions creates a series of video and show options based on the profile age input by the user on the Grownups page (if not specified, all show info will be displayed).
    // enableShowButtons links show icons to show playlists.

function enableShowButtons() {
    $('.js-show-option-container').on('click', '.js-show-option', function() {
        let selectedShow = $(this).attr('data-show')

        showSelector(selectedShow)
    })
}

function vidPlayer(vidID) {
    $('.js-main-vid-container').html(`
        <iframe class="main-vid" width="560" height="315" 
        src="https://www.youtube.com/embed/${vidID}" frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen></iframe>`)
}

function displayLatestVid(latestVidForShow) {
    let vidThumbnail = latestVidForShow.snippet.thumbnails.high.url
    let vidTitle = latestVidForShow.snippet.title
    let vid = latestVidForShow.snippet.resourceId.videoId
    $('.js-video-section').append(`
            <article class="video-option" data-key="${vid}" data-thumb="${vidThumbnail}" data-title="${vidTitle}">
                <img src=${vidThumbnail} alt=${vidTitle} class="vid-thumbnail">
                <h4 class="title">${vidTitle}</h4>
            </article>
        `
    )
}

function displayShowOption(show) {
    $('.js-show-option-container').append(`
        <a href="#main">
            <div class="show-option js-show-option" data-show=${show.imgAlt}>
                <img src=${show.iconImg} alt=${show.imgAlt} class="show-png">
                <h2>${show.playlistTitle}</h2>
            </div>
        </a>`
    )
}

function displayShowAndVidOptions() {

    let defaultAge = 16
    let selectedProfile = document.getElementById("selected-profile")
    let selectedAge = $('.js-selected-profile-age').attr('data-age')

    console.log('`displayShowAndVidOptions` ran and `selectedAge` is ', selectedAge)

    if ( selectedProfile.style.display === "none") {

        for (let i = 0; i < allChivoloShowsWithItems.length; i++) {

            let show = allChivoloShowsWithItems[i]
            let latestVidForShow = allChivoloShowsWithItems[i].showItems[0]

            if (show.recommendedMinAge <= defaultAge) {
            
                displayShowOption(show)
                displayLatestVid(latestVidForShow)
            }
        }

    } else {

        for (let i = 0; i < allChivoloShowsWithItems.length; i++) {

            let show = allChivoloShowsWithItems[i]
            let latestVidForShow = allChivoloShowsWithItems[i].showItems[0]

            if (show.recommendedMinAge <= selectedAge) {
            
                displayShowOption(show)
                displayLatestVid(latestVidForShow)
            }
        }
    }
}

function vidSelector() {
    $('main').on('click', '.video-option', function() {
        let selectedVidId = $(this).attr('data-key')
        let vidThumbnail = $(this).attr('data-thumb')
        let vidTitle = $(this).attr('data-title')

        $('.js-main-vid-container').show()
        $('.js-video-section').show()
        $('header').addClass('fixed')
        $('.history').hide()
        $('main').addClass('main-padding')

        vidPlayer(selectedVidId)

        $('.js-his-column-reverse-div').append(`
            <article class="video-option js-selected-show" data-key="${selectedVidId}" data-thumb="${vidThumbnail}" data-title="${vidTitle}">
                <img src=${vidThumbnail} alt=${vidTitle} class="vid-thumbnail">
                <h4 class="title">${vidTitle}</h4>
            </article>`)
    })
}

function sendFirstShowToVidPlayer() {
    let firstShow = allChivoloShows[0]
    let firstShowApiUrl = firstShow.apiUrl

    fetch(firstShowApiUrl)
        .then(firstShowResponse => {
            if (firstShowResponse.ok) {
                return firstShowResponse.json()
            }
        })
        .then(firstShowData => {
            let firstShowItems = firstShowData.items
            let filteredFirstShowItems = filterOutPrivateVids(firstShowItems)
            let secondVidFirstShowId = filteredFirstShowItems[1].snippet.resourceId.videoId
            vidPlayer(secondVidFirstShowId)
        })
        .catch(err => {
            console.log(`Something went wrong: ${err.message}`)
        })
}

function filterOutPrivateVids(showItems) {
    return showItems.filter(item => item.snippet.title != "Private video")
}

fetchAllShowData()
    .then((showDataList) => {
        allChivoloShowsWithItems = allChivoloShows.map((show, i) => {
        
        console.log({
            show,
            showItems: filterOutPrivateVids(showDataList[i].items)
            })

        return {
            ...show,
            showItems: filterOutPrivateVids(showDataList[i].items)
        }
        })
    })
    .then(() => {
    sendFirstShowToVidPlayer()
    vidSelector()
    displayShowAndVidOptions()
    enableShowButtons()
})

function fetchAllShowData() {
    const promises = allChivoloShows.map(show =>
        fetch(show.apiUrl)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .catch(err => {
                console.log(`Something went wrong: ${err.message}`)
            })
        )
    return Promise.all(promises)
}

function handleChivolo() {
    fetchAllShowData()
}

// Header button functions

$('header').on('click', '.logo', function() {
    $('.js-video-section').empty()
    $('.js-show-option-container').empty()
    $('.js-main-vid-container').show()
    $('.js-video-section').show()
    $('.js-shows-section').show()
    sendFirstShowToVidPlayer()
    displayShowAndVidOptions()
    $('header').removeClass('relative')
    $('header').addClass('fixed')
    $('.grownups').hide()
    $('.shows-back-arrow').hide()
    $('.history').hide()
    $('main').addClass('main-padding')
})

$('.button-section').on('click', '.grownups-button', function() {
    $('header').removeClass('relative')
    $('header').addClass('fixed')
    $('.js-main-vid-container').hide()
    $('.js-video-section').hide()
    $('.js-shows-section').hide()
    $('.toggle-profiles').hide()
    $('.toggle-about').hide()
    $('.new-profile-form').hide()
    $('.history').hide()
    $('main').removeClass('main-padding')
    $('.js-grownups').show()
    $('.grownups-back-arrow').show()
})

$('.button-section').on('click', '.shows-button', function() {
    $('.grownups').hide()
    $('.history').hide()
    $('.js-main-vid-container').show()
    $('.js-video-section').show()
    $('.js-shows-section').show()
    $('.shows-back-arrow').show()
    $('header').removeClass('fixed')
    $('header').addClass('relative')
    $('main').removeClass('main-padding')
})

$('.button-section').on('click', '.history-button', function() {
    $('header').removeClass('relative')
    $('header').addClass('fixed')
    $('.js-main-vid-container').hide()
    $('.js-video-section').hide()
    $('.js-shows-section').hide()
    $('main').removeClass('main-padding')
    $('.js-grownups').hide()
    $('.js-history').show()
    $('.history-back-arrow').show()
})

// Grownups section

    // Back arrow
    $('.js-grownups').on('click', '.grownups-back-arrow', function() {
        $('.js-grownups').hide()
        $('header').removeClass('relative')
        $('header').addClass('fixed')
        $('.js-main-vid-container').show()
        $('.js-video-section').show()
        $('.js-shows-section').show()
        $('main').addClass('main-padding')
    })

    // Profiles
    if ($('.current-profiles').is(':empty')) {
        $('.current-profiles').append(`<p class="js-no-profiles">You haven't created a profile yet.</p>`)
    }

    function toggleProfiles() {
        let profiles = document.getElementById("toggle-profiles")
        if (profiles.style.display === "none") {
            profiles.style.display = "block"
        } else {
            profiles.style.display = "none"
        }
    }

    $('.js-grownups').on('click', '.js-profiles-button', function() {
        toggleProfiles()
    })

    function toggleNewProfile() {
        let newProfileForm = document.getElementById("new-profile-form")
        if (newProfileForm.style.display === "none") {
            newProfileForm.style.display = "block"
        } else {
            newProfileForm.style.display = "none"
        }
    }

    $('.toggle-profiles').on('click', '.new-profile-button', function() {
        toggleNewProfile()
    })

    $('.new-profile-form').on('click', '.submit', function() {
        event.preventDefault()

        $('.js-no-profiles').hide()
        
        let profileName = $('#first-name').val()
        let profileAge = $('#age').val()

        if (profileName && profileAge) {

            $('.current-profiles').append(`
            <button class='profile' data-name=${profileName} data-age=${profileAge}>
                <p class="profile-p">${profileName}</p>
                <p class="profile-p">Age: ${profileAge}</p>
            </button>
            `)

            $('#first-name').val('')
            $('#age').val('')
            $('.new-profile-form').hide()
            $('.selected-profile').empty()
            $('.selected-profile').show()
            $('.selected-profile').append(`<p class="profile-p js-selected-profile-name" data-name=${profileName}>${profileName}</p> <p class="profile-p js-selected-profile-age" data-age=${profileAge}>Age: ${profileAge}</p>`)
            $('.js-video-section').empty()
            $('.js-show-option-container').empty()
            sendFirstShowToVidPlayer()
            displayShowAndVidOptions()
        }
    })

    $('.current-profiles').on('click', '.profile', function() {
        let currentProfileName = $(this).attr('data-name')
        let currentProfileAge = $(this).attr('data-age')

        $('.selected-profile').empty()
        $('.selected-profile').append(`<p class="profile-p js-selected-profile-name" data-name=${currentProfileName}>${currentProfileName}</p> <p class="profile-p js-selected-profile-age" data-age=${currentProfileAge}>Age: ${currentProfileAge}</p>`)
        $('.selected-profile').show()
        $('.js-video-section').empty()
        $('.js-show-option-container').empty()
        sendFirstShowToVidPlayer()
        displayShowAndVidOptions()
    })

    function toggleAbout() {
        let about = document.getElementById("toggle-about")
        if (about.style.display === "none") {
            about.style.display = "block"
        } else {
            about.style.display = "none"
        }
    }

    $('.js-grownups').on('click', '.js-about-button', function() {
        toggleAbout()
    })

// Shows section

    // Back arrow
    $('.shows-back-arrow').on('click', function() {
        $('header').removeClass('relative')
        $('header').addClass('fixed')
        $('.shows-back-arrow').hide()
        $('main').addClass('main-padding')
    })

    // Select show playlists by clicking icons in the Shows section.
    function matchShowInfoToSelectedShow(selectedShow) {
        for (let i = 0; i < allChivoloShowsWithItems.length; i++) {
            if (allChivoloShowsWithItems[i].imgAlt === selectedShow) {
                return allChivoloShowsWithItems[i]
            }
        }
    }

    function showSelector(selectedShow) {
        $('.js-main-vid-container').empty()
        $('.js-video-section').empty()
        $('.shows-back-arrow').hide()
        $('header').removeClass('relative')
        $('header').addClass('fixed')
        $('main').addClass('main-padding')

        let selectedShowObject = matchShowInfoToSelectedShow(selectedShow)
        let selectedShowItems = selectedShowObject.showItems
    
        let firstVideoId = selectedShowItems[0].snippet.resourceId.videoId

        vidPlayer(firstVideoId)

        for (let i = 1; i < selectedShowItems.length; i++) {
            
            let vidThumbnail = selectedShowItems[i].snippet.thumbnails.high.url
            let vidTitle = selectedShowItems[i].snippet.title
            let vid = selectedShowItems[i].snippet.resourceId.videoId

            $('.js-video-section').append(`
                <article class="video-option js-selected-show" data-key="${vid}" data-thumb="${vidThumbnail}" data-title="${vidTitle}">
                    <img src=${vidThumbnail} alt=${vidTitle} class="vid-thumbnail">
                    <h4 class="title">${vidTitle}</h4>
                </article>` )
        }
    }

// History section

        // Back arrow
        $('.js-history').on('click', '.history-back-arrow', function() {
            $('.js-history').hide()
            $('header').removeClass('relative')
            $('header').addClass('fixed')
            $('.js-main-vid-container').show()
            $('.js-video-section').show()
            $('.js-shows-section').show()
            $('main').addClass('main-padding')
        })

        // See vidSelector for History page functionality.

$(handleChivolo)