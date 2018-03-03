import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Wolverine' },
      { id: 12, name: 'Cyclops' },
      { id: 13, name: 'Night Crawler' },
      { id: 14, name: 'Rogue' },
      { id: 15, name: 'Jean Gray' },
      { id: 16, name: 'Colossus' },
      { id: 17, name: 'The Beast' },
      { id: 18, name: 'Ice Man' },
      { id: 19, name: 'Jubilee' },
      { id: 20, name: 'Professor X' }
    ];
    return {heroes};
  }
}
