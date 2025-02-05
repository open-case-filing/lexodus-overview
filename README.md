# Cloud-Native Development Platform

A [cloud-native](glossary.md#cloud-native) platform enabling rapid upstream development with enterprise-grade security and scalability.

## Core Components

### Edge Security & Routing
- [Kubernetes](glossary.md#kubernetes-k8s)-based [API Gateway](glossary.md#api-gateway) handles SSL/TLS encryption
- [Istio Service Mesh](glossary.md#service-mesh) manages load balancing, [circuit breakers](glossary.md#circuit-breaker), and service discovery
- [OAuth2](glossary.md#oauth2) integration with [Keycloak](glossary.md#keycloak) for RBAC controls
- OAuth_proxy intercepts traffic, propagating [JWT](glossary.md#jwt-json-web-tokens) tokens across services

### Microservice Architecture
- Standardized [CQRS](glossary.md#cqrs-command-query-responsibility-segregation) pattern for APIs
- Route handlers with built-in permission checks
- SQL commands organized by permissions
- [SQLX](glossary.md#sqlx)-managed schema migrations at build time

### Cloud-Agnostic Infrastructure
- [MinIO](glossary.md#minio): Managed storage with lifecycle policies and encryption
- [Redpanda](glossary.md#redpanda): Event-driven architecture enabling:
  - Service decoupling
  - Real-time communications
  - Push notifications
  - Analytics integration
- [Vault](glossary.md#vault): 4-hour key rotation for [zero-knowledge security](glossary.md#zero-knowledge-security)

### Developer Experience
- Rapid API development with security-first design
- Custom crates and macros for auth handling
- Automated [CICD](glossary.md#cicd-continuous-integrationcontinuous-deployment) with quality and security checks
- Minimal boilerplate through standardized patterns

## Key Features
- Double-layered permission checking ([Istio](glossary.md#service-mesh) + Application)
- Automated database security with key rotation
- Event-driven messaging for service communication
- Cloud-provider independence
- Standardized development patterns

The platform emphasizes security and developer productivity while maintaining flexibility for future expansion through event-driven architecture and [service mesh](glossary.md#service-mesh) capabilities.

---

# Accelerate Your Development, Not Your Technical Debt

Imagine deploying secure, scalable [microservices](glossary.md#microservices) in minutes, not months. Our cloud-native platform eliminates the traditional hurdles of enterprise development, letting your teams focus on what matters: building features that drive value.

## Why Leaders Choose Our Platform

### Immediate Cost Reduction
- Cut development time by 80% with pre-built security and infrastructure
- Eliminate redundant authentication/authorization work across services
- Reduce cloud costs through intelligent resource management
- Zero vendor lock-in with cloud-agnostic design

### Enterprise-Grade Security, Zero Effort
- Bank-grade security baked in, not bolted on
- Automatic key rotation every 4 hours
- Zero-trust architecture with [Istio service mesh](glossary.md#service-mesh)
- Compliance-ready with built-in audit trails

### Developer Experience That Delivers
- Deploy new APIs in minutes with our [CQRS](glossary.md#cqrs-command-query-responsibility-segregation) template
- No more authentication headaches - one-line integration
- Built-in real-time capabilities through [Redpanda](glossary.md#redpanda)
- Standardized patterns that scale with your team

### Future-Proof Architecture
- Event-driven design enables limitless integration
- [Cloud-native](glossary.md#cloud-native) infrastructure runs anywhere
- Real-time capabilities built into the core
- Scale from startup to enterprise without redesign

### The Numbers Speak
- 90% reduction in security implementation time
- 75% fewer lines of code for new services
- Zero downtime deployments
- 100% [infrastructure as code](glossary.md#infrastructure-as-code-iac)