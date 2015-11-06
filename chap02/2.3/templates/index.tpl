yieldUnescaped '<!doctype html>'
html('ng-app':"store") {
	head {
		title('Every Store')
		link(rel: 'stylesheet', href: 'webjars/bootstrap/3.3.4/css/bootstrap.min.css')
	}
	body{
	
		div(class: 'container') {
			div(class: 'navbar-header') {
				h1('Every Store')
			}		
		}
		
		div(class: 'container' ) {	
			"ng-view" {}
		}
	
		script(src: 'webjars/angularjs/1.4.7/angular.js') {}
		script(src: 'webjars/angularjs/1.4.7/angular-route.js') {}
		script(src: 'js/store.js'){}		
	}
}
