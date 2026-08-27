/* =====================================================
   KING RAFAEL PORTFOLIO
   WHATSAPP REQUEST FORM
===================================================== */


/* Get the Form */

const requestForm =
    document.getElementById("requestForm");


/* Get Status Message */

const formStatus =
    document.getElementById("formStatus");


/* =====================================================
   FORM SUBMIT
===================================================== */

if (requestForm) {

    requestForm.addEventListener(
        "submit",
        function (event) {

            /* Stop normal form submission */

            event.preventDefault();


            /* =================================================
               GET USER INFORMATION
            ================================================= */

            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const service =
                document
                    .getElementById("service")
                    .value;


            const budget =
                document
                    .getElementById("budget")
                    .value;


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            /* =================================================
               CHECK REQUIRED INFORMATION
            ================================================= */

            if (
                name === "" ||
                phone === "" ||
                service === "" ||
                message === ""
            ) {

                formStatus.className =
                    "form-status error";

                formStatus.textContent =
                    "Please fill in all required fields.";

                return;

            }


            /* =================================================
               CREATE WHATSAPP MESSAGE
            ================================================= */

            const whatsappMessage =

`Hello KING RAFAEL 👋

I would like to work with you.

👤 Name:
${name}

📞 Phone:
${phone}

📧 Email:
${email || "Not provided"}

💼 Service Needed:
${service}

💰 Budget:
${budget || "Not specified"}

📝 Project Details:
${message}

I am looking forward to hearing from you. Thank you.`;


            /* =================================================
               YOUR WHATSAPP NUMBER
            ================================================= */

            const whatsappNumber =
                "255693641005";


            /* =================================================
               CREATE WHATSAPP URL
            ================================================= */

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            /* =================================================
               SHOW SUCCESS MESSAGE
            ================================================= */

            formStatus.className =
                "form-status success";

            formStatus.textContent =
                "Your request is ready. Opening WhatsApp...";


            /* =================================================
               OPEN WHATSAPP
            ================================================= */

            setTimeout(
                function () {

                    window.open(
                        whatsappURL,
                        "_blank"
                    );

                },
                800
            );


            /* =================================================
               RESET FORM
            ================================================= */

            setTimeout(
                function () {

                    requestForm.reset();

                },
                1000
            );

        }
    );

}


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.querySelector(".menu-toggle");


const navLinks =
    document.querySelector(".nav-links");


if (
    menuToggle &&
    navLinks
) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );

        }
    );


    /* Close menu when link is clicked */

    const navItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    navItems.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "active"
                    );

                }
            );

        }
    );

}