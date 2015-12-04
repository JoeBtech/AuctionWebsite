using Auction.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Auction.API {
    public class AuctionItemsController : ApiController {
        public IEnumerable<AuctionItem> Get() {
            return new List<AuctionItem>
            {
                new AuctionItem {Id=1, Name="Something1", Description="Somethingaboutit", MinBid=0}
            };
        }
    }
}
