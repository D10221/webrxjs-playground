/// <reference path="..typings/tsd.d.ts" />

import rx from 'rx';
import wx from "webrx";

class ViewModel{

    firstName = 'Bart';
    lastName = 'Simpson';
}

wx.app.component(
    'hello', {
    viewModel: ViewModel,
    template: `The name is <span data-bind="text: firstName + \' \' + lastName"></span>`
});

wx.router.state({
    name: "$",
    views: { 'main': "hello" }
});

wx.router.reload();

wx.applyBindings();