import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { EmiCard } from '../Models/emi-card';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseUrl = "http://localhost:8090/api/v1"
  constructor(private http: HttpClient) { }
  getAllProducts() {
    console.log(this.http.get<any[]>(this.baseUrl + '/products'));
    return this.http.get<any[]>(this.baseUrl + "/products");
  }
  getProductById(productId: number) {
    console.log(this.http.get<any>(this.baseUrl + '/products/' + productId));
    return this.http.get<any>(this.baseUrl + '/products/' + productId);
  }
  public addProduct(product: Object): Observable<Object> {
    console.log(this.http.post(this.baseUrl+ '/addnewproduct', product))
    return this.http.post(this.baseUrl+ '/addnewproduct', product);
  }
}
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

