using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Models {
    public class AuctionItem {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int NumOfBids { get; set; }
        public decimal MinBid { get; set; }
        public decimal CurrentBid { get; set; }

        public AuctionItem() {
            this.NumOfBids = 0;
        }
    }
}
