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
            function AddPageController() {
            }
            return AddPageController;
        })();
        Controllers.AddPageController = AddPageController;
        var EditPageController = (function () {
            function EditPageController() {
            }
            return EditPageController;
        })();
        Controllers.EditPageController = EditPageController;
        var DeletePageController = (function () {
            function DeletePageController() {
            }
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