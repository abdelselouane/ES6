class person {

    constructor(first = 'abdel', last = 'selouane'){
        this.firstname = first;
        this.lastname = last;
    }

    displayName(){ console.log(`Hello ${this.firstname} ${this.lastname}`) }

}


class profession extends person {
    constructor(role = 'Programmer'){
        super();
        this.role = role
    }

    displayName(){ 
        console.log(`Inheritance func :)`) 
    }

    displayAllNames(){
        this.displayName();
        super.displayName();
    }

}

export {person, profession};


// class Person {
  
//     constructor(name){
//       console.log('hello');
//       this.name = name;
//     }
    
    
//   }
  
  
//   const person = new Person('Max');
  
//   console.log(person.name);
  
  
//   class Profession extends Person {
    
//     constructor(name, job){
//       super(name);
//       this.job = job;
      
//     }
    
//   }
  
//   const profession = new Profession('Abdel', 'programmer');
  
//   console.log(profession);