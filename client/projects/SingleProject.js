Template.SingleProject.onCreated( function() {
	var self = this;
	self.autorun(function() {
		var id= FlowRouter.getParam('id');
		self.subscribe('singleProject', id);
	});
});

Template.SingleProject.helpers({
	project: function () {
		var id= FlowRouter.getParam('id');
		return Projects.findOne({_id:id});
	}
});