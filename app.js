console.log('it is here')

//this is the logic for adding an item to the todo list
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

//this function takes a pramater that is the event object ----> how ever we can call it whatecer we want i.e e ----> which would change the append argument to e.target.parentElement
const moveItem = function(event) {
	// console.log(event.target.parentElement)
	$('#done-list').append(event.target.parentElement)
	// make sure to disable the event
	$(event.target).off()
	// add this after you remove
	$(event.target).click(deleteTask)
}

//same kind of deal except this time we just remove the element
let deleteTask = function(event) {
	$(event.target.parentElement).remove()
}
