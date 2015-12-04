namespace MyApp.Services {

    export class AuctionService {
        private AuctionResource;

        public listItems() {
            return this.AuctionResource.query();
        }

        public get(id: number) {
            return this.AuctionResource.get({id:id});
        }


        constructor($resource: angular.resource.IResourceService) {
            this.AuctionResource = $resource('/api/auctionItems/:id');
        }
    }

    angular.module('MyApp').service('auctionService', AuctionService);

}