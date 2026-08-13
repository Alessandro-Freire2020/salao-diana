import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Gallery from '../components/Gallery.jsx'
import LocationMap from '../components/LocationMap.jsx'
import services from '../data/services.js'

function Home() {
  return (
    <>
      <Hero />
      <section className="intro section" id="sobre">
        <div><span className="eyebrow">SALÃO DA DIANA</span><h2>Beleza que valoriza quem você é</h2></div>
        <p>Qualidade, profissionalismo e atendimento humanizado para transformar cada visita em uma experiência de autoestima e bem-estar.</p>
      </section>

      <section className="section services-preview">
        <div className="section-heading">
          <div><span className="eyebrow">NOSSOS SERVIÇOS</span><h2>Cuidado completo em um só lugar</h2></div>
          <p>Conheça os principais atendimentos oferecidos pelo Salão da Diana.</p>
        </div>
        <div className="service-grid">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
        <Link className="button button-dark section-action" to="/servicos">Ver todos os serviços</Link>
      </section>

      <Gallery />

      <section className="contact section" id="contato">
        <div className="contact-info"><span className="eyebrow">ONDE ESTAMOS</span><h2>Venha cuidar de você</h2><p>⌖ Rua Acácio Leite, nº 2982<br />Araújo Costa, Itacoatiara–AM<br />CEP 69101-251</p><p>◷ Segunda a sábado, das 8h às 18h</p><p>▣ Pix, dinheiro, cartão de débito e crédito</p><Link className="button button-gold" to="/agendamento">Solicitar horário</Link></div>
        <LocationMap />
      </section>
    </>
  )
}

export default Home
