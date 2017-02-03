Template.NewTask.events({
	'click .fa-close': ()=> {
		Session.set('newTask', false);
	}
});