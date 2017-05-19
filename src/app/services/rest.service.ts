import {Injectable} from '@angular/core';
import {Restangular} from "ngx-restangular";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RestService {

  constructor(private restangular: Restangular) {
  }

  getTodoList() {
    return this.restangular.all("list").getList();
  }

  getTodoOne(data) {
    return this.restangular.all("list").getList({q: {"_keywords": {"$regex": data}}});
  }

  addTodo(todo) {
    return this.restangular.all("list").post(todo);
  }

  removeTodo(todo) {
    return todo.remove();
  }

}
