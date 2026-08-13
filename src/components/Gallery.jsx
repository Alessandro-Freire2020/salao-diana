import services from '../data/services.js'

function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <div className="section-heading">
        <div><span className="eyebrow">NOSSO TRABALHO</span><h2>Resultados que inspiram</h2></div>
        <p>Imagens ilustrativas dos cuidados e serviços oferecidos pelo salão.</p>
      </div>
      <div className="gallery-grid">
        {services.map((service, index) => (
          <figure className={`gallery-item gallery-item-${index + 1}`} key={service.id}>
            <img src={service.image} alt={`Serviço de ${service.title.toLowerCase()}`} loading="lazy" />
            <figcaption>{service.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
