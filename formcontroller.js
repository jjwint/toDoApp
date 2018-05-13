(function() {

	function FormController() {
		var vm = this;
		vm.taskList = [];
		vm.sayHi = function() {
			vm.taskList.push(vm.task);
			console.log(vm.taskList);
			vm.task = "";
		}
	}

	angular
		.module("app")
		.controller("FormController", FormController);
})();