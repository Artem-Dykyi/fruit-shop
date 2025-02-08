const fruts = [
  {
    title: "pineapple",
    price: 20,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/640px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
  },
  {
    title: "strawbarry",
    price: 10,
    photo:
      "https://ekomalina.com.ua/wp-content/uploads/2023/03/10-krokiv-do-velikogo-vrozhayu-polunici-01.jpg",
  },
  {
    title: "banana",
    price: 15,
    photo:
      "https://www.online.ua/static/content/thumbs/430x268/b/24/rcvk3w-3d38161fcec445ec9c4ef561220ea24b.jpg",
  },
  {
    title: "lemon",
    price: 45,
    photo: "https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg",
  },
  {
    title: "bluberry",
    price: 50,
    photo:
      "https://plantnet.com.au/wp-content/uploads/plantnet-category-blueberries.jpg",
  },
  {
    title: "grapes",
    price: 60,
    photo:
      "https://www.jacksonville.com/gcdn/authoring/2017/01/18/NFTU/ghows-LK-6897c679-f0cc-41d1-8241-d3f5f8dbad35-7a9c6006.jpeg",
  },
  {
    title: "apple",
    price: 30,
    photo:
      "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg",
  },
];

const fruitElement = fruts
  .map(
    (fruit) =>
      `<li class="fruit-item">
            <h2 class="title-fruit">${fruit.title}</h2>
            <p class="fruit-text">${fruit.price}</p>
            <img class="fruit-photo" src="${fruit.photo}" alt="${fruit.title}" data-path="${fruit.photo}">
            <button type="button" class="fruit-btn">Купити кількість</button>
        </li>`
  )
  .join("");

const fruitList = document.querySelector(".fruit-list");
fruitList.innerHTML = fruitElement;

const btns = document.querySelectorAll(".fruit-btn");
console.log(btns);

// btns.forEach((btn) => {
//     btn.addEventListener("click", openModal)
// })

// оптимізуємо додаток щоб було менше слухачів зараз є 6 слухачів бо на кожній кнопці купти вісить слухач
// Застосуємо делегування подій та повісимо одного слухача на їх спільного предка

fruitList.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    openModal();
    const item = event.target.closest(".fruit-item");
    console.log(item);
    const imgTag = item.firstElementChild.nextElementSibling.nextElementSibling;
    document.querySelector(".modal-img").src = imgTag.dataset.path
    console.log(imgTag);
  }
});

const modalClose = document.querySelector(".fruit-back-drop");
function openModal(params) {
  modalClose.classList.toggle("is-hidden");
}

const btnClose = document.querySelector(".modal-close");
btnClose.addEventListener("click", (event) => {
  modalClose.classList.toggle("is-hidden");
});
