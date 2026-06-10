const figma = document.querySelector("#figma");
figma.addEventListener("click", klickHead_1);

function klickHead_1() {
  console.log("klickHead_1");
  document.querySelector(".placeholder").textContent = "Figma";
  document.querySelector("#efficiency").textContent = "⭐️⭐️☆☆☆";
  document.querySelector("#requirement").textContent = "I use Figma to design wireframes, prototypes, and user interfaces. It has helped me understand how to create layouts that look good and are easy to use.";
}
// -----------------------------------------------------------------------------------------

const ps = document.querySelector("#ps");
ps.addEventListener("click", klickHead_2);

function klickHead_2() {
  console.log("klickHead_2");
  document.querySelector(".placeholder").textContent = "Adobe Photoshop";
  document.querySelector("#efficiency").textContent = "⭐️☆☆☆☆";
  document.querySelector("#requirement").textContent = "I use Photoshop to edit images and create digital graphics. It has helped me improve my visual design and creative skills.";
}
// -----------------------------------------------------------------------------------------

const ai = document.querySelector("#ai");
ai.addEventListener("click", klickHead_3);

function klickHead_3() {
  console.log("klickHead_3");
  document.querySelector(".placeholder").textContent = "Adobe Illustrator";
  document.querySelector("#efficiency").textContent = "⭐️☆☆☆☆";
  document.querySelector("#requirement").textContent = "I’ve learned how to use Adobe Illustrator to create logos, icons, and other digital graphics. It has helped me improve my design skills and create clean, professional-looking visuals.";
}
// -----------------------------------------------------------------------------------------
const html = document.querySelector("#html");
html.addEventListener("click", klickHead_4);

function klickHead_4() {
  console.log("klickHead_4");
  document.querySelector(".placeholder").textContent = "HTML";
  document.querySelector("#efficiency").textContent = "⭐️⭐️⭐️☆☆";
  document.querySelector("#requirement").textContent = "HTML taught me how to build the basic structure of a website and organize content in a clear way.";
}
// -----------------------------------------------------------------------------------------
const css = document.querySelector("#css");
css.addEventListener("click", klickHead_5);

function klickHead_5() {
  console.log("klickHead_5");
  document.querySelector(".placeholder").textContent = "CSS";
  document.querySelector("#efficiency").textContent = "⭐️⭐️☆☆☆";
  document.querySelector("#requirement").textContent = "With CSS, I learned how to style websites, work with colors and fonts, and make pages look good on different screen sizes.";
}
// -----------------------------------------------------------------------------------------
const js = document.querySelector("#js");
js.addEventListener("click", klickHead_6);

function klickHead_6() {
  console.log("klickHead_5");
  document.querySelector(".placeholder").textContent = "JavaScript";
  document.querySelector("#efficiency").textContent = "⭐️☆☆☆☆";
  document.querySelector("#requirement").textContent = "JavaScript has helped me make websites more interactive by adding features like menus, animations, and dynamic content.";
}
