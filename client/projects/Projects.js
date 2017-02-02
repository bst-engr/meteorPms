Template.Projects.onCreated( function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('projects');
	});
});

Template.Projects.helpers({
	projects: function () {
		return Projects.find();
	}
});

Template.Projects.events ({
	'click .new-project': function () {
		Session.set('newProject', true);
	}
});