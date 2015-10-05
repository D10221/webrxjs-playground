/// <reference path="..typings/tsd.d.ts" />

import rx from 'rx';
import wx from "webrx";
import TaskService from './task-service';
import MainView from './main-view';
import MainViewModel from './main-viewmodel';

//var tasks = localStorage.parse("webrx-tasks") || [{}];

/**
 * @type IComponent
 */
var  MyApp =  {

    /**
     * @type MainViewModel
     */
    viewModel:MainViewModel,

    template:new MainView().template
}

wx.app.component('myApp', MyApp);

wx.router.state({
    name: "$",
    views: {
        'main': "myApp",
        'root': "myApp",
        '/': 'myApp'
    }
});


wx.injector.register('taskService', [TaskService]);

wx.router.reload();

wx.applyBindings();