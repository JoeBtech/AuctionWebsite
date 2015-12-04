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

    }

    export class EditPageController {

    }

    export class DeletePageController {

    }

    export class ItemDetailsController {

    }




}