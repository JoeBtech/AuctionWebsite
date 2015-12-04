var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(auctionService, $location) {
                this.auctionService = auctionService;
                this.$location = $location;
                this.auctionItems = this.auctionService.listItems();
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
        var AddPageController = (function () {
            function AddPageController(auctionService, $location) {
                this.auctionService = auctionService;
                this.$location = $location;
            }
            AddPageController.prototype.save = function () {
                var _this = this;
                this.auctionService.save(this.newItem).then(function () { _this.$location.path('/'); });
            };
            return AddPageController;
        })();
        Controllers.AddPageController = AddPageController;
        var EditPageController = (function () {
            function EditPageController(auctionService, $location, $routeParams) {
                this.auctionService = auctionService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.itemToEdit = auctionService.get($routeParams['id']);
            }
            EditPageController.prototype.save = function () {
                var _this = this;
                this.auctionService.save(this.itemToEdit).then(function () { _this.$location.path('/'); });
            };
            return EditPageController;
        })();
        Controllers.EditPageController = EditPageController;
        var DeletePageController = (function () {
            function DeletePageController(auctionService, $location, $routeParams) {
                this.auctionService = auctionService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.itemToDelete = auctionService.get($routeParams['id']);
            }
            DeletePageController.prototype.delete = function () {
                var _this = this;
                this.auctionService.delete(this.itemToDelete).then(function () { _this.$location.path('/'); });
            };
            return DeletePageController;
        })();
        Controllers.DeletePageController = DeletePageController;
        var ItemDetailsController = (function () {
            function ItemDetailsController() {
            }
            return ItemDetailsController;
        })();
        Controllers.ItemDetailsController = ItemDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map