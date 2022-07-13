export class task {
    constructor(title, description, date, priority, project) {
        this.id = getID();
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.project = project;
    }
}
export class project {
    constructor(name, date) {
        this.id = getID();
        this.name = name;
        this.date = date;
    }
}

function getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
