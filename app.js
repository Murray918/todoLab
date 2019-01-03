console.log('it is here')

// in this branch we are goin to deal with set interval and set timeout both are similar funcitons
// initialize the wait variable
let waitCount = 0

waitForIt = function() {
	// set timeout will call the callback once after waiting the specified time in ms
	setTimeout(function() {
		// code goes here
		console.log(`set-timeout callback has been executed ${waitCount} times`)
		// the wait time interval
	}, 1000)
}

createTimeLoop = function() {
	//initialize a count for display purposes
	let count = 0
	// setinterval runs it call back every 1000 ms
	setInterval(function() {
		//do something here
		console.log(`SETINTERVAL HAS RUN ${count} TIMES`)
		//the 1second interval
	}, 1000)
}

$('#add-task-button').click(function() {
	let task = $('#add-task-input').val()
	let $button = $('<button>Done</button>').click(moveItem)
	if (task === '') {
		alert('Task cannot be blank')
	} else {
		let $li = $('<li>' + task + '</li>')
		$('#to-do-list').append($li)
		$li.append($button)
		$('#add-task-input').val('')
	}
})

const moveItem = function(event) {
	$('#done-list').append(event.target.parentElement)
	$(event.target).off()
	$(event.target).click(deleteTask)
	//call the createTimeLoop this will not stop so refresh the page to pause
	createTimeLoop()
}

let deleteTask = function(event) {
	$(event.target.parentElement).remove()
	// call the waitForIt function
	waitForIt()
}
