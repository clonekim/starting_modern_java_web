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
			div(class: 'panel panel-default') {
				div(class: 'panel-body' , 'ng-controller': 'GoodsController') {
					div(class: 'row') {

			    			div(class: "col-md-6", "ng-repeat": "item in goods" ) {
			    				div(class: "panel-body", "ng-cloak") {
									yieldUnescaped '''
									  {{item.name}}
									 <img ng-cloak src="{{item.img}}">
									'''
							}
			    			}
					}
				}			
			}
		}
	
		script(src: 'webjars/angularjs/1.4.7/angular.js') {}
		script(src: 'js/store.js'){}		
	}
}
