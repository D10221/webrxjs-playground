/// <reference path="..typings/tsd.d.ts" />

import rx from 'rx';
import wx from "webrx";
import Service from './service';
import MainView from './main-view';

var service = new Service();

class MainViewModel {

    tasks = wx.property([{}]);

    title = "Tasks";

    constructor() {
        service
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



wx.app.component(
    'hello', {
        viewModel: MainViewModel,
        template: new MainView().template
    });

wx.router.state({
    name: "$",
    views: {'main': "hello"}
});

wx.router.reload();

wx.applyBindings();