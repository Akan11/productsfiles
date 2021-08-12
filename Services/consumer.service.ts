import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consumer } from '../Models/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  base_url='http://localhost:8090/api/v1/';
  constructor(private http:HttpClient) { }

  public createConsumer(consumer :Consumer){
    console.log("CREATE EMP");
    return this.http.post(this.base_url+'consumers',consumer);
  }
}
