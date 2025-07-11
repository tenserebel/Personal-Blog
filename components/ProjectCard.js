import React from 'react'

export default function ProjectCard({ title, date, role, description, link }) {
  return (
    <div className="project-card">
      <h3>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p>
        <strong>{date}</strong>
        {role ? ` – ` : null}
        <em>{role}</em>
      </p>
      <ul>
        {description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <style jsx>{`
        .project-card {
          border: 1px solid #333;
          border-radius: 10px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          background: #23272f;
          color: #f1f1f1;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }
        h3 {
          margin-top: 0;
          color: #e0e6f0;
        }
        a {
          color: #4ea1f7;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        p,
        li {
          color: #cfd8dc;
        }
      `}</style>
    </div>
  )
}
