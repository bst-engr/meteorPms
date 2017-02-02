//on template created call back
Template.Project.onCreated(function() {
	this.editMode = new ReactiveVar (false);
});

//helper functions for Project template
Template.Project.helpers({
	updateProjectId: function() {
		return this._id
	},
	editMode: function () {
		//Template refers template and instance referencing to grab current particular template in itration
		return Template.instance().editMode.get();
	}
});
//event functions
Template.Project.events({
	//trigger delete Project event
	'click .fa-trash' : function() {
		//this context to clicked item in list
		Meteor.call('deleteProject', this._id);
	},
	//change project Status active or inactive
	'click .toggle-status': function () {
		Meteor.call('toggleProjectStatus', this._id, this.isActive);	
	},
	//enabling and disabling edit quick form
	'click .fa-pencil' : function(event, template) {
		//Session.set('editMode', !Session.get('editMode'));
		template.editMode.set(!template.editMode.get());
	}
});  