console.log('it is here')

const moveItem = function(event) {
	console.log(event.target.parentElement)
	$('#done-list').append(event.target.parentElement)
	$(event.target).off()
}

$('#add-task-button').click(function() {
	//this declares task
	let task = $('#add-task-input').val()
	let $button = $('<button>Done</button>').click(moveItem)
	//put conditional here
	if (task === '') {
		alert('Task cannot be blank')
		// every thing else
	} else {
		let $li = $('<li>' + task + '</li>')
		$('#to-do-list').append($li)
		$li.append($button)
		$('#add-task-input').val('')
	}
})
