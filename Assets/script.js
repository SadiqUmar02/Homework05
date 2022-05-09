const currentDay = moment();

$('#currentDay').text(currentDay.format('dddd, MMMM Do'));

$('.container').on('click', '.saveBtn', handleStorage)

for (let notesIndex = 9; notesIndex <= 17; notesIndex++) {
    let savedSchedule = localStorage.getItem('hour' + notesIndex);
    $(`#hour${notesIndex}`).text(savedSchedule)

    if ($(`#hour${notesIndex}`).text() == null) {
        $(`#hour${notesIndex}`).text().empty();
    }
    
}

for (let timeIndex = 9; timeIndex <= 17; timeIndex++) {
    const currentTime = $(`#hour${timeIndex}`).data('time');

    if (parseInt(currentDay.format('H')) > currentTime) {
        $(`#hour${timeIndex}`).addClass('past')
    }

    else if (parseInt(currentDay.format('H')) == currentTime) {
        $(`#hour${timeIndex}`).addClass('present')
    }
    else if (parseInt(currentDay.format('H')) < currentTime) {
        $(`#hour${timeIndex}`).addClass('future')
    }
}

function handleStorage(e) {
    e.preventDefault();
    let hourClicked = $(this).parent('section').children('textarea').data('time')
    let notesSaved = $(this).parent('section').children('textarea').val()
    
    localStorage.setItem('hour' + hourClicked, notesSaved)
    console.log(localStorage)
};