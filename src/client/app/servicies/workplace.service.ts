import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Router }    from '@angular/router';
import { HttpService } from './shared/httpService'

@Injectable()
export class WorkplaceService extends HttpService{

  constructor(private http: Http, private router: Router){
    super("http://localhost:8000/workplace");
  }

  add(workplace){
    return this.doPost('/new',JSON.stringify({workplace: workplace}));
  }

  get(id: string){
    return this.doGet('/get/'+id,{});
  }

  getAll(){
    return this.doGet('/all',{});
  }

  getByUser(userId){
    return this.doGet('/getByUser/'+userId,{});
  }

  update(workplace){
    return this.doPut('/update',JSON.stringify({workplace:workplace}));
  }

  remove(id: string){
    return this.doDelete('/delete/'+id,{});
  }
}
