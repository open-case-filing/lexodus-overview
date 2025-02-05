import React from 'react';

export const MainContent = ({ onTermClick }) => (
  <div className="prose max-w-none">
    <h1>Cloud-Native Development Platform</h1>
    <p>
      A <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('cloud-native'); }} className="text-blue-600 hover:text-blue-800">
        cloud-native
      </a> platform enabling rapid upstream development with enterprise-grade security and scalability.
    </p>
    
    <h2>Core Components</h2>
    
    <h3>Edge Security & Routing</h3>
    <ul>
      <li>
        <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('kubernetes'); }} className="text-blue-600 hover:text-blue-800">
          Kubernetes
        </a>-based <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('api-gateway'); }} className="text-blue-600 hover:text-blue-800">
          API Gateway
        </a> handles SSL/TLS encryption
      </li>
      <li>
        <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('service-mesh'); }} className="text-blue-600 hover:text-blue-800">
          Istio Service Mesh
        </a> manages load balancing, <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('circuit-breaker'); }} className="text-blue-600 hover:text-blue-800">
          circuit breakers
        </a>, and service discovery
      </li>
      <li>
        <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('oauth2'); }} className="text-blue-600 hover:text-blue-800">
          OAuth2
        </a> integration with <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('keycloak'); }} className="text-blue-600 hover:text-blue-800">
          Keycloak
        </a> for RBAC controls
      </li>
      <li>
        OAuth_proxy intercepts traffic, propagating <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('jwt'); }} className="text-blue-600 hover:text-blue-800">
          JWT
        </a> tokens across services
      </li>
    </ul>

    <h3>Microservice Architecture</h3>
    <ul>
      <li>
        Standardized <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('cqrs'); }} className="text-blue-600 hover:text-blue-800">
          CQRS
        </a> pattern for APIs
      </li>
      <li>Route handlers with built-in permission checks</li>
      <li>SQL commands organized by permissions</li>
      <li>
        <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('sqlx'); }} className="text-blue-600 hover:text-blue-800">
          SQLX
        </a>-managed schema migrations at build time
      </li>
    </ul>

    <h3>Cloud-Agnostic Infrastructure</h3>
    <ul>
      <li>
        <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('minio'); }} className="text-blue-600 hover:text-blue-800">
          MinIO
        </a>: Managed storage with lifecycle policies and encryption
      </li>
      <li>
        <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('redpanda'); }} className="text-blue-600 hover:text-blue-800">
          Redpanda
        </a>: Event-driven architecture enabling:
        <ul className="ml-6">
          <li>Service decoupling</li>
          <li>Real-time communications</li>
          <li>Push notifications</li>
          <li>Analytics integration</li>
        </ul>
      </li>
      <li>
        <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('vault'); }} className="text-blue-600 hover:text-blue-800">
          Vault
        </a>: 4-hour key rotation for <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('zero-knowledge-security'); }} className="text-blue-600 hover:text-blue-800">
          zero-knowledge security
        </a>
      </li>
    </ul>

    <h3>Developer Experience</h3>
    <ul>
      <li>Rapid API development with security-first design</li>
      <li>Custom crates and macros for auth handling</li>
      <li>
        Automated <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('cicd'); }} className="text-blue-600 hover:text-blue-800">
          CICD
        </a> with quality and security checks
      </li>
      <li>Minimal boilerplate through standardized patterns</li>
    </ul>

    <h2>Key Features</h2>
    <ul>
      <li>
        Double-layered permission checking (<a href="#" onClick={(e) => { e.preventDefault(); onTermClick('service-mesh'); }} className="text-blue-600 hover:text-blue-800">
          Istio
        </a> + Application)
      </li>
      <li>Automated database security with key rotation</li>
      <li>Event-driven messaging for service communication</li>
      <li>Cloud-provider independence</li>
      <li>Standardized development patterns</li>
    </ul>

    <p>
      The platform emphasizes security and developer productivity while maintaining flexibility for future expansion through event-driven architecture and <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('service-mesh'); }} className="text-blue-600 hover:text-blue-800">
        service mesh
      </a> capabilities.
    </p>

    <hr className="my-8" />

    <h1>Accelerate Your Development, Not Your Technical Debt</h1>
    <p>
      Imagine deploying secure, scalable <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('microservices'); }} className="text-blue-600 hover:text-blue-800">
        microservices
      </a> in minutes, not months. Our cloud-native platform eliminates the traditional hurdles of enterprise development, letting your teams focus on what matters: building features that drive value.
    </p>

    <h2>Why Leaders Choose Our Platform</h2>

    <h3>Immediate Cost Reduction</h3>
    <ul>
      <li>Cut development time by 80% with pre-built security and infrastructure</li>
      <li>Eliminate redundant authentication/authorization work across services</li>
      <li>Reduce cloud costs through intelligent resource management</li>
      <li>Zero vendor lock-in with cloud-agnostic design</li>
    </ul>

    <h3>Enterprise-Grade Security, Zero Effort</h3>
    <ul>
      <li>Bank-grade security baked in, not bolted on</li>
      <li>Automatic key rotation every 4 hours</li>
      <li>
        Zero-trust architecture with <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('service-mesh'); }} className="text-blue-600 hover:text-blue-800">
          Istio service mesh
        </a>
      </li>
      <li>Compliance-ready with built-in audit trails</li>
    </ul>

    <h3>Developer Experience That Delivers</h3>
    <ul>
      <li>
        Deploy new APIs in minutes with our <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('cqrs'); }} className="text-blue-600 hover:text-blue-800">
          CQRS
        </a> template
      </li>
      <li>No more authentication headaches - one-line integration</li>
      <li>
        Built-in real-time capabilities through <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('redpanda'); }} className="text-blue-600 hover:text-blue-800">
          Redpanda
        </a>
      </li>
      <li>Standardized patterns that scale with your team</li>
    </ul>

    <h3>Future-Proof Architecture</h3>
    <ul>
      <li>Event-driven design enables limitless integration</li>
      <li>
        <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('cloud-native'); }} className="text-blue-600 hover:text-blue-800">
          Cloud-native
        </a> infrastructure runs anywhere
      </li>
      <li>Real-time capabilities built into the core</li>
      <li>Scale from startup to enterprise without redesign</li>
    </ul>

    <h3>The Numbers Speak</h3>
    <ul>
      <li>90% reduction in security implementation time</li>
      <li>75% fewer lines of code for new services</li>
      <li>Zero downtime deployments</li>
      <li>
        100% <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('infrastructure-as-code'); }} className="text-blue-600 hover:text-blue-800">
          infrastructure as code
        </a>
      </li>
    </ul>
  </div>
);