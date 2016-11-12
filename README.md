# nodeJS
Node JS in simple words is JavaScript on server.
Node JS involves asynchronous calls (non-blocking).

Difference between callback and events:

Events - Think of a Server (Employee) and Client (Boss).One Employee can have many Bosses. The Employee Raises the event, when he finishes the task, and the Bosses may decide to listen to the Employee event or not.The employee is the publisher and the bosses are subscriber.

Callback - The Boss specifically asked the employee to do a task and at the end of task done, the Boss wants to be notified. The employee will make sure that when the task is done, he notifies only the Boss that requested, not necessary all the Bosses. The employee will not notify the Boss, if the partial job is done. It will be only after all the task is done.Only one boss requested the info, and employee only posted the reply to one boss.

Installing mongoDB on mac:
 - brew install mongodb

 Starting mongoDB
 - brew services start mongodb

 Commands:
 - mongo -> to enter to mongo db shell
 - mongod -> command to start mongo db

 
 Commands for mongoDB shell:
 - show collections -> to see all tables or documents in database
 - db.COLLECTION_NAME.find() -> to find rows in collection
 - db.COLLECTION_NAME.find().pretty() -> for pretty view

Default installation directory of mongoDB:
/usr/local/var/mongodb