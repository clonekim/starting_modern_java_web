package everystore.repository

import everystore.model.Good
import org.springframework.data.repository.CrudRepository


interface GoodRepository extends CrudRepository<Good, String> {

}