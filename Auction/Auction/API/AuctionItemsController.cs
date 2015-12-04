using Auction.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Auction.API {
    public class AuctionItemsController : ApiController {
        private IRepository _repo;
        public AuctionItemsController(IRepository repo) {
            this._repo = repo;
        }
        public IEnumerable<AuctionItem> Get() {
            var items = _repo.ListItems();
            return items;
        }

        public IHttpActionResult Post(AuctionItem item) {            
            if (!ModelState.IsValid) {
                return BadRequest(this.ModelState);
            }
            _repo.SaveItem(item);
            return Created("", item);
        }
        public IHttpActionResult Delete(int id) {
            _repo.Delete(id);
            return Ok();
        }

        public IHttpActionResult Get(int id) {
            var item = _repo.Find(id);
            if (item == null) {
                return NotFound();
            }
            return Ok(item);
        }


    }
}
