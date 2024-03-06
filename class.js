const product = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 155000},
]

// similar 
// class has some properties, methods
class Product{
    country = 'bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`Talking about ${talk}`);
    }
}

const lenovo = new Product('Lenovo is printed');
// console.log(lenovo);
// lenovo.speak('test talk');


class Teacher{
    constructor(name , subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching math');
    }
}


const tapan = new Teacher('tapon sir', 'physics');
console.log(tapan);


const rashid = new Teacher('Rashid Sir', 'English');
console.log(rashid);