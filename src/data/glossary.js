export const glossaryData = {
    'cloud-native': {
      title: 'Cloud-Native',
      definition: 'In simple terms: Think of this as building your software like Lego blocks that can run anywhere on the internet. Instead of being tied to specific computers, your application can easily move between different cloud providers and scale up or down as needed.\n\nTechnical definition: A software development approach that leverages cloud computing to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Applications are typically built as microservices, packaged in containers, and orchestrated to optimize resource utilization.'
    },
    'kubernetes': {
      title: 'Kubernetes (K8s)',
      definition: 'In simple terms: Think of Kubernetes as an intelligent manager for your application. It makes sure all parts of your application are running smoothly, automatically fixes problems, and helps handle increased user traffic without you having to manually intervene.\n\nTechnical definition: An open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides features like service discovery, load balancing, and self-healing capabilities.'
    },
    'microservices': {
      title: 'Microservices',
      definition: 'In simple terms: Instead of building one massive application, we break it into smaller, independent pieces that work together. This makes it easier to update individual parts without affecting the whole system - like being able to change a tire without stopping the entire car.\n\nTechnical definition: An architectural style where applications are structured as collections of loosely coupled services. Each service runs in its own process, communicates through well-defined APIs, can be deployed independently, and is organized around business capabilities.'
    },
    'service-mesh': {
      title: 'Service Mesh',
      definition: 'In simple terms: Think of this as an intelligent traffic control system for your application. It ensures all the different parts of your application can communicate securely and reliably, automatically routing around problems and maintaining security - like having a smart GPS system that always finds the best route.\n\nTechnical definition: A dedicated infrastructure layer for managing service-to-service communication in a microservices architecture. Istio, the service mesh used in this platform, handles load balancing, service discovery, circuit breaking, security policies, monitoring and tracing.'
    },
    'minio': {
      title: 'MinIO',
      definition: 'In simple terms: This is your application\'s secure filing cabinet in the cloud. It stores files and data in a way that\'s easy to access but highly secure, with automatic organization and cleanup features - like having a self-organizing, secure storage unit.\n\nTechnical definition: An open-source object storage system compatible with Amazon S3 API. In this platform, it provides managed storage with configurable lifecycle policies, built-in encryption capabilities, and scalable and reliable data storage solution.'
    },
    'redpanda': {
      title: 'Redpanda',
      definition: 'In simple terms: This is like a super-fast postal service for your application that ensures different parts can communicate instantly. It enables real-time features like notifications and updates, ensuring everything stays in sync - like having a digital nervous system for your application.\n\nTechnical definition: A Kafka-compatible event streaming platform that enables event-driven architecture implementation, real-time data streaming, service decoupling through message queues, push notification capabilities, and analytics data pipeline integration.'
    },
    'oauth2': {
      title: 'OAuth2',
      definition: 'In simple terms: This is like a secure VIP pass system for your application. Instead of checking IDs at every door, users get a digital pass that safely proves who they are and what they\'re allowed to do - similar to how you can use your Google account to log into other services.\n\nTechnical definition: An industry-standard protocol for authorization that enables applications to obtain limited access to user accounts. The platform implements OAuth2 through Keycloak for secure authentication flows, role-based access control (RBAC), and token-based authorization.'
    },
    'keycloak': {
      title: 'Keycloak',
      definition: 'In simple terms: This is your application\'s security guard and ID verification system all in one. It handles everything related to users logging in, making sure they are who they say they are, and controlling what they\'re allowed to do - like having a really smart doorman who knows everyone\'s permissions.\n\nTechnical definition: An open-source Identity and Access Management solution that provides user authentication, role-based access control, single sign-on (SSO), social login integration, and user federation.'
    },
    'jwt': {
      title: 'JWT (JSON Web Tokens)',
      definition: 'In simple terms: Think of this as a secure digital ID badge that users carry as they move through different parts of your application. It contains encrypted information about who they are and what they\'re allowed to do - like a smart passport that different services can verify.\n\nTechnical definition: A compact, URL-safe means of representing claims between parties. In this platform, JWTs are propagated across services by OAuth_proxy, used for maintaining user context, and verified at multiple security layers.'
    },
    'zero-knowledge-security': {
      title: 'Zero-Knowledge Security',
      definition: 'In simple terms: This is like having a bank vault where even the bank employees can\'t see what\'s inside. Your data is so securely encrypted that even the system administrators can\'t access the actual content - ensuring maximum privacy and security.\n\nTechnical definition: A security principle where service providers have no access to user data in unencrypted form. Implemented through regular key rotation (every 4 hours), end-to-end encryption, and secure key management in Vault.'
    },
    'vault': {
      title: 'Vault',
      definition: 'In simple terms: This is your application\'s ultra-secure safe for sensitive information. It regularly changes security codes and keeps track of who accessed what - like a high-tech bank vault that automatically updates its locks every few hours.\n\nTechnical definition: HashiCorp\'s secrets management tool that provides secure storage of secrets, certificates, and encryption keys, automated key rotation, access control and audit logging, and integration with cloud providers\' key management services.'
    },
    'cqrs': {
      title: 'CQRS (Command Query Responsibility Segregation)',
      definition: 'In simple terms: This is like having separate doors for entering and exiting a building. By separating how data is written and read, the system can handle both tasks more efficiently - like having a fast lane for reading data and a secure lane for changing it.\n\nTechnical definition: An architectural pattern that separates read and write operations for a data store. In this platform, commands handle data modifications, queries handle data retrieval, with separate models for reading and writing, enabling enhanced performance through specialized optimization.'
    },
    'sqlx': {
      title: 'SQLX',
      definition: 'In simple terms: This is like having a super-smart assistant that helps manage your database, catching errors before they happen and ensuring all database operations are safe and efficient - like spell-check for your database code.\n\nTechnical definition: A Rust SQL toolkit that provides compile-time checked SQL queries, automated schema migrations, type-safe database interactions, and efficient connection pooling.'
    },
    'circuit-breaker': {
      title: 'Circuit Breaker',
      definition: 'In simple terms: Just like how an electrical circuit breaker prevents damage from power surges, this feature prevents problems in one part of your application from affecting others. It automatically detects issues and takes protective action - like having a safety switch for your services.\n\nTechnical definition: A design pattern that prevents cascading failures in distributed systems by monitoring for failures, encapsulating logic for preventing system overload, providing fallback mechanisms, and enabling graceful service degradation.'
    },
    'cicd': {
      title: 'CICD (Continuous Integration/Continuous Deployment)',
      definition: 'In simple terms: This is like having an automated assembly line for your code. It automatically tests, checks for security issues, and deploys your code safely - like having a quality control department that works 24/7.\n\nTechnical definition: Automated pipeline for code integration and deployment that includes automated testing, security scanning, quality checks, deployment automation, and rollback capabilities.'
    },
    'api-gateway': {
      title: 'API Gateway',
      definition: 'In simple terms: Think of this as your application\'s front desk. It\'s the main entry point that handles security, directs traffic to the right place, and ensures everything coming in and out is properly processed - like having a smart receptionist for your application.\n\nTechnical definition: An entry point for client applications that provides SSL/TLS termination, request routing, authentication, rate limiting, API versioning, and request/response transformation.'
    },
    'infrastructure-as-code': {
      title: 'Infrastructure as Code (IaC)',
      definition: 'In simple terms: Instead of manually setting up servers and systems, everything is defined in code - like having a detailed blueprint that can automatically build your entire application infrastructure. This makes it easy to recreate the exact same setup anywhere.\n\nTechnical definition: The practice of managing and provisioning infrastructure through code instead of manual processes. Enables version control, automated deployment, and consistent environments across development stages.'
    }
  };