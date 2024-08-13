document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    let StudentsInfoList = [
        {
          "name": "PRATHI CHIRANJEEVI",
          "rollNo": "22471A0301",
          "parentNo": 7815804230,
          "studentNo": 7780225104,
          "imageUrl": ""
        },
        {
          "name": "KOSURI TANUJ",
          "rollNo": "22471A0303",
          "parentNo": 6304664358,
          "studentNo": 8143148438,
          "imageUrl": ""
        },
        {
          "name": "JAGARLAMUDI RAJA VASANTH",
          "rollNo": "23475A0301",
          "parentNo": 9573317266,
          "studentNo": 9441108783,
          "imageUrl": ""
        },
        {
          "name": "PAILA SURYANARAYANA",
          "rollNo": "23475A0302",
          "parentNo": 9390890787,
          "studentNo": 9618624351,
          "imageUrl": ""
        },
        {
          "name": "SHAIK MASTAN VALI",
          "rollNo": "23475A0303",
          "parentNo": 8184851268,
          "studentNo": 7569094741,
          "imageUrl": ""
        },
        {
          "name": "SHAIK NOORULLA",
          "rollNo": "23475A0304",
          "parentNo": 639397239,
          "studentNo": 9963508005,
          "imageUrl": ""
        },
        {
          "name": "MAROTHU TEJOPATHI SASIDHARA RAO",
          "rollNo": "23475A0305",
          "parentNo": 9573694867,
          "studentNo": 6302678863,
          "imageUrl": ""
        },
        {
          "name": "PUSALA AJAYKUMAR",
          "rollNo": "23475A0306",
          "parentNo": 8328480674,
          "studentNo": 9581506116,
          "imageUrl": ""
        },
        {
          "name": "KOYA NAGAPHANINDRA",
          "rollNo": "23475A0307",
          "parentNo": 8074335704,
          "studentNo": 9948452441,
          "imageUrl": ""
        },
        {
          "name": "DOSAKAYALA VENKATESWARLU",
          "rollNo": "23475A0308",
          "parentNo": 6281873335,
          "studentNo": 7997057905,
          "imageUrl": ""
        },
        {
          "name": "AMBATIPUDI VIJAY KUMAR",
          "rollNo": "23475A0309",
          "parentNo": 8500991012,
          "studentNo": 8341681013,
          "imageUrl": ""
        },
        {
          "name": "VELLANKI HARSHA VARDHAN",
          "rollNo": "23475A0310",
          "parentNo": 6305069558,
          "studentNo": 9494916140,
          "imageUrl": ""
        },
        {
          "name": "BOJJA VENKATA KOTESWARA RAO",
          "rollNo": "23475A0311",
          "parentNo": 9618485839,
          "studentNo": 7093507374,
          "imageUrl": ""
        },
        {
          "name": "POTHULA VENU BABU",
          "rollNo": "23475A0312",
          "parentNo": 9948309681,
          "studentNo": 8500716380,
          "imageUrl": ""
        },
        {
          "name": "KOTTE KOTESWARA RAO",
          "rollNo": "23475A0313",
          "parentNo": 6304907549,
          "studentNo": 9885842150,
          "imageUrl": ""
        },
        {
          "name": "VANA BHARGAV",
          "rollNo": "23475A0314",
          "parentNo": 7993719233,
          "studentNo": 9666289477,
          "imageUrl": ""
        },
        {
          "name": "BORA SHIVAJI",
          "rollNo": "23475A0315",
          "parentNo": 7816040825,
          "studentNo": 7013628015,
          "imageUrl": ""
        },
        {
          "name": "GOLI LOKSAI",
          "rollNo": "23475A0316",
          "parentNo": 9392776954,
          "studentNo": 7386185785,
          "imageUrl": ""
        },
        {
          "name": "NURUKURTHI NAVEEN SRI KRISHNA",
          "rollNo": "23475A0317",
          "parentNo": 9494009568,
          "studentNo": 9949784844,
          "imageUrl": ""
        },
        {
          "name": "PALLI SAI KIRAN",
          "rollNo": "23475A0318",
          "parentNo": 7075054113,
          "studentNo": 8463964113,
          "imageUrl": ""
        },
        {
          "name": "DEVARAKOND VEERA NAGA VENKATESH",
          "rollNo": "23475A0319",
          "parentNo": 7093578752,
          "studentNo": 8885337476,
          "imageUrl": ""
        },
        {
          "name": "PERADA MANIKANTA",
          "rollNo": "23475A0320",
          "parentNo": 9010689953,
          "studentNo": 8247320781,
          "imageUrl": ""
        },
        {
          "name": "VEMULA SANTHI KUMAR",
          "rollNo": "23475A0321",
          "parentNo": 7013318478,
          "studentNo": 8185905035,
          "imageUrl": ""
        },
        {
          "name": "NIRUJOGI VINOD KUAMR",
          "rollNo": "23475A0322",
          "parentNo": 7569208066,
          "studentNo": 7036553719,
          "imageUrl": ""
        },
        {
          "name": "SONTI VENKATA GOPI",
          "rollNo": "23475A0323",
          "parentNo": 7981342131,
          "studentNo": 9182998414,
          "imageUrl": ""
        },
        {
          "name": "JILLELAMUDI BRAHMAIAH",
          "rollNo": "23475A0324",
          "parentNo": 9347224907,
          "studentNo": 9502383279,
          "imageUrl": ""
        },
        {
          "name": "ULLAM NAGA MANIKANTA",
          "rollNo": "23475A0325",
          "parentNo": 9100996950,
          "studentNo": 9398796185,
          "imageUrl": ""
        },
        {
          "name": "MITTAPALLI V S Y PAVAN KUMAR",
          "rollNo": "23475A0326",
          "parentNo": 9866568301,
          "studentNo": 7032348301,
          "imageUrl": ""
        },
        {
          "name": "GARNEPUDI PUSHPARAJ",
          "rollNo": "23475A0327",
          "parentNo": 8367474351,
          "studentNo": 9392517310,
          "imageUrl": ""
        },
        {
          "name": "PINDI AJAY BABU",
          "rollNo": "23475A0328",
          "parentNo": 6281989639,
          "studentNo": 8886140745,
          "imageUrl": ""
        },
        {
          "name": "REDDY RAGHU",
          "rollNo": "23475A0329",
          "parentNo": 7997027637,
          "studentNo": 7286027637,
          "imageUrl": ""
        },
        {
          "name": "PAMULA BHAGYA RAJU",
          "rollNo": "23475A0330",
          "parentNo": 7337304563,
          "studentNo": 9014172872,
          "imageUrl": ""
        },
        {
          "name": "DANNAVARAPU RAMANJANEYULU",
          "rollNo": "23475A0331",
          "parentNo": 9182420097,
          "studentNo": 9985906122,
          "imageUrl": ""
        },
        {
          "name": "GONTINA RAMESH",
          "rollNo": "23475A0332",
          "parentNo": 7330799500,
          "studentNo": 9177680409,
          "imageUrl": ""
        },
        {
          "name": "GUNDLA VENKATA SIVA KUMAR",
          "rollNo": "23475A0333",
          "parentNo": 7075813994,
          "studentNo": 9951079460,
          "imageUrl": ""
        },
        {
          "name": "GUTHA ANAND BABU",
          "rollNo": "23475A0334",
          "parentNo": 7702950618,
          "studentNo": 9948026120,
          "imageUrl": ""
        },
        {
          "name": "PACHIGOLLA GOPALA KRISHNA",
          "rollNo": "23475A0335",
          "parentNo": 7013151325,
          "studentNo": 9951207604,
          "imageUrl": ""
        },
        {
          "name": "GOTTAM KARTHIK",
          "rollNo": "23475A0336",
          "parentNo": 9959024509,
          "studentNo": 8790167756,
          "imageUrl": ""
        }
      ]
      ;

    
        const searchContainer = document.createElement("div");
        searchContainer.classList.add("search-container", "fixed-top");
    
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
                card.style.display = rollNumber === "" || cardRollNo.includes(rollNumber) ? "flex" : "none";
            });
        }
    
        StudentsInfoList.forEach(createStudentCard);
    
        searchInput.addEventListener("input", filterStudents);
    });
    