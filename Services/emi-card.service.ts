import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmiCard } from '../Pages/EmiCard';

@Injectable({
  providedIn: 'root'
})
export class EmiCardService {

  private baseUrl="http://localhost:8090/api/v1";
  constructor(private http:HttpClient) { }

  getEmiCardList()
  {
    console.log(this.http.get<any[]>(this.baseUrl+'/emiCard'));
   return  this.http.get<any[]>(this.baseUrl+'/emiCard');
  }

  public getEmiByNo(id: number)
{
  console.log(this.http.get<any>(this.baseUrl+'/emiCard/'+id));
 return  this.http.get<any>(this.baseUrl+'/emiCard/'+id);
}

createEmiCard(emiCard: EmiCard){
  console.log(this.http.post(`${this.baseUrl}`+'/addnewEmiCard', emiCard ))
  return this.http.post(`${this.baseUrl}`+'/addnewEmiCard', emiCard );
 }
}
