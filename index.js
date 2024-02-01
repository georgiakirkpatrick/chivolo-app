'use strict';

const apiKey = process.env.API_KEY
    
const allChivoloShows = [
// The allChivoloPlaylists array includes information about all the shows approved for the Chivolo app.
    // playlistItems URL is https://www.googleapis.com/youtube/v3/playlistItems
    // maxResults is set to 20

    {playlistTitle: "Bino and Fino",
    playlistId: "PLWpyJMXD1C42sM5hjoKxgpYA606Q4KK8X",
    recommendedMinAge: 1,
    iconImg: "images/bino-and-fino.png",
    imgAlt: "Bino-and-Fino",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLWpyJMXD1C42sM5hjoKxgpYA606Q4KK8X&maxResults=20`
    },

    {playlistTitle: "Andi Mack",
    playlistId: "PLiv1IUQDVSNLrez97DYcPXJ4swHBaZDlb",
    recommendedMinAge: 10,
    iconImg: "images/andi-mack.png",
    imgAlt: "Andi-Mack",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLiv1IUQDVSNLrez97DYcPXJ4swHBaZDlb&maxResults=20`
    },

    {playlistTitle: "Blue's Clues",
    playlistId: "PL3qHjxSSl7AFH8-E_Oz2_G1scCUuYV_WW",
    recommendedMinAge: 1,
    iconImg: "images/blues-clues.png",
    imgAlt: "Blues-Clues",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL3qHjxSSl7AFH8-E_Oz2_G1scCUuYV_WW&maxResults=20`
    },

    {playlistTitle: "Burka Avenger",
    playlistId: "PLWpyJMXD1C41AX7zXnbq9DO5SQvuwd0ot",
    recommendedMinAge: 7,
    iconImg: "images/burka-avenger.png",
    imgAlt: "Burka-Avenger",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLWpyJMXD1C41AX7zXnbq9DO5SQvuwd0ot&maxResults=20`
    },

    {playlistTitle: "Chhota Bheem",
    playlistId: "PL0rMr_qVm_FLXkMOjpPleUrdD4GvHwYev",
    recommendedMinAge: 3,
    iconImg: "images/chhota-bheem.png",
    imgAlt: "Chhota-Bheem",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL0rMr_qVm_FLXkMOjpPleUrdD4GvHwYev&maxResults=20`
    },

    {playlistTitle: "Dinosaur Train",
    playlistId: "PLa8HWWMcQEGRwHO2UzoBBWnbByuCpbRAE",
    recommendedMinAge: 1,
    iconImg: "images/dinosaur-train.png",
    imgAlt: "Dinosaur-Train",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLa8HWWMcQEGRwHO2UzoBBWnbByuCpbRAE&maxResults=20`
    },

    {playlistTitle: "Doc McStuffins",
    playlistId: "PL3ADDC3A56EAFB37C",
    recommendedMinAge: 4,
    iconImg: "images/doc-mcstuffins.png",
    imgAlt: "Doc-McStuffins",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL3ADDC3A56EAFB37C&maxResults=20`
    },

    {playlistTitle: "Dora and Friends",
    playlistId: "PL3qHjxSSl7AFXgXVoF4cB6Wd1cjy50goi",
    recommendedMinAge: 5,
    iconImg: "images/dora-and-friends.png",
    imgAlt: "Dora-and-Friends",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL3qHjxSSl7AFXgXVoF4cB6Wd1cjy50goi&maxResults=20`
    },

    {playlistTitle: "Elena of Avalor",
    playlistId: "PL2m1vjiMH_hPMvLfmmiMXQUIVMrr_JovZ",
    recommendedMinAge: 5,
    iconImg: "images/elena-of-avalor.png",
    imgAlt: "Elena-of-Avalor",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL2m1vjiMH_hPMvLfmmiMXQUIVMrr_JovZ&maxResults=20`
    },

    {playlistTitle: "Legendary Dudas",
    playlistId: "PLJb1AL9zU1GqdTD3cvhjRCEHaxYBXUlXs",
    recommendedMinAge: 9,
    iconImg: "images/legendary-dudas.png",
    imgAlt: "Legendary-Dudas",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLJb1AL9zU1GqdTD3cvhjRCEHaxYBXUlXs&maxResults=20`
    },

    {playlistTitle: "Lou and Lou",
    playlistId: "PL2m1vjiMH_hPDuAk-RYiciqlh6wf99onV",
    recommendedMinAge: 1,
    iconImg: "images/lou-and-lou.png",
    imgAlt: "Lou-and-Lou",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL2m1vjiMH_hPDuAk-RYiciqlh6wf99onV&maxResults=20`
    },

    {playlistTitle: "Molly of Denali",
    playlistId: "PLWpyJMXD1C42wh_BKrkVw1aC8znACSIUs",
    recommendedMinAge: 5,
    iconImg: "images/molly-of-denali.png",
    imgAlt: "Molly-of-Denali",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLWpyJMXD1C42wh_BKrkVw1aC8znACSIUs&maxResults=20`
    },

    {playlistTitle: "Mouk",
    playlistId: "PLbsU5JkEtkPQPQJBG52a1k9KckIQbuTaU",
    recommendedMinAge: 4,
    iconImg: "images/mouk.png",
    imgAlt: "Mouk",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLbsU5JkEtkPQPQJBG52a1k9KckIQbuTaU&maxResults=20`
    },

    {playlistTitle: "Nella the Princess Knight",
    playlistId: "PL3qHjxSSl7AFFYNsE2JNvFI_S8Q2Xw0jb",
    recommendedMinAge: 1,
    iconImg: "images/nella-the-princess-knight.png",
    imgAlt: "Nella-the-Princess-Knight",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL3qHjxSSl7AFFYNsE2JNvFI_S8Q2Xw0jb&maxResults=20`
    },

    {playlistTitle: "Nina's World",
    playlistId: "PL_EANcmOcL7JcpmtUW6bRpPz6ov6UW55G",
    recommendedMinAge: 1,
    iconImg: "images/ninas-world.png",
    imgAlt: "Ninas-World",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL_EANcmOcL7JcpmtUW6bRpPz6ov6UW55G&maxResults=20`
    },

    {playlistTitle: "Sci Girls",
    playlistId: "PLeE9Z9we25wQVs5-eyjeq_aWLUin0PQeS",
    recommendedMinAge: 7,
    iconImg: "images/scigirls.png",
    imgAlt: "Sci-Girls",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLeE9Z9we25wQVs5-eyjeq_aWLUin0PQeS&maxResults=20`
    },

    {playlistTitle: "Sesame Street",
    playlistId: "PL8TioFHubWFuzQJ8mGfvjv70pmuorq-ZM",
    recommendedMinAge: 1,
    iconImg: "images/sesame-street.png",
    imgAlt: "Sesame-Street",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL8TioFHubWFuzQJ8mGfvjv70pmuorq-ZM&maxResults=20`
    },

    {playlistTitle: "Super Wings",
    playlistId: "PL-nQOC8BAGD0YFJqr1R_XTbjokhRh2jv5",
    recommendedMinAge: 1,
    iconImg: "images/super-wings.png",
    imgAlt: "Super-Wings",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL-nQOC8BAGD0YFJqr1R_XTbjokhRh2jv5&maxResults=20`
    },

    {playlistTitle: "Yo Gabba Gabba",
    playlistId: "PLc7QkGFtZUZ73cexJsrEzjXkiKxv5qi_N",
    recommendedMinAge: 1,
    iconImg: "images/yo-gabba-gabba.png",
    imgAlt: "Yo-Gabba-Gabba",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLc7QkGFtZUZ73cexJsrEzjXkiKxv5qi_N&maxResults=20`
    }
]

let allChivoloShowsWithItems = [
    // This array combines all the info from allChivoloShows array above with video detials from the YouTube Data API.
]

function listenForDoneEditing() {
    $('.profiles-section').on('click', '.js-done-editing', function() {

        $('.js-edit-buttons-div').hide()
        $('.js-edit-profiles').show()
        $('.js-done-editing').hide()
    })    
}

function checkForEmptyCurrentProfilesDiv() {
    if ($('.current-profiles').children().length == 0) {
        
        $('.js-done-editing').hide()
        $('.js-edit-profiles').show()
        $('.js-no-profiles').show()
    }
}

function listenForDelete() {
    $('.current-profiles').on('click', '.js-delete', function() {

        let deleteName = $(this).attr('data-name')
        let deleteProfileDiv = document.getElementById(deleteName)
        let selectedProfileName = $('.selected-profile').attr('data-name')

        $('.profile').removeClass('purple')
        $('.js-go-to-homepage-button').hide()
        $(deleteProfileDiv).remove()

        if (selectedProfileName === deleteName) {
            
            $('#selected-profile').empty()
            $('.js-video-section').empty()
            $('.js-show-option-container').empty()
            sendLogoToVidPlayer()
        }

        displayShowAndVidOptions()
        checkForEmptyCurrentProfilesDiv()
    })
}

function listenForEditProfiles() {
    $('.profiles-section').on('click', '.js-edit-profiles', function() {
        $('.profile').removeClass('purple')
        $('.js-go-to-homepage-button').hide()
        $(this).hide()
        $('.js-edit-buttons-div').show()
        $('.js-done-editing').show()
    })

    listenForDoneEditing()
}

function editAgeFormSubmit(editName, formId) {
    $(formId).submit(function (event) {
        event.preventDefault()

        let newAge = $(`#new-age-${editName}`).val()
        let selectedProfileName = $('.selected-profile').attr('data-name')

        $(`.js-profile-age-${editName}`).empty()
        $('.js-selected-profile-age').empty()
        $(`.js-profile-age-${editName}`).append(`Age: ${newAge}`)
        $('.js-selected-profile-age').append(`Age: ${newAge}`)
        $(`.js-profile-age-${editName}`).show()
        $(formId).hide()
        $('.edit-submit').hide()

        if (selectedProfileName === editName) {
        
            $('.js-selected-profile-age').empty()
            $('.js-selected-profile-age').append(`Age: ${newAge}`)
            $('.js-video-section').empty()
            $('.js-show-option-container').empty()
            sendLogoToVidPlayer()
        }
    })
}

function editProfileFormEdit() {
    $('.js-edit-buttons-div').on('click', '.js-edit', function() {
        let editName = $(this).attr('data-name')
        // let editAgeForm = document.getElementById(`edit-age-${editName}`)
        let formId = `#edit-age-${editName}`

        $(formId).show()
        $('.edit-submit').show()
        $(`.js-profile-age-${editName}`).hide()

        editAgeFormSubmit(editName, formId)
    })
}

function listenForNewProfileFormSubmit() {
    $('#new-profile-form').on('submit', function(event) {
        event.preventDefault()

        let profileName = $('#first-name').val()
        let profileAge = $('#age').val()

        if (profileName && profileAge) {

            $('.js-no-profiles').hide()
            toggleNewProfile()

            $('#current-profiles').append(`
            <div id=${profileName} class="js-profile-container" data-name=${profileName} data-age=${profileAge}>
                <div class="profile ${profileName}-profile" data-name=${profileName} data-age=${profileAge}>
                    <p class="profile-p">${profileName}</p>
                    <p class="profile-p js-profile-age-${profileName}">Age: ${profileAge}</p>
                    <form id=edit-age-${profileName}>
                        <fieldset>
                            <label for="edit-age" class="edit-age-label">Age</label>
                            <select name="edit-age" id="new-age-${profileName}">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16+</option>
                            </select>
                        </fieldset>
                        <button class="edit-submit">Submit</button>
                    </form>
                </div>
                <div class="edit-buttons-div js-edit-buttons-div" data-name=${profileName}>
                    <button class="edit js-edit" data-name=${profileName}>Edit</button>
                    <button class="delete js-delete" data-name=${profileName}>Delete</button>
                </div>
            </div>   
            `)

            let editAgeForm = document.getElementById(`edit-age-${profileName}`)

            $('#first-name').val('')
            $('#age').val('')
            $('.new-profile-form').hide()
            $(editAgeForm).hide()
            $('.edit-submit').hide()
            $('.js-edit-buttons-div').hide()
            $('.js-edit-profiles').show()

            editProfileFormEdit()
            listenForDelete()

            $(`#${profileName}`).on('click', `.${profileName}-profile`, function() {                    
                $('.profile').removeClass('purple')
                $(`.${profileName}-profile`).addClass('purple')
                $('.js-go-to-homepage-button').empty()
                $('.js-go-to-homepage-button').append(`Go to ${profileName}'s homepage`)
                $('.js-go-to-homepage-button').addClass('purple')
                $('.js-go-to-homepage-button').show()
                $('#selected-profile').empty()
                $('#selected-profile').append(`<button data-name=${profileName} class="selected-profile">
                    <p class="profile-p js-selected-profile-name" data-name=${profileName}>${profileName}</p>
                    <p class="profile-p js-selected-profile-age" data-age=${profileAge}>Age: ${profileAge}</p>
                </button>`)
                $('#selected-profile').show()
                $('.js-video-section').empty()
                $('.js-show-option-container').empty()
            })

            $('#profiles-section').on('click', '.js-go-to-homepage-button', function() {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#html").offset().top
                }, 1000)

                $('.js-video-section').empty()
                $('.js-show-option-container').empty()
                $('.js-done-editing').hide()
                $('.js-edit-buttons-div').hide()
                $('.js-show-video-placeholder').hide()
                $('.js-vid-player-section').show()
                $('.js-vid-player-placeholder').show()
                $('.js-first-video-placeholder').show()
                $('.js-video-section').show()
                $('.js-shows-section').show()
                sendLogoToVidPlayer()
                displayShowAndVidOptions()
                $('.grownups').hide()
                $('.shows-back-arrow').hide()
                $('.history').hide()
            })
        }
    })
}

function toggleNewProfile() {
    let newProfileForm = document.getElementById("new-profile-form")

    if (newProfileForm.style.display === "none") {
        newProfileForm.style.display = "block"
    } else {
        newProfileForm.style.display = "none"
    }
}

function listenForNewProfileClick() {
    $('.profiles-section').on('click', '.js-new-profile-button', function() {
        toggleNewProfile()
    })
}

function setUpProfiles() {
    if ($('#current-profiles').is(':empty')) {
        $('#js-profile-instructions').append(`<p class="js-no-profiles">You haven't created a profile yet.</p>`)
    }

    listenForNewProfileClick()
}

function historyBackArrow() {
    $('.js-history').on('click', '.history-back-arrow', function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#html").offset().top
        }, 1000)

        $('.js-history').hide()
        $('.js-vid-player-section').show()
        $('.js-video-section').show()
        $('.js-shows-section').show()
    })
}

function listenForHistoryButtonClicks() {
    $('.button-section').on('click', '.history-button', function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#html").offset().top
        }, 1000)
        
        $('.js-vid-player-section').hide()
        $('.js-video-section').hide()
        $('.js-shows-section').hide()
        $('.js-grownups').hide()
        $('.js-history').show()
        $('.history-back-arrow').show()

        historyBackArrow()

        $('.js-his-column-reverse-div ').on('click', '.js-video-option', function() {    
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#html").offset().top
            }, 1000)
    
            let selectedVidId = $(this).attr('data-key')

            $('.history').hide()
            $('.js-vid-player-placeholder').hide()
            $('.js-vid-player-section').show()
            $('.js-main-vid-container').show()
            $('.js-video-section').show()
            $('.js-shows-section').show()

            vidPlayer(selectedVidId)
        })
    })   
}

function showsBackArrow() {
    $('.shows-back-arrow').on('click', function() {

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#html").offset().top
        }, 1000)

        $('.shows-back-arrow').hide()
    })
}

function listenForShowButtonClicks() {
    $('.button-section').on('click', '.js-shows-button', function() {
        $('.grownups').hide()
        $('.history').hide()
        $('.js-vid-player-section').show()
        $('.js-vid-player-placeholder').show()
        $('.js-video-section').show()
        $('.js-shows-section').show()
        $('.shows-back-arrow').show()

        showsBackArrow()

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#shows-section").offset().top
        }, 1000)
    })
}

function listenForVideosButtonClicks() {
    $('.button-section').on('click', '.videos-button', function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#html").offset().top
        }, 1000)

        $('.js-video-section').empty()
        $('.js-show-option-container').empty()
        $('.js-done-editing').hide()
        $('.js-edit-buttons-div').hide()
        $('.js-show-video-placeholder').hide()
        $('.js-vid-player-section').show()
        $('.js-vid-player-placeholder').show()
        $('.js-first-video-placeholder').show()
        sendLogoToVidPlayer()
        displayShowAndVidOptions()
        $('.js-video-section').show()
        $('.js-shows-section').show()
        $('.grownups').hide()
        $('.shows-back-arrow').hide()
        $('.history').hide()
    })
}

function grownupsBackArrow() {
    $('.js-grownups').on('click', '.grownups-back-arrow', function() {
        $('.js-grownups').hide()
        $('.js-vid-player-section').show()
        $('.js-video-section').show()
        $('.js-shows-section').show()
    })
}

function listenForGrownupsButtonClicks() {
    $('.button-section').on('click', '.grownups-button', function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#html").offset().top
        }, 1000)

        $('.js-main-vid-container').empty()
        $('.js-main-vid-container').hide()
        $('.js-vid-player-section').hide()
        $('.js-video-section').hide()
        $('.js-shows-section').hide()
        $('#new-profile-form').hide()
        $('.history').hide()
        $('.js-go-to-homepage-button').hide()
        $('.js-go-to-homepage-button').removeClass('purple')
        $('.js-grownups').show()
        $('.grownups-back-arrow').show()

        grownupsBackArrow()
    })
}

function listenForLogoClicks() {
    $('header').on('click', '.logo', function() {

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#html").offset().top
        }, 1000)

        $('.js-video-section').empty()
        $('.js-show-option-container').empty()
        $('.js-vid-player-section').show()
        $('.js-vid-player-placeholder').show()
        $('.js-first-video-placeholder').show()
        $('.js-video-section').show()
        $('.js-shows-section').show()
        $('.grownups').hide()
        $('.shows-back-arrow').hide()
        $('.js-history').hide()  
        sendLogoToVidPlayer()
        displayShowAndVidOptions()
    })
}

function listenForHeaderButtonClicks() {
    listenForLogoClicks()
    listenForGrownupsButtonClicks()
    listenForShowButtonClicks()
    listenForVideosButtonClicks()
    listenForHistoryButtonClicks()
}

function checkInternetConnection() {
    let status = navigator.onLine

    if (status === false) {
        alert('Hey there. Looks like you are not connected to the internet.  You will need a network connection to use Chivolo.')
    }

    window.addEventListener('offline', function(e) { alert('Hey there. Looks like you are not connected to the internet.  You will need a network connection to use Chivolo.')})
}

function overlayPageFour() {
    $('#overlay-text').empty()

    $('#overlay-text').html(`
        <img src="images/chivolo-logo-no-background-white.png" alt="Chivolo-logo" class="logo">
        <h1 class="overlay-text-big">Welcome to Chivolo!</h1>
        <h2 class="overlay-text-big">Been here before?</h2>
        <button id="overlay-button" class="overlay-button-top">Click here to dismiss this intro</button>
        <div class="overlay-highlight">
            <p class="overlay-text-medium">Does your kid want to re-watch a video they saw on Chivolo?  Check out the <span class="red">History</span> section to find your child's viewing history.  That's it!  Click anywhere to go to the homepage.</p>
        </div>
        <img src="images/chivolo-logo-no-background-white.png" alt="Chivolo-logo" class="overlay-logo">`
    )    

    $('body').on('click', '#dismiss-overlay', function() {
        overlayOff()
    })

    $('body').on('click', '.logo', function() {
        overlayOff()
    })

    $('body').on('click', '#overlay', function() {
        overlayOff()
    })
}

function overlayPageThree() {
    $('#overlay-text').empty()

    $('#overlay-text').html(`
        <img src="images/chivolo-logo-no-background-white.png" alt="Chivolo-logo" class="logo">
        <h1 class="overlay-text-big">Welcome to Chivolo!</h1>
        <h2 class="overlay-text-big">Been here before?</h2>
        <button id="overlay-button" class="overlay-button-top">Click here to dismiss this intro</button>
        <div class="overlay-highlight">
            <p class="overlay-text-medium">To find more videos featuring your child's favorite character click a show icon in the <span class="red">Shows</span> section.</p>
        </div>
        <button class="overlay-button-bottom">Next</button>`
    )    

    $('body').on('click', '#dismiss-overlay', function() {
        overlayOff()
    })

    $('body').on('click', '#overlay', function() {
        overlayPageFour()
    })
}

function overlayPageTwo() {
    $('#overlay-text').empty()

    $('#overlay-text').html(`
        <img src="images/chivolo-logo-no-background-white.png" alt="Chivolo-logo" class="logo">
        <h1 class="overlay-text-big">Welcome to Chivolo!</h1>
        <h2 class="overlay-text-big">Been here before?</h2>
        <button id="overlay-button" class="overlay-button-top">Click here to dismiss this intro</button>
        <div class="overlay-highlight">
            <p class="overlay-text-medium">Want to customize your child's viewing experience based on their age?  You can create a profile for each of your children in the <span class="red">Grownups</span> section.</p>
        </div>
        <button class="overlay-button-bottom">Next</button>
    `)    

    $('body').on('click', '#dismiss-overlay', function() {
        overlayOff()
    })

    $('body').on('click', '#overlay', function() {
        overlayPageThree()
    })
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none"
}

function overlayTextPageOne() {
    $('#overlay-text').html(`
        <img src="images/chivolo-logo-no-background-white.png" alt="Chivolo-logo" class="logo">
        <h1 class="overlay-text-big">Welcome to Chivolo!</h1>
        <h2 class="overlay-text-big">Been here before?</h2>
        <button id="dismiss-overlay" class="overlay-button-top">Click here to dismiss this intro</button>
        <div class="overlay-highlight">
            <p class="overlay-text-medium">Chivolo is a place for kids to watch fun videos that reflect the diversity of the real world.</p>
        </div>
        <button class="overlay-button-bottom">Next</button>`
    )

    $('body').on('click', '#dismiss-overlay', function() {
        overlayOff()
    })

    $('body').on('click', '#overlay', function() {
        overlayPageTwo()
    })
}

function overlayOn() {
    document.getElementById("overlay").style.display = "block"

    overlayTextPageOne()
}

function sendLogoToVidPlayer() {
    $('.js-main-vid-container').hide()
    $('.js-show-video-placeholder').hide()
    $('.js-first-video-placeholder').show()
}

function sendShowIconToVidPlayer(selectedShowObject) {
    let showIcon = selectedShowObject.iconImg
    let iconAlt = selectedShowObject.imgAlt

    $('.js-main-vid-container').hide()
    $('.js-first-video-placeholder').hide()
    $('.js-show-video-placeholder').empty()
    $('.js-show-video-placeholder').append(
        `<img src="${showIcon}" alt="${iconAlt}" class="selected-show-icon">
        <h1 class="main-vid-text-big">Click on a video option to watch it here!</h1>`
    )
    $('.js-show-video-placeholder').show()
    $('.js-vid-player-section').show()
    $('.js-vid-player-placeholder').show()
}

function vidPlayer(vidId) {
    $('.js-main-vid-container').html(`
        <iframe class="main-vid" width="560" height="315" 
        src="https://www.youtube.com/embed/${vidId}" frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen></iframe>`
    )
}

function matchShowInfoToSelectedShow(selectedShow) {
    for (let i = 0; i < allChivoloShowsWithItems.length; i++) {
        if (allChivoloShowsWithItems[i].imgAlt === selectedShow) {
            return allChivoloShowsWithItems[i]
        }
    }
}

function showSelector(selectedShow) {
    $('.js-video-section').empty()
    $('.shows-back-arrow').hide()

    let selectedShowObject = matchShowInfoToSelectedShow(selectedShow)
    let selectedShowItems = selectedShowObject.showItems
    // let firstVidSelectedShow = selectedShowItems[0]
    // let firstVideoId = firstVidSelectedShow.snippet.resourceId.videoId

    sendShowIconToVidPlayer(selectedShowObject)

    for (let i = 0; i < selectedShowItems.length; i++) {
        
        let vidThumbnailI = selectedShowItems[i].snippet.thumbnails.high.url
        let vidTitleI = selectedShowItems[i].snippet.title
        let vidI = selectedShowItems[i].snippet.resourceId.videoId
        let vidTitleDashesI = vidTitleI.replace(/\s/g, "-")

        $('.js-video-section').append(`
            <article class="video-option js-video-option" data-key="${vidI}" data-thumb="${vidThumbnailI}" data-title="${vidTitleI}">
                <img src=${vidThumbnailI} alt=${vidTitleDashesI} class="vid-thumbnail">
                <h3 class="vid-title">${vidTitleI}</h3>
            </article>` )
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#html").offset().top
    }, 1000)
}

function listenForVidSelection() {
    $('.js-video-section').on('click', '.video-option', function() {
        $('.js-vid-player-placeholder').hide()

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#html").offset().top
        }, 1000)

        let selectedVidId = $(this).attr('data-key')
        let vidThumbnail = $(this).attr('data-thumb')
        let vidTitle = $(this).attr('data-title')
        let vidTitleDashes = vidTitle.replace(/\s/g, "-")

        $('.js-main-vid-container').show()
        $('.js-vid-player-placeholder').hide()
        $('.js-video-section').show()
        $('.history').hide()

        vidPlayer(selectedVidId)

        $('.js-his-column-reverse-div').append(`
            <article class="video-option js-video-option" data-key="${selectedVidId}" data-thumb="${vidThumbnail}" data-title="${vidTitle}">
                <img src=${vidThumbnail} alt=${vidTitleDashes} class="vid-thumbnail">
                <h3 class="vid-title">${vidTitle}</h3>
            </article>`
        )
    })
}

function enableShowButtons() {
    $('.js-show-option-container').on('click', '.js-show-option', function() {
        let selectedShow = $(this).attr('data-show')

        showSelector(selectedShow)
    })
}

function displayLatestVid(latestVidForShow) {
    let vidThumbnail = latestVidForShow.snippet.thumbnails.high.url
    let vidTitle = latestVidForShow.snippet.title
    let vid = latestVidForShow.snippet.resourceId.videoId
    let vidTitleDashes = vidTitle.replace(/\s/g, "-")

    $('.js-video-section').append(`
            <article class="video-option" data-key="${vid}" data-thumb="${vidThumbnail}" data-title="${vidTitle}">
                <img src=${vidThumbnail} alt=${vidTitleDashes} class="vid-thumbnail">
                <h3 class="vid-title">${vidTitle}</h3>
            </article>`
    )
}

function displayShowOption(show) {
    $('.js-show-option-container').append(`
            <div class="show-option js-show-option" data-show=${show.imgAlt}>
                <img src=${show.iconImg} alt=${show.imgAlt} class="show-png">
                <h3 class="show-title">${show.playlistTitle}</h3>
            </div>`
    )
}

function displayShowAndVidOptions() {
    let defaultAge = 16
    let selectedProfile = document.getElementById('selected-profile')
    let selectedAge = $('.js-selected-profile-age').attr('data-age')

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

    enableShowButtons()
}

function filterOutPrivateVids(showItems) {
    return showItems.filter(item => item.snippet.title != "Private video")
}

function fetchAllShowData() {
    const promises = allChivoloShows.map(show =>
        fetch(show.apiUrl)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
        )
    return Promise.all(promises)
        .catch(err => {
            alert(`Something went wrong: ${err.message}`)
        })
}

function handleChivolo() {
    fetchAllShowData()
        .then((showDataList) => {
            allChivoloShowsWithItems = allChivoloShows.map((show, i) => {
                return {
                    ...show,
                    showItems: filterOutPrivateVids(showDataList[i].items)
                }
            })
        })
        .then(() => {
            displayShowAndVidOptions()
        })

    overlayOn()
    checkInternetConnection()
    listenForVidSelection()
    listenForHeaderButtonClicks()
    setUpProfiles()
    listenForNewProfileFormSubmit()
    listenForEditProfiles()

    $('#selected-profile').hide()
    $('.js-edit-profiles').hide()
    $('.js-done-editing').hide()
    $('.js-show-video-placeholder').hide()
    $('.js-main-vid-container').hide()
}

$(handleChivolo)