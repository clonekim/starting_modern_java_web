package everystore.model

import groovy.transform.ToString
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document

@Document
@ToString(includeNames = true)
class Good {

    @Id
    String id
    String name
    String desc
    String img
    double price

}
