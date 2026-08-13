import { images } from '../assets/images.js'

const services = [
  { id: 1, icon: '✂', title: 'Cabelos', description: 'Cortes feminino, masculino e infantil, escova e químicas capilares.', duration: '30 minutos a 4 horas', image: images.hair },
  { id: 2, icon: '◇', title: 'Unhas', description: 'Manicure, pedicure e unhas em gel com acabamento cuidadoso.', duration: '40 a 70 minutos', image: images.nails },
  { id: 3, icon: '◉', title: 'Olhar', description: 'Design de sobrancelhas e alongamento de cílios.', duration: '20 minutos a 2 horas', image: images.lashes },
  { id: 4, icon: '✦', title: 'Barbearia', description: 'Atendimento masculino com cuidado, estilo e personalidade.', duration: 'Consulte a duração', image: images.barber },
]

export default services
