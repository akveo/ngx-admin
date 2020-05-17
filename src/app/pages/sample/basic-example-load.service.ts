import { Injectable } from '@angular/core';

@Injectable()
export class BasicExampleLoadService {

  static DATA_SIZE = 500;

  // emulating request to the server
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.generateData());
      }, 2000);
    });
  }

  getNewExampleObj(n?: number): any {
    n = typeof n !== 'undefined' ? n : Math.random() * 1000;
    return {
      id: n,
      name: `Jack London ${n}`,
      username: `jack_london_${n}`,
      email: `jack_london_${n}@example.com`,
    };
  }

  protected generateData(): Array<any> {
    const data = [];
    for (let i = 0; i < BasicExampleLoadService.DATA_SIZE; i++) {
      data.push(this.getNewExampleObj(i));
    }
    return data;
  }
}
