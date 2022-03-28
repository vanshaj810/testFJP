let users = [
    {
      name: "Rajneesh",
      age: 34,
      address: { local: "22 Alaknanda", city: "Dehradun", state: "UK" },
      orders: [{ id: 1, name: "GOT Book Series" }],
    },
    {
      name: "Bhavesh",
      age: 37,
      address: { local: "48 DT Row", city: "Hyderabad", state: "AP" },
    },
    {
      name: "Jasbir",
      age: 38,
      address: { local: "196 Lama Bhavan", city: "Gangtok", state: "Sikkim" },
      orders: [
        { id: 1, name: "Chair" },
        { id: 2, name: "PS5" },
      ],
    },
  ];
  
  function updateUsers(users, userObject, item) {
    //write your code here
    // console.log(item);
  
    const check_user = !!users.find((user) => {
      return user.name == userObject.name;
    });
  
    if (!check_user) {
      users.push(userObject);
      return users;
    } else {
      users.map((itm) => {
        if( itm.name == userObject.name){
            if(itm.order){
                 const item_Check=!!itm.orders.find((i)=>{
                return i.name==item
            })
            if(item_Check){
                console.log("Already ordered!")
            }else{
                itm.orders.push({name:item})
            }
            }else{
                itm.orders=[{id:1,name:item}]
            }
           
        }
        });
      
    }
      console.log(users)
  }
  
  console.log(
    JSON.stringify(
      updateUsers(
        users,
        {
          name: "Bhavesh",
          age: 34,
          address: { local: "22 Alaknanda", city: "Dehradun", state: "UK" },
        },
        "Fan"
      )
    )
  );