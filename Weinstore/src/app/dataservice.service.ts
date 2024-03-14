import { APP_INITIALIZER, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Wine_lager } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private lagerDataSubject: BehaviorSubject<Wine_lager[]>;
  public lagerData: Observable<Wine_lager[]>;

  constructor(private http: HttpClient) {
    this.lagerDataSubject = new BehaviorSubject<Wine_lager[]>([]);
    this.lagerData = this.lagerDataSubject.asObservable();
  }

  initialize() {
    return () => {
      return new Promise<void>((resolve, reject) => {
        this.loadLagerData().subscribe(() => {
          resolve();
        }, error => {
          reject(error);
        });
      });
    };
  }

  private loadLagerData(): Observable<void> {
    return new Observable<void>((observer) => {
      const data = localStorage.getItem('lagerData');
      if (data) {
        this.lagerDataSubject.next(JSON.parse(data));
        observer.next();
        observer.complete();
      } else {
        this.http.get<Wine_lager[]>('/assets/lager.json').subscribe(
          (data) => {
            this.lagerDataSubject.next(data);
            localStorage.setItem('lagerData', JSON.stringify(data));
            observer.next();
            observer.complete();
          },
          (error) => {
            console.error('Error loading data:', error);
            observer.error(error);
          }
        );
      }
    });
  }

  public addWine(newWine: Wine_lager): void {
    const currentData = this.lagerDataSubject.value;
    currentData.push(newWine);
    this.updateLagerData(currentData);
  }

  public getLagerData(): Observable<Wine_lager[]> {
    return this.lagerData;
  }

  public updateLagerData(updatedData: Wine_lager[]): void {
    this.lagerDataSubject.next(updatedData);
    localStorage.setItem('lagerData', JSON.stringify(updatedData));
  }
}
