document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    let StudentsInfoList = [
        {
          "name": "BODDEBOINA VISHNU SAI",
          "rollNo": "22471A0401",
          "parentNo": 9502953854,
          "studentNo": 7207507203,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267123/ECE22Batch/ECE22BatchAsection/tvzcx6bgualqsvrtowso.jpg"
        },
        {
          "name": "BOJJA SURESH",
          "rollNo": "22471A0402",
          "parentNo": 7993717935,
          "studentNo": 7816075515,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267122/ECE22Batch/ECE22BatchAsection/pdzoy7dt30cybgk3zsmz.jpg"
        },
        {
          "name": "BONTHA RAJU",
          "rollNo": "22471A0403",
          "parentNo": 8184993473,
          "studentNo": 9014168022,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267123/ECE22Batch/ECE22BatchAsection/um4rbrsbbaeziremmxti.jpg"
        },
        {
          "name": "CHALAMCHARLA SANDHYA",
          "rollNo": "22471A0404",
          "parentNo": 8790804051,
          "studentNo": 8341884280,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267123/ECE22Batch/ECE22BatchAsection/twx50wz3suzuryga1jrs.jpg"
        },
        {
          "name": "MITTA CHANDU",
          "rollNo": "22471A0405",
          "parentNo": 8179082166,
          "studentNo": 8179082166,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267123/ECE22Batch/ECE22BatchAsection/wdo5ulixpewozzns8jcj.jpg"
        },
        {
          "name": "CHENNAMRAJU SOWMYA RANI",
          "rollNo": "22471A0406",
          "parentNo": 7760275537,
          "studentNo": 9618178858,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267123/ECE22Batch/ECE22BatchAsection/cjbdohylvixei29spdfy.jpg"
        },
        {
          "name": "DANDURI VENKATESH",
          "rollNo": "22471A0407",
          "parentNo": 9912379194,
          "studentNo": 9392856301,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267122/ECE22Batch/ECE22BatchAsection/g1lb6zcwti10ffy03csm.jpg"
        },
        {
          "name": "DANNAVARAPU TIRUMULA VEERAIAH BABU",
          "rollNo": "22471A0408",
          "parentNo": 9701741503,
          "studentNo": 6300442048,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267123/ECE22Batch/ECE22BatchAsection/gsias7vfq475qdig0ulb.jpg"
        },
        {
          "name": "DONTHULA YAMUNA",
          "rollNo": "22471A0409",
          "parentNo": 7989850787,
          "studentNo": 9948233499,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267123/ECE22Batch/ECE22BatchAsection/kxog5qk8nkwd7uooz5nn.jpg"
        },
        {
          "name": "DUDEKULA MOULALI",
          "rollNo": "22471A0410",
          "parentNo": 9398336490,
          "studentNo": 6302379774,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267123/ECE22Batch/ECE22BatchAsection/a0u53ujf2xsroocs9sfp.jpg"
        },
        {
          "name": "DUDEKULA MUNNABABA",
          "rollNo": "22471A0411",
          "parentNo": 9989016292,
          "studentNo": 6300141507,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267123/ECE22Batch/ECE22BatchAsection/xar4viz5chvhvxb2m8af.jpg"
        },
        {
          "name": "GAJWALLI SAI DEEPAK",
          "rollNo": "22471A0412",
          "parentNo": 9701051798,
          "studentNo": 7095576577,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267123/ECE22Batch/ECE22BatchAsection/odkyqfxb8ovnkyw4sru5.jpg"
        },
        {
          "name": "GALI VASUNDHARA",
          "rollNo": "22471A0413",
          "parentNo": 8106256017,
          "studentNo": 8125801798,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267122/ECE22Batch/ECE22BatchAsection/bb3ukmtuiv6wdjmpfusg.jpg"
        },
        {
          "name": "GALI MAHESWARI",
          "rollNo": "22471A0414",
          "parentNo": 8978734303,
          "studentNo": 9849054544,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267122/ECE22Batch/ECE22BatchAsection/c3joulyuv43rln9o7tnx.jpg"
        },
        {
          "name": "GUDIPATI SUJITHA",
          "rollNo": "22471A0416",
          "parentNo": 8466829984,
          "studentNo": 7997948527,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267122/ECE22Batch/ECE22BatchAsection/h37kzyz3jveld1pjpiml.jpg"
        },
        {
          "name": "GUDIPUDI CHAITHAN",
          "rollNo": "22471A0417",
          "parentNo": 9701143442,
          "studentNo": 9392510429,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267122/ECE22Batch/ECE22BatchAsection/jlhj47zex5fbdx8d4um9.jpg"
        },
        {
          "name": "GURAJALA SRINIVASU",
          "rollNo": "22471A0418",
          "parentNo": 8978246799,
          "studentNo": 8247610280,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267122/ECE22Batch/ECE22BatchAsection/h9hh7zmotpfmjpxl0p43.jpg"
        },
        {
          "name": "JAVISETTY BHAVANI",
          "rollNo": "22471A0420",
          "parentNo": 9010102779,
          "studentNo": 9390542948,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267122/ECE22Batch/ECE22BatchAsection/jwewzpjzzsrmjmlq7ob1.jpg"
        },
        {
          "name": "KAMUJULA ROHITH REDDY",
          "rollNo": "22471A0421",
          "parentNo": 8121820560,
          "studentNo": 9652348432,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267121/ECE22Batch/ECE22BatchAsection/y2njxtprh251vnvwhzqw.jpg"
        },
        {
          "name": "KANKANALA GNANESWAR",
          "rollNo": "22471A0422",
          "parentNo": 9985515232,
          "studentNo": 8555057332,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267121/ECE22Batch/ECE22BatchAsection/brlxh4biuhktnspmz9cr.jpg"
        },
        {
          "name": "KANNEDARI YEDUKONDALU",
          "rollNo": "22471A0423",
          "parentNo": 9550796475,
          "studentNo": 8712276475,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267121/ECE22Batch/ECE22BatchAsection/cstcm5iqjpvyeljqklqh.jpg"
        },
        {
          "name": "KODURU SHYAMPRASAD",
          "rollNo": "22471A0424",
          "parentNo": 8179038238,
          "studentNo": 7075466883,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267121/ECE22Batch/ECE22BatchAsection/tw18xjfthtbiol0weiki.jpg"
        },
        {
          "name": "KOKKERA VIJAYA LAKSHMI",
          "rollNo": "22471A0425",
          "parentNo": 9948749175,
          "studentNo": 9948749175,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267121/ECE22Batch/ECE22BatchAsection/bc1ujtihrulssspmkftv.jpg"
        },
        {
          "name": "KOMMAVARAPU TRIVENI",
          "rollNo": "22471A0426",
          "parentNo": 8019781351,
          "studentNo": 9059775601,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267122/ECE22Batch/ECE22BatchAsection/jwewzpjzzsrmjmlq7ob1.jpg"
        },
        {
          "name": "KOPANATHI LOHITH",
          "rollNo": "22471A0427",
          "parentNo": 9550495966,
          "studentNo": 9347186071,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267121/ECE22Batch/ECE22BatchAsection/fo5phxiwifnvjgvt6xvb.jpg"
        },
        {
          "name": "KOPPARTHI NAVYA",
          "rollNo": "22471A0428",
          "parentNo": 7799290421,
          "studentNo": 9573895954,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267121/ECE22Batch/ECE22BatchAsection/bc1ujtihrulssspmkftv.jpg"
        },
        {
          "name": "KOTHAKOTA GURU VENKATA NAGA TRIVENI",
          "rollNo": "22471A0429",
          "parentNo": 9346064773,
          "studentNo": 9059497564,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267121/ECE22Batch/ECE22BatchAsection/j0why7y5ozynfqjlob8i.jpg"
        },
        {
          "name": "KRISHNAPURAPU POOJITHA",
          "rollNo": "22471A0430",
          "parentNo": 9440107078,
          "studentNo": 9819272317,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267121/ECE22Batch/ECE22BatchAsection/swmy6rdlswfxzt8tafle.jpg"
        },
        {
          "name": "LINGALA SRINIVASA RAO",
          "rollNo": "22471A0431",
          "parentNo": 8688535624,
          "studentNo": 6304156200,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/idgobhsrvpkz8tbs2qbq.jpg"
        },
        {
          "name": "LINGALA LOKA NANDINI",
          "rollNo": "22471A0432",
          "parentNo": 6281954938,
          "studentNo": 8125926965,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/cc801g1bh43xmubmfthm.jpg"
        },
        {
          "name": "MADDALA UDAY KIRAN",
          "rollNo": "22471A0433",
          "parentNo": 7330691644,
          "studentNo": 9063811765,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/idgobhsrvpkz8tbs2qbq.jpg"
        },
        {
          "name": "MADDINENI NAVYA TEJA",
          "rollNo": "22471A0434",
          "parentNo": 9705649881,
          "studentNo": 7036141655,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/fnlbhbfcf9vfe7yqed5f.jpg"
        },
        {
          "name": "MADDU NITHIN",
          "rollNo": "22471A0435",
          "parentNo": 8978104673,
          "studentNo": 7729804974,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/xyorryllfesdijgkxx4e.jpg"
        },
        {
          "name": "MADDULA MADHAVI",
          "rollNo": "22471A0436",
          "parentNo": 8374957572,
          "studentNo": 9550856098,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/m3siaklkntbqqv9ima4g.jpg"
        },
        {
          "name": "MADDULA BAJI",
          "rollNo": "22471A0437",
          "parentNo": 8374753172,
          "studentNo": 8374753172,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/k3bt1bzcwnkf4zqlhrs7.jpg"
        },
        {
          "name": "MADHAVI JAVVAJI",
          "rollNo": "22471A0438",
          "parentNo": 9032153238,
          "studentNo": 9618761686,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/z8mwwincwh8shhjn3eh6.jpg"
        },
        {
          "name": "MANDA RAMAKRISHNA",
          "rollNo": "22471A0439",
          "parentNo": 8106229047,
          "studentNo": 8106229047,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/rams79jjxfnchjv7wyui.jpg"
        },
        {
          "name": "MARRI HEMA",
          "rollNo": "22471A0440",
          "parentNo": 9985386228,
          "studentNo": 8341398672,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/grb9r80f29uxkwdz7ejg.jpg"
        },
        {
          "name": "PAGIDIMARRI RAVITEJA",
          "rollNo": "22471A0441",
          "parentNo": 9989926608,
          "studentNo": 9392487874,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267120/ECE22Batch/ECE22BatchAsection/amnkt6pnp0gwabaldq4p.jpg"
        },
        {
          "name": "PALLAPATI TRIVENI",
          "rollNo": "22471A0442",
          "parentNo": 9985545960,
          "studentNo": 9985545960,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/bknysq5jngttm4svm0fl.jpg"
        },
        {
          "name": "PALLAPUNENI MEGHANADH",
          "rollNo": "22471A0443",
          "parentNo": 8374685467,
          "studentNo": 9059596575,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/vdojtlvhb7u8dm7yctal.jpg"
        },
        {
          "name": "PARASA NAGA VAMSI",
          "rollNo": "22471A0444",
          "parentNo": 8008531899,
          "studentNo": 7981603339,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/hm2cyxkomqeukauppy1c.jpg"
        },
        {
          "name": "PEMMASANI SRAVANI",
          "rollNo": "22471A0445",
          "parentNo": 8247545722,
          "studentNo": 7993964159,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/sm4acxmc9mgduyw4063w.jpg"
        },
        {
          "name": "RAMISETTY BALA PRASANNA UMADEVI",
          "rollNo": "22471A0446",
          "parentNo": 9533155966,
          "studentNo": 9346524153,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/b0pyewgsouvueolcrkuy.jpg"
        },
        {
          "name": "REDDY SAI MANI DEEP",
          "rollNo": "22471A0447",
          "parentNo": 9182570982,
          "studentNo": 9949341643,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/iphsbzode0p0zpo6gshw.jpg"
        },
        {
          "name": "REPALLE PURNA CHAND",
          "rollNo": "22471A0448",
          "parentNo": 7671081589,
          "studentNo": 6301089397,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/f29g9lappxqfyn48rsdu.jpg"
        },
        {
          "name": "SEGGAM RAKESH",
          "rollNo": "22471A0449",
          "parentNo": 9704134857,
          "studentNo": 7993286357,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/lpmfttp9pp4l6ai9jxl8.jpg"
        },
        {
          "name": "SHAIK SAHIR",
          "rollNo": "22471A0450",
          "parentNo": 7799060783,
          "studentNo": 9346039578,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/jbbflyf7k00fynojwkp3.jpg"
        },
        {
          "name": "SHAIK SHABBEER",
          "rollNo": "22471A0451",
          "parentNo": 9966587670,
          "studentNo": 7993037176,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/puahtz7otkloosgzbjca.jpg"
        },
        {
          "name": "SHAIK MOTAD HARSHAD",
          "rollNo": "22471A0452",
          "parentNo": 9959939399,
          "studentNo": 9121265950,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/temhh5mklkccu20qhxyk.jpg"
        },
        {
          "name": "SHAIK ABDUL RASOOL",
          "rollNo": "22471A0453",
          "parentNo": 9182840590,
          "studentNo": 9392449596,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/owgjp728t4ic4rwjnq2u.jpg"
        },
        {
          "name": "SHAIK BELLAMKONDA ANVAR BASHA",
          "rollNo": "22471A0454",
          "parentNo": 9989896854,
          "studentNo": 8179917111,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/gf8cl81gxilchobhmmpy.jpg"
        },
        {
          "name": "SHAIK BHASID",
          "rollNo": "22471A0455",
          "parentNo": 9948601465,
          "studentNo": 9502255974,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267117/ECE22Batch/ECE22BatchAsection/l8gblfs7902t9gqkjzdd.jpg"
        },
        {
          "name": "SHAIK HAZEERA",
          "rollNo": "22471A0456",
          "parentNo": 9160881182,
          "studentNo": 6305198497,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267117/ECE22Batch/ECE22BatchAsection/rddw51oame2dvtvgp9l1.jpg"
        },
        {
          "name": "SHAIK MOHAMMAD SAIF",
          "rollNo": "22471A0457",
          "parentNo": 9705776702,
          "studentNo": 7396169136,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267117/ECE22Batch/ECE22BatchAsection/wxdlqeb2by0x1pjoczyw.jpg"
        },
        {
          "name": "SHAIK SAISAMEER",
          "rollNo": "22471A0458",
          "parentNo": 8125772003,
          "studentNo": 9392584576,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/apnbtluakbmqscfpsn8x.jpg"
        },
        {
          "name": "NEELAM SIVA SANKAR",
          "rollNo": "22471A0459",
          "parentNo": 9705798809,
          "studentNo": 9392406437,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/plv9qyosrrq8fh9n9ogk.jpg"
        },
        {
          "name": "SONTI PULLARAO",
          "rollNo": "22471A0460",
          "parentNo": 6309432381,
          "studentNo": 8639971353,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267119/ECE22Batch/ECE22BatchAsection/nk0ttt5tjk9vzwddu57k.jpg"
        },
        {
          "name": "TAM TAM MOHAN RAO",
          "rollNo": "22471A0461",
          "parentNo": 9704300598,
          "studentNo": 9959721598,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/nk2onq0wo25akyvx46bj.jpg"
        },
        {
          "name": "THURAGA ADITHYA VARDHAN",
          "rollNo": "22471A0462",
          "parentNo": 8522828372,
          "studentNo": 9347353862,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/inw0llf05bhqri5am8ky.jpg"
        },
        {
          "name": "TIYYAGURA HARSHITHA",
          "rollNo": "22471A0463",
          "parentNo": 9705978848,
          "studentNo": 9014592008,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/yqky2kkpumclke9jfz4z.jpg"
        },
        {
          "name": "ULLAM VENKATA KRISHNA",
          "rollNo": "22471A0464",
          "parentNo": 9908616465,
          "studentNo": 7893187273,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/vxzr4gmyzamsn8oqzt5v.jpg"
        },
        {
          "name": "VANGAPALLI NAGALAKSHMI",
          "rollNo": "22471A0465",
          "parentNo": 9849971654,
          "studentNo": 7386031990,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/scje0pragwgqqbs3glcb.jpg"
        },
        {
          "name": "VELPURI MAHESH BABU",
          "rollNo": "22471A0466",
          "parentNo": 9912521437,
          "studentNo": 8179114490,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267118/ECE22Batch/ECE22BatchAsection/vkacygx7njgnijfb20ft.jpg"
        },
        {
          "name": "VEMULA BHUVANESH",
          "rollNo": "22471A0467",
          "parentNo": 9618860056,
          "studentNo": 8522009828,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267117/ECE22Batch/ECE22BatchAsection/c2cw61ijlh6kz83xwbz2.jpg"
        },
        {
          "name": "VIPPALA LAKSHMI PRIYA REDDY",
          "rollNo": "22471A0468",
          "parentNo": 9701834413,
          "studentNo": 9347101182,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267117/ECE22Batch/ECE22BatchAsection/hbadu9eka3rlj4zz9ahv.jpg"
        },
        {
          "name": "YENUMALA ANIL KUMAR",
          "rollNo": "22471A0469",
          "parentNo": 7288802360,
          "studentNo": 9063808120,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267117/ECE22Batch/ECE22BatchAsection/uuxnsh9fzw6miakjbnvd.jpg"
        },
        {
          "name": "YOCHANA GATTU",
          "rollNo": "22471A0470",
          "parentNo": 8885371869,
          "studentNo": 7396371869,
          "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267117/ECE22Batch/ECE22BatchAsection/utdgmuuci5yi4xyot2co.jpg"
        },
        
    {
        "name": "AALLA YASASWI",
        "rollNo": "22471A0471",
        "parentNo": 9553055892,
        "studentNo": 9182038940,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267136/ECE22Batch/ECE22BatchBsection/iwy3nsa8udhvyy3wnbwg.jpg"
      },
      {
        "name": "ADAPALA SWATHIKA",
        "rollNo": "22471A0472",
        "parentNo": 8688482047,
        "studentNo": 7995518599,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267136/ECE22Batch/ECE22BatchBsection/irgbhtkjvvbr7mqjhngo.jpg"
      },
      {
        "name": "ADUSUMALLI KARUNYA",
        "rollNo": "22471A0473",
        "parentNo": 9848826095,
        "studentNo": 9848826095,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267136/ECE22Batch/ECE22BatchBsection/gjifs0dpi4mrtwkcqn5s.jpg"
      },
      {
        "name": "ALAPATI AJAY KUMAR",
        "rollNo": "22471A0474",
        "parentNo": 9866891586,
        "studentNo": 9618523536,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267136/ECE22Batch/ECE22BatchBsection/zce4m0r7koxcbf6recd7.jpg"
      },
      {
        "name": "ALOKAM KARTHIK",
        "rollNo": "22471A0475",
        "parentNo": 9703698468,
        "studentNo": 8247805829,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267136/ECE22Batch/ECE22BatchBsection/givb4pwkbau6igzpk9rf.jpg"
      },
      {
        "name": "AMBATI SAMBASIVARAO",
        "rollNo": "22471A0476",
        "parentNo": 9533666695,
        "studentNo": 9866210149,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267136/ECE22Batch/ECE22BatchBsection/c9vmivnhavnkfle1zqbr.jpg"
      },
      {
        "name": "ANUMULA VENKATA REDDY",
        "rollNo": "22471A0477",
        "parentNo": 8374177596,
        "studentNo": 8374177596,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267136/ECE22Batch/ECE22BatchBsection/m0e87tjqdnbm8hoywzjt.jpg"
      },
      {
        "name": "BADRINATH PARUCHURI",
        "rollNo": "22471A0478",
        "parentNo": 7013222460,
        "studentNo": 8688177629,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267136/ECE22Batch/ECE22BatchBsection/hdvwo30qv7wyocciwiks.jpg"
      },
      {
        "name": "BERI BHARGAV",
        "rollNo": "22471A0479",
        "parentNo": 9948709303,
        "studentNo": 8523881534,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267135/ECE22Batch/ECE22BatchBsection/g6zsv82bw458hlikhl6v.jpg"
      },
      {
        "name": "BHARGAVI DEVELLA",
        "rollNo": "22471A0480",
        "parentNo": 9014679576,
        "studentNo": 9063120185,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267135/ECE22Batch/ECE22BatchBsection/iftxhb0fwogek4fjc1hs.jpg"
      },
      {
        "name": "BODDU JAGADEESHBABU",
        "rollNo": "22471A0481",
        "parentNo": 6304594278,
        "studentNo": 6304594278,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267135/ECE22Batch/ECE22BatchBsection/je01tripzgrywskd2rul.jpg"
      },
      {
        "name": "CHALLA KISHORE",
        "rollNo": "22471A0482",
        "parentNo": 9666640250,
        "studentNo": 7981838745,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267135/ECE22Batch/ECE22BatchBsection/j0c0dwpgv8rhkpiezlm3.jpg"
      },
      {
        "name": "CHEPURI NAGA VENKATA NIKHILA SRI",
        "rollNo": "22471A0483",
        "parentNo": 9177763509,
        "studentNo": 6300831249,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267135/ECE22Batch/ECE22BatchBsection/wvv8pybc3rhr344fognt.jpg"
      },
      {
        "name": "DEVANABOINA ANUSHA",
        "rollNo": "22471A0484",
        "parentNo": 9553313281,
        "studentNo": 9553313281,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267135/ECE22Batch/ECE22BatchBsection/izh4kl0f3wnm8phtkski.jpg"
      },
      {
        "name": "DHANA SEKHAR JANANI",
        "rollNo": "22471A0485",
        "parentNo": 9789355735,
        "studentNo": 9701144829,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267135/ECE22Batch/ECE22BatchBsection/sbtawwslz4walrqsry44.jpg"
      },
      {
        "name": "DUGGEMPUDI VENKATA VYSHNAVI",
        "rollNo": "22471A0486",
        "parentNo": 6305493600,
        "studentNo": 7093767428,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267135/ECE22Batch/ECE22BatchBsection/u2wwif8cw8jh0ya5r1ai.jpg"
      },
      {
        "name": "GADE GOPI KRISHNA",
        "rollNo": "22471A0487",
        "parentNo": 9959951290,
        "studentNo": 9154759128,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267135/ECE22Batch/ECE22BatchBsection/qyite5gae7wtm3pzyx9r.jpg"
      },
      {
        "name": "GAJJALA KAVYA SUDHA",
        "rollNo": "22471A0488",
        "parentNo": 8247495708,
        "studentNo": 9391684020,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267134/ECE22Batch/ECE22BatchBsection/oi1i66mjllhf4xwgaedf.jpg"
      },
      {
        "name": "GARLAPATI SAI PHANI KUMAR",
        "rollNo": "22471A0489",
        "parentNo": 8019623775,
        "studentNo": 9014578349,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267134/ECE22Batch/ECE22BatchBsection/uq5ym0wc2drvfxbhspdo.jpg"
      },
      {
        "name": "GONUGUNTLA RAMYA TEJA",
        "rollNo": "22471A0490",
        "parentNo": 9398479943,
        "studentNo": 9398479943,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267134/ECE22Batch/ECE22BatchBsection/nb7ii1pxzrkkyk6gzuj0.jpg"
      },
      {
        "name": "GORIPARTHI PAVAN SIVAJI",
        "rollNo": "22471A0492",
        "parentNo": 8008335261,
        "studentNo": 9398781884,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267139/ECE22Batch/ECE22BatchBsection/i653vzp6nkqhx665knmr.jpg"
      },
      {
        "name": "GRANDHI ROHITH GUPTHA",
        "rollNo": "22471A0493",
        "parentNo": 9390708878,
        "studentNo": 6302270770,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267139/ECE22Batch/ECE22BatchBsection/ndtprn0jpyjxapyb55dk.jpg"
      },
      {
        "name": "INUKOLLU ANIL KUMAR",
        "rollNo": "22471A0494",
        "parentNo": 8309434910,
        "studentNo": 6302896668,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267139/ECE22Batch/ECE22BatchBsection/ijubkduhessduajie2ar.jpg"
      },
      {
        "name": "KANDIMALLA VENKATA NAGA NARENDRA",
        "rollNo": "22471A0495",
        "parentNo": 9701921756,
        "studentNo": 7601074895,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267139/ECE22Batch/ECE22BatchBsection/n9lpyuvjohue3ven0w56.jpg"
      },
      {
        "name": "KONAKATI THRINADH REDDY",
        "rollNo": "22471A0496",
        "parentNo": 9701721060,
        "studentNo": 9908698367,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267134/ECE22Batch/ECE22BatchBsection/igdctzeauz0gjightbru.jpg"
      },
      {
        "name": "KOTAPATI SAI MANI DEEP",
        "rollNo": "22471A0498",
        "parentNo": 9492317350,
        "studentNo": 9704239526,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267134/ECE22Batch/ECE22BatchBsection/eyd8zskzk4plmgx5sgjw.jpg"
      },
      {
        "name": "KOTHAPALLI JAYA SRI",
        "rollNo": "22471A0499",
        "parentNo": 9100453524,
        "studentNo": 9100453524,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267134/ECE22Batch/ECE22BatchBsection/rmswyhukmagvu3n3n6yy.jpg"
      },
      {
        "name": "KUMMITHA NAGA PRASAD REDDY",
        "rollNo": "22471A04A0",
        "parentNo": 9705199267,
        "studentNo": 8919338387,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267141/ECE22Batch/ECE22BatchBsection/ji09i43t3vvitsg1d6i7.jpg"
      },
      {
        "name": "KUNCHAPU VENKATESH",
        "rollNo": "22471A04A1",
        "parentNo": 9849223906,
        "studentNo": 8019929365,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267141/ECE22Batch/ECE22BatchBsection/ntvez7lsahjkghkdpxcz.jpg"
      },
      {
        "name": "KUNDURU PRASANNA",
        "rollNo": "22471A04A2",
        "parentNo": 9848903070,
        "studentNo": 6303593259,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267141/ECE22Batch/ECE22BatchBsection/tbsciciu8lbvbuzucqjm.jpg"
      },
      {
        "name": "MALLAVARAPU JOSEPH ARAVIND",
        "rollNo": "22471A04A3",
        "parentNo": 8297535441,
        "studentNo": 8297535441,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267141/ECE22Batch/ECE22BatchBsection/os4hejaidlhcycy6y8u9.jpg"
      },
      {
        "name": "MANDALANENI BALAJI VINAY",
        "rollNo": "22471A04A4",
        "parentNo": 9985286189,
        "studentNo": 8121084911,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267141/ECE22Batch/ECE22BatchBsection/r9wr5unwcpoarsoox0bz.jpg"
      },
      {
        "name": "MANDALANENI BALA VENKATA SAI AKHIL KUMAR",
        "rollNo": "22471A04A5",
        "parentNo": 9989732389,
        "studentNo": 6305881681,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267141/ECE22Batch/ECE22BatchBsection/b4auhukqokk4cmhop9rn.jpg"
      },
      {
        "name": "MANNAM SIVA KRISHNA",
        "rollNo": "22471A04A6",
        "parentNo": 9505523654,
        "studentNo": 8919529264,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267141/ECE22Batch/ECE22BatchBsection/c0vphimmleysahni5f7k.jpg"
      },
      {
        "name": "MATURI V N M S S NAVYA",
        "rollNo": "22471A04A7",
        "parentNo": 9908407871,
        "studentNo": 6281992851,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/igj1wt4egdnhowayddwe.jpg"
      },
      {
        "name": "MOTAD YASMIN",
        "rollNo": "22471A04A8",
        "parentNo": 9492123365,
        "studentNo": 8187085818,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/pqvitibjxsfy2o4j0iet.jpg"
      },
      {
        "name": "MOTAMARRI JITENDRA SAIKRISHNA AAKASH",
        "rollNo": "22471A04A9",
        "parentNo": 9291264963,
        "studentNo": 9291264963,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/oyvwjx4fz8j3yix27g0g.jpg"
      },
      {
        "name": "MUPPURI SRI RAMYA PAVANI",
        "rollNo": "22471A04B0",
        "parentNo": 9014628555,
        "studentNo": 9398939382,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/ujwcnivhuuqp4x7pyube.jpg"
      },
      {
        "name": "NAVEEN BODDU",
        "rollNo": "22471A04B1",
        "parentNo": 9154463263,
        "studentNo": 9154463263,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/b7nsgv3qmuwiuphcztyd.jpg"
      },
      {
        "name": "PAGADALA LAKSHMI PRANATHI",
        "rollNo": "22471A04B2",
        "parentNo": 8096717612,
        "studentNo": 9246468313,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/otcv7cxsyrdcponse4q8.jpg"
      },
      {
        "name": "PALNATI MOHIT SAI",
        "rollNo": "22471A04B3",
        "parentNo": 9951572827,
        "studentNo": 9951572827,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/bbsi5m6hoq8irgd9y6da.jpg"
      },
      {
        "name": "PERICHARLA TANMAYI",
        "rollNo": "22471A04B4",
        "parentNo": 7989779809,
        "studentNo": 7989779809,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/otcv7cxsyrdcponse4q8.jpg"
      },
      {
        "name": "PINJARI MAHABOOB BASHA",
        "rollNo": "22471A04B5",
        "parentNo": 8374389052,
        "studentNo": 8374389052,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/evyl1lbtzaocjujfnta9.jpg"
      },
      {
        "name": "PINNIKA NARENDRA",
        "rollNo": "22471A04B6",
        "parentNo": 8333930771,
        "studentNo": 6302165695,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/uhy5wprywxnqmbu1f90b.jpg"
      },
      {
        "name": "PULUKURI SRINIVASA CHARI",
        "rollNo": "22471A04B7",
        "parentNo": 9704772980,
        "studentNo": 9704772980,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267140/ECE22Batch/ECE22BatchBsection/utqjwwlrvyhiogjwqdho.jpg"
      },
      {
        "name": "PUNATI ABHINAYA",
        "rollNo": "22471A04B8",
        "parentNo": 9603268732,
        "studentNo": 9642135366,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267139/ECE22Batch/ECE22BatchBsection/m0kz6dg8pqyzskqsm7el.jpg"
      },
      {
        "name": "RAMIREDDYGARI SIVA DURGA PRASAD",
        "rollNo": "22471A04B9",
        "parentNo": 6304708600,
        "studentNo": 9347884331,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267139/ECE22Batch/ECE22BatchBsection/i2ab63mxrrpzwzxe1zap.jpg"
      },
      {
        "name": "SAYUMPU SALMAN RAJU",
        "rollNo": "22471A04C0",
        "parentNo": 9703237472,
        "studentNo": 9703237472,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267139/ECE22Batch/ECE22BatchBsection/sjsu0ntlnnt7h6cwaw52.jpg"
      },
      {
        "name": "SHAIK NASRIN SULTANA",
        "rollNo": "22471A04C1",
        "parentNo": 9908406237,
        "studentNo": 9908406237,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267139/ECE22Batch/ECE22BatchBsection/r3dbv0xqd2ynffuyrtgm.jpg"
      },
      {
        "name": "SHAIK IMRAN BASHA",
        "rollNo": "22471A04C2",
        "parentNo": 7569091523,
        "studentNo": 9666191568,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267138/ECE22Batch/ECE22BatchBsection/cyusgmgqdkdqc7dh1g7a.jpg"
      },
      {
        "name": "SHAIK MAJUNU",
        "rollNo": "22471A04C3",
        "parentNo": 6304180426,
        "studentNo": 9398184900,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267138/ECE22Batch/ECE22BatchBsection/bofclwiwzxcmxgmczc9a.jpg"
      },
      {
        "name": "SHAIK SHABANA",
        "rollNo": "22471A04C4",
        "parentNo": 6304180426,
        "studentNo": 9347822239,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267138/ECE22Batch/ECE22BatchBsection/ubwluoba6wg8dxjhvyiy.jpg"
      },
      {
        "name": "SHAIK IMRAN",
        "rollNo": "22471A04C5",
        "parentNo": 9703871946,
        "studentNo": 8125059578,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267138/ECE22Batch/ECE22BatchBsection/n0z9jg8ka84dnfzslamd.jpg"
      },
      {
        "name": "SHAIK ENTHIYAZ",
        "rollNo": "22471A04C6",
        "parentNo": 9618466568,
        "studentNo": 9912419796,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267138/ECE22Batch/ECE22BatchBsection/utzxonhgal60tom9ty7m.jpg"
      },
      {
        "name": "SYED AFROJ",
        "rollNo": "22471A04C7",
        "parentNo": 9573025167,
        "studentNo": 7075048752,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267138/ECE22Batch/ECE22BatchBsection/vbh4pzr6vwnjnvkukf8b.jpg"
      },
      {
        "name": "SYED MUBEENA",
        "rollNo": "22471A04C8",
        "parentNo": 9959643788,
        "studentNo": 9959643788,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267138/ECE22Batch/ECE22BatchBsection/xbpvjhzkyxc7vvlt6gh7.jpg"
      },
      {
        "name": "TALLA BALA PHANINDHRA REDDY",
        "rollNo": "22471A04C9",
        "parentNo": 9866888404,
        "studentNo": 9866888404,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267138/ECE22Batch/ECE22BatchBsection/lkttfxgmwlyvf2mj42ut.jpg"
      },
      {
        "name": "TAMMINENI BRAHMA REDDY",
        "rollNo": "22471A04D0",
        "parentNo": 8897858004,
        "studentNo": 9381978839,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267138/ECE22Batch/ECE22BatchBsection/vapntqwskveu62kwbjsg.jpg"
      },
      {
        "name": "TANNIRU MOHAN SAIRAM",
        "rollNo": "22471A04D1",
        "parentNo": 9381060227,
        "studentNo": 9392292391,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267137/ECE22Batch/ECE22BatchBsection/pxeqm9ipdibyt5irrj9r.jpg"
      },
      {
        "name": "THANNEERU YASODA KRISHNA",
        "rollNo": "22471A04D2",
        "parentNo": 7732008341,
        "studentNo": 7732008341,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267137/ECE22Batch/ECE22BatchBsection/chhxncvfzrctsosuoa3u.jpg"
      },
      {
        "name": "PULAGAM V VENKATA RAGHURAMA MANOHARA REDDY",
        "rollNo": "22471A04D3",
        "parentNo": 7893736220,
        "studentNo": 9440438746,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267137/ECE22Batch/ECE22BatchBsection/mao18q9xvwzd9mon9eza.jpg"
      },
      {
        "name": "VADDE HEMANTH CHOWDARY",
        "rollNo": "22471A04D4",
        "parentNo": 7780774469,
        "studentNo": 9392889280,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267137/ECE22Batch/ECE22BatchBsection/cqwrvlxs97vxvtzb9gii.jpg"
      },
      {
        "name": "VADLAMANU MAHENDRA",
        "rollNo": "22471A04D5",
        "parentNo": 8074776353,
        "studentNo": 8688925860,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267137/ECE22Batch/ECE22BatchBsection/qh0hkdksa1q0axhxihwk.jpg"
      },
      {
        "name": "VANGAVOLU BHARGAV",
        "rollNo": "22471A04D6",
        "parentNo": 7013416812,
        "studentNo": 9959490760,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267137/ECE22Batch/ECE22BatchBsection/lhbqe0udp5a1czcj7gva.jpg"
      },
      {
        "name": "VEJARLA JOSHI",
        "rollNo": "22471A04D7",
        "parentNo": 7997031125,
        "studentNo": 8341618325,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267137/ECE22Batch/ECE22BatchBsection/r68ftvmgjryx7s12shny.jpg"
      },
      {
        "name": "VELAMALA HARIPRASAD",
        "rollNo": "22471A04D8",
        "parentNo": 8978403931,
        "studentNo": 7396083931,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267137/ECE22Batch/ECE22BatchBsection/zc3iobaae0egmosl1qnf.jpg"
      },
      {
        "name": "VUTUKURI SWATHI",
        "rollNo": "22471A04D9",
        "parentNo": 9290400765,
        "studentNo": 9398939382,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267137/ECE22Batch/ECE22BatchBsection/bkdghw1ovyuzo5b4whsk.jpg"
      },
      {
        "name": "YARREDDULA SAI KIRAN REDDY",
        "rollNo": "22471A04E0",
        "parentNo": 7893736220,
        "studentNo": 7893736220,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267136/ECE22Batch/ECE22BatchBsection/p2kiwow1p3jnmh789yng.jpg"
      },
      {
        "name": "ALA VENKATESWARA RAO",
        "rollNo": "22471A04E1",
        "parentNo": 7207620383,
        "studentNo": 8897509076,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267176/ECE22Batch/ECE22BatchCsection/ont2dy799q4s9zuknyce.jpg"
      },
      {
        "name": "ANGIREKULA SRINIVAS",
        "rollNo": "22471A04E2",
        "parentNo": 9884380809,
        "studentNo": 9177093742,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267176/ECE22Batch/ECE22BatchCsection/uu2dqojhiwkoezxfaws0.jpg"
      },
      {
        "name": "ANNAVARAPU AKHIL",
        "rollNo": "22471A04E3",
        "parentNo": 7093968383,
        "studentNo": 8008985770,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267176/ECE22Batch/ECE22BatchCsection/zpag4b1ck5vaukvz1os0.jpg"
      },
      {
        "name": "ATHOTA PHILOMIN PAUL",
        "rollNo": "22471A04E4",
        "parentNo": 8143255569,
        "studentNo": 6305010395,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267176/ECE22Batch/ECE22BatchCsection/a9uqtabpkm0naeqnzkxp.jpg"
      },
      {
        "name": "BANAVATHU THIRUMALA NAIK",
        "rollNo": "22471A04E5",
        "parentNo": 8008484073,
        "studentNo": 7702383634,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267176/ECE22Batch/ECE22BatchCsection/nwzstbfbvv7gtsmsz7j3.jpg"
      },
      {
        "name": "BANDELA LARA",
        "rollNo": "22471A04E6",
        "parentNo": 8465028657,
        "studentNo": 7995523208,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267176/ECE22Batch/ECE22BatchCsection/tukiepveeqrlarclbgeh.jpg"
      },
      {
        "name": "BHAVANARI VENKATA DEVI PRASAD",
        "rollNo": "22471A04E7",
        "parentNo": 9052620288,
        "studentNo": 8919215626,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267176/ECE22Batch/ECE22BatchCsection/g82zoq9j6ozep63kaf30.jpg"
      },
      {
        "name": "BHUKYA ESWAR NAIK",
        "rollNo": "22471A04E8",
        "parentNo": 9652188984,
        "studentNo": 8074816105,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267176/ECE22Batch/ECE22BatchCsection/gesjejrgb5ixk6etccir.jpg"
      },
      {
        "name": "BUDALA NAGAIAH",
        "rollNo": "22471A04E9",
        "parentNo": 7286911752,
        "studentNo": 7815988706,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267175/ECE22Batch/ECE22BatchCsection/zwqzqa3hv2etspaotwax.jpg"
      },
      {
        "name": "BURSU SAGAR BABU",
        "rollNo": "22471A04F0",
        "parentNo": 9542630211,
        "studentNo": 8919437467,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267175/ECE22Batch/ECE22BatchCsection/ttlf8dbahfjywyizo7mj.jpg"
      },
      {
        "name": "CHALLA SUSMITHA REDDY",
        "rollNo": "22471A04F1",
        "parentNo": 7569256702,
        "studentNo": 8187838316,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267175/ECE22Batch/ECE22BatchCsection/odeo4cv3i7zrgnu6a9qn.jpg"
      },
      {
        "name": "CHEPARTHI THIRUPATHI RAO",
        "rollNo": "22471A04F2",
        "parentNo": 7659043492,
        "studentNo": 8096647584,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267175/ECE22Batch/ECE22BatchCsection/odeo4cv3i7zrgnu6a9qn.jpg"
      },
      {
        "name": "CHINTHALAPUDI JAYASRI",
        "rollNo": "22471A04F3",
        "parentNo": 8464081974,
        "studentNo": 6305001737,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267175/ECE22Batch/ECE22BatchCsection/vyohgsj6jz4irrwblnnx.jpg"
      },
      {
        "name": "CHIRLADINNE NAGA VENKATA SIVA PAVAN",
        "rollNo": "22471A04F4",
        "parentNo": 9676261771,
        "studentNo": 6300848045,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267175/ECE22Batch/ECE22BatchCsection/ryvl7rmdb88cyfuizxqe.jpg"
      },
      {
        "name": "DANDUGULA VENKATA LAKSHMI",
        "rollNo": "22471A04F5",
        "parentNo": 9912671559,
        "studentNo": 9392691362
      },
      {
        "name": "DUDEKULA SAIDA VALI",
        "rollNo": "22471A04F6",
        "parentNo": 8688029275,
        "studentNo": 9963258412,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267175/ECE22Batch/ECE22BatchCsection/qmvvmsiujnymkgugnde4.jpg"
      },
      {
        "name": "GARIGIPATI DHANUSH",
        "rollNo": "22471A04F7",
        "parentNo": 8187045404,
        "studentNo": 7569152368,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267175/ECE22Batch/ECE22BatchCsection/rucxtvhwitjx390lmlyx.jpg"
      },
      {
        "name": "GORREPATI RATNA PRATHIBHA JOYAL",
        "rollNo": "22471A04F8",
        "parentNo": 9177828697,
        "studentNo": 9177198802,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267175/ECE22Batch/ECE22BatchCsection/svxx1tgx8p95ncduspzo.jpg"
      },
      {
        "name": "GOVADA HEMANTH RAM",
        "rollNo": "22471A04F9",
        "parentNo": 8499051837,
        "studentNo": 7799399096,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267174/ECE22Batch/ECE22BatchCsection/z2gm4yvjwch1g5ytlkfo.jpg"
      },
      {
        "name": "GUNTI SIVA KUMAR",
        "rollNo": "22471A04G0",
        "parentNo": 9010817235,
        "studentNo": 7842243722,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267171/ECE22Batch/ECE22BatchCsection/s1yvpcbhi70kenkuheep.jpg"
      },
      {
        "name": "GURRAM VEERANJANEYULU",
        "rollNo": "22471A04G1",
        "parentNo": 8008370442,
        "studentNo": 7569611364,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267171/ECE22Batch/ECE22BatchCsection/hekay94qtyo7ju9eczgn.jpg"
      },
      {
        "name": "GURRAPUSALA MEGHANA",
        "rollNo": "22471A04G2",
        "parentNo": 9849744410,
        "studentNo": 6304169221
      },
      {
        "name": "HANUMANTHU RAHUL",
        "rollNo": "22471A04G3",
        "parentNo": 9573327468,
        "studentNo": 9347568202,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267171/ECE22Batch/ECE22BatchCsection/wvusjcxmltgszsaoyfqz.jpg"
      },
      {
        "name": "JALLELLA VISHNAVIBAI",
        "rollNo": "22471A04G4",
        "parentNo": 8897050565,
        "studentNo": 9063050564,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267171/ECE22Batch/ECE22BatchCsection/misttenb2jjpeeermnta.jpg"
      },
      {
        "name": "JANAMALA KEERTHANA",
        "rollNo": "22471A04G5",
        "parentNo": 9908340378,
        "studentNo": 9908340378,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267170/ECE22Batch/ECE22BatchCsection/bcw8irpsbftvpfbnrnui.jpg"
      },
      {
        "name": "JESTA MALLIKARJUNA",
        "rollNo": "22471A04G6",
        "parentNo": 9959144590,
        "studentNo": 9346235984,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267170/ECE22Batch/ECE22BatchCsection/wscmnkpcgcxic7gozzu0.jpg"
      },
      {
        "name": "KANKANALA ESWAR",
        "rollNo": "22471A04G7",
        "parentNo": 8555057332,
        "studentNo": 9346560894,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267170/ECE22Batch/ECE22BatchCsection/t5haoqdf1yte2krcd5zw.jpg"
      },
      {
        "name": "KOPPURAVURI SRI NIKHITA",
        "rollNo": "22471A04G8",
        "parentNo": 9885279713,
        "studentNo": 7013792366,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267170/ECE22Batch/ECE22BatchCsection/psadkcou1o5nkkum0ojy.jpg"
      },
      {
        "name": "KOSANAM NAGA CHAITANYA KUMAR",
        "rollNo": "22471A04G9",
        "parentNo": 9346437872,
        "studentNo": 9346658440,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267170/ECE22Batch/ECE22BatchCsection/jmwrwalfwu8ybjbwdtsx.jpg"
      },
      {
        "name": "KOTTAMSETTI NARENDRA",
        "rollNo": "22471A04H0",
        "parentNo": 9573298923,
        "studentNo": 7416239735
      },
      {
        "name": "MACHERLA PRATAP",
        "rollNo": "22471A04H1",
        "parentNo": 9100764656,
        "studentNo": 6300031916,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267170/ECE22Batch/ECE22BatchCsection/u4tqok1iltyrslrzjpof.jpg"
      },
      {
        "name": "MACHERLA CHINNI",
        "rollNo": "22471A04H2",
        "parentNo": 9502824957,
        "studentNo": 9502824957,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267170/ECE22Batch/ECE22BatchCsection/q6p1ati8rwpq7hh6tqvk.jpg"
      },
      {
        "name": "MADHAGONDA HANUMANTHU",
        "rollNo": "22471A04H3",
        "parentNo": 9704772356,
        "studentNo": 9392507027,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267170/ECE22Batch/ECE22BatchCsection/doljeftkwfhzhowajz0m.jpg"
      },
      {
        "name": "MANDA RAVI KUMAR",
        "rollNo": "22471A04H4",
        "parentNo": 9398189020,
        "studentNo": 7013495542,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267170/ECE22Batch/ECE22BatchCsection/yaoxye7vip8epajcwsoa.jpg"
      },
      {
        "name": "MARRI GOPI RAJU",
        "rollNo": "22471A04H5",
        "parentNo": 9502742619,
        "studentNo": 9515203536,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267170/ECE22Batch/ECE22BatchCsection/xxuq2ave6zcrd40jur9t.jpg"
      },
      {
        "name": "MEKALA KASI",
        "rollNo": "22471A04H6",
        "parentNo": 9392623769,
        "studentNo": 8328605054,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267174/ECE22Batch/ECE22BatchCsection/mjgvtftmnysj8fh4zpth.jpg"
      },
      {
        "name": "MOPARTHI VEERA BABU",
        "rollNo": "22471A04H7",
        "parentNo": 9502835363,
        "studentNo": 9502835363,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267174/ECE22Batch/ECE22BatchCsection/wnm5aq1aryyrewwqae6l.jpg"
      },
      {
        "name": "MUKALLA HEMANTH",
        "rollNo": "22471A04H8",
        "parentNo": 9494094832,
        "studentNo": 9063096221,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267174/ECE22Batch/ECE22BatchCsection/iyeluces3xvdmqmgqpfs.jpg"
      },
      {
        "name": "MUKKAPATI UDAY KIRAN",
        "rollNo": "22471A04H9",
        "parentNo": 8096121997,
        "studentNo": 7396137119,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267174/ECE22Batch/ECE22BatchCsection/d4vix1lynbvtn3mnubqe.jpg"
      },
      {
        "name": "NAGIRI SRINIVASRAO",
        "rollNo": "22471A04I0",
        "parentNo": 9618029425,
        "studentNo": 9032273153,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267174/ECE22Batch/ECE22BatchCsection/sdhe6b4x0ir2nxdunnxd.jpg"
      },
      {
        "name": "NALABOLU ASHOK KUMAR",
        "rollNo": "22471A04I1",
        "parentNo": 7673943713,
        "studentNo": 9177943713,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267174/ECE22Batch/ECE22BatchCsection/tvvffsrcglmcxhnhfrte.jpg"
      },
      {
        "name": "PELLURI SURENDRA KUMAR",
        "rollNo": "22471A04I2",
        "parentNo": 9010295863,
        "studentNo": 9391221179,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267174/ECE22Batch/ECE22BatchCsection/qm9wtlwoqui0oumrpjhj.jpg"
      },
      {
        "name": "PERECHARLA SAI",
        "rollNo": "22471A04I3",
        "parentNo": 9676983814,
        "studentNo": 8106160159,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267174/ECE22Batch/ECE22BatchCsection/uybolg6trdjtntvjyexq.jpg"
      },
      {
        "name": "POTLADURTHI LAKSHMI TIRUPATAMMA",
        "rollNo": "22471A04I4",
        "parentNo": 7569718375,
        "studentNo": 9515581576,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267173/ECE22Batch/ECE22BatchCsection/w23dqtbvl1jws4q8guda.jpg"
      },
      {
        "name": "RAYIPUDI REVANTH",
        "rollNo": "22471A04I5",
        "parentNo": 9949713901,
        "studentNo": 9182491244
      },
      {
        "name": "SAGAM SRINIVAS",
        "rollNo": "22471A04I6",
        "parentNo": 9492906774,
        "studentNo": 9121699302,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267173/ECE22Batch/ECE22BatchCsection/z5yamvfpq7zjdguwng6z.jpg"
      },
      {
        "name": "SHAIK DACHEPALLI SHAMMI",
        "rollNo": "22471A04I7",
        "parentNo": 9381689780,
        "studentNo": 8639232383,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267173/ECE22Batch/ECE22BatchCsection/p4jonkfvixcig4teacvi.jpg"
      },
      {
        "name": "SHAIK SULEMAN",
        "rollNo": "22471A04I8",
        "parentNo": 9032272919,
        "studentNo": 9959616185,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267173/ECE22Batch/ECE22BatchCsection/phd83u71vzdgmpimvm3r.jpg"
      },
      {
        "name": "SHAIK JILANI",
        "rollNo": "22471A04I9",
        "parentNo": 9505214915,
        "studentNo": 9908783087,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267173/ECE22Batch/ECE22BatchCsection/nzr1tvuioe95o1go5lrf.jpg"
      },
      {
        "name": "SHAIK SADHIKA",
        "rollNo": "22471A04J0",
        "parentNo": 9703669038,
        "studentNo": 9701378895,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267173/ECE22Batch/ECE22BatchCsection/cqa43qej2z1rj6szdvfg.jpg"
      },
      {
        "name": "SHAIK RIZWANA",
        "rollNo": "22471A04J1",
        "parentNo": 9441849977,
        "studentNo": 7207828733,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267173/ECE22Batch/ECE22BatchCsection/axc1jd7jh7dn9i2ofzad.jpg"
      },
      {
        "name": "SHAIK SADIYA",
        "rollNo": "22471A04J2",
        "parentNo": 9951454297,
        "studentNo": 9398580021,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267173/ECE22Batch/ECE22BatchCsection/iezjl1uyhcssipwmacj2.jpg"
      },
      {
        "name": "SHAIK SABIRUNNISA",
        "rollNo": "22471A04J3",
        "parentNo": 8179774535,
        "studentNo": 9030216429,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/woy8kkdvgndx2wyetdvr.jpg"
      },
      {
        "name": "SHAIK SHABANA",
        "rollNo": "22471A04J4",
        "parentNo": 6304088591,
        "studentNo": 9550232339,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/zxwvegsbrdtwpffxjorv.jpg"
      },
      {
        "name": "SHAIK CHINNA SUBHANI",
        "rollNo": "22471A04J5",
        "parentNo": 9063377919,
        "studentNo": 7075567759,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/pfbzosvzhetyosxzvjez.jpg"
      },
      {
        "name": "SHAIK JAHEED",
        "rollNo": "22471A04J6",
        "parentNo": 6301350166,
        "studentNo": 7842837289,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267173/ECE22Batch/ECE22BatchCsection/bwqtairs1aihueboeeaw.jpg"
      },
      {
        "name": "SHAIK SABIHA",
        "rollNo": "22471A04J7",
        "parentNo": 9398495922,
        "studentNo": 9398495922,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/e5yhlvwfsuf6zglvifu1.jpg"
      },
      {
        "name": "SHAIK SAPA AMEESH",
        "rollNo": "22471A04J8",
        "parentNo": 9640014554,
        "studentNo": 6305453854,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/s3kylpzwmbmo3t6zcppr.jpg"
      },
      {
        "name": "SHAIK SHAILU",
        "rollNo": "22471A04J9",
        "parentNo": 9652761775,
        "studentNo": 7997767367,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/wjtfz4zkpjmtwzljsnfz.jpg"
      },
      {
        "name": "SRILEKHA VENNU",
        "rollNo": "22471A04K0",
        "parentNo": 9959202160,
        "studentNo": 9949163870,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/mxinxmtohrhpldxki0zm.jpg"
      },
      {
        "name": "TAMMISETTY GOWRI SHANKAR",
        "rollNo": "22471A04K1",
        "parentNo": 7675057164,
        "studentNo": 7601015749,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/oy3xokeyp9o1qmnnhrnm.jpg"
      },
      {
        "name": "VALIVETI SATHISH KUMAR",
        "rollNo": "22471A04K2",
        "parentNo": 9515847363,
        "studentNo": 7416262049,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/gne67ppfbqi53oey7xwb.jpg"
      },
      {
        "name": "VEDHULLAPALLI ASHOK KUMAR",
        "rollNo": "22471A04K3",
        "parentNo": 9985146324,
        "studentNo": 9390958827,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/riavz2iteykiww5xe8im.jpg"
      },
      {
        "name": "VIJAYA LAKSHMI DERANGULA",
        "rollNo": "22471A04K4",
        "parentNo": 9490402989,
        "studentNo": 8309009914,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267172/ECE22Batch/ECE22BatchCsection/pefhbur0pat4ipep7njw.jpg"
      },
      {
        "name": "YALAGALA ANIL KUMAR",
        "rollNo": "22471A04K5",
        "parentNo": 9966756849,
        "studentNo": 9059075609,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267171/ECE22Batch/ECE22BatchCsection/pdncbkq2rcqtoggszuhz.jpg"
      },
      {
        "name": "YAMALA LATHEESH",
        "rollNo": "22471A04K6",
        "parentNo": 9391308953,
        "studentNo": 9347044189,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267171/ECE22Batch/ECE22BatchCsection/s2qfmadwxlwovwuaw4od.jpg"
      },
      {
        "name": "YAMPARALA ASHOK",
        "rollNo": "22471A04K7",
        "parentNo": 7330716048,
        "studentNo": 7337056956,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267171/ECE22Batch/ECE22BatchCsection/rlqaq8vswfbeu1khtbhz.jpg"
      },
      {
        "name": "YARAJARLA HARI BRAHMA CHARI",
        "rollNo": "22471A04K8",
        "parentNo": 8096701166,
        "studentNo": 7989335168
      },
      {
        "name": "YEMPOGU RAJESH",
        "rollNo": "22471A04K9",
        "parentNo": 9160601595,
        "studentNo": 9346000054,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267171/ECE22Batch/ECE22BatchCsection/k7psiyp4to8ufhip2fdi.jpg"
      },
      {
        "name": "YENIBERA JOHN",
        "rollNo": "22471A04L0",
        "parentNo": 7680858132,
        "studentNo": 9182700248,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267171/ECE22Batch/ECE22BatchCsection/zs7h24qbswaeouhykgzs.jpg"
      },

    {
        "name": "CHINTALACHERUVU DILSHAAD",
        "rollNo": "21471A0405",
        "parentNo": 9493242728,
        "studentNo": 9493242728
      },
      {
        "name": "KAKUMANU LOHITH",
        "rollNo": "21471A0478",
        "parentNo": 7659892985,
        "studentNo": 8179451427
      },
      {
        "name": "NALAMALA SUNNY AKESH",
        "rollNo": "21471A0496",
        "parentNo": 7032475814,
        "studentNo": 9177228255
      },
      {
        "name": "AARE KARTHIK",
        "rollNo": "22471A04L1",
        "parentNo": 9701023422,
        "studentNo": 7674028581,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267197/ECE22Batch/ECE22BatchDsection/clauxohxbsp2avlim3vu.jpg"
      },
      {
        "name": "AKKALA SRISANTH",
        "rollNo": "22471A04L2",
        "parentNo": 9491611654,
        "studentNo": 8125943413,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267197/ECE22Batch/ECE22BatchDsection/e2nkrewu8exg11lhcg24.jpg"
      },
      {
        "name": "ALETI MAHESH",
        "rollNo": "22471A04L3",
        "parentNo": 7382661298,
        "studentNo": 9704771298,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267197/ECE22Batch/ECE22BatchDsection/ocdsuibxpejv3ds5edfe.jpg"
      },
      {
        "name": "BETHALA VARDHANA",
        "rollNo": "22471A04L4",
        "parentNo": 8008863944,
        "studentNo": 8919236400,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267197/ECE22Batch/ECE22BatchDsection/bgwfn43kyxu1cqiqcote.jpg"
      },
      {
        "name": "BOLLEPALLI RAMESH",
        "rollNo": "22471A04L5",
        "parentNo": 6303452003,
        "studentNo": 6303452003,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267197/ECE22Batch/ECE22BatchDsection/q70x1khynwbkbqnwyxhn.jpg"
      },
      {
        "name": "CHERUKURI RAGHU",
        "rollNo": "22471A04L6",
        "parentNo": 9676566842,
        "studentNo": 8247571921,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267196/ECE22Batch/ECE22BatchDsection/hhst7idtx42g65642t3q.jpg"
      },
      {
        "name": "CHIRATHALA LAKSHMI THRIVENI",
        "rollNo": "22471A04L7",
        "parentNo": 7396079952,
        "studentNo": 7842962781,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267196/ECE22Batch/ECE22BatchDsection/fssc4blh2xrdb71wqfrz.jpg"
      },
      {
        "name": "DUDEKULA BAJIBABU",
        "rollNo": "22471A04L8",
        "parentNo": 8008158505,
        "studentNo": 7093376382,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267196/ECE22Batch/ECE22BatchDsection/tglw3piggekoapjrealh.jpg"
      },
      {
        "name": "GUJJARLAPUDI AKSHAY",
        "rollNo": "22471A04L9",
        "parentNo": 9346642805,
        "studentNo": 8341440834,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267196/ECE22Batch/ECE22BatchDsection/uqsogzdrhqrkbycv46q1.jpg"
      },
      {
        "name": "SAMPATH KUMAR JANGA",
        "rollNo": "22471A04M0",
        "parentNo": 7569558787,
        "studentNo": 7842397416,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267196/ECE22Batch/ECE22BatchDsection/m04co0oxgct97lu0j1f6.jpg"
      },
      {
        "name": "KAKUMANU INDU",
        "rollNo": "22471A04M1",
        "parentNo": 9110357389,
        "studentNo": 9963978837,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267196/ECE22Batch/ECE22BatchDsection/n6boobtmxstsjf7iksf1.jpg"
      },
      {
        "name": "KONGA AJAY KUMAR",
        "rollNo": "22471A04M3",
        "parentNo": 9701969522,
        "studentNo": 9182195280,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267195/ECE22Batch/ECE22BatchDsection/xzozbayqfqa2f6dydgsg.jpg"
      },
      {
        "name": "KOTHA DILIP",
        "rollNo": "22471A04M4",
        "parentNo": 9603212135,
        "studentNo": 7801051754,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267195/ECE22Batch/ECE22BatchDsection/phnrzizsntbbrze3bvms.jpg"
      },
      {
        "name": "MACHERLA NARENDRA",
        "rollNo": "22471A04M5",
        "parentNo": 9701256420,
        "studentNo": 8897269592,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267195/ECE22Batch/ECE22BatchDsection/odqr6rzyhgjgpun6dv8v.jpg"
      },
      {
        "name": "MAHESH LANJEPALLI",
        "rollNo": "22471A04M6",
        "parentNo": 9705250983,
        "studentNo": 9705250983,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267195/ECE22Batch/ECE22BatchDsection/miydpvyg4byajw7duf8e.jpg"
      },
      {
        "name": "MEDIBOINA AKASH",
        "rollNo": "22471A04M7",
        "parentNo": 9652833757,
        "studentNo": 6281244340,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267195/ECE22Batch/ECE22BatchDsection/bb1ztnmacdadkautdgic.jpg"
      },
      {
        "name": "ORCHU BRAHMAIAH",
        "rollNo": "22471A04M8",
        "parentNo": 9676769668,
        "studentNo": 7794977699,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267195/ECE22Batch/ECE22BatchDsection/gsitrwwr5mrfwyaa7xbc.jpg"
      },
      {
        "name": "PATTAMSETTY KAVYASREE",
        "rollNo": "22471A04M9",
        "parentNo": 9848588450,
        "studentNo": 9391559309,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267194/ECE22Batch/ECE22BatchDsection/vq5cn04py0gh9rjnlflr.jpg"
      },
      {
        "name": "PEDDIPAGA JASHUVA",
        "rollNo": "22471A04N0",
        "parentNo": 9550959076,
        "studentNo": 9391296933,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267194/ECE22Batch/ECE22BatchDsection/p4xbkzxxvwjto32og3vw.jpg"
      },
      {
        "name": "PULLAGURA VAMSI",
        "rollNo": "22471A04N1",
        "parentNo": 7569288166,
        "studentNo": 7396778452,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267194/ECE22Batch/ECE22BatchDsection/cvxpbind3pbvy6iek3ku.jpg"
      },
      {
        "name": "REGULAGADDA LEELA GANGABHAVANI",
        "rollNo": "22471A04N2",
        "parentNo": 9182096819,
        "studentNo": 7794930878
      },
      {
        "name": "SANIKOMMU SIVA REDDY",
        "rollNo": "22471A04N3",
        "parentNo": 9573029630,
        "studentNo": 6305529063,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267194/ECE22Batch/ECE22BatchDsection/ukrptdndwbboqa1icsrz.jpg"
      },
      {
        "name": "SHAIK JUNEED",
        "rollNo": "22471A04N4",
        "parentNo": 9948818104,
        "studentNo": 8247889481,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267194/ECE22Batch/ECE22BatchDsection/cwutxsvqm5dghi3jfpox.jpg"
      },
      {
        "name": "SHAIK AFRID",
        "rollNo": "22471A04N5",
        "parentNo": 9573856647,
        "studentNo": 8125819877,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267194/ECE22Batch/ECE22BatchDsection/zs6ncnndjtkkuvsiicko.jpg"
      },
      {
        "name": "SHAIK MOHAMMAD SUHELA",
        "rollNo": "22471A04N6",
        "parentNo": 8309464366,
        "studentNo": 8374873227,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267194/ECE22Batch/ECE22BatchDsection/vowht932viwr1vd5kqrm.jpg"
      },
      {
        "name": "SURASANI YASWANTH REDDY",
        "rollNo": "22471A04N7",
        "parentNo": 9949522698,
        "studentNo": 7013334818,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267193/ECE22Batch/ECE22BatchDsection/fq1lhzyp7yuwgxmkydks.jpg"
      },
      {
        "name": "UPPU VENKATA SIVA SAI",
        "rollNo": "22471A04N8",
        "parentNo": 7386029986,
        "studentNo": 9640499492,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267193/ECE22Batch/ECE22BatchDsection/rjsvjmzgc1yfgnvaws84.jpg"
      },
      {
        "name": "TALARI VENKATA HARSHA VARDHAN",
        "rollNo": "22471A04O0",
        "parentNo": 9705349038,
        "studentNo": 7670924733,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267193/ECE22Batch/ECE22BatchDsection/wkbray45n1gpvgl20dus.jpg"
      },
      {
        "name": "GAJAVALLI LAKSHMI CHATURYA",
        "rollNo": "22471A04O1",
        "parentNo": 9866670147,
        "studentNo": 9989284068,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267193/ECE22Batch/ECE22BatchDsection/qpgkiencpaakawkbvqhd.jpg"
      },
      {
        "name": "ONGOLU CHANDU",
        "rollNo": "22471A04O2",
        "parentNo": 9550998094,
        "studentNo": 9177253228,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267193/ECE22Batch/ECE22BatchDsection/vr872r8ma2ottoxdzhqb.jpg"
      },
      {
        "name": "GAJJALA VENKATA SAI ABHIRAMI REDDY",
        "rollNo": "22471A04O3",
        "parentNo": 9704108996,
        "studentNo": 9959709750,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267193/ECE22Batch/ECE22BatchDsection/hpqkzn0iwb9oseog6vrz.jpg"
      },
      {
        "name": "SHAIK RAJAK",
        "rollNo": "22471A04O5",
        "parentNo": 7330834100,
        "studentNo": 7330834100,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267192/ECE22Batch/ECE22BatchDsection/rpsclwniq5q0jizt7mmy.jpg"
      },
      {
        "name": "TAMMINENI LAKSHMI NARAYANA REDDY",
        "rollNo": "22471A04O6",
        "parentNo": 8465017073,
        "studentNo": 8465017073,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267192/ECE22Batch/ECE22BatchDsection/mel5qgaztjbju0xvbmqv.jpg"
      },
      {
        "name": "PARUCHURI VASUDEV",
        "rollNo": "22471A04O7",
        "parentNo": 8688574585,
        "studentNo": 8688574585,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267192/ECE22Batch/ECE22BatchDsection/oocmwxchrolhowbkskvg.jpg"
      },
      {
        "name": "KALANGI HARISH",
        "rollNo": "22471A04O8",
        "parentNo": 7207511397,
        "studentNo": 7780637635,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267192/ECE22Batch/ECE22BatchDsection/u6f8sk0mglmcqnelahiz.jpg"
      },
      {
        "name": "VEMPARALA MAHESH BABU",
        "rollNo": "22471A04O9",
        "parentNo": 9701543152,
        "studentNo": 9701543152,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267192/ECE22Batch/ECE22BatchDsection/koizcg2o6tq0cebejuo6.jpg"
      },
      {
        "name": "DEVARAKONDA VEERA BRAHMACHARI",
        "rollNo": "23475A0401",
        "parentNo": 9502794711,
        "studentNo": 7893938579,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267191/ECE22Batch/ECE22BatchDsection/ohzzftwzzby7gkpolb6o.jpg"
      },
      {
        "name": "LINGALA KOTESWARA RAO",
        "rollNo": "23475A0402",
        "parentNo": 9177765382,
        "studentNo": 9177765382,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267191/ECE22Batch/ECE22BatchDsection/kzm7cmxzhp3pn6etey8y.jpg"
      },
      {
        "name": "BURLE ASHA",
        "rollNo": "23475A0403",
        "parentNo": 9391295562,
        "studentNo": 7382757380,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267191/ECE22Batch/ECE22BatchDsection/sqri5dbkvrt69mqt3cg0.jpg"
      },
      {
        "name": "GORU GEETHIKA SUDHA",
        "rollNo": "23475A0404",
        "parentNo": 9390394217,
        "studentNo": 9390394217,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267191/ECE22Batch/ECE22BatchDsection/qguduybdcsbjlpp22ap6.jpg"
      },
      {
        "name": "SHAIK MYMUNNISA",
        "rollNo": "23475A0405",
        "parentNo": 8712229990,
        "studentNo": 8712229990,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267191/ECE22Batch/ECE22BatchDsection/rad6mhcay5vtii0qlihr.jpg"
      },
      {
        "name": "KAMBHAMPATI BALU PRAKASH",
        "rollNo": "23475A0406",
        "parentNo": 9493604428,
        "studentNo": 9493604428,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267191/ECE22Batch/ECE22BatchDsection/l5ohlf7516htf7kqj6v4.jpg"
      },
      {
        "name": "VISHNUMOLAKALA ROSHINI",
        "rollNo": "23475A0407",
        "parentNo": 9848974443,
        "studentNo": 9848974443,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267190/ECE22Batch/ECE22BatchDsection/di1vifg8vs8o99ajbqq3.jpg"
      },
      {
        "name": "SHAIK NAZMA",
        "rollNo": "23475A0408",
        "parentNo": 9866481701,
        "studentNo": 9866481701,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267190/ECE22Batch/ECE22BatchDsection/iysqj9sv1q8rqq3yjy2n.jpg"
      },
      {
        "name": "PALAKEETI RENUKA",
        "rollNo": "23475A0409",
        "parentNo": 9676526299,
        "studentNo": 9676526299,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267190/ECE22Batch/ECE22BatchDsection/pwn0shwsoepphf0sg4x4.jpg"
      },
      {
        "name": "SHAIK HABEEB",
        "rollNo": "23475A0410",
        "parentNo": 9391880610,
        "studentNo": 9391880610,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267190/ECE22Batch/ECE22BatchDsection/c7rikoivary4su3eojqc.jpg"
      },
      {
        "name": "PENDEYALA VIJAYA LAKSHMI",
        "rollNo": "23475A0411",
        "parentNo": 9701917848,
        "studentNo": 9701917848,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267190/ECE22Batch/ECE22BatchDsection/xgn3vwka7cvb0eeqk5fx.jpg"
      },
      {
        "name": "PILLI AKSHAY",
        "rollNo": "23475A0412",
        "parentNo": 9866250605,
        "studentNo": 9866250605,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267190/ECE22Batch/ECE22BatchDsection/lqxcjytmm6jedwnkhnik.jpg"
      },
      {
        "name": "PORUMAMILLA VENKATA VARA PRASAD",
        "rollNo": "23475A0413",
        "parentNo": 9573050864,
        "studentNo": 9573050864,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267190/ECE22Batch/ECE22BatchDsection/oej7mrvpgd6sopl384pb.jpg"
      },
      {
        "name": "POLURI KIRAN KUMAR",
        "rollNo": "23475A0414",
        "parentNo": 9948423721,
        "studentNo": 9347155966,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267189/ECE22Batch/ECE22BatchDsection/hbpv72zupc6mcizp0lml.jpg"
      },
      {
        "name": "POLISETTY SAI RAM",
        "rollNo": "23475A0415",
        "parentNo": 8184883023,
        "studentNo": 70323992512,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267188/ECE22Batch/ECE22BatchDsection/hj6mozczckm5zgzwqtfx.jpg"
      },
      {
        "name": "KANKANALAPATI MANIKANTA",
        "rollNo": "23475A0416",
        "parentNo": 9160464255,
        "studentNo": 6302698829,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267189/ECE22Batch/ECE22BatchDsection/lx6kldooimcvfx3yuqfo.jpg"
      },
      {
        "name": "PERAMANA VENKAT VISHNU",
        "rollNo": "23475A0417",
        "parentNo": 8919423045,
        "studentNo": 8919727585,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267189/ECE22Batch/ECE22BatchDsection/alhwfuewdjgdfmx72q7l.jpg"
      },
      {
        "name": "BONKURI NAVEEN KUMAR",
        "rollNo": "23475A0418",
        "parentNo": 9949408216,
        "studentNo": 6302723819,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267189/ECE22Batch/ECE22BatchDsection/wxotc4bwr8uh3d3d1e28.jpg"
      },
      {
        "name": "YARRAGORLA RAJESWARI",
        "rollNo": "23475A0419",
        "parentNo": 6304124133,
        "studentNo": 9505913329,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267189/ECE22Batch/ECE22BatchDsection/glwefvb7nom5fwnwxljx.jpg"
      },
      {
        "name": "NADIMINTI MOHANA RAO",
        "rollNo": "23475A0420",
        "parentNo": 7396561277,
        "studentNo": 7815926120,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267189/ECE22Batch/ECE22BatchDsection/vnqykwvkrumttsviv9yr.jpg"
      },
      {
        "name": "GUMMADIDALA SIVA SANKAR",
        "rollNo": "23475A0421",
        "parentNo": 9398001193,
        "studentNo": 9515351691,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267189/ECE22Batch/ECE22BatchDsection/rtcnle99lmdw3rrnycce.jpg"
      },
      {
        "name": "KOKKILIGADDA PRUDHVI",
        "rollNo": "23475A0422",
        "parentNo": 9959023268,
        "studentNo": 8978691440,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267189/ECE22Batch/ECE22BatchDsection/cqq4fnvcwqxso7askufo.jpg"
      },
      {
        "name": "RALLABANDI ASHOK RAJU",
        "rollNo": "23475A0423",
        "parentNo": 9573222951,
        "studentNo": 7569845671,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267188/ECE22Batch/ECE22BatchDsection/uwpdzoezf96ykb4yz1xy.jpg"
      },
      {
        "name": "PULIPAKA SHALEM RAJU",
        "rollNo": "23475A0424",
        "parentNo": 7032699847,
        "studentNo": 7306380847,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267188/ECE22Batch/ECE22BatchDsection/xqhykuueugjhf0zi9hdn.jpg"
      },
      {
        "name": "PAPASANI POORNA CHANDRA REDDY",
        "rollNo": "23475A0425",
        "parentNo": 9440252822,
        "studentNo": 9493501928,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267188/ECE22Batch/ECE22BatchDsection/uri0mflevt8xishbn9v1.jpg"
      },
      {
        "name": "SHAIK IMRAN",
        "rollNo": "23475A0426",
        "parentNo": 9948360925,
        "studentNo": 9948360925,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267188/ECE22Batch/ECE22BatchDsection/nqehjsfxymmvtohgbcnl.jpg"
      },
      {
        "name": "MALLALA SRIKANTH",
        "rollNo": "23475A0427",
        "parentNo": 9505092267,
        "studentNo": 9652531040,
        "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723267188/ECE22Batch/ECE22BatchDsection/onve6c9zoa3m9cqmfjar.jpg"
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
    