namespace MyApp.Controllers {

    export class HomeController {
        public auctionItems;

        constructor
            (
            private auctionService: MyApp.Services.AuctionService,
            private $location: angular.ILocationService
            ) {
            this.auctionItems = this.auctionService.listItems();
        }
    }

    export class AboutController {

    }

    export class AddPageController {
        public newItem;
        public save() {
            this.auctionService.save(this.newItem).then(() => { this.$location.path('/') });
        }
        constructor(
            private auctionService: MyApp.Services.AuctionService,
            private $location: angular.ILocationService
        ) { }

    }

    export class EditPageController {
        public itemToEdit;
        public save() {
            this.auctionService.save(this.itemToEdit).then(() => { this.$location.path('/') });
        }
        constructor(
            private auctionService: MyApp.Services.AuctionService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.itemToEdit = auctionService.get($routeParams['id']);
        }

    }

    export class DeletePageController {
        public itemToDelete;

        public delete() {
            this.auctionService.delete(this.itemToDelete).then(() => { this.$location.path('/') });
        }
        constructor(
            private auctionService: MyApp.Services.AuctionService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.itemToDelete = auctionService.get($routeParams['id']);
        }
    }

    export class ItemDetailsController {

    }




}