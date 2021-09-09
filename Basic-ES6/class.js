class SupportInstructor {
    name;
    address;
    role = 'Web Dev Instructor'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start the session now');
    }
}
const newInstructor = new SupportInstructor('Shathi', 'BD');
console.log(newInstructor);
newInstructor.startSession();