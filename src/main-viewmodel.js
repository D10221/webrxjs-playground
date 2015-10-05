import rx from 'rx';
import wx from "webrx";

export default class MainViewModel {

    /**
     * taskService.js
     * @type TaskService
     */
    taskService;

    /**
     *
     * @type {wx.IObservableProperty<*[Task]>}
     */
    tasks = wx.property([{}]);

    title = "Tasks";

    constructor(){

        this.taskService =  wx.injector.get('taskService');

        this.taskService
            .getData('../webrxjs/data/tasks.json')
            .then(data=> {
                this.tasks(data);
                // console.log(JSON.stringify(data));
            })
            .catch(e=> {
                throw e;
            });

    }



}