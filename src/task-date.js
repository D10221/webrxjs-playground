
class TaskDate {

    year ;
    month;
    day;

    toDate(){
        return new Date(this.year,this.month,this.day);
    }

    /**
     *
     * @param date: Date
     */
    fromDate(date/*:Date*/){
        date = new Date(this.year,this.month,this.day);
        this.year = date ||  d.getYear();
        this.month = d.getMonth();
        this.day = d.getDay();
    }

    static fromText(text){
        var taskDate = new TaskDate();
        var parts = text.split('-');
        taskDate.year = parts[0];
        taskDate.month=parts[1];
        taskDate.day=parts[3];
    }

    toString(){
        return `${this.year}-${this.month}-${this.day}`;
    }

    toJson(){
        return JSON.stringify(this);
    }

    static fromJson(json){
        return JSON.parse((json));
    }
}