var Person = function(name){
  this.name = name;
  this.channel = function(channel){
    return 'Hola soy ' + name + '!, y esto es' + channel;
  };
};

const David = new Person('David');
