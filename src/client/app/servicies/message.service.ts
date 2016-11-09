import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import {HttpService} from "./shared/httpService";
import { Router }    from '@angular/router';

@Injectable()
export class MessagesService extends HttpService {

  constructor(private http: Http, private router: Router){
    super("http://localhost:8000/message");
  }

  addMessage(message) {
    return this.doPost('/new',JSON.stringify({message: message}));
  }

  get(id: string){
    return this.doGet('/get/'+id,{});
  }

  getAll(){
    return this.doGet('/all',{});
  }

  getByAuthor(authorId: string){
    return this.doGet('/getByAuthor/'+authorId,{});
  }

  getByReceiver(receiverId: string){
    return this.doGet('/getByReceiver/'+receiverId,{});
  }

  getByReceiverLogin(receiverLogin: string){
    return this.doPost('/getByReceiverLogin',{receiverLogin: receiverLogin});
  }

  update(message){
    return this.doPut('/update/'+message._id,JSON.stringify({message:message}));
  }

  remove(id: string){
    return this.doDelete('/delete/'+id,{});
  }
}
