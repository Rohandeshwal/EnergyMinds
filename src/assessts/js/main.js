function loadHTML(id, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error("Fetch error");
      return response.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading", file, error);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "/components/Header/header.html");
  loadHTML("footer", "/components/Footer/footer.html");
});

var btn = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const menuBar = document.querySelector(".mobile_menu_bar");
//   const mobileMenu = document.querySelector(".mobileMenu");

//   // Toggle mobile menu
//   menuBar.addEventListener("click", function () {
//     mobileMenu.classList.toggle("open");
//   });

//   // Toggle all submenus
//   document.querySelectorAll(".hsSubMenu > a").forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault(); // Prevent link from navigating

//       const submenu = this.nextElementSibling;
//       if (submenu && submenu.classList.contains("subMenu")) {
//         submenu.classList.toggle("open");
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.querySelector(".mobile_menu_bar");
  const mobileMenu = document.querySelector(".mobileMenu");
  const subMenus = document.querySelectorAll(".mobileMenuWrap .subMenu");

  // Force hide on page load
  mobileMenu.style.display = "none";
  subMenus.forEach((menu) => {
    menu.style.display = "none";
  });
  // Slide toggle function

  function slideToggle(element, duration = 300) {
    if (
      window.getComputedStyle(element).display === "none" ||
      element.offsetHeight === 0
    ) {
      // Slide down
      element.style.removeProperty("display");
      let height = element.scrollHeight;
      element.style.overflow = "hidden";
      element.style.height = "0px";

      requestAnimationFrame(() => {
        element.style.transition = `height ${duration}ms ease`;
        element.style.height = height + "px";
      });

      setTimeout(() => {
        element.style.removeProperty("height");
        element.style.removeProperty("overflow");
        element.style.removeProperty("transition");
      }, duration);
    } else {
      // Slide up
      element.style.height = element.scrollHeight + "px";
      element.style.overflow = "hidden";

      requestAnimationFrame(() => {
        element.style.transition = `height ${duration}ms ease`;
        element.style.height = "0px";
      });

      setTimeout(() => {
        element.style.display = "none";
        element.style.removeProperty("height");
        element.style.removeProperty("overflow");
        element.style.removeProperty("transition");
      }, duration);
    }
  }

  // Toggle main mobile menu
  menuBar.addEventListener("click", function () {
    slideToggle(mobileMenu);
  });

  // Toggle submenus
  const submenuToggles = document.querySelectorAll(
    ".mobileMenuWrap .hsSubMenu > a"
  );
  submenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains("subMenu")) {
        slideToggle(submenu);
      }
    });
  });

  // const submenuToggles = document.querySelectorAll(".hsSubMenu > a");

  // submenuToggles.forEach((toggle) => {
  //   toggle.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     const parentLi = this.parentElement;
  //     const submenu = this.nextElementSibling;

  //     if (submenu && submenu.classList.contains("subMenu")) {
  //       slideToggle(submenu);

  //       // Check if already active
  //       const isActive = parentLi.classList.contains("active");

  //       // Remove 'active' from all hsSubMenu items and close their submenus
  //       document.querySelectorAll(".hsSubMenu").forEach((item) => {
  //         item.classList.remove("active");

  //         const innerMenu = item.querySelector(".subMenu");
  //         if (innerMenu && innerMenu !== submenu) {
  //           innerMenu.style.display = "none";
  //           innerMenu.style.removeProperty("height");
  //         }
  //       });

  //       // Toggle class only if it was not active
  //       if (!isActive) {
  //         parentLi.classList.add("active");
  //       }
  //     }
  //   });
  // });
});
