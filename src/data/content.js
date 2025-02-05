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
        </a>-based API Gateway handles SSL/TLS encryption
      </li>
      <li>
        <a href="#" onClick={(e) => { e.preventDefault(); onTermClick('service-mesh'); }} className="text-blue-600 hover:text-blue-800">
          Service Mesh
        </a> manages load balancing, circuit breakers, and service discovery
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
      <li>SQLX-managed schema migrations at build time</li>
    </ul>
  </div>
);