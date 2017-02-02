
if (Meteor.isClient) {
	//auto redirection on login
	Accounts.onLogin(function(){
		FlowRouter.go('dashboard');
	});
	//auto redirection on logout
	Accounts.onLogout(function(){
		FlowRouter.go('login');
	});
}
//**********end on login and logout actions.**********/
//route trigger function for non authenticated users.
FlowRouter.triggers.enter([function(context, redirect) {
	if(!Meteor.userId()) {
		FlowRouter.go('login');
	}
}]);

//********************Routes**************************/
FlowRouter.route('/login', {
	name: 'login',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('dashboard');
		}
		GAnalytics.pageview(); //use to register in google analytics as page view.
		BlazeLayout.render('LoginLayout');
	}
});

FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview(); //use to register in google analytics as page view.
		BlazeLayout.render('MainLayout', {main: 'Dashboard',pageTitle: 'Dashboard'});
	}
});

FlowRouter.route('/dashboard', {
	name: 'dashboard',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Dashboard',pageTitle: 'Dashboard'});
	}
});

FlowRouter.route('/projects', {
	name: 'project-list',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Projects',pageTitle: 'Manage Projects'});
	}
});

FlowRouter.route('/project/:id', {
	name: 'project-detail',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'SingleProject',pageTitle: 'Project Details'});
	}
});