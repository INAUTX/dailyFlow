export class Habit {
    constructor(
      public id: number,
      public usuario_id: number,
      public nombre: string,
      public descripcion: string,
      public frecuencia: string,
      public hora_programada: string,
      public fecha_inicio: string,
      public activo: boolean,
      public racha_actual: number,
      public racha_maxima: number
    ) {}
  }
  