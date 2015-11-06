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
	
	
		script(src: 'js/all.js'){}		
	}
}
