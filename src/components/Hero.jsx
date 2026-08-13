import { Link } from 'react-router-dom'
import { images } from '../assets/images.js'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">BELEZA • ESTILO • CONFIANÇA</span>
        <h1>Sua beleza merece um cuidado especial.</h1>
        <p>Atendimento personalizado para mulheres, homens e crianças em um ambiente acolhedor.</p>
        <div className="hero-actions">
          <Link className="button button-dark" to="/agendamento">Agende seu horário</Link>
          <Link className="button button-outline" to="/servicos">Conheça os serviços</Link>
        </div>
        <small>◷ Segunda a sábado, das 8h às 18h</small>
      </div>
      <div className="hero-visual">
        <img src={images.hero} alt="Interior moderno de um salão de beleza" />
        <div className="hero-seal">CUIDADO<br />EM CADA<br />DETALHE</div>
      </div>
    </section>
  )
}

export default Hero
