namespace MyApp.Services {

    export class AuctionService {
        private AuctionResource;

        public listItems() {
            return this.AuctionResource.query();
        }

        public get(id: number) {
            return this.AuctionResource.get({id:id});
        }
         
        public save(item) {
            return this.AuctionResource.save(item).$promise;
        }

        constructor($resource: angular.resource.IResourceService) {
            this.AuctionResource = $resource('/api/auctionItems/:id');
        }
        public delete(item) {
            return this.AuctionResource.delete({ id: item.id }).$promise;
        }


    }

    angular.module('MyApp').service('auctionService', AuctionService);

}