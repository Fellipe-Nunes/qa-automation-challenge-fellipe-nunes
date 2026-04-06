package tests;

import base.BaseApiTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class DogApiTest extends BaseApiTest {

@Test
void listBreeds(){

given()

.when()
.get("/breeds/list/all")

.then()
.statusCode(200)
.body("status",equalTo("success"));

}

@Test
void breedImages(){

given()

.when()
.get("/breed/hound/images")

.then()
.statusCode(200)
.body("message.size()",greaterThan(0));

}

@Test
void randomImage(){

given()

.when()
.get("/breeds/image/random")

.then()
.statusCode(200)
.body("message",containsString("https"));

}

}