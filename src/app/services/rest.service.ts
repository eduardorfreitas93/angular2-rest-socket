import {Injectable} from '@angular/core';
import {Restangular} from "ngx-restangular";

@Injectable()
export class RestService {

  constructor(private restangular: Restangular) {
  }

  getTodoList() {
    return this.restangular.all("list").getList();
  }

  addTodo(todo) {
    return this.restangular.all("list").post(todo);
  }

  removeTodo(todo) {
    return todo.remove();
  }

}
