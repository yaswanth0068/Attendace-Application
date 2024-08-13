document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    let StudentsInfoList = [

    {
        "name": "PARANDHAMA SREE KALYANI",
        "rollNo": "20471A0439",
        "parentNo": 8919261492,
        "studentNo": 9381263996
      },
      {
        "name": "ADAKA SRIKANTH",
        "rollNo": "21471A0401",
        "parentNo": 8897412566,
        "studentNo": 7893950348
      },
      {
        "name": "BALLIPALLI MALLESWARI",
        "rollNo": "21471A0402",
        "parentNo": 9014435861,
        "studentNo": 7993970844
      },
      {
        "name": "BANDI SRINIVAS REDDY",
        "rollNo": "21471A0403",
        "parentNo": 9885254811,
        "studentNo": 8790082859
      },
      {
        "name": "DHANYASI MUKESH",
        "rollNo": "21471A0406",
        "parentNo": 9703314037,
        "studentNo": 9121335954
      },
      {
        "name": "DUDDUKURI VACHALYA",
        "rollNo": "21471A0407",
        "parentNo": 7993463382,
        "studentNo": 9966758634
      },
      {
        "name": "DUDEKULA MASTHAN NAYAB",
        "rollNo": "21471A0408",
        "parentNo": 8247665597,
        "studentNo": 6300801867
      },
      {
        "name": "GARIKAPATI BHANU SATYANARAYANA",
        "rollNo": "21471A0409",
        "parentNo": 9553295351,
        "studentNo": 6302439206
      },
      {
        "name": "GORANTLA SRAVANI",
        "rollNo": "21471A0410",
        "parentNo": 8790542390,
        "studentNo": 8790542390
      },
      {
        "name": "JANGA REMO",
        "rollNo": "21471A0412",
        "parentNo": 9849690930,
        "studentNo": 8309535766
      },
      {
        "name": "JUPALLI VENKATA KALYAN",
        "rollNo": "21471A0413",
        "parentNo": 9346034769,
        "studentNo": 9676162214
      },
      {
        "name": "KAKARLA AMRUTHA",
        "rollNo": "21471A0414",
        "parentNo": 9550087389,
        "studentNo": 7207442307
      },
      {
        "name": "KALLAM DHANUNJAYA REDDY",
        "rollNo": "21471A0415",
        "parentNo": 8297920403,
        "studentNo": 8297920403
      },
      {
        "name": "KASTALA KARTHIK",
        "rollNo": "21471A0416",
        "parentNo": 9912402655,
        "studentNo": 8247599196
      },
      {
        "name": "KAVURI AVINASH",
        "rollNo": "21471A0417",
        "parentNo": 9573746620,
        "studentNo": 6281898341
      },
      {
        "name": "KOTA TEJASWINI",
        "rollNo": "21471A0418",
        "parentNo": 9553820489,
        "studentNo": 8247024590
      },
      {
        "name": "KOTHURI CHARAN SRI VENKATESWARLU",
        "rollNo": "21471A0419",
        "parentNo": 9246732085,
        "studentNo": 9290076622
      },
      {
        "name": "LANKA KUSUMA",
        "rollNo": "21471A0420",
        "parentNo": 9948566554,
        "studentNo": 6303766995
      },
      {
        "name": "MAKKENA LAKSHMI PAVITHRA",
        "rollNo": "21471A0421",
        "parentNo": 9492684977,
        "studentNo": 8500751947
      },
      {
        "name": "MANDALANENI L SAI VENKATA NAGA SANTHOSHI",
        "rollNo": "21471A0422",
        "parentNo": 7989368385,
        "studentNo": 7989349079
      },
      {
        "name": "MANDAPALLI JYOTHI",
        "rollNo": "21471A0423",
        "parentNo": 7730919317,
        "studentNo": 7730919317
      },
      {
        "name": "MODADUGU VENKATA RAMA SURESH",
        "rollNo": "21471A0424",
        "parentNo": 9848843862,
        "studentNo": 6305257973
      },
      {
        "name": "MODUGULA YAMUNA",
        "rollNo": "21471A0425",
        "parentNo": 9908701062,
        "studentNo": 9059251032
      },
      {
        "name": "MUDDINEDI YOGA AMULYA",
        "rollNo": "21471A0426",
        "parentNo": 7396150888,
        "studentNo": 7396150888
      },
      {
        "name": "NARASIMHA REDDY KANALA",
        "rollNo": "21471A0427",
        "parentNo": 9948373249,
        "studentNo": 6302591403
      },
      {
        "name": "NAZMA SHAIK",
        "rollNo": "21471A0428",
        "parentNo": 9885625241,
        "studentNo": 9885625241
      },
      {
        "name": "OGIRALA SWATHI",
        "rollNo": "21471A0429",
        "parentNo": 9493241394,
        "studentNo": 8125947095
      },
      {
        "name": "PAPASANI RAGHAVENDRA",
        "rollNo": "21471A0431",
        "parentNo": 7093263424,
        "studentNo": 9573769324
      },
      {
        "name": "PARELLA ROHITH",
        "rollNo": "21471A0432",
        "parentNo": 9393282899,
        "studentNo": 8978722450
      },
      {
        "name": "PATHAN NAGUR BASHA",
        "rollNo": "21471A0433",
        "parentNo": 9966418839,
        "studentNo": 9676311804
      },
      {
        "name": "PEDDEETI RAVINDRA BABU",
        "rollNo": "21471A0434",
        "parentNo": 7893766149,
        "studentNo": 9701472566
      },
      {
        "name": "PILLI BHAVANA",
        "rollNo": "21471A0435",
        "parentNo": 8106951174,
        "studentNo": 8106951174
      },
      {
        "name": "POKALA NAGA KRISHNA",
        "rollNo": "21471A0436",
        "parentNo": 7780794965,
        "studentNo": 7075962464
      },
      {
        "name": "POTLURI BHU LAKSHMI",
        "rollNo": "21471A0437",
        "parentNo": 9440772486,
        "studentNo": 9440772486
      },
      {
        "name": "RAVUVARI AJAY KUMAR",
        "rollNo": "21471A0438",
        "parentNo": 9010383097,
        "studentNo": 8374346597
      },
      {
        "name": "SANAMPUDI PAVAN KALYAN",
        "rollNo": "21471A0439",
        "parentNo": 8897614887,
        "studentNo": 7659874887
      },
      {
        "name": "SEETHALAPU DHANUSH",
        "rollNo": "21471A0440",
        "parentNo": 9298102523,
        "studentNo": 9515987037
      },
      {
        "name": "SHAIK ALTHAF RAJ",
        "rollNo": "21471A0441",
        "parentNo": 6281660060,
        "studentNo": 7013166839
      },
      {
        "name": "SHAIK CHINNA SAIDA",
        "rollNo": "21471A0442",
        "parentNo": 8499949515,
        "studentNo": 9849066140
      },
      {
        "name": "SHAIK JUBER",
        "rollNo": "21471A0443",
        "parentNo": 9959420140,
        "studentNo": 9703532024
      },
      {
        "name": "SHAIK KHADAR VALI",
        "rollNo": "21471A0444",
        "parentNo": 9703431206,
        "studentNo": 9704926399
      },
      {
        "name": "SHAIK MANSOOR BASHA",
        "rollNo": "21471A0445",
        "parentNo": 7095252134,
        "studentNo": 7815803036
      },
      {
        "name": "SHAIK MOHIDDIN BASHA",
        "rollNo": "21471A0446",
        "parentNo": 8978055264,
        "studentNo": 9394581715
      },
      {
        "name": "SHALINI PRIYA GOLAMARI",
        "rollNo": "21471A0447",
        "parentNo": 8897176333,
        "studentNo": 7093709819
      },
      {
        "name": "SIDDAVATAM VENKATA BHARGAV",
        "rollNo": "21471A0448",
        "parentNo": 9666040409,
        "studentNo": 7330669051
      },
      {
        "name": "SRIPATHI SRINIVAS",
        "rollNo": "21471A0449",
        "parentNo": 9652864297,
        "studentNo": 7093005174
      },
      {
        "name": "THAMMINENI NEERAJA",
        "rollNo": "21471A0451",
        "parentNo": 9959506866,
        "studentNo": 9959506866
      },
      {
        "name": "THANAMCHINTALA CHIRANJEEVI",
        "rollNo": "21471A0452",
        "parentNo": 9866506476,
        "studentNo": 6302641939
      },
      {
        "name": "THANNEERU GUNESWARI",
        "rollNo": "21471A0453",
        "parentNo": 8096268519,
        "studentNo": 6304227385
      },
      {
        "name": "THIPPABATTINA KARTHIK",
        "rollNo": "21471A0454",
        "parentNo": 9000767574,
        "studentNo": 7288959762
      },
      {
        "name": "THUMMALA PAVANKUMAR REDDY",
        "rollNo": "21471A0455",
        "parentNo": 9701741755,
        "studentNo": 9347029733
      },
      {
        "name": "VALLEM ANKAMMARAO",
        "rollNo": "21471A0456",
        "parentNo": 9502878033,
        "studentNo": 9014862943
      },
      {
        "name": "VIJAYA DURGA BALLAPURI",
        "rollNo": "21471A0457",
        "parentNo": 9966458149,
        "studentNo": 7207458149
      },
      {
        "name": "NAVULURI VIJAYA LAKSHMI",
        "rollNo": "21471A0458",
        "parentNo": 9347379718,
        "studentNo": 7660897527
      },
      {
        "name": "YAKKALA J V LAKSHMI JEESHITHA",
        "rollNo": "21471A0459",
        "parentNo": 9346622512,
        "studentNo": 8374901567
      },
      {
        "name": "YAMARTHI SIVA GOPI",
        "rollNo": "21471A0460",
        "parentNo": 9177829894,
        "studentNo": 7569035169
      },
      {
        "name": "MATTA SAI SANTOSH KUMAR",
        "rollNo": "22475A0401",
        "parentNo": 8555025716,
        "studentNo": 6301749962
      },
      {
        "name": "PALLAPOTHU SAI LAKSHMAN TEJA",
        "rollNo": "22475A0402",
        "parentNo": 9492507352,
        "studentNo": 9492507352
      },
      {
        "name": "GORANTLA BHARGAVA",
        "rollNo": "22475A0403",
        "parentNo": 9848616544,
        "studentNo": 9848616544
      },
      {
        "name": "GORANTLA MADHAVI",
        "rollNo": "22475A0404",
        "parentNo": 9951693389,
        "studentNo": 9912719137
      },
      {
        "name": "PALLE TIRUMALA SIVAN NARAYANA",
        "rollNo": "22475A0405",
        "parentNo": 9391700645,
        "studentNo": 9391700645
      },
      {
        "name": "MAILAVARAPU SRIKANTH",
        "rollNo": "22475A0406",
        "parentNo": 7815947797,
        "studentNo": 7815947797
      },
      {
        "name": "ADONI LAKSHMAN KUMAR",
        "rollNo": "22475A0407",
        "parentNo": 9182408934,
        "studentNo": 9014268282
      },
      {
        "name": "MEDURI YASWITHA",
        "rollNo": "22475A0408",
        "parentNo": 8297753847,
        "studentNo": 9392853945
      },
      {
        "name": "UPPU VARAPRASAD",
        "rollNo": "22475A0409",
        "parentNo": 8074210183,
        "studentNo": 7981674974
      },
      {
        "name": "PASUPULETI MANOHAR",
        "rollNo": "22475A0410",
        "parentNo": 7207574229,
        "studentNo": 6305394945
      },
      {
        "name": "SHAIK TURIMELLA KHAJAFIR",
        "rollNo": "22475A0411",
        "parentNo": 9550405232,
        "studentNo": 9392801955
      },
      {
        "name": "CHENNAKESAVULA VAMSI",
        "rollNo": "22475A0412",
        "parentNo": 9701224501,
        "studentNo": 9701224501
      },
      {
        "name": "GATTU BHUMIKA",
        "rollNo": "22475A0413",
        "parentNo": 8143485080,
        "studentNo": 9515789559
      },
      
    {
      "name": "ADAPALA GOPI",
      "rollNo": "21471A0461",
      "parentNo": 8121715417,
      "studentNo": 7396719020
    },
    {
      "name": "AKKINAPALLI RAMA TULASI",
      "rollNo": "21471A0462",
      "parentNo": 9441502699,
      "studentNo": 8008623419
    },
    {
      "name": "AMANCHI SAI AKHIL TEJ",
      "rollNo": "21471A0463",
      "parentNo": 9849540373,
      "studentNo": 9059198989
    },
    {
      "name": "ANANTHA PRASANNA LAKSHMI",
      "rollNo": "21471A0464",
      "parentNo": 8121714912,
      "studentNo": 6301289053
    },
    {
      "name": "ANUMALASETTY MEGHANA",
      "rollNo": "21471A0465",
      "parentNo": 9866249159,
      "studentNo": 9974070999
    },
    {
      "name": "BANDLA PAVAN KUMAR",
      "rollNo": "21471A0466",
      "parentNo": 9948301359,
      "studentNo": 9948301359
    },
    {
      "name": "NAMINENI JHANSI",
      "rollNo": "21471A0467",
      "parentNo": 8919335768,
      "studentNo": 7842468778
    },
    {
      "name": "CHINTAGUNTLA SPARJAN RAJU",
      "rollNo": "21471A0468",
      "parentNo": 7799447693,
      "studentNo": 8886094775
    },
    {
      "name": "DASARI NAGA GOPI",
      "rollNo": "21471A0469",
      "parentNo": 9133829079,
      "studentNo": 6304346759
    },
    {
      "name": "DHULLIPUDI VENKATA SAI MANIKANTA",
      "rollNo": "21471A0470",
      "parentNo": 8500487188,
      "studentNo": 7793917188
    },
    {
      "name": "ANNAPUREDDY DIVYA",
      "rollNo": "21471A0471",
      "parentNo": 9642490117,
      "studentNo": 9642490117
    },
    {
      "name": "DOGIPARTHI JASWANTH KRISHNA CHAITANYA",
      "rollNo": "21471A0472",
      "parentNo": 9491980423,
      "studentNo": 9491980423
    },
    {
      "name": "GERA ANISH BABU",
      "rollNo": "21471A0473",
      "parentNo": 9642301148,
      "studentNo": 6301253085
    },
    {
      "name": "GONUGUNTLA LAKSHMI MANASA",
      "rollNo": "21471A0474",
      "parentNo": 7702236104,
      "studentNo": 7702236104
    },
    {
      "name": "KAKIRALA MATHEW",
      "rollNo": "21471A0476",
      "parentNo": 9032079716,
      "studentNo": 9032079716
    },
    {
      "name": "KAKUMANU DATTA KANISH",
      "rollNo": "21471A0477",
      "parentNo": 9182298040,
      "studentNo": 9121057810
    },
    {
      "name": "KALLAGUNTA VENKATA REVANTH MANIDEEP",
      "rollNo": "21471A0479",
      "parentNo": 8179548195,
      "studentNo": 8317505704
    },
    {
      "name": "KANAMARLAPUDI VAMSI KRISHNA",
      "rollNo": "21471A0480",
      "parentNo": 9505586193,
      "studentNo": 9381644216
    },
    {
      "name": "KARASANI HARI KRISHNA REDDY",
      "rollNo": "21471A0481",
      "parentNo": 9705634353,
      "studentNo": 6305531214
    },
    {
      "name": "KOLLIPURI SRIHARI",
      "rollNo": "21471A0482",
      "parentNo": 9848041984,
      "studentNo": 9848041984
    },
    {
      "name": "KONDA NARASIMHA NAYUDU",
      "rollNo": "21471A0483",
      "parentNo": 9704095958,
      "studentNo": 9014880427
    },
    {
      "name": "KONGANI BHAGYASRI",
      "rollNo": "21471A0484",
      "parentNo": 9440740621,
      "studentNo": 9440740621
    },
    {
      "name": "KOTHAMASU PRANEETH",
      "rollNo": "21471A0485",
      "parentNo": 9849255147,
      "studentNo": 9573771427
    },
    {
      "name": "KURAPATI VENKATA PRAVEEN RAJU",
      "rollNo": "21471A0486",
      "parentNo": 8555037663,
      "studentNo": 8886187724
    },
    {
      "name": "LAKKU VANAJA",
      "rollNo": "21471A0487",
      "parentNo": 9959872179,
      "studentNo": 8328342527
    },
    {
      "name": "MADDIGUNTLA DURGA PRASAD",
      "rollNo": "21471A0489",
      "parentNo": 9951292815,
      "studentNo": 6301006700
    },
    {
      "name": "MAHANKALI SAMBASIVA RAO",
      "rollNo": "21471A0490",
      "parentNo": 9959422685,
      "studentNo": 9381384575
    },
    {
      "name": "MALLELA NAVEEN",
      "rollNo": "21471A0491",
      "parentNo": 9949024815,
      "studentNo": 6309598755
    },
    {
      "name": "MANDRU LEELA NAGAPAVANI",
      "rollNo": "21471A0492",
      "parentNo": 9010440718,
      "studentNo": 6304748112
    },
    {
      "name": "MOGAL ABDUL BASHA",
      "rollNo": "21471A0493",
      "parentNo": 9959829207,
      "studentNo": 9392740976
    },
    {
      "name": "NAKARAKANTI MANOJ KUMAR",
      "rollNo": "21471A0494",
      "parentNo": 6301926063,
      "studentNo": 6305414592
    },
    {
      "name": "NALABOLU MANASWINI",
      "rollNo": "21471A0495",
      "parentNo": 9885976156,
      "studentNo": 9885976156
    },
    {
      "name": "NEMALIKONDA GANAVARDHAN",
      "rollNo": "21471A0497",
      "parentNo": 8247749171,
      "studentNo": 9392124465
    },
    {
      "name": "PALETI PREM KUMAR",
      "rollNo": "21471A0498",
      "parentNo": 9063114946,
      "studentNo": 9701693685
    },
    {
      "name": "PASUPULETI VENKATA RAO",
      "rollNo": "21471A04A0",
      "parentNo": 8185961734,
      "studentNo": 7569487973
    },
    {
      "name": "PATHAN NATHIK KHAN",
      "rollNo": "21471A04A1",
      "parentNo": 9985382683,
      "studentNo": 9398623565
    },
    {
      "name": "PATNAIKUNI SAI DEEPAK",
      "rollNo": "21471A04A2",
      "parentNo": 9441089537,
      "studentNo": 9963847467
    },
    {
      "name": "PINNIKA VENKATARAJU",
      "rollNo": "21471A04A3",
      "parentNo": 9542173709,
      "studentNo": 8125927404
    },
    {
      "name": "POTHURI MADHAVI",
      "rollNo": "21471A04A4",
      "parentNo": 9550495719,
      "studentNo": 6305597338
    },
    {
      "name": "POTRU VENKATA SAI",
      "rollNo": "21471A04A5",
      "parentNo": 7660809172,
      "studentNo": 7075438019
    },
    {
      "name": "RAMISETTY NAGA AJAY KUMAR",
      "rollNo": "21471A04A6",
      "parentNo": 8978394443,
      "studentNo": 9392456538
    },
    {
      "name": "SANDEEP JONNALAGADDA",
      "rollNo": "21471A04A7",
      "parentNo": 8367009498,
      "studentNo": 7396139513
    },
    {
      "name": "SHAIK ABDUL HAMEED",
      "rollNo": "21471A04A8",
      "parentNo": 9502638398,
      "studentNo": 8247809419
    },
    {
      "name": "SHAIK ARIFA BEGUM",
      "rollNo": "21471A04A9",
      "parentNo": 7997885865,
      "studentNo": 7093066708
    },
    {
      "name": "SHAIK SHABEENA",
      "rollNo": "21471A04B0",
      "parentNo": 9848677958,
      "studentNo": 7816001861
    },
    {
      "name": "SIDHU ROHITH VENKATA BRAHMA SAI",
      "rollNo": "21471A04B1",
      "parentNo": 7013341330,
      "studentNo": 7013341330
    },
    {
      "name": "SYED MALIK SAMEER",
      "rollNo": "21471A04B2",
      "parentNo": 9533371678,
      "studentNo": 8328044992
    },
    {
      "name": "THATI CHALAPATHI",
      "rollNo": "21471A04B3",
      "parentNo": 9014737062,
      "studentNo": 6304056284
    },
    {
      "name": "THOTA SAI PRASANNA",
      "rollNo": "21471A04B4",
      "parentNo": 9948178334,
      "studentNo": 8317642913
    },
    {
      "name": "ULLI GOPI",
      "rollNo": "21471A04B5",
      "parentNo": 9010461741,
      "studentNo": 6301829215
    },
    {
      "name": "VANJA SAATHWICK",
      "rollNo": "21471A04B6",
      "parentNo": 9866458034,
      "studentNo": 7702446232
    },
    {
      "name": "VEMPARALA NAGASIVENDRA",
      "rollNo": "21471A04B7",
      "parentNo": 8978573357,
      "studentNo": 9030637270
    },
    {
      "name": "VENKATA VAMSI BALAM",
      "rollNo": "21471A04B8",
      "parentNo": 9912589509,
      "studentNo": 9966873788
    },
    {
      "name": "VUTUKURI LAKSHMI JAHNAVI SEETHA",
      "rollNo": "21471A04B9",
      "parentNo": 9985333409,
      "studentNo": 9885857391
    },
    {
      "name": "YADLAPALLI SONY",
      "rollNo": "21471A04C0",
      "parentNo": 8317567985,
      "studentNo": 8317594025
    },
    {
      "name": "NEELI ANU",
      "rollNo": "22475A0414",
      "parentNo": 8498989411,
      "studentNo": 8498989411
    },
    {
      "name": "CHINTA LOKESH",
      "rollNo": "22475A0415",
      "parentNo": 8074256836,
      "studentNo": 9959557600
    },
    {
      "name": "BODDU SRIKANYA",
      "rollNo": "22475A0416",
      "parentNo": 9966264552,
      "studentNo": 8497975596
    },
    {
      "name": "PRAGADA HIMA KOTI VIGNESH",
      "rollNo": "22475A0417",
      "parentNo": 9290198592,
      "studentNo": 9014367442
    },
    {
      "name": "ANNAVARAPU HARIKA",
      "rollNo": "22475A0418",
      "parentNo": 9390219198,
      "studentNo": 8523865797
    },
    {
      "name": "TUMMALAPALLI SAITEJA",
      "rollNo": "22475A0419",
      "parentNo": 9704816500,
      "studentNo": 9701343598
    },
    {
      "name": "KONDAVEETI YEDUKONDALA RAO",
      "rollNo": "22475A0420",
      "parentNo": 7780475115,
      "studentNo": 8074535186
    },
    {
      "name": "INAMPUDI SRUTHI",
      "rollNo": "22475A0421",
      "parentNo": 9347940814,
      "studentNo": 9347940814
    },
    {
      "name": "VADAPALLI RAMYA",
      "rollNo": "22475A0422",
      "parentNo": 9959459741,
      "studentNo": 9959459741
    },
    {
      "name": "PEDDAKOTA BALAKRISHNA",
      "rollNo": "22475A0423",
      "parentNo": 9440444074,
      "studentNo": 6305272650
    },
    {
      "name": "PALAKA KIRAN",
      "rollNo": "22475A0424",
      "parentNo": 6303395843,
      "studentNo": 6303395843
    },
    {
      "name": "BANDARU TULASI",
      "rollNo": "22475A0425",
      "parentNo": 9573635300,
      "studentNo": 9573635300
    },
    {
      "name": "KATTAMURI MALLI KHARJUNA RAO",
      "rollNo": "22475A0426",
      "parentNo": 9154667797,
      "studentNo": 9154667797
    },
    {
      "name": "YEDLURI KIRAN KUMAR",
      "rollNo": "22475A0427",
      "parentNo": 7288828294,
      "studentNo": 9398005408
    },
    {
      "name": "KANUGULA VENKATESH",
      "rollNo": "22475A0428",
      "parentNo": 9573354895,
      "studentNo": 9573354895
    },
    {
      "name": "CHINTHAREDDY SRINIVAS REDDY",
      "rollNo": "22475A0429",
      "parentNo": 8121881920,
      "studentNo": 8121881920
    },

    {
        "name": "AARUMALLA SREEMANNARAYANA",
        "rollNo": "21471A04C1",
        "parentNo": 7483265134,
        "studentNo": 7483265134
      },
      {
        "name": "ATCHI TARAKA GANESH",
        "rollNo": "21471A04C2",
        "parentNo": 9346513175,
        "studentNo": 9182659704
      },
      {
        "name": "BALUASA SAI NANDU",
        "rollNo": "21471A04C3",
        "parentNo": 9581093350,
        "studentNo": 8340097840
      },
      {
        "name": "BATTULA VENKATA NAGARAJU",
        "rollNo": "21471A04C4",
        "parentNo": 9959653571,
        "studentNo": 7780200125
      },
      {
        "name": "NADIPUDI BHUMIKASAI",
        "rollNo": "21471A04C5",
        "parentNo": 7095404351,
        "studentNo": 7095404351
      },
      {
        "name": "CHAPALA RAJESH",
        "rollNo": "21471A04C6",
        "parentNo": 9492901187,
        "studentNo": 6302894754
      },
      {
        "name": "CHENNAMSETTY VENKAIAH",
        "rollNo": "21471A04C7",
        "parentNo": 7981545943,
        "studentNo": 9515549708
      },
      {
        "name": "CHERUKUPALLI SIVA VEERA MOHANA RAO",
        "rollNo": "21471A04C8",
        "parentNo": 9676565550,
        "studentNo": 9849102759
      },
      {
        "name": "DAMA JASWANTH",
        "rollNo": "21471A04C9",
        "parentNo": 8498845375,
        "studentNo": 7093854648
      },
      {
        "name": "DASARI SREENATH",
        "rollNo": "21471A04D0",
        "parentNo": 9492863390,
        "studentNo": 8555897315
      },
      {
        "name": "GUNJI LAKSHMIDURGA",
        "rollNo": "21471A04D1",
        "parentNo": 9177844032,
        "studentNo": 9676816354
      },
      {
        "name": "IDAMAKANTI RADHIKA",
        "rollNo": "21471A04D2",
        "parentNo": 8019733539,
        "studentNo": 6302955434
      },
      {
        "name": "KALLURI JYOTHI",
        "rollNo": "21471A04D3",
        "parentNo": 7569731484,
        "studentNo": 9392559315
      },
      {
        "name": "KOLLURI KARTHIK",
        "rollNo": "21471A04D4",
        "parentNo": 9347919617,
        "studentNo": 6281678989
      },
      {
        "name": "KATHARI PHANI KUMAR",
        "rollNo": "21471A04D6",
        "parentNo": 8179467969,
        "studentNo": 8074117309
      },
      {
        "name": "KOLISETTY LAVANYA",
        "rollNo": "21471A04D7",
        "parentNo": 8897875898,
        "studentNo": 8897875898
      },
      {
        "name": "KOLISETTY VENKATA VIJAYA LAKSHMI",
        "rollNo": "21471A04D8",
        "parentNo": 9885597138,
        "studentNo": 6302492096
      },
      {
        "name": "KONDAVEETI SAMBASIVA RAO",
        "rollNo": "21471A04D9",
        "parentNo": 9392523198,
        "studentNo": 7396450556
      },
      {
        "name": "KOPPULA SRI KAVYA",
        "rollNo": "21471A04E0",
        "parentNo": 9000426969,
        "studentNo": 9963139300
      },
      {
        "name": "KOTARU SAI TANUJA",
        "rollNo": "21471A04E1",
        "parentNo": 9491794050,
        "studentNo": 7095847950
      },
      {
        "name": "KOTTE MANOJ KUMAR",
        "rollNo": "21471A04E2",
        "parentNo": 9491583988,
        "studentNo": 7330695487
      },
      {
        "name": "KUNKU ANUSHA",
        "rollNo": "21471A04E3",
        "parentNo": 9010060674,
        "studentNo": 7207406542
      },
      {
        "name": "MADASU RAJAKUMARI",
        "rollNo": "21471A04E4",
        "parentNo": 9676436190,
        "studentNo": 7032983813
      },
      {
        "name": "MAKINENI CHARAN SAI",
        "rollNo": "21471A04E5",
        "parentNo": 9182390386,
        "studentNo": 9182390386
      },
      {
        "name": "MEESALA UDAY KARTHIK",
        "rollNo": "21471A04E6",
        "parentNo": 7093788577,
        "studentNo": 7093788577
      },
      {
        "name": "NAMBURU VENKATA SAI BHARATH",
        "rollNo": "21471A04E7",
        "parentNo": 7989078119,
        "studentNo": 7989078119
      },
      {
        "name": "NELLURI PAVANI",
        "rollNo": "21471A04E8",
        "parentNo": 7981735759,
        "studentNo": 7981735759
      },
      {
        "name": "NOOKATHOTI RAMANAIAH",
        "rollNo": "21471A04E9",
        "parentNo": 8985621110,
        "studentNo": 9182143862
      },
      {
        "name": "NUTHALAPATI PRASANGI",
        "rollNo": "21471A04F0",
        "parentNo": 9848503687,
        "studentNo": 8919160461
      },
      {
        "name": "PAGIDIPALLI JOSAPH",
        "rollNo": "21471A04F1",
        "parentNo": 9948850368,
        "studentNo": 7036133471
      },
      {
        "name": "PATHAN MANSOOR KHAN",
        "rollNo": "21471A04F2",
        "parentNo": 9440735836,
        "studentNo": 9440751361
      },
      {
        "name": "PAVULURI NOVAHU",
        "rollNo": "21471A04F3",
        "parentNo": 9908657998,
        "studentNo": 9160914042
      },
      {
        "name": "PEDAVALLI KALYAN",
        "rollNo": "21471A04F4",
        "parentNo": 9121026205,
        "studentNo": 7816016205
      },
      {
        "name": "PINAPATI TEJA KUMAR",
        "rollNo": "21471A04F5",
        "parentNo": 9398932368,
        "studentNo": 7997426742
      },
      {
        "name": "SANTHOSH KUMAR NUTHALAPATI",
        "rollNo": "21471A04F6",
        "parentNo": 9346185799,
        "studentNo": 6305976186
      },
      {
        "name": "SHAIK AKHIB",
        "rollNo": "21471A04F7",
        "parentNo": 9542641616,
        "studentNo": 8639315113
      },
      {
        "name": "SHAIK ATTAR ALLABAKSHU",
        "rollNo": "21471A04F8",
        "parentNo": 9618132070,
        "studentNo": 7032046057
      },
      {
        "name": "SHAIK HAFIZA KARIMUN",
        "rollNo": "21471A04F9",
        "parentNo": 9912589631,
        "studentNo": 9949693766
      },
      {
        "name": "SHAIK HAZARI IRSHAD",
        "rollNo": "21471A04G0",
        "parentNo": 9951980218,
        "studentNo": 9390576272
      },
      {
        "name": "SHAIK JAHEER UDDIN",
        "rollNo": "21471A04G1",
        "parentNo": 8125903047,
        "studentNo": 7731924519
      },
      {
        "name": "SHAIK LIYAZ ESWAR",
        "rollNo": "21471A04G2",
        "parentNo": 8142819891,
        "studentNo": 8374270566
      },
      {
        "name": "SHAIK NAGUR MEERA",
        "rollNo": "21471A04G3",
        "parentNo": 9963053470,
        "studentNo": 8639512936
      },
      {
        "name": "SHAIK PODILE SHAREEF",
        "rollNo": "21471A04G4",
        "parentNo": 9908586870,
        "studentNo": 9703431206
      },
      {
        "name": "SHAIK RAHAMATHUNNISA",
        "rollNo": "21471A04G5",
        "parentNo": 9550015714,
        "studentNo": 9550015714
      },
      {
        "name": "SIDDU JAYANTH OMKAR",
        "rollNo": "21471A04G6",
        "parentNo": 8074937901,
        "studentNo": 9963279587
      },
      {
        "name": "SRIRAM YOGESWARA RAO",
        "rollNo": "21471A04G7",
        "parentNo": 9642478860,
        "studentNo": 7569197155
      },
      {
        "name": "THOTA HARSHITHA",
        "rollNo": "21471A04G8",
        "parentNo": 8977450501,
        "studentNo": 6305160065
      },
      {
        "name": "TULABANDULA RAVI TEJA",
        "rollNo": "21471A04G9",
        "parentNo": 9392171345,
        "studentNo": 9398307604
      },
      {
        "name": "VARIKUTI JOHNSON",
        "rollNo": "21471A04H0",
        "parentNo": 9705520700,
        "studentNo": 7989075692
      },
      {
        "name": "VEERA BRAHMAM SEETHA",
        "rollNo": "21471A04H1",
        "parentNo": 9912168399,
        "studentNo": 9347703902
      },
      {
        "name": "VELCHURI PRAVALLIKA",
        "rollNo": "21471A04H2",
        "parentNo": 6305727027,
        "studentNo": 9550247676
      },
      {
        "name": "VELLANKI SIVA SAI SURYA KUMAR",
        "rollNo": "21471A04H3",
        "parentNo": 9618114731,
        "studentNo": 9618114731
      },
      {
        "name": "VEMAVARAPU HEMANTH KUMAR",
        "rollNo": "21471A04H4",
        "parentNo": 8096011686,
        "studentNo": 6302792167
      },
      {
        "name": "YADAVALLI ANUSHA",
        "rollNo": "21471A04H5",
        "parentNo": 6303524037,
        "studentNo": 8297273549
      },
      {
        "name": "YAMARTHI LOHITH",
        "rollNo": "21471A04H6",
        "parentNo": 7396741206,
        "studentNo": 7288975676
      },
      {
        "name": "YANNAM SRI SATYA KARTHIK",
        "rollNo": "21471A04H7",
        "parentNo": 6309948354,
        "studentNo": 7386029986
      },
      {
        "name": "YEKULA NAVEEN",
        "rollNo": "21471A04H9",
        "parentNo": 9949030716,
        "studentNo": 7569185629
      },
      {
        "name": "YEMINENI SIVA KRISHNA",
        "rollNo": "21471A04I0",
        "parentNo": 8897475680,
        "studentNo": 8897475680
      },
      
    {
        "name": "AKUMALLA NAGURBI",
        "rollNo": "21471A04I1",
        "parentNo": 9704821819,
        "studentNo": 8790037821
      },
      {
        "name": "ALAMURI SRAVYA",
        "rollNo": "21471A04I2",
        "parentNo": 9948279919,
        "studentNo": 9948279919
      },
      {
        "name": "ANUMALA SETTY SANTAN KUMAR",
        "rollNo": "21471A04I3",
        "parentNo": 9440719015,
        "studentNo": 9381741675
      },
      {
        "name": "BAVISETTI KOMAL SAI",
        "rollNo": "21471A04I4",
        "parentNo": 9908296605,
        "studentNo": 9133058989
      },
      {
        "name": "BODDUPALLI RAJASREE",
        "rollNo": "21471A04I5",
        "parentNo": 7671012168,
        "studentNo": 9989199327
      },
      {
        "name": "BUCHIRAJU ANIL KUMAR",
        "rollNo": "21471A04I6",
        "parentNo": 9490687808,
        "studentNo": 9666973649
      },
      {
        "name": "EGINATI SIVA KRISHNA",
        "rollNo": "21471A04I7",
        "parentNo": 9866206702,
        "studentNo": 9866206702
      },
      {
        "name": "GALI SAMATHA SHARON",
        "rollNo": "21471A04I8",
        "parentNo": 9885155384,
        "studentNo": 9885155384
      },
      {
        "name": "GOPU CHAITANYA PRIYA",
        "rollNo": "21471A04I9",
        "parentNo": 7993881783,
        "studentNo": 6305557101
      },
      {
        "name": "GUDURI SUNNY",
        "rollNo": "21471A04J0",
        "parentNo": 8247492290,
        "studentNo": 9347604554
      },
      {
        "name": "GUNDA SANJAY",
        "rollNo": "21471A04J1",
        "parentNo": 9966228196,
        "studentNo": 9966228196
      },
      {
        "name": "GUNTI VENKATA SAI",
        "rollNo": "21471A04J2",
        "parentNo": 9618823347,
        "studentNo": 9014541597
      },
      {
        "name": "INJAMURI SOWMITH",
        "rollNo": "21471A04J3",
        "parentNo": 8309895052,
        "studentNo": 9154938322
      },
      {
        "name": "JANAPATI PAVAN KUMAR",
        "rollNo": "21471A04J4",
        "parentNo": 9949105469,
        "studentNo": 9949105469
      },
      {
        "name": "JANJANAM RAGHAVENDRA",
        "rollNo": "21471A04J5",
        "parentNo": 9985288206,
        "studentNo": 8374279225
      },
      {
        "name": "KORNEPATI MUKESH",
        "rollNo": "21471A04J6",
        "parentNo": 9989913007,
        "studentNo": 9989913007
      },
      {
        "name": "SANAM KRISHNA VENI",
        "rollNo": "21471A04J7",
        "parentNo": 9849919400,
        "studentNo": 7416152831
      },
      {
        "name": "KRUPANJALI JALLI",
        "rollNo": "21471A04J8",
        "parentNo": 9704556445,
        "studentNo": 7013475252
      },
      {
        "name": "LAKUM NANI",
        "rollNo": "21471A04J9",
        "parentNo": 9848684014,
        "studentNo": 9347771700
      },
      {
        "name": "MACHHA GOPAIAH",
        "rollNo": "21471A04K0",
        "parentNo": 9701388796,
        "studentNo": 7981747002
      },
      {
        "name": "NEELAM MADHUSUDHAN RAO",
        "rollNo": "21471A04K1",
        "parentNo": 6300735294,
        "studentNo": 9704815404
      },
      {
        "name": "MEGHA NAGA SAI NITHIN GADDAM",
        "rollNo": "21471A04K2",
        "parentNo": 7981429720,
        "studentNo": 8499974022
      },
      {
        "name": "MARELLA PAVAN KUMAR",
        "rollNo": "21471A04K3",
        "parentNo": 9059717431,
        "studentNo": 8374809365
      },
      {
        "name": "GANNAVARAM NEELIMA",
        "rollNo": "21471A04K4",
        "parentNo": 9963849031,
        "studentNo": 6309626051
      },
      {
        "name": "PALAVAI AHALYA",
        "rollNo": "21471A04K5",
        "parentNo": 9951127825,
        "studentNo": 9951127825
      },
      {
        "name": "PALLAPU SUBBARAO",
        "rollNo": "21471A04K6",
        "parentNo": 9666085884,
        "studentNo": 7993408584
      },
      {
        "name": "PARELLA AMALA",
        "rollNo": "21471A04K7",
        "parentNo": 9951492431,
        "studentNo": 9182674490
      },
      {
        "name": "PARELLA DURGA PANCHAKSHARI",
        "rollNo": "21471A04K8",
        "parentNo": 9951092714,
        "studentNo": 9182017003
      },
      {
        "name": "PATHAN DILDAR",
        "rollNo": "21471A04K9",
        "parentNo": 9640405390,
        "studentNo": 9346536803
      },
      {
        "name": "PAVULURI ASWINI",
        "rollNo": "21471A04L0",
        "parentNo": 7382973845,
        "studentNo": 6305723369
      },
      {
        "name": "PAYYAVULA DURGA PRASAD",
        "rollNo": "21471A04L1",
        "parentNo": 9989171282,
        "studentNo": 9989171282
      },
      {
        "name": "POTHARLANKA JAYA VYSHNAVI",
        "rollNo": "21471A04L2",
        "parentNo": 9177266395,
        "studentNo": 9177266395
      },
      {
        "name": "RASAPUTRA BALAJI SINGH",
        "rollNo": "21471A04L4",
        "parentNo": 9502133018,
        "studentNo": 9347607480
      },
      {
        "name": "DUDEKULA SEKSHAVALI",
        "rollNo": "21471A04L5",
        "parentNo": 9966335372,
        "studentNo": 8106097852
      },
      {
        "name": "SHAIK ABDUL SALAM",
        "rollNo": "21471A04L6",
        "parentNo": 9440283580,
        "studentNo": 9440283580
      },
      {
        "name": "SHAIK MAHABBI",
        "rollNo": "21471A04L7",
        "parentNo": 8143009557,
        "studentNo": 8143009557
      },
      {
        "name": "SHAIK SHAHEED",
        "rollNo": "21471A04L8",
        "parentNo": 9177993341,
        "studentNo": 7702680890
      },
      {
        "name": "SIRIGUDI KURMA RAO",
        "rollNo": "21471A04L9",
        "parentNo": 9121182271,
        "studentNo": 7093686520
      },
      {
        "name": "VADLAMANI SAI",
        "rollNo": "21471A04M0",
        "parentNo": 9949260983,
        "studentNo": 9391616006
      },
      {
        "name": "YALAMANDA SHAIK MAHABOOBI",
        "rollNo": "21471A04M1",
        "parentNo": 9989948232,
        "studentNo": 9966786741
      },
      {
        "name": "YENUMULA NAVYASRI",
        "rollNo": "21471A04M2",
        "parentNo": 9381376449,
        "studentNo": 7569008191
      },
      {
        "name": "MANUKONDA BRAHMAREDDY",
        "rollNo": "21471A04M3",
        "parentNo": 9989152495,
        "studentNo": 9392812774
      },
      {
        "name": "VEERAVALLI RUDRA AJAY BABU",
        "rollNo": "21471A04M4",
        "parentNo": 9618652692,
        "studentNo": 7675905487
      },
      {
        "name": "BHUKYA BHAVANI VARA PRASAD NAICK",
        "rollNo": "21471A04M5",
        "parentNo": 9703728771,
        "studentNo": 9390228774
      },
      {
        "name": "NAGISETTI BRAHMA TEJA",
        "rollNo": "21471A04M6",
        "parentNo": 7671062799,
        "studentNo": 8106189848
      },
      {
        "name": "TIPPIREDDY RAJASEKHARAREDDY",
        "rollNo": "21471A04M7",
        "parentNo": 7013911634,
        "studentNo": 9640803915
      },
      {
        "name": "DEVARAPALLI LAVANYA",
        "rollNo": "21471A04M9",
        "parentNo": 9603851272,
        "studentNo": 7661812135
      },
      {
        "name": "SHAIK JAKEER",
        "rollNo": "21471A04N0",
        "parentNo": 9949775982,
        "studentNo": 9347368547
      },
      {
        "name": "SHAIK SAPA MOULALI",
        "rollNo": "21471A04N2",
        "parentNo": 9618478587,
        "studentNo": 7013272774
      },
      {
        "name": "MALISETTI LAKSHMAN",
        "rollNo": "21471A04N3",
        "parentNo": 9959079901,
        "studentNo": 7799899066
      },
      {
        "name": "RAMISETTY NARASIMHA RAO",
        "rollNo": "21471A04N4",
        "parentNo": 9949657198,
        "studentNo": 8247563089
      },
      {
        "name": "NANABALA GOPI",
        "rollNo": "21471A04N5",
        "parentNo": 9866296260,
        "studentNo": 7013335928
      },
      {
        "name": "DWARASILA VENKATA SAI KIRAN REDDY",
        "rollNo": "21471A04N6",
        "parentNo": 9701050645,
        "studentNo": 6305001895
      },
      {
        "name": "SIDDIREDDY VEERA BHARATH REDDY",
        "rollNo": "21471A04N7",
        "parentNo": 9951488658,
        "studentNo": 7842453925
      },
      {
        "name": "KONDAMEEDA ASHOK",
        "rollNo": "21471A04N9",
        "parentNo": 7893657809,
        "studentNo": 7671913184
      },
      {
        "name": "CHINKA CHANDRA SEKHARA VARA PRASAD",
        "rollNo": "21471A04O0",
        "parentNo": 7981578918,
        "studentNo": 8328684798
      },
      {
        "name": "SRIPATHI KOTESWARA RAO",
        "rollNo": "21471A04O1",
        "parentNo": 6302906388,
        "studentNo": 6301111490
      },
      {
        "name": "GADE NAGA AKHILA",
        "rollNo": "21471A04O2",
        "parentNo": 9908723230,
        "studentNo": 8247393495
      },
      {
        "name": "ADAPALA LOKESH",
        "rollNo": "21471A04O3",
        "parentNo": 9959709393,
        "studentNo": 7997920881
      },
      {
        "name": "KAMANI VENKATA SIVA KARTHIK MANI",
        "rollNo": "21471A04O4",
        "parentNo": 6300323819,
        "studentNo": 6301892900
      },
      {
        "name": "CHETTU SRINIVASA RAO",
        "rollNo": "21471A04O5",
        "parentNo": 7893878995,
        "studentNo": 7893878995
      },
      {
        "name": "THIMMISETTY CHIRANJEEVI",
        "rollNo": "21471A04O7",
        "parentNo": 7569207374,
        "studentNo": 7569207374
      },
      {
        "name": "GALANKI AKHIL KUMAR",
        "rollNo": "21471A04O8",
        "parentNo": 9494422632,
        "studentNo": 6304812500
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
    