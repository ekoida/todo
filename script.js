const listOfItem = [
  {
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque commodi vitae alias quaerat reiciendis vero laudantium sit modi aut! Corrupti magna pum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure eligendi inventore aspernatur incidunt quidem cumque fugit dolore neque! Facere dignissimos similique nisi molestias tempora laborum quae voluptate vitae aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, temporibus voluptatibus? Modi eaque facere iste omnis sunt? Modi sint repellendus fuga, voluptas suscipit, saepe tempore libero vel pariatur repudiandae quos! Maxime quo doloribus nobis quod",
    isActive: true,
    isDeleted: false,
  },
  {
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque commodi vitae alias quaerat reiciendis vero laudantium sit modi aut! Corrupti magna pum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure eligendi inventore aspernatur incidunt quidem cumque fugit dolore neque! Facere dignissimos similique nisi molestias tempora laborum quae voluptate vitae aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, temporibus voluptatibus? Modi eaque facere iste omnis sunt? Modi sint repellendus fuga, voluptas suscipit, saepe tempore libero vel pariatur repudiandae quos! Maxime quo doloribus nobis quod recusandae ipsa eos, repudiandae sed rem, commodi iusto quasi, natus saepe officia totam non? Tenetur modi maiores ipsum repellendus pariatur quae eaque natus mollitia veritatis! Sed blanditiis corrupti voluptatibus eveniet earum ipsam itaque rerum, officia fugit molestias, aspernatur odio asperiores dicta ratione, excepturi enim omnis. Similique, corporis excepturi. Voluptatem cupiditate pariatur laboriosam ipsum eum voluptates. Vero minus tempora recusandae adipisci quibusdam beatae, repellat optio, fugiat fuga dolorum distinctio facilis eveniet dolor, minima quo suscipit unde nisi reprehenderit repellendus. Fugit iusto quam reprehenderit voluptate sapiente enim.",
    isActive: false,
    isDeleted: false,
  },
  {
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque commodi vitae alias quaerat reiciendis vero laudantium sit modi aut! Corrupti magna pum",
    isActive: true,
    isDeleted: false,
  },
  {
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque commodi vitae alias quaerat reiciendis vero laudantium sit modi aut! Corrupti magna pum",
    isActive: true,
    isDeleted: false,
  },
  {
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque commodi vitae alias quaerat reiciendis vero laudantium sit modi aut! Corrupti magna pum",
    isActive: true,
    isDeleted: false,
  },
  {
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque commodi vitae alias quaerat reiciendis vero laudantium sit modi aut! Corrupti magna pum",
    isActive: true,
    isDeleted: false,
  },
];

function createToDoItem(toDoItem) {
  const divToDoItem = document.createElement("div");
  divToDoItem.classList.add("todo_item");

  const divToDoItemContent = document.createElement("div");
  divToDoItemContent.classList.add("todo-item-content");

  const img = document.createElement("img");
  if (toDoItem.isActive === false) {
    img.setAttribute("alt", "chevron-circle");
    img.setAttribute("src", "img/chevron-circle.svg")
  } else {
    img.setAttribute("alt", "circle");
    img.setAttribute("src", "img/circle.svg");
  }


  const pItem = document.createElement("p");
  pItem.classList.add("item");
  if (toDoItem.isActive === false) {
    pItem.classList.add("item_done");
  }
  pItem.textContent = toDoItem.content;

  const imgDeleteBasket = document.createElement("img");
  imgDeleteBasket.classList.add("delete_basket");
  imgDeleteBasket.setAttribute("alt", "delete_basket");
  imgDeleteBasket.setAttribute("src", "img/delete.svg");

  divToDoItem.appendChild(divToDoItemContent);
  divToDoItem.appendChild(imgDeleteBasket);
  divToDoItemContent.appendChild(img);
  divToDoItemContent.appendChild(pItem);

  return divToDoItem;
}

function drawToDo() {
  const divListOfItem = document.querySelector(".list_of_item");
  divListOfItem.innerHTML = "";
  for (let i = 0; i < listOfItem.length; i++) {
    divListOfItem.appendChild(createToDoItem(listOfItem[i]));
  }
}


const addButton = document.querySelector(".add_button");
addButton.addEventListener('click', function(){
  
  
  const newToDo = document.querySelector(".new_todo");
  const newToDoValue = newToDo.value;
  console.log(newToDoValue);
  listOfItem.unshift({
    content:newToDoValue,
    isActive: true,
    isDeleted: false,
  })
  newToDo.value = "";
 drawToDo();
})


