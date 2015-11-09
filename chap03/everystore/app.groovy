@Grab("groovy-templates")
@Grab("org.webjars:bootstrap:3.3.4")
//@Grab("org.webjars:angularjs:1.4.7")
@RestController
class App {

	def goods = [
		[ id: 1, name: "커피", price: 3000,  img: 'coffee.jpg', desc: "맛있는 커피" ],
		[ id: 2, name: "PS4", price: 400000, img: 'ps4.jpg', desc: "이번이 마지막 찬스 \n 최강의 콘솔게임머신"],
		[ id: 3, name: "자전거", price: 200000, img: 'bicycle.jpg', desc: "그림에 나오는 자전거" ]			
	]

  def comments = [  
    [id: 1, writer: "김철수", desc: "별로에요", good_id : 1],
    [id: 2, writer: "홍길동", desc: "괜찮은 것 같아요", good_id: 1] ,
    [id: 3, writer: "김철수", desc: "갖고싶네요!", good_id : 2],
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

	@RequestMapping("/api/goods/{id}/comments")
	def comments(@PathVariable Integer id) {
	    comments.findAll { comment -> comment.good_id == id }
	}
	
	@RequestMapping(value="/api/goods/{id}/comments", method=RequestMethod.POST) 
	def addComment(@PathVariable Integer id, @RequestBody Map comment) {
		println("comment => " + comment)
		comment.good_id = id
		comment.id = comments.size() + 1
		comments.add(comment)
		comment
	}
}
