document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    let StudentsInfoList = [
            
    ];

    const searchContainer = document.createElement("div");
    searchContainer.classList.add("search-container","fixed-top");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Enter Roll Number";
    searchInput.classList.add("search-input");  
    searchContainer.appendChild(searchInput);

    StudentsInfo.insertBefore(searchContainer, StudentsInfo.firstChild);

    function getFormattedDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        return now.toLocaleDateString(undefined, options);
    }

    function createStudentCard(student) {
        const card = document.createElement("div");
        card.classList.add("card", "student-card");
        card.dataset.rollNo = student.rollNo;

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image-div");

        const image = document.createElement("img");
        image.src = student.imageUrl ? student.imageUrl : "https://res.cloudinary.com/dfl09yw03/image/upload/c_crop,g_auto,h_800,w_800/n98sq90nqivjiio1bmho.jpg";
        image.alt = student.name;
        image.classList.add("card-img-top", "mb-3");
        imageDiv.appendChild(image);

        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container");

        const name = document.createElement("h5");
        name.textContent = student.name;
        name.classList.add("card-title");
        textContainer.appendChild(name);

        const rollNumber = document.createElement("p");
        rollNumber.textContent = student.rollNo;
        rollNumber.classList.add("card-text", "mb-3");
        textContainer.appendChild(rollNumber);

        infoDiv.appendChild(imageDiv);
        infoDiv.appendChild(textContainer);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "mb-3");

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        const studentButtonsDiv = document.createElement("div");
        studentButtonsDiv.classList.add("student-buttons");

        const callStudentButton = document.createElement("button");
        callStudentButton.textContent = student.studentNo ? "Call Student" : "No Student Phone";
        callStudentButton.disabled = !student.studentNo;
        callStudentButton.classList.add("btn", "btn-primary");
        if (!student.studentNo) {
            callStudentButton.classList.add("button-disabled");
        } else {
            callStudentButton.onclick = () => {
                window.location.href = `tel:+91${student.studentNo}`;
            };
        }
        studentButtonsDiv.appendChild(callStudentButton);

        const messageStudentButton = document.createElement("button");
        messageStudentButton.textContent = student.studentNo ? "Message Student" : "No Student Phone";
        messageStudentButton.disabled = !student.studentNo;
        messageStudentButton.classList.add("btn", "btn-primary");
        if (!student.studentNo) {
            messageStudentButton.classList.add("button-disabled");
        } else {
            messageStudentButton.onclick = () => {
                const message = `You are ${student.name} (${student.rollNo}) absent for the ${getFormattedDate()} ~staff of NARASARAOPETA ENGINEERING COLLEGE`;
                window.location.href = `sms:+91${student.studentNo}?body=${encodeURIComponent(message)}`;
            };
        }
        studentButtonsDiv.appendChild(messageStudentButton);

        const parentButtonsDiv = document.createElement("div");
        parentButtonsDiv.classList.add("parent-buttons");

        const callParentButton = document.createElement("button");
        callParentButton.textContent = student.parentNo ? "Call Parent" : "No Parent Phone";
        callParentButton.disabled = !student.parentNo;
        callParentButton.classList.add("btn", "btn-primary");
        if (!student.parentNo) {
            callParentButton.classList.add("button-disabled");
        } else {
            callParentButton.onclick = () => {
                window.location.href = `tel:+91${student.parentNo}`;
            };
        }
        parentButtonsDiv.appendChild(callParentButton);

        const messageParentButton = document.createElement("button");
        messageParentButton.textContent = student.parentNo ? "Message Parent" : "No Parent Phone";
        messageParentButton.disabled = !student.parentNo;
        messageParentButton.classList.add("btn", "btn-primary");
        if (!student.parentNo) {
            messageParentButton.classList.add("button-disabled");
        } else {
            messageParentButton.onclick = () => {
                const message = `Your ward ${student.name} (${student.rollNo}) is absent for the ${getFormattedDate()} ~staff of NARASARAOPETA ENGINEERING COLLEGE`;
                window.location.href = `sms:+91${student.parentNo}?body=${encodeURIComponent(message)}`;
            };
        }
        parentButtonsDiv.appendChild(messageParentButton);

        buttonsDiv.appendChild(studentButtonsDiv);
        buttonsDiv.appendChild(parentButtonsDiv);

        cardBody.appendChild(buttonsDiv);
        card.appendChild(infoDiv);
        card.appendChild(cardBody);

        StudentsInfo.appendChild(card);
    }

    function filterStudents() {
        const rollNumber = searchInput.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.student-card');

        cards.forEach(card => {
            const cardRollNo = card.dataset.rollNo.toLowerCase();
            card.style.display = rollNumber === "" || cardRollNo.includes(rollNumber) ? "block" : "none";
        });
    }

    StudentsInfoList.forEach(createStudentCard);

    searchInput.addEventListener("input", filterStudents);
});
