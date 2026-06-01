export default function PageIntro({ eyebrow, title, description, children }) {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro__description">{description}</p>
        {children}
      </div>
    </section>
  )
}
