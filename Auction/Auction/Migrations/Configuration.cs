namespace Auction.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;

    internal sealed class Configuration : DbMigrationsConfiguration<Auction.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Auction.Models.ApplicationDbContext context)
        {
            var items = new AuctionItem[] {
                new AuctionItem {
                    Name = "ChittyChittyBangBang",
                    Description = "Some thing less than exciting",
                    MinBid = 1200m
                },

                new AuctionItem {
                    Name = "Batman",
                    Description = "I'm Batman!!!",
                    MinBid = 0m
                },

                new AuctionItem {
                    Name = "Tesla",
                    Description = "Sweet ride",
                    MinBid = 120000m
                }                
            };
            context.AuctionItems.AddOrUpdate(abox => abox.Name, items);

            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);
            var user = userManager.FindByName("batman@batcave.com");

            if (user == null) {
                user = new ApplicationUser {
                    UserName = "batman@batcave.com",
                    Email = "batman@batcave.com"
                };
                userManager.Create(user, "Secret123!");
                userManager.AddClaim(user.Id, new Claim("CanBidPastMax", "true"));
            }

        }    

    }
}
