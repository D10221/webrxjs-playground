export default class Task {

    Date;
    Start;
    Stop;
    Account;
    Note;

    toString(){
        return `{date:${this.Date}, start:${this.Start}, stop:${this.Stop}, account:${this.Account}, note:${this.Note}`;
    }

    toJson(){
        return JSON.stringify(this);
    }

    static fromJson(json){
        return JSON.parse(json);
    }

}


