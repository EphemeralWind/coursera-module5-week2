(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
;

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;

	toBuy.crap = "CRAP";
	toBuy.items = ShoppingListCheckOffService.getToBuyItems();

	toBuy.buy = function(index) {
		ShoppingListCheckOffService.buyItem(index);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var bought = this;

	bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
	var service = this;
	var toBuy = [{ name: "cookies", quantity: 10 }, { name: "blaster rifles", quantity: 100 }, { name: "pizza", quantity: 8 }];
	var bought = [];

	service.getToBuyItems = function() {
		return toBuy;
	}

	service.getBoughtItems = function() {
		return bought;
	}

	service.buyItem = function(index) {
		if(index < 0 || index >= toBuy.length) {
			return;
		}

		var item = toBuy[index];
		toBuy.splice(index, 1);

		bought.push(item);
	}
}

})();