console.log('it is here')

// in this branch we are goin to deal with set interval and set timeout both are similar funcitons

waitForIt = function() {
	// code goes here
}

createTimeLoop = function() {
	//initialize a count for display purposes
	let count = 0
	// setinterval runs it call back every 1000 ms
	setInterval(function() {
		//do something
		console.log(`SETINTERVAL HAS RUN ${count} TIMES`)
		//the second
	}, 1000)
}

const moveItem = function(event) {
	console.log(event.target.parentElement)
	$('#done-list').append(event.target.parentElement)
	$(event.target).off()
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
