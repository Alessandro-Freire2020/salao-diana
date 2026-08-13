const address = 'Rua Acácio Leite, 2982, Araújo Costa, Itacoatiara - AM, 69101-251'
const encodedAddress = encodeURIComponent(address)
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
const embedLink = `https://www.google.com/maps?q=${encodedAddress}&output=embed`

function LocationMap() {
  return (
    <div className="location-map">
      <iframe
        src={embedLink}
        title="Localização do Salão da Diana no Google Maps"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="map-details">
        <p><strong>Salão da Diana</strong><br />{address}</p>
        <a className="button button-dark" href={mapsLink} target="_blank" rel="noreferrer">
          Abrir no Google Maps
        </a>
      </div>
    </div>
  )
}

export default LocationMap
