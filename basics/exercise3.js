"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.state = "";
        this.type = "";
        this.name = name;
        this.userName = userName;
        this.age = 12;
    }
    Person.prototype.getFirst = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    Person.prototype.getType = function () {
        return this.type;
    };
    return Person;
}());
var person = new Person('Charles', "charles");
console.log(person);
var Charles = (function (_super) {
    __extends(Charles, _super);
    function Charles(userName) {
        return _super.call(this, "Charles", userName) || this;
    }
    return Charles;
}(Person));
var charles = new Charles("charles");
console.log(charles);
var Plant = (function () {
    function Plant() {
        this._species = "";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = "AAA";
console.log(plant);
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.circumference = function (dia) {
        return this.PI * dia;
    };
    Helpers.PI = 3.1415;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.circumference(10));
var Project = (function () {
    function Project() {
        this.projectName = "";
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
        return this;
    };
    return ITProject;
}(Project));
console.log(new ITProject().changeName("bruce"));
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        return OnlyOne.instance;
    };
    OnlyOne.instance = new OnlyOne('Singleton');
    return OnlyOne;
}());
console.log(OnlyOne.getInstance());
var OtherOnlyOne = (function () {
    function OtherOnlyOne(name) {
        this.name = name;
    }
    OtherOnlyOne.getInstance = function () {
        if (!OtherOnlyOne.instance) {
            OtherOnlyOne.instance = new OtherOnlyOne('Singleton');
        }
        return OtherOnlyOne.instance;
    };
    return OtherOnlyOne;
}());
console.log(OtherOnlyOne.getInstance());
//# sourceMappingURL=exercise3.js.map