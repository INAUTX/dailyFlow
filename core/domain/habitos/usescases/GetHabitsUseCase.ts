import { HabitRepository } from '../repositories/HabitRepository';

export class GetHabitsUseCase {
  constructor(private habitRepo: HabitRepository) {}

  async execute(usuario_id: number) {
    return this.habitRepo.getHabits(usuario_id);
  }
}
