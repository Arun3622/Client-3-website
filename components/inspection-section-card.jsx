export function InspectionSectionCard({ section }) {
  return (
    <article className="inspection-card">
      <div className="inspection-card-head">
        <span className="inspection-card-number">{section.number}</span>
        <div>
          <p className="inspection-card-type">{section.type}</p>
          <h3>{section.title}</h3>
        </div>
      </div>
      <p className="inspection-card-description">{section.description}</p>
      <div className="inspection-card-meta">
        <strong>{section.items.length} checkpoints</strong>
        <span>
          {section.options
            ? "Marked as OK, Minor issue, or Major issue in the report."
            : "Included as documented evidence in the final report."}
        </span>
      </div>
      <details className="inspection-card-details">
        <summary>
          <span>View full checklist</span>
          <span>{section.items.length} items</span>
        </summary>
        <ul className="inspection-card-list">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </details>
    </article>
  );
}
