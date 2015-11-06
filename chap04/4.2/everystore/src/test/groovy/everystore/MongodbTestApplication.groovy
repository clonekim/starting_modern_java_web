package everystore

import com.mongodb.Mongo
import com.mongodb.MongoClient
import org.junit.runner.RunWith
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.AbstractMongoConfiguration
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner)
@Configuration
@EnableMongoRepositories
@ComponentScan(basePackages = ["everystore.model", "everystore.repository"])
class MongodbTestApplication extends AbstractMongoConfiguration {

    @Override
    protected String getDatabaseName() {
        "everystore-test"
    }

    @Override
    Mongo mongo() throws Exception {
        new MongoClient("127.0.0.1", 27017)
    }

}
