import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const CATEGORIES = [
  { icon: '☕', name: 'Core Dev',         tags: ['Core Java v8/v11', 'Spring', 'Spring Boot', 'Apache Camel', 'Spring Batch', 'Maven', 'OSGi Blueprint'] },
  { icon: '☁️', name: 'Cloud & Containers', tags: ['Red Hat OpenShift', 'Docker', 'Kubernetes', 'Quarkus', 'Apache Karaf', 'Fuse Container'] },
  { icon: '📨', name: 'Messaging',         tags: ['Apache Kafka', 'ActiveMQ', 'ActiveMQ Artemis', 'IBM WebSphere MQ', 'Tibco EMS', 'HornetQ'] },
  { icon: '🗄️', name: 'Databases',         tags: ['Oracle', 'MongoDB', 'Apache Cassandra', 'H2', 'Apache Derby', 'SQL'] },
  { icon: '🔗', name: 'Middleware',         tags: ['JBoss Fuse', 'JBoss EAP', 'JBoss A-MQ', 'Spring Integration', 'IBM IIB', 'Microservices'] },
  { icon: '🔍', name: 'Observability',      tags: ['Elasticsearch', 'Kibana', 'Log4j', 'Logback', 'slf4j', 'ZooKeeper'] },
  { icon: '🧪', name: 'Testing',            tags: ['JUnit', 'Cucumber', 'BDD', 'CodePro'] },
  { icon: '🛠️', name: 'Tools & VCS',        tags: ['Git', 'BitBucket', 'SVN', 'IntelliJ', 'Eclipse', 'IBM ClearCase', 'PGP'] },
];

export default function Skills() {
  useScrollReveal();
  return (
    <section id="skills" className="skills-section">
      <div className="section-wrap">
        <div className="section-label">Skills</div>
        <h2 className="section-title reveal">Technical Arsenal</h2>
        <p className="section-subtitle reveal d1">
          20+ technologies spanning middleware, cloud, messaging, and databases.
        </p>

        <div className="skills-bento">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.name} className={`skill-card card card--lift reveal d${(i % 3) + 1}`}>
              <div className="skill-card-header">
                <span className="skill-card-icon">{cat.icon}</span>
                <span className="skill-card-name">{cat.name}</span>
              </div>
              <div className="skill-tags">
                {cat.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
