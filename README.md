# Logging Microservice

> *This Microservice is intended to collect logs from Kafka and push them to mongoDB documents also, it has various endpoints exposed to consume user activities for the purpose of tracking and audit.*


### > Steps to run and test this service

1) Use Docker-compose to start the kafka-zookeeper cluster.

2) open another terminal window and start a docker mongodb container at port 27017 using the following command.

    `docker run -p 27017:27017 -v /tmp/database:/data/db -d mongo`
    
3) Start the service using `npm start`

4) open a terminal window and get the docker container Id for kafka using `docker ps`

5) use the commnand with proper kafka contianer Id with the command to enter the container shell

      `docker exec -it <DOCKER_CONTAINER_ID> /bin/bash`
      
6) once you have entered the container shell terminal.execute the following to access the kafka-console-producer

      `/bin/kafka-console-producer --bootstrap-server localhost:9092 --topic info-log`
      
7) on having access to the producer all the messages that you produce her should be consumed by the service and tranfered to mongoDB. try executing the following message for demo 
      `{"level": "INFO","channel": "MOB","corelationId": "125577","userId": "RAH@#"}`
      
8) All the best :+1:
