const all = document.querySelectorAll(".all");
const tag = document.querySelector(".tag");
console.log(all);
const secondDiscount = document.querySelector(".secondDiscount");
const thirdDiscount = document.querySelector(".thirdDiscount");
const next = document.querySelector("#next");
const prev = document.querySelector("#previous");
// =====================Header slider start==================================
// ==========================================================================
const buttonPress = (type) => {
  for (i = 0; i < all.length; i++) {
    if (all[i].getAttribute("class").includes("active")) {
      if (type === "next") {
        if (all[all.length - 1].getAttribute("class").includes("active")) {
          all[0].classList.add("active");
          all[0].style.display = "flex";
          all[all.length - 1].classList.remove("active");
          all[all.length - 1].style.display = "none";
        } else {
          all[i + 1].classList.add("active");
          all[i + 1].style.display = "flex";
          all[i].classList.remove("active");
          all[i].style.display = "none";
        }
      } else if (type === "prev") {
        if (all[i] === all[0]) {
          all[all.length - 1].classList.add("active");
          all[all.length - 1].style.display = "flex";
          all[i].classList.remove("active");
          all[i].style.display = "none";
        } else {
          all[i - 1].classList.add("active");
          all[i - 1].style.display = "flex";
          all[i].classList.remove("active");
          all[i].style.display = "none";
        }
      }
      break;
    }
  }
};
next.addEventListener("click", () => buttonPress("next"));
prev.addEventListener("click", () => buttonPress("prev"));
// =====================Header slider end==================================
// ==========================================================================

const tel1 = document.querySelector("#tel1");
let navItems = [
  { title: "Plastic Float", link: "../plastic/plastic.html" },
  { title: "Wooden Float", link: "../plastic/plastic.html" },
  { title: "Trowel", link: "../plastic/plastic.html" },
  { title: "Wheels", link: "../plastic/plastic.html" },
  { title: "Sharpening stone", link: "../plastic/plastic.html" },
  { title: "Ropes", link: "../plastic/plastic.html" },
  { title: "Kovush", link: "../plastic/plastic.html" },
  { title: "Wooden legs", link: "../plastic/plastic.html" },
  { title: "Mop", link: "../plastic/plastic.html" },
];
const wrapper = document.querySelector("#search");
const createLinks = (base) => {
  wrapper.style.cssText = `
  backgroud-color: red;
   
  `;

  base.map((item) => {
    const wrapperItem = document.createElement("div");
    wrapperItem.style.cursor = "pointer";
    const a = document.createElement("a");
    a.style.cssText = `
    display: block;
    background-color: #e7e7e7;
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    margin: 10px`;
    a.innerText = item.title;
    a.setAttribute("href", item.link);
    wrapperItem.append(a);
    wrapper.append(wrapperItem);
  });
  return wrapper;
};
const findInput = document.querySelector("#find");
findInput.addEventListener("input", ({ target: { value } }) => {
  if (wrapper) wrapper.innerHTML = "";
  if (value.length >= 1) {
    let filtered = navItems.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    let wrapper = createLinks(filtered);
  } else wrapper.style.display = "none";
  tel1.append(wrapper);
});
