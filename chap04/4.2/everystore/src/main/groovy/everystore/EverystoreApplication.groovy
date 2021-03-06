package everystore

import everystore.model.Comment
import everystore.model.Good
import everystore.repository.CommentRepository
import everystore.repository.GoodRepository
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
@Slf4j
class EverystoreApplication implements CommandLineRunner {

    @Autowired GoodRepository goodRepository

    @Autowired CommentRepository commentRepository

    static void main(String[] args) {
        SpringApplication.run EverystoreApplication, args
    }

    @Override
    void run(String... args) throws Exception {

        log.info("Creating user data initializing...")
        goodRepository.deleteAll()
        commentRepository.deleteAll()


        def coffee = new Good(name: "커피", price: 3000, img: "coffee.jpg", desc: "맛 있는 커피")
        def ps4 = new Good(name: "PS4", price: 400000, img: "ps4.jpg", desc: "이번이 마지막 찬스 \n 최강의 콘솔게임머신")
        def bicycle = new Good(name: "커피", price: 3000, img: "coffee.jpg", desc: "그림에 나오는 자전거")

        goodRepository.save(coffee)
        goodRepository.save(ps4)
        goodRepository.save(bicycle)

        def comment1 = new Comment(writer: "김철수", desc: "별로에오", goodId: coffee.id)
        def comment2 = new Comment(writer: "홍길동", desc: "괜찮은 것 같아요", goodId: coffee.id)
        def comment3 = new Comment(writer: "김철수", desc: "갖고싶어요!", goodId: ps4.id)


        commentRepository.save(comment1)
        commentRepository.save(comment2)
        commentRepository.save(comment3)
    }
}
