
import rx from 'rx';

export default class Service {

    _tasks = [];

    get tasks(){
        return this._tasks;
    }
    set tasks(value){
        this._tasks = value;
    }

    load(){
        "use strict";
        this.getData("data/tasks.json");
    }

    /**
     * get The data
     * @param url
     * @returns {Promise|Promise<T>}
     */
    getData(url) {

        return new Promise(

            (resolve, reject) => {

                var xhr = new XMLHttpRequest();

                xhr.responseType = 'text';

                rx.Observable
                    .fromEvent(xhr,'load')
                    .take(1)
                    .subscribe( e =>{
                        "use strict";
                        resolve(JSON.parse(xhr.responseText))
                    }
                );

                xhr.onerror = function() {
                    reject(xhr.error);
                };

                xhr.open('GET', url);

                xhr.send();
            }
        );


    }
}

