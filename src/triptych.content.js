// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require, exports, module) {
    var Content, Triptych;
    Content = require('content');
    /*
    Triptych Content
    Content with three properties. The HTML joins the three together
    */

    Triptych = (function(_super) {
      __extends(Triptych, _super);

      function Triptych(first, second, third) {
        if (!(first && second && third)) {
          throw "Cannot create Triptych without three args";
        }
        this.first(first);
        this.second(second);
        this.third(third);
      }

      Triptych.prototype.html = function(newVal) {
        if (newVal) {
          console.log("Warning: Can't set .html on Triptych. It is derived");
          return false;
        }
        return '' + this.first() + ' - ' + this.second() + ' - ' + this.third();
      };

      Triptych.prototype.first = function(newFirst) {
        if (!newFirst) {
          return this._first;
        }
        if (typeof newFirst !== 'string') {
          throw "Triptych::first must be passed a String of HTML";
        }
        return this._first = newFirst;
      };

      Triptych.prototype.second = function(newSecond) {
        if (!newSecond) {
          return this._second;
        }
        if (typeof newSecond !== 'string') {
          throw "Triptych::second must be passed a String of HTML";
        }
        return this._second = newSecond;
      };

      Triptych.prototype.third = function(newThird) {
        if (!newThird) {
          return this._third;
        }
        if (typeof newThird !== 'string') {
          throw "Triptych::first must be passed a String of HTML";
        }
        return this._third = newThird;
      };

      /*
      fourth: new Property
          name: 'fourth'
          private: @_fourth
          validator: (val) ->
              return typeof val is 'string', "must be passed a string"
      */


      return Triptych;

    })(Content);
    return exports = Triptych;
  });

}).call(this);

/*
//@ sourceMappingURL=triptych.content.map
*/
