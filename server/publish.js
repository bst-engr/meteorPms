Meteor.publish('projects', function() {
	return Projects.find({author: this.userId});
});

Meteor.publish('singleProject', function(id) {
	check(id, String);
	return Projects.find({_id: id});
});

Meteor.publish('tasks', function(id) {
	check(id, String);
	return Tasks.find({project_id: id});
});