// commen js works
window.addEventListener("DOMContentLoaded", function () {
  // all modal open / close
  (function () {
    var openBtns = document.querySelectorAll(".modal-open-btn");
    var closeBtns = document.querySelectorAll(".modal-close-btn");

    function openModal() {
      var modalId = this.getAttribute("data-modal");
      var scrollBarNeeded = this.hasAttribute("data-scrollbar");
      var modal = document.querySelector("#".concat(modalId));
      modal.classList.add("opened");

      if (!scrollBarNeeded) {
        document.body.classList.add("hide-scroller");
      } else {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }

      var mask = modal.querySelector(".dialog__mask");
      mask.addEventListener("click", function () {
        modal.classList.remove("opened");
        document.body.classList.remove("hide-scroller");
      });
    }

    function closeModal() {
      var modalId = this.getAttribute("data-modal");
      var modal = document.querySelector("#".concat(modalId));
      modal.classList.remove("opened");
      document.body.classList.remove("hide-scroller");
    }

    for (var i = 0; i < openBtns.length; i++) {
      var openBtn = openBtns[i];
      openBtn.addEventListener("click", openModal);
    }

    for (var _i = 0; _i < closeBtns.length; _i++) {
      var closeBtn = closeBtns[_i];
      closeBtn.addEventListener("click", closeModal);
    }
  })(); // custom dropdown

  (function () {
    var dropdowns = document.querySelectorAll(".custom-dropdown");
    var menus = document.querySelectorAll(".custom-dropdown__menu");

    function setDropdown(dropdown) {
      var toggler = dropdown.querySelector(".custom-dropdown__toggler");
      var menu = dropdown.querySelector(".custom-dropdown__menu");
      toggler.addEventListener("click", function () {
        menu.classList.toggle("show");
      });
    }

    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      setDropdown(dropdown);
    }

    function closeDropdown(e) {
      var closestDropdown = e.target.closest(".custom-dropdown");

      if (!closestDropdown) {
        for (var _i2 = 0; _i2 < menus.length; _i2++) {
          var menu = menus[_i2];
          menu.classList.remove("show");
        }
      } else {
        var currentMenu = closestDropdown.querySelector(
          ".custom-dropdown__menu"
        );

        for (var _i3 = 0; _i3 < menus.length; _i3++) {
          var _menu = menus[_i3];

          if (_menu != currentMenu) {
            _menu.classList.remove("show");
          }
        }
      }
    }

    document.addEventListener("click", closeDropdown);
  })();
});
