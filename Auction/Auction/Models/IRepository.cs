﻿using System.Collections.Generic;

namespace Auction.Models {
    public interface IRepository {
        void Delete(int id);
        AuctionItem Find(int id);
        IList<AuctionItem> ListItems();
        void SaveItem(AuctionItem itemToSave);
    }
}