yieldUnescaped '<!doctype html>'
html('ng-app':"store") {
	head {
		title('Every Store')
		link(rel: 'stylesheet', href: 'webjars/bootstrap/3.3.4/css/bootstrap.min.css')
	}
	body{
	
		div(class: 'container') {
			div(class: 'navbar-header') {
				a(href: '/') {
   				   h1('Every Store')
				}

			}		
			
			"cart-count" {}
		}
		
		div(class: 'container' ) {	
			"ng-view" {}
		}
	
		script(src: 'webjars/angularjs/1.4.7/angular.js') {}
		script(src: 'webjars/angularjs/1.4.7/angular-route.js') {}
		script(src: 'webjars/angularjs/1.4.7/angular-sanitize.js') {}
		script(src: 'webjars/angularjs/1.4.7/angular-cookies.js') {}
		script(src: 'js/store.js'){}		
	}
}
