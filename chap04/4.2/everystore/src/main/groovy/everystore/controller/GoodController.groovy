package everystore.controller

import everystore.model.Comment
import everystore.repository.CommentRepository
import everystore.repository.GoodRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.ModelAndView

@RestController
class GoodController {


    @Autowired
    GoodRepository goodRepository

    @Autowired
    CommentRepository commentRepository


    @RequestMapping("/")
    def index() {
       new ModelAndView("index")
    }

    @RequestMapping("/api/goods")
    def goods() {
        goodRepository.findAll()
    }

    @RequestMapping("/api/goods/{id}")
    def good(@PathVariable String id) {
        goodRepository.findOne(id)
    }

    @RequestMapping("/api/goods/{id}/comments")
    def comments(@PathVariable String id) {
        commentRepository.findByGoodId(id)
    }

    @RequestMapping(value="/api/goods/{id}/comments", method= RequestMethod.POST)
    def addComment(@PathVariable String id, @RequestBody Comment comment) {
        comment.goodId = id
        commentRepository.save(comment)
    }

}
