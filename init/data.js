const samplePlace = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",

image:{
        filename:"Placeimage",
        url:"https://media.istockphoto.com/id/1094919124/photo/male-manager-and-female-chef-using-digital-tablet-in-kitchen.jpg?s=2048x2048&w=is&k=20&c=ioRCSsw6WUk61c-5xvIhixIbY2ofkSB_10i9e7rRDkY=",
},
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image:{
          url:"https://media.istockphoto.com/id/123384440/photo/panjim-church-goa.jpg?s=1024x1024&w=is&k=20&c=1PRHGehHLwUdil4aPwOxPWsc1NZ8aP_KMxETtrW9kmg=",
        filename:"Placeimage",
        },
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image:{
          url:"https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image:{
        url:"https://images.unsplash.com/photo-1560200353-ce0a76b1d438?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image:{
          url:"https://images.unsplash.com/photo-1567491634123-460945ea86dd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
        
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image:{
          url:"https://images.unsplash.com/photo-1605148517575-3cc146936f38?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image:{
          url:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image:{
          url:"https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
        
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image:{
          url:"https://images.unsplash.com/photo-1507038772120-7fff76f79d79?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image:{
          url:"https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image:{
          url:"https://media.istockphoto.com/id/2150278950/photo/red-fort-fortress-india-delhi-famous-sunset-view.jpg?s=2048x2048&w=is&k=20&c=IIP6Na-1tnkTC6C4UqPeOsGPFu99BcBmwdeob4tsdRM=",
        filename:"Placeimage",
        },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image:
        {
          url:"https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image:{
          url:"https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image:{
          url:"https://media.istockphoto.com/id/123384440/photo/panjim-church-goa.jpg?s=1024x1024&w=is&k=20&c=1PRHGehHLwUdil4aPwOxPWsc1NZ8aP_KMxETtrW9kmg=",
        filename:"Placeimage",
        },
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image:{
          url:"https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image:{
          url:"https://media.istockphoto.com/id/123384440/photo/panjim-church-goa.jpg?s=1024x1024&w=is&k=20&c=1PRHGehHLwUdil4aPwOxPWsc1NZ8aP_KMxETtrW9kmg=",
        filename:"Placeimage",
        },
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image:{
          url:"https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image:{
          url:"https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename:"Placeimage",
        },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image:{
          url:"https://media.istockphoto.com/id/123384440/photo/panjim-church-goa.jpg?s=1024x1024&w=is&k=20&c=1PRHGehHLwUdil4aPwOxPWsc1NZ8aP_KMxETtrW9kmg=",
        filename:"Placeimage",
        },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image:{
          url:"https://media.istockphoto.com/id/123384440/photo/panjim-church-goa.jpg?s=1024x1024&w=is&k=20&c=1PRHGehHLwUdil4aPwOxPWsc1NZ8aP_KMxETtrW9kmg=",
        filename:"Placeimage",
        },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image:{
          url:"https://media.istockphoto.com/id/123384440/photo/panjim-church-goa.jpg?s=1024x1024&w=is&k=20&c=1PRHGehHLwUdil4aPwOxPWsc1NZ8aP_KMxETtrW9kmg=",
        filename:"Placeimage",
        },
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
       
        image:{
          url:"https://media.istockphoto.com/id/1094919124/photo/male-manager-and-female-chef-using-digital-tablet-in-kitchen.jpg?s=2048x2048&w=is&k=20&c=ioRCSsw6WUk61c-5xvIhixIbY2ofkSB_10i9e7rRDkY=",
        filename:"Placeimage",
        },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image:{
          url:"https://media.istockphoto.com/id/123384440/photo/panjim-church-goa.jpg?s=1024x1024&w=is&k=20&c=1PRHGehHLwUdil4aPwOxPWsc1NZ8aP_KMxETtrW9kmg=",
        filename:"Placeimage",
        },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image:{
          url:"https://media.istockphoto.com/id/123384440/photo/panjim-church-goa.jpg?s=1024x1024&w=is&k=20&c=1PRHGehHLwUdil4aPwOxPWsc1NZ8aP_KMxETtrW9kmg=",
        filename:"Placeimage",
    },
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image:{
         url: "https://media.istockphoto.com/id/1094919124/photo/male-manager-and-female-chef-using-digital-tablet-in-kitchen.jpg?s=2048x2048&w=is&k=20&c=ioRCSsw6WUk61c-5xvIhixIbY2ofkSB_10i9e7rRDkY=",
        filename:"Placeimage",
        },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image:
        {
          url:"https://media.istockphoto.com/id/123384440/photo/panjim-church-goa.jpg?s=1024x1024&w=is&k=20&c=1PRHGehHLwUdil4aPwOxPWsc1NZ8aP_KMxETtrW9kmg=",
        filename:"Placeimage",
        },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image:
        {
         url: "https://media.istockphoto.com/id/123384440/photo/panjim-church-goa.jpg?s=1024x1024&w=is&k=20&c=1PRHGehHLwUdil4aPwOxPWsc1NZ8aP_KMxETtrW9kmg=",
        filename:"Placeimage",
        },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image:{
          url:"https://media.istockphoto.com/id/1094919124/photo/male-manager-and-female-chef-using-digital-tablet-in-kitchen.jpg?s=2048x2048&w=is&k=20&c=ioRCSsw6WUk61c-5xvIhixIbY2ofkSB_10i9e7rRDkY=",
        filename:"Placeimage",
        },
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",

       image:{
        url:"https://media.istockphoto.com/id/2150278950/photo/red-fort-fortress-india-delhi-famous-sunset-view.jpg?s=2048x2048&w=is&k=20&c=IIP6Na-1tnkTC6C4UqPeOsGPFu99BcBmwdeob4tsdRM=",
       filename:"Placeimage",
       },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
     
    },
  ];
  
  module.exports = { data: samplePlace };