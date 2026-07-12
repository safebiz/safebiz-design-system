export function ServiceCard({
  icon,
  title,
  text,
  link,
}: {
  icon: string
  title: string
  text: string
  link: string
}) {
  return (
    <article className="card service-card">
      <div className="icon" aria-hidden>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a className="link" href={link}>
        Află mai mult →
      </a>
    </article>
  )
}
