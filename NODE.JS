Q.1 Explain Middlewares in NodeJS ?
In Node.js, middleware refers to a function or a set of functions that are executed in the middle of the request-response cycle. It acts as a bridge between the incoming request and the outgoing response, allowing you to perform various operations, modify the request or response objects, and add functionality to your Node.js application.

Middleware functions have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. The 



Q.2 Why use Express Over NodeJS ?
Express is a web application framework for Node.js that provides a set of features and tools to simplify the process of building web applications. When compared to using Node.js alone, there are several reasons why developers choose to use Express:

Simplified Routing: Express provides a clean and intuitive routing system that makes it easier to define routes for different URLs and HTTP methods. It allows you to handle different types of requests and define middleware functions for specific routes, making the code more organized and manageable.

Middleware Support: Express has robust middleware support, allowing you to easily integrate various middleware functions into your application. Middleware functions can handle tasks such as logging, authentication, request parsing, error handling, and more. The middleware architecture simplifies the process of extending the functionality of your application and applying common functionality across multiple routes.


Q.3 What are REST API ?
REST (Representational State Transfer) API, often referred to as RESTful API, is an architectural style for designing networked applications. It is based on a set of principles and constraints that define how resources are identified, addressed, and manipulated in a distributed system.

Here are the key characteristics and principles of RESTful APIs:

Resources: In REST, resources are the fundamental concept. A resource can be any object, data, or service that can be identified and accessed over the network. Resources are typically represented using URLs (Uniform Resource Locators) or URIs (Uniform Resource Identifiers).

Stateless: REST is stateless, meaning that each request from a client to a server must contain all the information needed to understand and process that request. The server does not maintain any client state between requests. Each request is independent, and the server responds based on the request information and the current state of th
RESTful APIs are widely used for building web services and exposing data and functionalities over the internet. They provide a scalable, stateless, and standardized approach to building distributed systems. RESTful APIs have become the de facto standard for building APIs due to their simplicity, flexibility, and compatibility with the HTTP protocol.




Q.4 What is the use of MongoDB?
MongoDB is a popular open-source NoSQL database that is designed to handle large amounts of unstructured or semi-structured data. It provides a flexible and scalable solution for storing and retrieving data, particularly in scenarios where data structures may vary or evolve over time.

Here are some key uses and features of MongoDB:

1- Document-Oriented Database: MongoDB is a document database, which means it stores data in flexible, JSON-like documents called BSON (Binary JSON) instead of traditional rows and columns. This allows for easy and dynamic schema design, making it suitable for storing diverse and evolving data structures.

2--Scalability and Performance: MongoDB is designed to scale horizontally, meaning it can handle increasing amounts of data and traffic by distributing the load across multiple servers or clusters. It provides sharding capabilities to partition data across multiple machines and supports replica sets for high availability and automatic failover.
Flexibility and Schema-less Design: With MongoDB, you can store documents with varying structures within the same collection. This flexibility allows for agile development and accommodates changing data requirements without the need for complex schema migrations.

3--Querying and Indexing: MongoDB provides a rich set of querying capabilities, including support for complex queries, aggregations, and geospatial queries. It supports the indexing of fields, which enables efficient retrieval of data based on specific criteria and improves query performance.

4--High Availability and Fault Tolerance: MongoDB offers built-in replication and failover capabilities through replica sets. Replica sets provide automatic synchronization and data redundancy, ensuring data durability and availability even in the event of hardware failures or network issues.



Q.5  What is Mongoose and how does it relate to MongoDB?
Mongoose is an Object Data Modeling (ODM) library for Node.js that provides a higher-level abstraction and a more convenient way to interact with MongoDB. It is designed to simplify the process of working with MongoDB and enables you to define schemas, models, and perform database operations using a more intuitive and structured approach.

Here's an overview of Mongoose and its relationship with MongoDB:

1-- Schema Definition: With Mongoose, you can define schemas for MongoDB collections. A schema defines the structure of documents, including the fields, data types, validation rules, and default values. It allows you to enforce data consistency and provides a blueprint for creating, updating, and querying documents.
2-0-Model Creation: Mongoose allows you to create models based on defined schemas. A model represents a collection in MongoDB and provides an interface to perform CRUD operations on the documents within that collection. Models have built-in methods for creating, querying, updating, and deleting documents.
Mongoose acts as an intermediary between your Node.js application and the MongoDB database. It provides a powerful set of tools and features that simplify the interaction with MongoDB, including schema definition, model creation, querying, updating, and hooks. Mongoose enhances the developer experience and productivity when working with MongoDB in Node.js applications.
