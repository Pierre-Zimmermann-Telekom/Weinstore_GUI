import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { customer } from './interfaces';
import { Wine_lager } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private lagerDataSubject: BehaviorSubject<Wine_lager[]>;
  private kundenDataSubject: BehaviorSubject<customer[]>;
  public lagerData: Observable<Wine_lager[]>;
  public kundenData: Observable<customer[]>;

  constructor(private http: HttpClient) {
    this.lagerDataSubject = new BehaviorSubject<Wine_lager[]>([]);
    this.kundenDataSubject = new BehaviorSubject<customer[]>([]);
    this.lagerData = this.lagerDataSubject.asObservable();
    this.kundenData = this.kundenDataSubject.asObservable();
  }

  initialize() {
    return () => {
      return new Promise<void>((resolve, reject) => {
        this.loadLagerData().subscribe(() => {
          this.loadKundenData().subscribe(() => {
            resolve();
          }, error => {
            reject(error);
          });
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
            console.error('Error loading lager data:', error);
            observer.error(error);
          }
        );
      }
    });
  }

  private loadKundenData(): Observable<void> {
    return new Observable<void>((observer) => {
      const data = localStorage.getItem('kundenData');
      if (data) {
        this.kundenDataSubject.next(JSON.parse(data));
        observer.next();
        observer.complete();
      } else {
        // Replace the URL with the endpoint for fetching customer data
        this.http.get<customer[]>('/assets/kunden.json').subscribe(
          (data) => {
            this.kundenDataSubject.next(data);
            localStorage.setItem('kundenData', JSON.stringify(data));
            observer.next();
            observer.complete();
          },
          (error) => {
            console.error('Error loading kunden data:', error);
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

  public addcustomer(newcustomer: customer): void {
    const currentData = this.kundenDataSubject.value;
    currentData.push(newcustomer);
    this.updateKundenData(currentData);
  }

  public getLagerData(): Observable<Wine_lager[]> {
    return this.lagerData;
  }

  public getKundenData(): Observable<customer[]> {
    return this.kundenData;
  }

  public updateLagerData(updatedData: Wine_lager[]): void {
    this.lagerDataSubject.next(updatedData);
    localStorage.setItem('lagerData', JSON.stringify(updatedData));
  }

  public updateKundenData(updatedData: customer[]): void {
    this.kundenDataSubject.next(updatedData);
    localStorage.setItem('kundenData', JSON.stringify(updatedData));
  }
}
