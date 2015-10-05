
class TaskTime {
    hour;
    minute;
    toTime(){
        //return TimeInterval()
    }
    fromTime(time/*:timeInterval*/){
        this.hour = time.hour;
        this.minute = time.minute;
    }
    toString(){
        return `${this.hour}}:${this.minute}`;
    }
    toJsonf(){
        return JSON.stringify(this);
    }
    static fromJson(json){
        return JSON.parse(json);
    }

}