"use strict";

var Person = function Person(name) {
  this.name = name;
  this.channel = function (channel) {
    return "Hola soy " + name + "!, y esto es " + channel;
  };
};

var David = new Person('David');
console.log(David.channel('Aprendiendo Frontend'));