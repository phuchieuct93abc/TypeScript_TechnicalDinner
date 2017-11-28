(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function displayMessage(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = name;
}
//DataType
function showDialog(message) {
    alert("Message: " + message);
}
function showErrorDialog(errorCode) {
    alert("Error code: " + errorCode);
}
showDialog("Hello");
function showMessageDialog(message) {
    alert("Error code:" + message.errorCode);
}
showMessageDialog({ errorCode: "400" }); //Pass
var ErrorMsg = /** @class */ (function () {
    function ErrorMsg() {
    }
    ErrorMsg.prototype.display = function () {
        alert("This is an error");
    };
    return ErrorMsg;
}());
var WarnMsg = /** @class */ (function () {
    function WarnMsg() {
    }
    WarnMsg.prototype.display = function () {
        alert("This is a warning");
    };
    return WarnMsg;
}());
function showMsg(message) { 
    message.display();
}
showMsg(new ErrorMsg());
showMsg(new WarnMsg());
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3ZWJDb250ZW50L3Jlc291cmNlcy90cy9kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDRUEsd0JBQXdCLE9BQWUsRUFBRSxJQUFZO0lBQ2pELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDekIsQ0FBQztBQUVELFVBQVU7QUFDVixvQkFBb0IsT0FBYztJQUM5QixLQUFLLENBQUMsV0FBVyxHQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFDRCx5QkFBeUIsU0FBZ0I7SUFDckMsS0FBSyxDQUFDLGNBQWMsR0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBQ0QsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBU3BCLDJCQUEyQixPQUFlO0lBQ3RDLEtBQUssQ0FBQyxhQUFhLEdBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFDRCxpQkFBaUIsQ0FBQyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUEsTUFBTTtBQVczQztJQUFBO0lBT0EsQ0FBQztJQUpJLDBCQUFPLEdBQVA7UUFDRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU4sZUFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBQ0E7SUFBQTtJQUtELENBQUM7SUFIRyx5QkFBTyxHQUFQO1FBQ0csS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUxDLEFBS0EsSUFBQTtBQUVELGlCQUFpQixPQUFXO0lBQ3hCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBQ0QsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztBQUN4QixPQUFPLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1lc3NhZ2UoZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTtcclxuICAgIGVsdC5pbm5lclRleHQgPSBuYW1lO1xyXG59XHJcblxyXG4vL0RhdGFUeXBlXHJcbmZ1bmN0aW9uIHNob3dEaWFsb2cobWVzc2FnZTpzdHJpbmcpe1xyXG4gICAgYWxlcnQoXCJNZXNzYWdlOiBcIittZXNzYWdlKTsgICBcclxufVxyXG5mdW5jdGlvbiBzaG93RXJyb3JEaWFsb2coZXJyb3JDb2RlOm51bWJlcil7XHJcbiAgICBhbGVydChcIkVycm9yIGNvZGU6IFwiK2Vycm9yQ29kZSk7ICAgXHJcbn1cclxuc2hvd0RpYWxvZyhcIkhlbGxvXCIpOyBcclxuLy9zaG93RGlhbG9nKHRydWUpOy8vQ29tcGlsZSBlcnJvciAgIFxyXG4vL3Nob3dEaWFsb2coMTIzKTsvL0NvbXBpbGUgZXJyb3IgICAgICAgXHJcbiBcclxuXHJcbi8vSW50ZXJmYWNlXHJcbmludGVyZmFjZSBNZXNzYWdle1xyXG4gICBlcnJvckNvZGU6c3RyaW5nOyAgXHJcbn1cclxuZnVuY3Rpb24gc2hvd01lc3NhZ2VEaWFsb2cobWVzc2FnZTpNZXNzYWdlKXtcclxuICAgIGFsZXJ0KFwiRXJyb3IgY29kZTpcIittZXNzYWdlLmVycm9yQ29kZSk7ICAgICBcclxufVxyXG5zaG93TWVzc2FnZURpYWxvZyh7ZXJyb3JDb2RlOlwiNDAwXCJ9KTsvL1Bhc3NcclxuLy9zaG93TWVzc2FnZURpYWxvZyh0cnVlKTsvL0ZhaWxcclxuLy9zaG93TWVzc2FnZURpYWxvZyhcIlRleHRcIik7Ly9GYWlsXHJcbi8vc2hvd01lc3NhZ2VEaWFsb2coMTIzKTsvL0ZhaWwgXHJcblxyXG5cclxuLy9DbGFzc1xyXG5pbnRlcmZhY2UgTXNne1xyXG4gICAgZGlzcGxheSgpOnZvaWQ7XHJcbiB9XHJcblxyXG5jbGFzcyBFcnJvck1zZyBpbXBsZW1lbnRzIE1zZ3tcclxuICAgIFxyXG4gICAgXHJcbiAgICAgZGlzcGxheSgpOiB2b2lkIHtcclxuICAgICAgICBhbGVydChcIlRoaXMgaXMgYW4gZXJyb3JcIik7XHJcbiAgICAgfVxyXG4gICAgIFxyXG59XHJcbiBjbGFzcyBXYXJuTXNnIGltcGxlbWVudHMgTXNneyBcclxuXHJcbiAgICBkaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgICAgYWxlcnQoXCJUaGlzIGlzIGEgd2FybmluZ1wiKVxyXG4gICAgfSAgICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNc2cobWVzc2FnZTpNc2cpe1xyXG4gICAgbWVzc2FnZS5kaXNwbGF5KCk7IFxyXG59XHJcbnNob3dNc2cobmV3IEVycm9yTXNnKCkpO1xyXG5zaG93TXNnKG5ldyBXYXJuTXNnKCkpO1xyXG5cclxuXHJcblxyXG4iXX0=
