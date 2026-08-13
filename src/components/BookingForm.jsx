import { useState } from 'react'

function BookingForm() {
  const [feedback, setFeedback] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = `Olá! Meu nome é ${form.get('nome')}. Gostaria de solicitar um agendamento para ${form.get('servico')}, no dia ${form.get('data')}, às ${form.get('horario')}.`
    setFeedback('Solicitação preparada. Abrindo o WhatsApp...')
    window.open(`https://wa.me/5592994139817?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>Nome<input name="nome" type="text" placeholder="Digite seu nome" required /></label>
      <label>Serviço
        <select name="servico" defaultValue="" required>
          <option value="" disabled>Selecione</option>
          <option>Corte de cabelo</option><option>Escova</option><option>Química capilar</option>
          <option>Manicure</option><option>Pedicure</option><option>Unhas em gel</option>
          <option>Design de sobrancelhas</option><option>Alongamento de cílios</option><option>Barbearia</option>
        </select>
      </label>
      <label>Data<input name="data" type="date" required /></label>
      <label>Horário<input name="horario" type="time" min="08:00" max="18:00" required /></label>
      <button className="button button-gold form-button" type="submit">Enviar pelo WhatsApp</button>
      <p className="form-feedback" aria-live="polite">{feedback}</p>
    </form>
  )
}

export default BookingForm
