# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Task.destroy_all
User.destroy_all

adrian = User.create({name: "Adrian"})
ashley = User.create({name: "Ashley"})
nolan = User.create({name: "Nolan"})
austin = User.create({name: "Austin"})

Task.create({description:"Fold the laundry", length: 10, urgency: false, user: ashley})
Task.create({description:"Pay the bills", length: 5, urgency: true, user: ashley})
Task.create({description:"Workout", length: 30, urgency: false, user: ashley})
Task.create({description:"Shower", length: 10, urgency: true, user: ashley})
Task.create({description:"Do dishes", length: 10, urgency: false, user: ashley})
Task.create({description:"Clean room", length: 20, urgency: false, user: adrian })
Task.create({description:"Clean Car", length: 20, urgency: false, user: adrian })
Task.create({description:"Vacuum the house", length: 20, urgency: false, user: adrian })
Task.create({description:"Study", length: 30, urgency: true, user: adrian })
Task.create({description:"Clean out the fridge", length: 30, urgency: false, user: adrian })
Task.create({description:"Go for a run", length: 30, urgency: false, user: austin })
Task.create({description:"Walk the dogs", length: 20, urgency: true, user: austin })
Task.create({description:"Clean house", length: 30, urgency: false, user: austin })
Task.create({description:"Clean the bathroom", length: 15, urgency: false, user: austin })
Task.create({description:"Organize Desk", length:  10, urgency: false, user: austin })
Task.create({description:"Pick up prescriptions", length: 15, urgency: true, user: nolan })
Task.create({description:"Check the mail", length: 5, urgency: false, user: nolan })
Task.create({description:"Water the plants", length: 5, urgency: true, user: nolan })
Task.create({description:"Make breakfast", length: 10, urgency: true, user: nolan })
Task.create({description:"Make lunch", length: 20, urgency: false, user: nolan })
Task.create({description:"Make dinner", length: 30, urgency: true, user: nolan })
Task.create({description:"Update the Calender", length: 10, urgency: false, user: nolan })