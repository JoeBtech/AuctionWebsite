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

    export class ItemDetailsController {
        public itemToBid;
        public userBid;
        public maxBidReached() {
            if (this.itemToBid.numOfBids < 5) {
                return false;
            } else {
                return true;
            }
        }

        public save(userBid) {            
            //debugger;
            if (this.itemToBid.currentBid < this.userBid && this.userBid > this.itemToBid.minBid) {
                this.itemToBid.numOfBids++;
                this.itemToBid.currentBid = this.userBid;
                this.auctionService.save(this.itemToBid)
                    .then(() => { this.$location.path('/itemDetails/' + this.itemToBid.id) });
            } else {
            alert("Bid too low");

            }
        }
        constructor(
            private auctionService: MyApp.Services.AuctionService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.itemToBid = auctionService.get($routeParams['id']);
            //this.auctionItems = this.auctionService.listItems();

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
}