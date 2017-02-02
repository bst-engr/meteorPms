Template.NewProject.events({
	'click .fa-close': ()=> {
		Session.set('newProject', false);
	}
});