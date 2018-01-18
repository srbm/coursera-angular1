(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.toBuyList = ShoppingListCheckOffService.getItems();

  toBuy.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.boughtList = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [
    {name: 'apples', quantity: 5},
    {name: 'bananas', quantity: 7},
    {name: 'mango', quantity: 1},
    {name: 'potatoes', quantity: 9},
    {name: 'onions', quantity: 9},
  ];

  var boughtList = [];

  service.getItems = function () {
    return toBuyList;
  };

  service.getBoughtItems = function () {
    return boughtList;
  };

  service.moveItem = function (itemIndex) {
    var listItem = toBuyList[itemIndex];
    boughtList.splice(0, 0, listItem);
    toBuyList.splice(itemIndex, 1);
  };

}



})();
