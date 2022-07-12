import { isThisSecond } from "date-fns";

export default class task {
    constructor(title, description, date, priority, project) {
        this.id = getID();
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.project = project;
    }
}

function getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
