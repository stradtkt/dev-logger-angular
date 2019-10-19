import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Log} from '../models/Log';

@Injectable({
  providedIn: 'root'
})

export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();
  constructor() {
    this.logs = [
      {id: '1', text: 'This is some text', date: new Date('1/25/2017')},
      {id: '2', text: 'Added bootstrap', date: new Date('1/26/2017')},
      {id: '1', text: 'Added backend functionality', date: new Date('2/11/2017')}
    ];
  }
  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }
  setFormLog(log: Log) {
    this.logSource.next(log);
  }
  addLog(log: Log) {
    this.logs.unshift(log);
  }
  updateLog(log: Log) {
    this.logs.forEach((current, index) => {
      if (log.id === current.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }
}
