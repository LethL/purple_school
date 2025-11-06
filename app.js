const Person = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Person.prototype.speak = function() {
    console.log(this.language, this.name);
};

const Ork = function(race, name, language, weapon) {
    Person.call(this, race, name, language)
    this.weapon = weapon;
};

Ork.prototype = Object.create(Person.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.hit = function() {
    console.log('hit');
};

const Elf = function(race, name, language, castType) {
    Person.call(this, race, name, language)
    this.castType = castType;
};

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.cast = function() {
    console.log('Im cast', this.castType);
};
