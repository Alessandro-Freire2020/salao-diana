import ServiceCard from '../components/ServiceCard.jsx'
import services from '../data/services.js'

function Services() {
  return (
    <section className="page-section section">
      <div className="page-heading"><span className="eyebrow">SERVIÇOS</span><h1>Escolha seu próximo cuidado</h1><p>Serviços para mulheres, homens e crianças, realizados com atenção e profissionalismo.</p></div>
      <div className="services-page-grid">{services.map((service) => <ServiceCard key={service.id} service={service} showImage />)}</div>
    </section>
  )
}

export default Services
