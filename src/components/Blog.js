import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Blog.css';

const POSTS = [
  {
    date: 'Mar 18, 2016',
    title: 'Apache Kafka — Next Generation Distributed Pub-Sub Messaging',
    excerpt: 'Apache Kafka is an open-source, distributed, high-throughput publish-subscribe messaging system originally developed at LinkedIn — fast, scalable, and built for event-driven architectures.',
    tags: ['Kafka', 'Messaging', 'Distributed Systems'],
    href: 'https://kodtodya.github.io/2016/03/18/Apache_Kafka/',
    live: true,
  },
  {
    date: 'Coming soon',
    title: 'Microservices with Apache Camel & Spring Boot',
    excerpt: 'Deep-diving into enterprise integration patterns using Apache Camel routes, Spring Boot auto-configuration, and production-ready deployment patterns.',
    tags: ['Camel', 'Spring Boot', 'Microservices'],
    href: null,
    live: false,
  },
  {
    date: 'Coming soon',
    title: 'OpenShift for Java Developers',
    excerpt: 'A practical guide to deploying, scaling, and monitoring containerized Java middleware applications on Red Hat OpenShift and Kubernetes.',
    tags: ['OpenShift', 'Kubernetes', 'Java'],
    href: null,
    live: false,
  },
];

export default function Blog() {
  useScrollReveal();
  return (
    <section id="blog" className="blog-section">
      <div className="section-wrap">
        <div className="section-label">Blog</div>
        <h2 className="section-title reveal">Knowledge Shared</h2>
        <p className="section-subtitle reveal d1">
          Writing about middleware, integration patterns, and open-source technology.
        </p>

        <div className="blog-grid">
          {POSTS.map((post, i) => (
            <div
              key={post.title}
              className={`blog-card card card--lift reveal d${i + 1}${!post.live ? ' blog-card--dim' : ''}`}
              onClick={() => post.href && window.open(post.href, '_blank')}
              style={{ cursor: post.live ? 'pointer' : 'default' }}
            >
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                {post.live && <span className="blog-live-dot" />}
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <div className="blog-tags">
                  {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                {post.live && (
                  <span className="blog-read-more">
                    Read →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
