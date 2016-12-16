(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.toBuyItems=ShoppingListCheckOffService.getToBuyItems();
  toBuyList.funBuyItem = function (itemIndex) {
      ShoppingListCheckOffService.funBuyItem(itemIndex);
  };
}

//AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.boughtItems=ShoppingListCheckOffService.getBoughtItems();
}

//Service
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems =  [
    {
      name: "Cheese",
      quantity: "3"
    },
    {
      name: "Apple",
      quantity: "10"
    },
    {
      name: "Paneer",
      quantity: "1"
    },
    {
      name: "Butter Milk",
      quantity: "5"
    },
    {
      name: "Vodka",
      quantity: "5"
    }
  ];

  var boughtItems=[];

  service.funBuyItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
      return boughtItems;
  };
}
})();
