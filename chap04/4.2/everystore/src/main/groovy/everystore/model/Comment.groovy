package everystore.model

import groovy.transform.ToString
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
@ToString(includeNames = true)
class Comment {

    @Id
    String id
    String goodId
    String writer
    String desc
}
