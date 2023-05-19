# GraphQL

## here are the query and mutation structures


mutation editrestaurants($idd: Int = 1, $name: String = "Aldos"){
editrestaurant(id: $idd, name: $name){
name
description
}
}

mutation setrestaurants {
setrestaurant(input: {
name: "Margaritas",
description: "Mexican"}) {
name
description
}
}

mutation deleterestaurants($idd: Int = 1){
  deleterestaurant(id: $idd){
ok
}
}

query getrestaurants {
restaurants {
name
description
dishes{
name
price
}
}
}

query getrestaurant($iid: Int = 1){
    restaurant(id:$iid){
name
description
}
}
