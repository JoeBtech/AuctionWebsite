using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Models {
    class EFRepository : IRepository {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IList<AuctionItem> ListItems() {

            return _db.AuctionItems.ToList();
        }

        public void SaveItem(AuctionItem itemToSave) {
            if (itemToSave.Id == 0) {
                _db.AuctionItems.Add(itemToSave);
                _db.SaveChanges();
            } else {
                var original = this.Find(itemToSave.Id);
                original.Name = itemToSave.Name;
                original.Description = itemToSave.Description;
                original.MinBid = itemToSave.MinBid;
                original.CurrentBid = itemToSave.CurrentBid;
                original.NumOfBids = itemToSave.NumOfBids;
                _db.SaveChanges();
            }
        }

        public AuctionItem Find(int id) {

            return _db.AuctionItems.Find(id);
        }

        public void Delete(int id) {
            var item = this.Find(id);
            _db.AuctionItems.Remove(item);
            _db.SaveChanges();
        }
    }
}
