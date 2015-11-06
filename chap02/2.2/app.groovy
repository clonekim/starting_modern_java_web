@Grab("groovy-templates")
@Grab("org.webjars:bootstrap:3.3.4")
@Grab("org.webjars:angularjs:1.4.7")
@RestController
class App {

	@RequestMapping("/")
	def index() {
		new ModelAndView("index")
	}
}
