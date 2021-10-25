using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {

        // Create options when creating a Store Context Instance
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        // Db Set - Name of Table
        public DbSet<Product> Products { get; set; }
    }
}