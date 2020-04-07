import { Injectable } from '@angular/core';
import { Task } from './task';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  private tasksUrl = 'api/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** task一覧取得 */
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        catchError(this.handleError<Task[]>('getTasks', []))
      )
  }


  /** task取得 */
  getTask(id: number): Observable<Task>{
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url)
      .pipe(
        catchError(this.handleError<Task>(`getTask, id=${id}`))
      )
  }

  /** task更新 */
  updateTask(task: Task): Observable<any> {
    return this.http.put(this.tasksUrl, task, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateTask'))
      )
  }

  /** task追加 */
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions)
      .pipe(
        catchError(this.handleError<Task>('addTask'))
      )
  }

  /** task削除 */
  deleteTask(task: Task | number): Observable<Task> {
    const id = typeof task === 'number' ? task : task.id
    const url = `${this.tasksUrl}/${id}`

    return this.http.delete<Task>(url)
      .pipe(
        catchError(this.handleError<Task>(`deleteTask, id=${id}`))
      )
  }
 
  /**
   * エラーハンドリング
   * @param operation - 失敗した操作の名前
   * @param result - bservableな結果として返す任意の値
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error:any) : Observable<T> => {
      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力


      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

}
