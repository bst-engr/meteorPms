/**
 * collection for projects module.
 *
 */
//initializing projects collection
Projects = new Mongo.Collection('projects');

//collection rule
Projects.allow({
	insert: function (userId, doc) {
		return !!userId;
	},
	update: function (userId, doc) {
		return !!userId;	
	}
});

//Defining Tasks schema
TasksSchema = new SimpleSchema ({
	name:{
		type: String,
		label: "Task Name"
	},
	desc:{
		type: String,
		label: "Task Description"
	},
	user:{
		type: String,
		label: "Assigned to"
	},
	dueDate:{
		type: Date,
		label: "Due Date"
	},
	author: {
		type: String,
		label: 'Author',
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: { 
		type: Date,
		label: "Created At",
		autoValue : function () {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}

});

//Defining schema for recepies
ProjectSchema = new SimpleSchema ({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: 'Description'
	},
	tasks: {
		type: [TasksSchema]
	},
	isActive:{
		type: Boolean,
		defaultValue: true,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: 'Author',
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: { 
		type: Date,
		label: "Created At",
		autoValue : function () {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

//Collection Methods
Meteor.methods({
	toggleProjectStatus: function (id, currentStatus) {
		Projects.update(id, {
			$set:{
				isActive: !currentStatus
			}
		});
	},
	//delete recipe function
	deleteProject: function (id) {
		Projects.remove(id);
	}
});
//attaching scehma to collection
Projects.attachSchema (ProjectSchema);