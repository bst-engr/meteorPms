Template.SingleProject.onCreated( function() {
	var self = this;
	self.autorun(function() {
		var id= FlowRouter.getParam('id');
		self.subscribe('singleProject', id);
		self.subscribe('tasks', id);
	});
});

Template.SingleProject.helpers({
	project: function () {
		var id= FlowRouter.getParam('id');
		return Projects.findOne({_id:id});
	},
	tasks: function () {
		var id= FlowRouter.getParam('id');
		return Tasks.find({project_id:id});	
	},
	enableNewTaskForm: function () {
		return Session.get('newTask');
	}
});

Template.SingleProject.events ({
	'click .new-task': function () {
		Session.set('newTask', true);
	}
});