FROM openjdk:16

MAINTAINER Farid Haiderzada <farid@haiderzada.de>

ADD backend/target/lovfood.jar app.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGO_DB_URI  -jar /app.jar" ]