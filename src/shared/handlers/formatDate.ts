/* eslint-disable max-len */
export const formatDate = (date: string | Date): string => {
  let fechaOriginal: Date;

  if (date instanceof Date) {
    fechaOriginal = date;
  } else {
    fechaOriginal = new Date(date);
  }

  const opciones = { 
    weekday: 'long', // Nombre completo del día de la semana
    year: 'numeric', // Año en formato numérico
    month: 'long',   // Nombre completo del mes
    day: 'numeric',  // Día del mes en formato numérico
    hour: 'numeric', // Hora en formato numérico
    minute: 'numeric' // Minuto en formato numérico
  };
  
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  
  const diaSemana = diasSemana[fechaOriginal.getDay()];
  const dia = fechaOriginal.getDate();
  const mes = meses[fechaOriginal.getMonth()];
  const anio = fechaOriginal.getFullYear();
  const hora = fechaOriginal.getHours();
  const minuto = fechaOriginal.getMinutes();
  
  return `${diaSemana}, ${dia} de ${mes} de ${anio} ${hora}:${minuto}`;
}
