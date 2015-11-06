package everystore.repository

import everystore.model.Comment
import org.springframework.data.repository.CrudRepository

interface CommentRepository extends CrudRepository <Comment, String>{

    List<Comment> findByGoodId(String id)

}