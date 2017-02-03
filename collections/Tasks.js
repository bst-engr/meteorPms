/**
 * collection for Tasks module.
 *
 */
//initializing projects collection
Tasks = new Mongo.Collection('tasks');

//collection rule
Tasks.allow({
	insert: function (userId, doc) {
		return true;
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
	project_id: {
		type: String,
		defaultValue: function () {
			return FlowRouter.getParam('id');
		},
		autoform: {
			type: "hidden"
		}
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
//attaching scehma to collection
Tasks.attachSchema (TasksSchema);
