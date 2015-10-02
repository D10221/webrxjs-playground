export default class MainView {

     get date(){
         return "1997";
     }

     template = ()=> {
        return `<table>
        <div>
            <span data-bind="text: title"></span> ${this.date}
        </div>

        <thead>
            <tr>
                <td>Date</td>
                <td>Start</td>
                <td>Stop</td>
                <td>Account</td>
                <td>Note</td>
            </tr>
        </thead>

        <tbody data-bind="foreach: tasks">
            <tr>
                <td data-bind="text: Date"></td>
                <td data-bind="text: Start"></td>
                <td data-bind="text: Stop"></td>
                <td data-bind="text: Account"></td>
                <td data-bind="text: Note"></td>
            </tr>
        </tbody>
    </table>`};
}