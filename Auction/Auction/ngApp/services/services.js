var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var AuctionService = (function () {
            function AuctionService($resource) {
                this.AuctionResource = $resource('/api/auctionItems/:id');
            }
            AuctionService.prototype.listItems = function () {
                return this.AuctionResource.query();
            };
            AuctionService.prototype.get = function (id) {
                return this.AuctionResource.get({ id: id });
            };
            AuctionService.prototype.save = function (item) {
                return this.AuctionResource.save(item).$promise;
            };
            AuctionService.prototype.delete = function (item) {
                return this.AuctionResource.delete({ id: item.id }).$promise;
            };
            return AuctionService;
        })();
        Services.AuctionService = AuctionService;
        angular.module('MyApp').service('auctionService', AuctionService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map