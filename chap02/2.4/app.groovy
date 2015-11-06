@Grab("groovy-templates")
@Grab("org.webjars:bootstrap:3.3.4")
@Grab("org.webjars:angularjs:1.4.7")
@RestController
class App {

	def goods = [
		[ id: 1, name: "커피", price: 3000,  img: 'coffee.jpg', desc: "맛있는 커피" ],
		[ id: 2, name: "PS4", price: 400000, img: 'ps4.jpg', desc: "이번이 마지막 찬스 \n 최강의 콘솔게임머신"],
		[ id: 3, name: "자전거", price: 200000, img: 'bicycle.jpg', desc: "그림에 나오는 자전거" ]			
	]

	@RequestMapping("/")
	def index() {
		new ModelAndView("index")
	}
	
	@RequestMapping("/api/goods") 
	def goods() {
		goods
	}
	
	@RequestMapping("/api/goods/{id}")
	def good(@PathVariable Integer id) {
		println("=> " + id)
		goods.find { good -> good.id == id }		
	}
}
