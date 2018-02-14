# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Users.create[
  {
  name:"John Harvy",
  location:"San Francisco",
  dating_preference:"F",
  age:"28",
  gender:"M"
  },
  {
  name:"Jane Goodall",
  location:"San Francisco",
  dating_preference:"M",
  age:"27",
  gender:"F"
  },
  name:"Sam Bacon",
  location:"Oakland",
  dating_preference:"F",
  age:"24",
  gender:"F"
  },
  {
  name:"Amy Fowler",
  location:"Oakland",
  dating_preference:"F",
  age:"26",
  gender:"F"
  },

]


Restaurant.create(
  name:"Trestle",
  location:"San Francisco",
  img_url:"https://static.urbandaddy.com/uploads/assets/image/slideshows/standard/da58dc9fa6e0f3a06ef35ab731c1c01e.jpg",
  description:"New American restaurant offering 3-course fixed-price meals in a quaint space with modern flair."
)
