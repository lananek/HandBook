class Speciality {
    constructor(obj) {
        this.id = obj.id
        this.name = obj.name
        this.ball = obj.ball
        this.docSubmission = obj.docSubmission
    }
}

class Faculty {
    constructor(obj) {
        this.specialities = obj.slice()
    }

    getObjs(skip = 0, top = 1, filterConfig = null) {
        let items = [];
        let j = 0;
        let k = 0;
        for (let i = skip; i < skip + top; i++) {
            if (filterConfig == null) {
                items[i - skip] = this.specialities[i];
            }
            else {
            }
        }
        items.sort(function (a, b) {
            if (a.ball > b.ball) {
                return 1;
            }
            if (a.ball < b.ball) {
                return -1;
            }
            return 0;
        })
        return items;
    }

    getObjById(id) {
        let i = 0;
        while (this.specialities[i] != null) {
            if (this.specialities[i].id == id) {
                return this.specialities[i];
            }
        }
    }

    validateObj(obj) {
        if (obj.id != null && (typeof obj.id) == 'string' &&
            obj.name != null && (typeof obj.name) == 'string')
            return true;
        else
            return false
    }

    addObj(obj) {
        if (!this.validateObj(obj))
            return false;

        this.specialities.push(obj);
        return true;
    }

    addObjs(objects) {
        for (let i = 0; i < objects.length; i++) {
            if (!this.validateObj(objects[i]))
                return false;
            this.specialities.push(objects[i]);
        }
        return true;
    }

    editObj(id, obj) {
        let item = this.getObjById(id);
        if (obj.name != null)
            item.name = obj.name;
        if (obj.ball != null)
            item.ball = obj.ball;
        if (obj.docSubmission != null)
            item.docSubmission = obj.docSubmission;
        
        this.specialities[id - 1] = item;
    }

    removeObj(id) {
        this.specialities.splice(id - 1, 1);
    }
}

Ticket.prototype.toString = function ticketToString(){
    return `id: ${this.id}
    name: ${this.name}
    ball ${this.ball}
    docSubmission: ${this.docSubmission}
    -----------------------------------`
}

const T = new Faculty([new Speciality({
    id: "1",
    name: "Applied Mathematics",
    docSubmission: new Date(),
    ball: 336,

}), new Speciality({
    id: "2",
    description: "Applied Informatics",
    docSubmission: new Date(),
    ball: 368,
})])
console.log((T.getObjs(0, 2))[0].toString());
console.log(T.getObjById(1).toString());
console.log(T.validateObj(T.specialities[0]));
console.log(T.addObj(new Speciality({
    id: "3",
    description: "Informatics",
    docSubmission: new Date(),
    ball: 358,
})));

T.editObj(1, { ball: 333 });
console.log(T.specialities[0].toString());
console.log(T.addObjs([
    new Speciality({
        id: "4",
        description: "Computer security",
        docSubmission: new Date(),
        ball: 341,
    })
]))
console.log(T.specialities[3].toString());
