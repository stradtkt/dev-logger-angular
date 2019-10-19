import { Injectable } from '@angular/core';
import {Log} from '../models/Log';

@Injectable({
  providedIn: 'root'
})

export class LogService {
  logs: Log[];
  constructor() {
    this.logs = [
      {id: '1', text: 'This is some text', date: new Date('1/25/2017')},
      {id: '2', text: 'Added bootstrap', date: new Date('1/26/2017')},
      {id: '1', text: 'Added backend functionality', date: new Date('2/11/2017')}
    ];
  }
  getLogs() {
    return this.logs;
  }
}
