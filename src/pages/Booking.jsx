import BookingForm from '../components/BookingForm.jsx'

function Booking() {
  return (
    <section className="booking section page-booking">
      <div className="booking-content"><span className="eyebrow">AGENDE SEU HORÁRIO</span><h1>Reserve seu momento de cuidado</h1><p>Preencha os dados. A solicitação será enviada pelo WhatsApp e confirmada pelo salão.</p><strong>WhatsApp: (92) 99413-9817</strong><small>Cancelamentos e remarcações devem ser comunicados com antecedência.</small></div>
      <BookingForm />
    </section>
  )
}

export default Booking
