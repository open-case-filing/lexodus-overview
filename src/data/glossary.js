export const glossaryData = {
    'cloud-native': {
      title: 'Cloud-Native',
      definition: 'A software development approach that leverages cloud computing to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Applications are typically built as microservices, packaged in containers, and orchestrated to optimize resource utilization.'
    },
    'kubernetes': {
      title: 'Kubernetes (K8s)',
      definition: 'An open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides features like service discovery, load balancing, and self-healing capabilities.'
    },
    'microservices': {
      title: 'Microservices',
      definition: 'An architectural style where applications are structured as collections of loosely coupled services. Each service runs in its own process, communicates through well-defined APIs, can be deployed independently, and is organized around business capabilities.'
    },
    'service-mesh': {
      title: 'Service Mesh',
      definition: 'A dedicated infrastructure layer for managing service-to-service communication in a microservices architecture. Istio, the service mesh used in this platform, handles load balancing, service discovery, circuit breaking, security policies, monitoring and tracing.'
    },
    'minio': {
      title: 'MinIO',
      definition: 'An open-source object storage system compatible with Amazon S3 API. In this platform, it provides managed storage with configurable lifecycle policies, built-in encryption capabilities, and scalable and reliable data storage solution.'
    },
    'redpanda': {
      title: 'Redpanda',
      definition: 'A Kafka-compatible event streaming platform that enables event-driven architecture implementation, real-time data streaming, service decoupling through message queues, push notification capabilities, and analytics data pipeline integration.'
    },
    'oauth2': {
      title: 'OAuth2',
      definition: 'An industry-standard protocol for authorization that enables applications to obtain limited access to user accounts. The platform implements OAuth2 through Keycloak for secure authentication flows, role-based access control (RBAC), and token-based authorization.'
    },
    'keycloak': {
      title: 'Keycloak',
      definition: 'An open-source Identity and Access Management solution that provides user authentication, role-based access control, single sign-on (SSO), social login integration, and user federation.'
    },
    'jwt': {
      title: 'JWT (JSON Web Tokens)',
      definition: 'A compact, URL-safe means of representing claims between parties. In this platform, JWTs are propagated across services by OAuth_proxy, used for maintaining user context, and verified at multiple security layers.'
    },
    'zero-knowledge-security': {
      title: 'Zero-Knowledge Security',
      definition: 'A security principle where service providers have no access to user data in unencrypted form. Implemented through regular key rotation (every 4 hours), end-to-end encryption, and secure key management in Vault.'
    },
    'vault': {
      title: 'Vault',
      definition: 'HashiCorp\'s secrets management tool that provides secure storage of secrets, certificates, and encryption keys, automated key rotation, access control and audit logging, and integration with cloud providers\' key management services.'
    },
    'cqrs': {
      title: 'CQRS (Command Query Responsibility Segregation)',
      definition: 'An architectural pattern that separates read and write operations for a data store. In this platform, commands handle data modifications, queries handle data retrieval, with separate models for reading and writing, enabling enhanced performance through specialized optimization.'
    },
    'sqlx': {
      title: 'SQLX',
      definition: 'A Rust SQL toolkit that provides compile-time checked SQL queries, automated schema migrations, type-safe database interactions, and efficient connection pooling.'
    },
    'circuit-breaker': {
      title: 'Circuit Breaker',
      definition: 'A design pattern that prevents cascading failures in distributed systems by monitoring for failures, encapsulating logic for preventing system overload, providing fallback mechanisms, and enabling graceful service degradation.'
    },
    'cicd': {
      title: 'CICD (Continuous Integration/Continuous Deployment)',
      definition: 'Automated pipeline for code integration and deployment that includes automated testing, security scanning, quality checks, deployment automation, and rollback capabilities.'
    },
    'api-gateway': {
      title: 'API Gateway',
      definition: 'An entry point for client applications that provides SSL/TLS termination, request routing, authentication, rate limiting, API versioning, and request/response transformation.'
    },
    'infrastructure-as-code': {
      title: 'Infrastructure as Code (IaC)',
      definition: 'The practice of managing and provisioning infrastructure through code instead of manual processes. Enables version control, automated deployment, and consistent environments across development stages.'
    }
  };
  