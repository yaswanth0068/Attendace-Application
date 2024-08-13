document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    let StudentsInfoList = [
        {
            "name": "ANGIREKULA VEERANJANEYULU",
            "rollNo": "21471A0301",
            "parentNo": 7893150012,
            "studentNo": 8106771738,
            "imageUrl": ""
        },
        {
            "name": "BATTULA YUVA RAJU",
            "rollNo": "21471A0302",
            "parentNo": 6302295062,
            "studentNo": 7995191625,
            "imageUrl": ""
        },
        {
            "name": "BOMMIREDDY VENU",
            "rollNo": "21471A0303",
            "parentNo": 9908196219,
            "studentNo": 7337485417,
            "imageUrl": ""
        },
        {
            "name": "JEEDIMALLA SRI LAKSHMI NILENDRA",
            "rollNo": "21471A0304",
            "parentNo": 9573602951,
            "studentNo": 9603742951,
            "imageUrl": ""
        },
        {
            "name": "KONATHAM VENKATA NARAYANA",
            "rollNo": "21471A0305",
            "parentNo": 9347806394,
            "studentNo": 8688035151,
            "imageUrl": ""
        },
        {
            "name": "KUNCHALA ANKA RAO",
            "rollNo": "21471A0306",
            "parentNo": 9666237087,
            "studentNo": 6281901726,
            "imageUrl": ""
        },
        {
            "name": "PATHAN RIYAZ",
            "rollNo": "21471A0307",
            "parentNo": 7702383715,
            "studentNo": 9030869382,
            "imageUrl": ""
        },
        {
            "name": "SASAPU SAI SANTOSH",
            "rollNo": "21471A0309",
            "parentNo": 9398211811,
            "studentNo": 6304639616,
            "imageUrl": ""
        },
        {
            "name": "SOUBHAGYAPU SAI RAM",
            "rollNo": "21471A0310",
            "parentNo": 9550522887,
            "studentNo": 8688779543,
            "imageUrl": ""
        },
        {
            "name": "MUNAGA RAMANJANEYULU",
            "rollNo": "21471A0311",
            "parentNo": 8897018944,
            "studentNo": 6304434870,
            "imageUrl": ""
        },
        {
            "name": "YELCHURI HEMALATHA MEGHANA",
            "rollNo": "21471A0312",
            "parentNo": 9347098396,
            "studentNo": 9347169144,
            "imageUrl": ""
        },
        {
            "name": "ALLAM TIRUMALA RAJU",
            "rollNo": "21471A0314",
            "parentNo": 6304878875,
            "studentNo": 9381986395,
            "imageUrl": ""
        },
        {
            "name": "LUKALAPU RAMBABU",
            "rollNo": "22475A0301",
            "parentNo": 7659038201,
            "studentNo": 6305279093,
            "imageUrl": ""
        },
        {
            "name": "THUNUGUNTLA NAGA THARUN",
            "rollNo": "22475A0302",
            "parentNo": 8247872528,
            "studentNo": 8885138787,
            "imageUrl": ""
        },
        {
            "name": "MAILAVARAPU PAVAN KALYAN",
            "rollNo": "22475A0303",
            "parentNo": 9963272577,
            "studentNo": 8331886444,
            "imageUrl": ""
        },
        {
            "name": "KOLLI GOWRI SANKARA RAO",
            "rollNo": "22475A0304",
            "parentNo": 9391753140,
            "studentNo": 8639846856,
            "imageUrl": ""
        },
        {
            "name": "VANTAKU GANAPATHI LAXMI NAIDU",
            "rollNo": "22475A0305",
            "parentNo": 9502073384,
            "studentNo": 8008442932,
            "imageUrl": ""
        },
        {
            "name": "SYED HUSSAIN",
            "rollNo": "22475A0306",
            "parentNo": 7032557635,
            "studentNo": 7671835718,
            "imageUrl": ""
        },
        {
            "name": "BEHERA SANJAY KUMAR",
            "rollNo": "22475A0307",
            "parentNo": 8919138684,
            "studentNo": 9494163785,
            "imageUrl": ""
        },
        {
            "name": "YASAM MANIKANTA",
            "rollNo": "22475A0308",
            "parentNo": 7386609482,
            "studentNo": 7661959482,
            "imageUrl": ""
        },
        {
            "name": "MALLADI GOPI PURNA",
            "rollNo": "22475A0309",
            "parentNo": 9346628487,
            "studentNo": 9059492947,
            "imageUrl": ""
        },
        {
            "name": "UNGATI LOKESH",
            "rollNo": "22475A0310",
            "parentNo": 8466079801,
            "studentNo": 8978202950,
            "imageUrl": ""
        },
        {
            "name": "RAMAVATH VASU DEVA NAIK",
            "rollNo": "22475A0311",
            "parentNo": 9949524826,
            "studentNo": 9390241129,
            "imageUrl": ""
        },
        {
            "name": "PASALA SYAM KUMAR",
            "rollNo": "22475A0312",
            "parentNo": 7729926003,
            "studentNo": 9705957002,
            "imageUrl": ""
        },
        {
            "name": "THURIMELLA VAMSI GANESH",
            "rollNo": "22475A0313",
            "parentNo": 9985437385,
            "studentNo": 7093458934,
            "imageUrl": ""
        },
        {
            "name": "KUKKAMALLA KARTHIK",
            "rollNo": "22475A0314",
            "parentNo": 9247156054,
            "studentNo": 6302779778,
            "imageUrl": ""
        },
        {
            "name": "VUTLA KISHORE",
            "rollNo": "22475A0315",
            "parentNo": 9542330762,
            "studentNo": 8008708663,
            "imageUrl": ""
        },
        {
            "name": "DHARMANA APPALA NAIDU",
            "rollNo": "22475A0316",
            "parentNo": 7396488224,
            "studentNo": 9840788034,
            "imageUrl": ""
        },
        {
            "name": "NIKKU SURESH",
            "rollNo": "22475A0317",
            "parentNo": 9381119401,
            "studentNo": 9346441565,
            "imageUrl": ""
        },
        {
            "name": "GORANTLA SIVA KOTESWARA RAO",
            "rollNo": "22475A0318",
            "parentNo": 8187826865,
            "studentNo": 8919826865,
            "imageUrl": ""
        },
        {
            "name": "POGUNOLLA KARUN KUMAR",
            "rollNo": "22475A0319",
            "parentNo": 9000395150,
            "studentNo": 7569809266,
            "imageUrl": ""
        },
        {
            "name": "BANDLAMUDI NAGA RAJU",
            "rollNo": "22475A0321",
            "parentNo": 9133658411,
            "studentNo": 9133658411,
            "imageUrl": ""
        },
        {
            "name": "BOJJA SYAM BABU",
            "rollNo": "22475A0322",
            "parentNo": 7674036021,
            "studentNo": 6305301563,
            "imageUrl": ""
        },
        {
            "name": "ATHULURI PURNA VENKATA RAMARAO",
            "rollNo": "22475A0323",
            "parentNo": 7780570429,
            "studentNo": 8341676791,
            "imageUrl": ""
        },
        {
            "name": "BATTULA LAKSHMI NARAYANA",
            "rollNo": "22475A0324",
            "parentNo": 9010711610,
            "studentNo": 8688963141,
            "imageUrl": ""
        },
        {
            "name": "GUDIKANDULA ANJANEYULU",
            "rollNo": "22475A0325",
            "parentNo": 9030709484,
            "studentNo": 6300908126,
            "imageUrl": ""
        },
        {
            "name": "AYINAMPUDI KISHORE BABU",
            "rollNo": "22475A0326",
            "parentNo": 9951112919,
            "studentNo": 9951851544,
            "imageUrl": ""
        },
        {
            "name": "KETHABOYINA MAHESH",
            "rollNo": "22475A0327",
            "parentNo": 8074105542,
            "studentNo": 9347954697,
            "imageUrl": ""
        },
        {
            "name": "SHAIK BABULAL",
            "rollNo": "22475A0328",
            "parentNo": 9177026839,
            "studentNo": 9177982914,
            "imageUrl": ""
        },
        {
            "name": "BANDARU VENU GOPAL",
            "rollNo": "22475A0329",
            "parentNo": 9701248449,
            "studentNo": 9704646229,
            "imageUrl": ""
        },
        {
            "name": "YADAVALLI LOKESH",
            "rollNo": "22475A0330",
            "parentNo": 9676528798,
            "studentNo": 9963708706,
            "imageUrl": ""
        },
        {
            "name": "CHOUDAM VENKATESH",
            "rollNo": "22475A0331",
            "parentNo": 9849831499,
            "studentNo": 6300987181,
            "imageUrl": ""
        },
        {
            "name": "CHATTI MURALI KRISHNA",
            "rollNo": "22475A0332",
            "parentNo": 7702136780,
            "studentNo": 8919488398,
            "imageUrl": ""
        },
        {
            "name": "DARAM PRUDHVI KRISHNA",
            "rollNo": "22475A0333",
            "parentNo": 6301415295,
            "studentNo": 7997547362,
            "imageUrl": ""
        },
        {
            "name": "SHAIK NAGUR BASHA",
            "rollNo": "22475A0334",
            "parentNo": 7702734171,
            "studentNo": 9014239160,
            "imageUrl": ""
        },
        {
            "name": "GOLLAPUDI SARATH KUMAR",
            "rollNo": "22475A0335",
            "parentNo": 8897408767,
            "studentNo": 7702326624,
            "imageUrl": ""
        },
        {
            "name": "ADAKA VINOD",
            "rollNo": "22475A0336",
            "parentNo": 8897412566,
            "studentNo": 7893252246,
            "imageUrl": ""
        },
        {
            "name": "JANNI ARUN",
            "rollNo": "22475A0337",
            "parentNo": 7207365237,
            "studentNo": 9492957155,
            "imageUrl": ""
        },
        {
            "name": "NOWPADA MEGHANADH",
            "rollNo": "22475A0338",
            "parentNo": 7569336804,
            "studentNo": 7816059781,
            "imageUrl": ""
        },
        {
            "name": "BALAGA YUGANDHAR",
            "rollNo": "22475A0339",
            "parentNo": 8688469428,
            "studentNo": 6305771189,
            "imageUrl": ""
        },
        {
            "name": "NEYYELA KUMAR BEHERA",
            "rollNo": "22475A0340",
            "parentNo": 9347594571,
            "studentNo": 9948328949,
            "imageUrl": ""
        },
        {
            "name": "KUNITI PAVAN KUMAR",
            "rollNo": "22475A0341",
            "parentNo": 9182840979,
            "studentNo": 9441160531,
            "imageUrl": ""
        },
        {
            "name": "BHUKYA DIWAKAR NAIK",
            "rollNo": "22475A0342",
            "parentNo": 9000559526,
            "studentNo": 9010988148,
            "imageUrl": ""
        },
        {
            "name": "VOONA NARENDRA",
            "rollNo": "22475A0343",
            "parentNo": 9705711310,
            "studentNo": 6302683982,
            "imageUrl": ""
        },
        {
            "name": "CHANDARLAPATI GANESH",
            "rollNo": "22475A0344",
            "parentNo": 9121396834,
            "studentNo": 8374301701,
            "imageUrl": ""
        },
        {
            "name": "BALAGA MOHAN",
            "rollNo": "22475A0345",
            "parentNo": 7337218141,
            "studentNo": 9346371889,
            "imageUrl": ""
        },
        {
            "name": "BOMMALI MAHESH",
            "rollNo": "22475A0346",
            "parentNo": 8008424028,
            "studentNo": 7794853583,
            "imageUrl": ""
        },
        {
            "name": "DUDDETI NAGA SAI",
            "rollNo": "22475A0347",
            "parentNo": 9849161592,
            "studentNo": 7093262266,
            "imageUrl": ""
        },
        {
            "name": "BASWA DILLESWARA RAO",
            "rollNo": "22475A0348",
            "parentNo": 9618706932,
            "studentNo": 9502058813,
            "imageUrl": ""
        },
        {
            "name": "KORRAPATI MOHAN KRISHNA",
            "rollNo": "22475A0349",
            "parentNo": 9603858622,
            "studentNo": 8688262491,
            "imageUrl": ""
        },
        {
            "name": "NAKKANABOINA NAGA SRIDHAR",
            "rollNo": "22475A0350",
            "parentNo": 9346535340,
            "studentNo": 9505105788,
            "imageUrl": ""
        },
        {
            "name": "GONDU GANESH PAVAN",
            "rollNo": "22475A0351",
            "parentNo": 6301032150,
            "studentNo": 9989324493,
            "imageUrl": ""
        },
        {
            "name": "LINGA SRINIVAS",
            "rollNo": "22475A0352",
            "parentNo": 9294456853,
            "studentNo": 9398223568,
            "imageUrl": ""
        }
    ];

    
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
    