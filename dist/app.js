(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BoilerplateComponent = (function (_super) {
    __extends(BoilerplateComponent, _super);
    function BoilerplateComponent(props) {
        _super.call(this, props);
        this.state = {
            visible: true
        };
    }
    BoilerplateComponent.prototype.render = function () {
        return (React.createElement("div", null, "Component Content"));
    };
    return BoilerplateComponent;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BoilerplateComponent;

},{}],2:[function(require,module,exports){
///<reference path="../typings/browser.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * ===================================
 * Import Modules
 * ===================================
 */
var BoilerplateComponent_1 = require("./BoilerplateComponent");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        var prop1 = "Text";
        return (React.createElement("section", null, React.createElement(BoilerplateComponent_1.default, {prop1: prop1})));
    };
    return App;
}(React.Component));
/*
 * Initialization Scripts
 */
document.addEventListener("DOMContentLoaded", function (event) {
    ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
});

},{"./BoilerplateComponent":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Cb2lsZXJwbGF0ZUNvbXBvbmVudC50c3giLCJzcmMvYXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ1NBO0lBQWtELHdDQUErQjtJQUM3RSw4QkFBWSxLQUFZO1FBQ3BCLGtCQUFNLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUE7SUFDTCxDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUVJLE1BQU0sQ0FBQyxDQUNILHFCQUFDLEdBQUcsNkJBRUUsQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsQ0FqQmlELEtBQUssQ0FBQyxTQUFTLEdBaUJoRTtBQWpCRDtzQ0FpQkMsQ0FBQTs7O0FDMUJELDhDQUE4Qzs7Ozs7OztBQUU5Qzs7OztHQUlHO0FBQ0gscUNBQWlDLHdCQUF3QixDQUFDLENBQUE7QUFFMUQ7SUFBa0IsdUJBQXlCO0lBQTNDO1FBQWtCLDhCQUF5QjtJQVczQyxDQUFDO0lBVkcsb0JBQU0sR0FBTjtRQUVJLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUVuQixNQUFNLENBQUMsQ0FDSCxxQkFBQyxPQUFPLFNBQ0osb0JBQUMsOEJBQW9CLEdBQUMsS0FBSyxFQUFFLEtBQU0sRUFBRSxDQUMvQixDQUNiLENBQUM7SUFDTixDQUFDO0lBQ0wsVUFBQztBQUFELENBWEEsQUFXQyxDQVhpQixLQUFLLENBQUMsU0FBUyxHQVdoQztBQUVEOztHQUVHO0FBQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQVMsS0FBSztJQUV4RCxRQUFRLENBQUMsTUFBTSxDQUNYLG9CQUFDLEdBQUcsT0FBRSxFQUNOLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQUM7QUFFTixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHByb3AxOnN0cmluZztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgdmlzaWJsZT86Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9pbGVycGxhdGVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50IENvbnRlbnRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuXG4vKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEltcG9ydCBNb2R1bGVzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5pbXBvcnQgQm9pbGVycGxhdGVDb21wb25lbnQgZnJvbSBcIi4vQm9pbGVycGxhdGVDb21wb25lbnRcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBwcm9wMSA9IFwiVGV4dFwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8Qm9pbGVycGxhdGVDb21wb25lbnQgcHJvcDE9e3Byb3AxfS8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKlxuICogSW5pdGlhbGl6YXRpb24gU2NyaXB0c1xuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8QXBwLz4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXG4gICAgKTtcblxufSk7Il19
