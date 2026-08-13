import { Link } from 'react-router-dom'

function ServiceCard({ service, showImage = false }) {
  return (
    <article className={showImage ? 'service-card service-card-image' : 'service-card'}>
      {showImage && <img src={service.image} alt={`Atendimento de ${service.title.toLowerCase()}`} loading="lazy" />}
      <div className="service-card-content">
        <span className="service-icon" aria-hidden="true">{service.icon}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <small>{service.duration}</small>
        {showImage && <Link className="text-link" to="/agendamento">Solicitar agendamento →</Link>}
      </div>
    </article>
  )
}

export default ServiceCard
