document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    let StudentsInfoList = [ 
        // place your data here
        {
            "name": "ABHIRAM KUDARI",
            "rollNo": "21471A0501",
            "parentNo": 8919511400,
            "studentNo": 7207817154,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097112/CSE21Batch/CSE21BatchASection/slcfiqgxaebp7ut75jlx.jpg"
          },
          {
            "name": "AMEEN UL HASSAN KHAN",
            "rollNo": "21471A0502",
            "parentNo": 6309261715,
            "studentNo": 8688927285
          },
          {
            "name": "AMMIREDDY SRILATHA",
            "rollNo": "21471A0503",
            "parentNo": 6304431436,
            "studentNo": 6303186622,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097104/CSE21Batch/CSE21BatchASection/qbs03hy2e9a71vud7oxe.jpg"
          },
          {
            "name": "ARAVAPALLI VASAVI",
            "rollNo": "21471A0504",
            "parentNo": 9989276796,
            "studentNo": 7093760074,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097112/CSE21Batch/CSE21BatchASection/s8btluzv4tlgbyycr8ef.jpg"
          },
          {
            "name": "BALA RANGARAO MACHARLA",
            "rollNo": "21471A0505",
            "parentNo": 9849484852,
            "studentNo": 7207909030,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097112/CSE21Batch/CSE21BatchASection/y1dqlfotbhtksjryqya2.jpg"
          },
          {
            "name": "BODDUPALLI VENKATA SIVA RAMA KRISHNA",
            "rollNo": "21471A0507",
            "parentNo": 9032172458,
            "studentNo": 7981634940,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097111/CSE21Batch/CSE21BatchASection/daeu0jxxzdvwh3thty4v.jpg"
          },
          {
            "name": "BOGGAVARAPU CHARAN DEEPAK",
            "rollNo": "21471A0508",
            "parentNo": 7013777307,
            "studentNo": 7013777307,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097111/CSE21Batch/CSE21BatchASection/mfzx81lxytmabkw9cgyc.jpg"
          },
          {
            "name": "BOJJA SOBHARANI",
            "rollNo": "21471A0509",
            "parentNo": 7995611388,
            "studentNo": 7032212364,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097111/CSE21Batch/CSE21BatchASection/ztv8c4mxkvjrkahli74a.jpg"
          },
          {
            "name": "BOLLA VINAY POOJA",
            "rollNo": "21471A0510",
            "parentNo": 9885824193,
            "studentNo": 8008482356,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097111/CSE21Batch/CSE21BatchASection/cqo9asn4lstkl9dbuax0.jpg"
          },
          {
            "name": "BOLLAVARAM VENKATA SRINIVASULU",
            "rollNo": "21471A0511",
            "parentNo": 9618347388,
            "studentNo": 7997472931,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097111/CSE21Batch/CSE21BatchASection/m0dzwdbvfg1p9cv9rlew.jpg"
          },
          {
            "name": "BOLLINENI YASASWINI",
            "rollNo": "21471A0512",
            "parentNo": 8374682676,
            "studentNo": 8247626375,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097099/CSE21Batch/CSE21BatchASection/gfbi0zwbrvf1qz9sdmx4.png"
          },
          {
            "name": "BOMMU LAKSHMI PRASANNA",
            "rollNo": "21471A0513",
            "parentNo": 9494347423,
            "studentNo": 7780543823,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097111/CSE21Batch/CSE21BatchASection/ou9ynwmxw8fbl25wftu8.jpg"
          },
          {
            "name": "BORUGADDA SUPRIYA",
            "rollNo": "21471A0514",
            "parentNo": 7177377637,
            "studentNo": 9059907192,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097111/CSE21Batch/CSE21BatchASection/eayeqjnzk2f27bmuefil.jpg"
          },
          {
            "name": "CHALLA RAVI SANKAR",
            "rollNo": "21471A0515",
            "parentNo": 7842486859,
            "studentNo": 9160737429,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097098/CSE21Batch/CSE21BatchASection/ezi0lf036lyvzr8wpu0y.jpg"
          },
          {
            "name": "CHINNAM HARINI",
            "rollNo": "21471A0516",
            "parentNo": 9972611929,
            "studentNo": 7993974512,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097111/CSE21Batch/CSE21BatchASection/wvshf9pginru5kenqkdq.jpg"
          },
          {
            "name": "DASARI TRIVENI",
            "rollNo": "21471A0517",
            "parentNo": 7672083403,
            "studentNo": 8328018517,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097111/CSE21Batch/CSE21BatchASection/ikag0dd8jvtjfxbvpq23.jpg"
          },
          {
            "name": "DEEPIKA KARASALA",
            "rollNo": "21471A0518",
            "parentNo": 9989233568,
            "studentNo": 9989233568,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097110/CSE21Batch/CSE21BatchASection/wg68igpevp8rw1mufc4c.jpg"
          },
          {
            "name": "DIVVELA BALA SRI ABHIGNA",
            "rollNo": "21471A0519",
            "parentNo": 9030316792,
            "studentNo": 9989113288,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097110/CSE21Batch/CSE21BatchASection/jafbnm8u9otn1qvrd7dk.jpg"
          },
          {
            "name": "GANGADARI SATISH",
            "rollNo": "21471A0520",
            "parentNo": 9182342432,
            "studentNo": 8247433353,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097110/CSE21Batch/CSE21BatchASection/xdixaew81lzik1fqkfqf.jpg"
          },
          {
            "name": "GANGADHAR RONGALA",
            "rollNo": "21471A0521",
            "parentNo": 9515055642,
            "studentNo": 9182233993,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097110/CSE21Batch/CSE21BatchASection/ents9drqsvpk6eqiofji.png"
          },
          {
            "name": "GATTU THANUJA",
            "rollNo": "21471A0522",
            "parentNo": 9030137688,
            "studentNo": 9398763937,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097110/CSE21Batch/CSE21BatchASection/vcm5r1nxhq0lndxnbdrn.png"
          },
          {
            "name": "GOLLA AVINASH",
            "rollNo": "21471A0523",
            "parentNo": 9949260659,
            "studentNo": 6305617587,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097110/CSE21Batch/CSE21BatchASection/l6cgoxvotcb02p46prbz.png"
          },
          {
            "name": "GUDE LAVANYA",
            "rollNo": "21471A0524",
            "parentNo": 8106607586,
            "studentNo": 6305409482,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097110/CSE21Batch/CSE21BatchASection/s7fipz5uekkflfkzjxjc.png"
          },
          {
            "name": "GUNTUR GOWTHAM",
            "rollNo": "21471A0525",
            "parentNo": 6301673547,
            "studentNo": 8977443549,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097110/CSE21Batch/CSE21BatchASection/w5xcaax8t4jalrwx7o3i.png"
          },
          {
            "name": "GURRAM SIVA ANJALI",
            "rollNo": "21471A0526",
            "parentNo": 9440452700,
            "studentNo": 9573369415,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097109/CSE21Batch/CSE21BatchASection/o9yjd14zei0glifuucvs.png"
          },
          {
            "name": "INDRAVATI CHINNI",
            "rollNo": "21471A0527",
            "parentNo": 9949499675,
            "studentNo": 7207241584,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097109/CSE21Batch/CSE21BatchASection/wqym55pfl4weaazxewfc.png"
          },
          {
            "name": "KETHAVATH RAVI NAIK",
            "rollNo": "21471A0528",
            "parentNo": 8185907282,
            "studentNo": 8185907282,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097109/CSE21Batch/CSE21BatchASection/vbsnaejsacns5ndwxgge.png"
          },
          {
            "name": "KOLAKANI RAJU",
            "rollNo": "21471A0529",
            "parentNo": 9849439581,
            "studentNo": 7702024231,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097109/CSE21Batch/CSE21BatchASection/qvfsfnpoj8cmgkkwjjql.png"
          },
          {
            "name": "KOLLA TEJASWINI",
            "rollNo": "21471A0530",
            "parentNo": 9492901193,
            "studentNo": 9347473037,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097109/CSE21Batch/CSE21BatchASection/i39x2t70kljxeeav5mpt.png"
          },
          {
            "name": "KOTA VEERA RAGHAVA REDDY",
            "rollNo": "21471A0531",
            "parentNo": 9949364817,
            "studentNo": 9676598569,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097109/CSE21Batch/CSE21BatchASection/cg15ievq8vv1vgtzarli.png"
          },
          {
            "name": "KUNCHAPU AKHIL KUMAR",
            "rollNo": "21471A0532",
            "parentNo": 9346897277,
            "studentNo": 9346897227,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097109/CSE21Batch/CSE21BatchASection/cbpatvm2bj0axhf2dhtd.png"
          },
          {
            "name": "KURRA MAHESH BABU",
            "rollNo": "21471A0533",
            "parentNo": 8125435154,
            "studentNo": 8897068361,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097108/CSE21Batch/CSE21BatchASection/y9ldqtvdsa7boji67oxi.png"
          },
          {
            "name": "MEKALA GOPI MANIKANTA",
            "rollNo": "21471A0534",
            "parentNo": 9666552265,
            "studentNo": 9849322656,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097108/CSE21Batch/CSE21BatchASection/jjnyokt8wy2lkxxdbgv8.png"
          },
          {
            "name": "MELLACHERUVU V V NAGA SHANMUKHA SAHITHI",
            "rollNo": "21471A0535",
            "parentNo": 9030755740,
            "studentNo": 8919478774,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097108/CSE21Batch/CSE21BatchASection/vmwoc53vpaskrljedb4w.png"
          },
          {
            "name": "NAGENDRA BABU TAMMISETTI",
            "rollNo": "21471A0537",
            "parentNo": 7286044867,
            "studentNo": 7286044867,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097108/CSE21Batch/CSE21BatchASection/mwvkvllknrnofoltnmyq.png"
          },
          {
            "name": "NAKKA ANNAPURNA",
            "rollNo": "21471A0538",
            "parentNo": 9963279172,
            "studentNo": 7702351758,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097108/CSE21Batch/CSE21BatchASection/znrh56xkulbbsw2wxnol.png"
          },
          {
            "name": "NALLAMEKALA GOPI KRISHNA",
            "rollNo": "21471A0539",
            "parentNo": 9666063504,
            "studentNo": 7036751611,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097108/CSE21Batch/CSE21BatchASection/nncfbj35esp78m09zuzr.png"
          },
          {
            "name": "NARRA DIVYA",
            "rollNo": "21471A0540",
            "parentNo": 9492466433,
            "studentNo": 9676612392,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097108/CSE21Batch/CSE21BatchASection/q3kanxrgoizmdgiksjia.png"
          },
          {
            "name": "NUTI REVANTH",
            "rollNo": "21471A0541",
            "parentNo": 8186864522,
            "studentNo": 8186864522,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097107/CSE21Batch/CSE21BatchASection/vi193xohkfodvh38hikx.png"
          },
          {
            "name": "PANDI JYOSHNADEVI",
            "rollNo": "21471A0542",
            "parentNo": 9948836398,
            "studentNo": 9392610694,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097107/CSE21Batch/CSE21BatchASection/miqb9y6yclqozlpucyox.png"
          },
          {
            "name": "PARUCHURI SWETHA LAKSHMI",
            "rollNo": "21471A0543",
            "parentNo": 8499098680,
            "studentNo": 9347155061,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097107/CSE21Batch/CSE21BatchASection/oqtjekbjhhw4wbsujxtq.png"
          },
          {
            "name": "PEDDI KAVYA",
            "rollNo": "21471A0544",
            "parentNo": 9704431908,
            "studentNo": 9704735905,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097107/CSE21Batch/CSE21BatchASection/xu8roeivg9m7d5jwxnfo.png"
          },
          {
            "name": "PENDELA CHENCHU KOUSHIK",
            "rollNo": "21471A0545",
            "parentNo": 9440016399,
            "studentNo": 7780660803,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097107/CSE21Batch/CSE21BatchASection/uwo4kvger29jgqslfwlp.png"
          },
          {
            "name": "POGULA SAI SRI VARSHA",
            "rollNo": "21471A0546",
            "parentNo": 9866804211,
            "studentNo": 9618052761,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097107/CSE21Batch/CSE21BatchASection/h4mfok1xljgozzlowt1s.png"
          },
          {
            "name": "POLIMERA BHAGYA LAKSHMI",
            "rollNo": "21471A0547",
            "parentNo": 9989770670,
            "studentNo": 7780470095,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097107/CSE21Batch/CSE21BatchASection/tjjvv0wc3c0pc63fkfz3.png"
          },
          {
            "name": "PONNAM VENKATA SAI TEJA",
            "rollNo": "21471A0548",
            "parentNo": 9490859769,
            "studentNo": 8179473485,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097106/CSE21Batch/CSE21BatchASection/fpbwgdmb6ejp8ullju5h.png"
          },
          {
            "name": "POOJITHA BANDI",
            "rollNo": "21471A0549",
            "parentNo": 7702471949,
            "studentNo": 9398187082,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097107/CSE21Batch/CSE21BatchASection/bermtagpmd1p7lxz6uwh.png"
          },
          {
            "name": "RAMAVATH DHANDU NAIK",
            "rollNo": "21471A0550",
            "parentNo": 8143228982,
            "studentNo": 8341295342,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097106/CSE21Batch/CSE21BatchASection/k6udfo2du8ucdy2wm3ba.png"
          },
          {
            "name": "SANKURU SAI LATHA",
            "rollNo": "21471A0551",
            "parentNo": 9494045249,
            "studentNo": 8919514259,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097106/CSE21Batch/CSE21BatchASection/ubg2lcepxvuhinj0rzur.png"
          },
          {
            "name": "SANNITHI BHAVANI",
            "rollNo": "21471A0552",
            "parentNo": 9704831601,
            "studentNo": 7793941601,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097105/CSE21Batch/CSE21BatchASection/coett01bujvd6mk1s2tp.png"
          },
          {
            "name": "SHAIK HAZARE KHAJA MOHIDDIN",
            "rollNo": "21471A0554",
            "parentNo": 9553225903,
            "studentNo": 7569060153,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097106/CSE21Batch/CSE21BatchASection/wm36qa7zkmlp3fuiycgh.png"
          },
          {
            "name": "SHAIK SAMEERA",
            "rollNo": "21471A0555",
            "parentNo": 9515434462,
            "studentNo": 8121466114,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097106/CSE21Batch/CSE21BatchASection/sktgaqv2c1s7ojiwbxig.png"
          },
          {
            "name": "SHAIK SHARUKH",
            "rollNo": "21471A0556",
            "parentNo": 9849201092,
            "studentNo": 9849201092,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097105/CSE21Batch/CSE21BatchASection/iekkqw7gp6jsanbzau20.png"
          },
          {
            "name": "SHAIK YALAVARTHI IJAZ AHAMAD",
            "rollNo": "21471A0557",
            "parentNo": 8897131555,
            "studentNo": 7794951864,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097106/CSE21Batch/CSE21BatchASection/csmhkbenhn0wnbthiz6k.png"
          },
          {
            "name": "SINDE VENKATA SAPTHA GIRISH",
            "rollNo": "21471A0558",
            "parentNo": 8886988170,
            "studentNo": 8247391167,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097101/CSE21Batch/CSE21BatchASection/hbf8hrfsykvjmvtgauy6.png"
          },
          {
            "name": "SINGAM VENKATA SATYA VIJYA GANESH",
            "rollNo": "21471A0559",
            "parentNo": 957303152,
            "studentNo": 7675859516,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097102/CSE21Batch/CSE21BatchASection/wwdfkms8sg8rdqwv1dpm.png"
          },
          {
            "name": "SIVANAGENDRA AKURATHI",
            "rollNo": "21471A0560",
            "parentNo": 9666872883,
            "studentNo": 8096137414,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097100/CSE21Batch/CSE21BatchASection/oflvzbxhuqklo4pn8r3y.png"
          },
          {
            "name": "SRINIVASA KALYAN RAM KANKANALA",
            "rollNo": "21471A0561",
            "parentNo": 9490638933,
            "studentNo": 7672058597,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097099/CSE21Batch/CSE21BatchASection/fowx2bws3ucfulukklvf.png"
          },
          {
            "name": "SRIPATHI CHANDANA",
            "rollNo": "21471A0562",
            "parentNo": 9502436754,
            "studentNo": 7995213575,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097104/CSE21Batch/CSE21BatchASection/naop28twjxz5rbvjnq7l.png"
          },
          {
            "name": "TANNIRU HARSHITHA",
            "rollNo": "21471A0563",
            "parentNo": 9949792889,
            "studentNo": 8121814391,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097104/CSE21Batch/CSE21BatchASection/ydgvvrhmkvcyqgyd33iw.png"
          },
          {
            "name": "THALAPANENI SUMA DURGA",
            "rollNo": "21471A0564",
            "parentNo": 7569880294,
            "studentNo": 9912984574,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097104/CSE21Batch/CSE21BatchASection/gbejmikwag8k6juzdpix.png"
          },
          {
            "name": "TUMPALA MAHITH",
            "rollNo": "21471A0565",
            "parentNo": 7330797317,
            "studentNo": 7386226605,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097102/CSE21Batch/CSE21BatchASection/v65fwx95w3amcahzc9nu.png"
          },
          {
            "name": "VALLEPU SRINIVAS",
            "rollNo": "21471A0566",
            "parentNo": 9908096050,
            "studentNo": 8897668121,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097104/CSE21Batch/CSE21BatchASection/lfufvfvcylsmpi6li41w.png"
          },
          {
            "name": "VEMULA SIREESHA",
            "rollNo": "21471A0567",
            "parentNo": 8106474230,
            "studentNo": 8125856938,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097102/CSE21Batch/CSE21BatchASection/mjudahi4ke5t4fdgwoxh.png"
          },
          {
            "name": "VENKATA ARAVIND TUNUGUNTLA",
            "rollNo": "21471A0568",
            "parentNo": 9704862468,
            "studentNo": 7207317055,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097101/CSE21Batch/CSE21BatchASection/nfiazarsizgjvb9cfrkx.png"
          },
          {
            "name": "YADALA SANDHYA",
            "rollNo": "21471A0569",
            "parentNo": 9100193465,
            "studentNo": 9603590685,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097100/CSE21Batch/CSE21BatchASection/eqgscdjt0q8u2qwmk1ou.png"
          },
          {
            "name": "YALLANTI LIKHITH PRASANNA KUMAR",
            "rollNo": "21471A0570",
            "parentNo": 9642762917,
            "studentNo": 8019964911,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097100/CSE21Batch/CSE21BatchASection/ojwfpo9j9lss7xswrpww.png"
          },
          {
            "name": "ABHISHIKTH DOLA",
            "rollNo": "21471A0571",
            "parentNo": 9701487669,
            "studentNo": 9652477669,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097142/CSE21Batch/CSE21BatchBSection/jhlvbwdshnr5qr7ls2kw.png"
          },
          {
            "name": "AINAVOLU MANVITHA",
            "rollNo": "21471A0572",
            "parentNo": 9248458488,
            "studentNo": 9391979915,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097145/CSE21Batch/CSE21BatchBSection/rkns2tj2s0jgzeudr61v.png"
          },
          {
            "name": "AMBATI LAKSHMI NIHARIKA",
            "rollNo": "21471A0573",
            "parentNo": 7794911712,
            "studentNo": 6309701801,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097139/CSE21Batch/CSE21BatchBSection/dhkfd4dwt9xbdrozs1is.png"
          },
          {
            "name": "BANDARU ANJI BABU",
            "rollNo": "21471A0574",
            "parentNo": 9502968425,
            "studentNo": 7207458114,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097138/CSE21Batch/CSE21BatchBSection/mh0mcs9cn61ewhudqwrt.png"
          },
          {
            "name": "BETHAPUDI KEERTHI",
            "rollNo": "21471A0575",
            "parentNo": 7337490977,
            "studentNo": 7995927184,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097138/CSE21Batch/CSE21BatchBSection/lhs2ojuwbwfo9gkud8bw.png"
          },
          {
            "name": "BHAVANA KOLIPAKA",
            "rollNo": "21471A0576",
            "parentNo": 7989307520,
            "studentNo": 8374667074,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097138/CSE21Batch/CSE21BatchBSection/jxdqd7f8o3hh4vf8jw6y.png"
          },
          {
            "name": "BOLLA LAKSHMI VARSHA",
            "rollNo": "21471A0577",
            "parentNo": 9666869413,
            "studentNo": 9676103193,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097138/CSE21Batch/CSE21BatchBSection/rbip81b46alhycwd5cmv.png"
          },
          {
            "name": "BOLNEDI SUHAS",
            "rollNo": "21471A0578",
            "parentNo": 9676736189,
            "studentNo": 9948290951,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097137/CSE21Batch/CSE21BatchBSection/rbkn6cz7e2bjkszl7ezd.png"
          },
          {
            "name": "CHANDRA SEKHAR SAKINALA",
            "rollNo": "21471A0579",
            "parentNo": 7989981416,
            "studentNo": 7842472589,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097137/CSE21Batch/CSE21BatchBSection/ybpejxspgniv0vpz0gg7.png"
          },
          {
            "name": "CHINNAM JANAKI DEVI",
            "rollNo": "21471A0580",
            "parentNo": 9849176932,
            "studentNo": 9494021841,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097137/CSE21Batch/CSE21BatchBSection/islrgwbtowr3cnaa7cdt.png"
          },
          {
            "name": "DOKKU NAGA REVATHI",
            "rollNo": "21471A0581",
            "parentNo": 9030286569,
            "studentNo": 7731226108,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097138/CSE21Batch/CSE21BatchBSection/q0tk4ejv0asstfp7egwc.png"
          },
          {
            "name": "DOPPALAPUDI RICKY",
            "rollNo": "21471A0582",
            "parentNo": 9550222219,
            "studentNo": 7671866803,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097136/CSE21Batch/CSE21BatchBSection/qsdgl7sfowmrxoej5au6.png"
          },
          {
            "name": "DUGGINENI SATISH",
            "rollNo": "21471A0583",
            "parentNo": 9704562021,
            "studentNo": 9014795499,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097136/CSE21Batch/CSE21BatchBSection/bq45yihdny8f7d4gv7fb.png"
          },
          {
            "name": "DUGGIREDDY DHANA LAKSHMI",
            "rollNo": "21471A0584",
            "parentNo": 8374390245,
            "studentNo": 9392316128,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097136/CSE21Batch/CSE21BatchBSection/nnwdszxodfbfreoz5uis.png"
          },
          {
            "name": "DULLA TEJA CHARAN",
            "rollNo": "21471A0585",
            "parentNo": 9502311924,
            "studentNo": 9949611924,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097136/CSE21Batch/CSE21BatchBSection/pyafsdpexjly4ddtcigw.png"
          },
          {
            "name": "GORANTLA GAYATHRI",
            "rollNo": "21471A0586",
            "parentNo": 9951621733,
            "studentNo": 8309519609,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097135/CSE21Batch/CSE21BatchBSection/hrjrsgym58wuatoehwav.png"
          },
          {
            "name": "DASARI JAGADEESH",
            "rollNo": "21471A0587",
            "parentNo": 8897118373,
            "studentNo": 9866511017
          },
          {
            "name": "GUDE CHAITANYA",
            "rollNo": "21471A0588",
            "parentNo": 8978695247,
            "studentNo": 8790949203,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097135/CSE21Batch/CSE21BatchBSection/xsrodgpgfxywx6iryviv.png"
          },
          {
            "name": "GURRAM LAKSHMI VARA PRASAD",
            "rollNo": "21471A0589",
            "parentNo": 9490239630,
            "studentNo": 9885196431,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097135/CSE21Batch/CSE21BatchBSection/gflycjvskgtidyvzyjmg.png"
          },
          {
            "name": "KADIYALA NIKHITHA",
            "rollNo": "21471A0590",
            "parentNo": 6304523558,
            "studentNo": 8341969047,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097135/CSE21Batch/CSE21BatchBSection/us9g2wjip4vrgfrfs1ys.png"
          },
          {
            "name": "KALYANAM JAHNAVI SAI PRIYA",
            "rollNo": "21471A0591",
            "parentNo": 7075043123,
            "studentNo": 8341118830,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097134/CSE21Batch/CSE21BatchBSection/iniu3j5jltfvoatg7oll.png"
          },
          {
            "name": "KANNEGANTI NAVYA",
            "rollNo": "21471A0592",
            "parentNo": 9493054262,
            "studentNo": 9493054262,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097134/CSE21Batch/CSE21BatchBSection/ziyvob3sqnxumlqr02e8.png"
          },
          {
            "name": "KAPU SUVARSHITHA",
            "rollNo": "21471A0593",
            "parentNo": 9866186158,
            "studentNo": 7981943291,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097134/CSE21Batch/CSE21BatchBSection/a0c21ih07n28bevrv8hc.png"
          },
          {
            "name": "KARNA ESWAR KALYANI",
            "rollNo": "21471A0594",
            "parentNo": 7207889488,
            "studentNo": 6304769738,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097134/CSE21Batch/CSE21BatchBSection/nzxukljsnef3syllvgl1.png"
          },
          {
            "name": "KASULA PRATHIMA",
            "rollNo": "21471A0595",
            "parentNo": 8555822733,
            "studentNo": 9014985837,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097134/CSE21Batch/CSE21BatchBSection/awgf35xorsr4f87egyor.png"
          },
          {
            "name": "KATRAGADDA SOMNATH",
            "rollNo": "21471A0596",
            "parentNo": 6302723393,
            "studentNo": 6302723393,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097133/CSE21Batch/CSE21BatchBSection/ty7dsd17n7lj2j9a9wi6.png"
          },
          {
            "name": "KAVALI MAHESH",
            "rollNo": "21471A0597",
            "parentNo": 9849772646,
            "studentNo": 9490458299,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097133/CSE21Batch/CSE21BatchBSection/ykhndp652bjnwlgsbqxe.png"
          },
          {
            "name": "KOLLA VAMSI KRISHNA",
            "rollNo": "21471A0598",
            "parentNo": 8500338519,
            "studentNo": 9110377541,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097133/CSE21Batch/CSE21BatchBSection/fguetch4tr6bxesljzea.png"
          },
          {
            "name": "KURAKULA GUNA SCHEKAR",
            "rollNo": "21471A0599",
            "parentNo": 6281813327,
            "studentNo": 8247529158,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097133/CSE21Batch/CSE21BatchBSection/bxrljfdf56nyvhfknxht.png"
          },
          {
            "name": "LINGALA BRAHMAIAH",
            "rollNo": "21471A05A0",
            "parentNo": 9963331782,
            "studentNo": 9573564417,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097132/CSE21Batch/CSE21BatchBSection/nypv0ius6mw9qrrmttuq.png"
          },
          {
            "name": "MADDUKURI MANOHAR",
            "rollNo": "21471A05A1",
            "parentNo": 8639598232,
            "studentNo": 9014772921,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097132/CSE21Batch/CSE21BatchBSection/l2xq8bwqrb42yon8eilb.png"
          },
          {
            "name": "MODEPALLI DILEEP KUMAR",
            "rollNo": "21471A05A2",
            "parentNo": 8106755092,
            "studentNo": 7013838396,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097132/CSE21Batch/CSE21BatchBSection/w0w27lthzn8owmoah09b.png"
          },
          {
            "name": "MODHEPALLI GAYATHRI",
            "rollNo": "21471A05A3",
            "parentNo": 9000022536,
            "studentNo": 7013478147,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097132/CSE21Batch/CSE21BatchBSection/mqx0tv6plar3yxpr44qp.png"
          },
          {
            "name": "MUKKAMALLA ARAVIND",
            "rollNo": "21471A05A4",
            "parentNo": 7569926896,
            "studentNo": 8919445300,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097132/CSE21Batch/CSE21BatchBSection/jkqp8ondnmallcqvilav.png"
          },
          {
            "name": "MUNAGALA KAVYANJALI",
            "rollNo": "21471A05A5",
            "parentNo": 9440095848,
            "studentNo": 9154744044,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097132/CSE21Batch/CSE21BatchBSection/kgwlza3a3qqlai7li4f8.png"
          },
          {
            "name": "MUTHIREDDY ASWINIDUTH",
            "rollNo": "21471A05A6",
            "parentNo": 6309725636,
            "studentNo": 9948290951,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097131/CSE21Batch/CSE21BatchBSection/xg7vbsi9nx9eywmiglk0.png"
          },
          {
            "name": "MUTHULURI THIRUMALA DEVI",
            "rollNo": "21471A05A7",
            "parentNo": 9177147852,
            "studentNo": 6300239363,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097131/CSE21Batch/CSE21BatchBSection/jkk9hpops8m61rgqpjht.png"
          },
          {
            "name": "NUTHALAPATI SRIKANTH",
            "rollNo": "21471A05A8",
            "parentNo": 9866678455,
            "studentNo": 9676384579,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097131/CSE21Batch/CSE21BatchBSection/dmdfkjbfki8djqmndsok.png"
          },
          {
            "name": "PARCHURI MAHESH BABU",
            "rollNo": "21471A05B0",
            "parentNo": 9573908015,
            "studentNo": 7386023696,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097130/CSE21Batch/CSE21BatchBSection/oqqwurfwdwx0i90egep8.png"
          },
          {
            "name": "PASUPULETI MURALI PRIYA",
            "rollNo": "21471A05B1",
            "parentNo": 9346129585,
            "studentNo": 9346129585,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097122/CSE21Batch/CSE21BatchBSection/rnsnnxfrwtunn6iu0mzr.jpg"
          },
          {
            "name": "PERUMALLA SNEHA KUMARI",
            "rollNo": "21471A05B2",
            "parentNo": 6309096036,
            "studentNo": 7993380656,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097130/CSE21Batch/CSE21BatchBSection/cexnuusgkzlpczljgds7.png"
          },
          {
            "name": "POLEPALLI UDAY KIRAN",
            "rollNo": "21471A05B3",
            "parentNo": 9346494713,
            "studentNo": 9346494713,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097130/CSE21Batch/CSE21BatchBSection/ubg7gmo4ziyykxivbt56.png"
          },
          {
            "name": "PULIBANDLA SAI KUMAR",
            "rollNo": "21471A05B4",
            "parentNo": 8977781532,
            "studentNo": 8341378358,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097129/CSE21Batch/CSE21BatchBSection/jo44no9hzcwxryxrulmk.png"
          },
          {
            "name": "RAJASEKHAR POLURI",
            "rollNo": "21471A05B5",
            "parentNo": 9491673525,
            "studentNo": 7207317436,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097129/CSE21Batch/CSE21BatchBSection/xawo37sqwstcdp73fzip.png"
          },
          {
            "name": "RAMBABU YALAGALA",
            "rollNo": "21471A05B6",
            "parentNo": 9392307004,
            "studentNo": 9502351327
          },
          {
            "name": "RAVI LAKSHMI SRI HARSHA",
            "rollNo": "21471A05B7",
            "parentNo": 8121802772,
            "studentNo": 8328075621,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097129/CSE21Batch/CSE21BatchBSection/xtyfa82ysxv6cbqlvqz5.png"
          },
          {
            "name": "SEVA NEELIMA",
            "rollNo": "21471A05B8",
            "parentNo": 9014664578,
            "studentNo": 8106651177,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097128/CSE21Batch/CSE21BatchBSection/egj8ul2zpdqzau5kokrx.png"
          },
          {
            "name": "SHAIK CHAND ASMI",
            "rollNo": "21471A05B9",
            "parentNo": 9550363748,
            "studentNo": 9550363748,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097128/CSE21Batch/CSE21BatchBSection/r7j5jxxitzzkkok4o7sa.png"
          },
          {
            "name": "SHAIK HAFIJA",
            "rollNo": "21471A05C0",
            "parentNo": 9000619871,
            "studentNo": 8639538909,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097128/CSE21Batch/CSE21BatchBSection/qo8pl2jus7exiaodqnlr.png"
          },
          {
            "name": "SHAIK MUBEENA",
            "rollNo": "21471A05C1",
            "parentNo": 9966909299,
            "studentNo": 9866793665,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097127/CSE21Batch/CSE21BatchBSection/s4jg0toclh9mtblxnfn7.png"
          },
          {
            "name": "SHAIK MUNAF",
            "rollNo": "21471A05C2",
            "parentNo": 8074459171,
            "studentNo": 7569497407,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097127/CSE21Batch/CSE21BatchBSection/mujx2bln3bxuf5ww6elr.png"
          },
          {
            "name": "SHAIK NAJEER",
            "rollNo": "21471A05C3",
            "parentNo": 9963651244,
            "studentNo": 7780545231,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097131/CSE21Batch/CSE21BatchBSection/nyxifny9jtncdyn8x4rl.png"
          },
          {
            "name": "SHAIK RIZWANA",
            "rollNo": "21471A05C4",
            "parentNo": 9949460411,
            "studentNo": 9652372519,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097128/CSE21Batch/CSE21BatchBSection/qo8pl2jus7exiaodqnlr.png"
          },
          {
            "name": "SHAIK YALAVARTHI ALIMOON",
            "rollNo": "21471A05C5",
            "parentNo": 8897131555,
            "studentNo": 7893039064,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097126/CSE21Batch/CSE21BatchBSection/wvinyv3jtilbubk9pbyd.png"
          },
          {
            "name": "SHAIK ZAHEED HUSAIN",
            "rollNo": "21471A05C6",
            "parentNo": 8374333689,
            "studentNo": 9603913077,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097126/CSE21Batch/CSE21BatchBSection/vbzhflgdnhptlk0dsulz.png"
          },
          {
            "name": "SISTLA V S MANIKANTA ROHIT",
            "rollNo": "21471A05C7",
            "parentNo": 9440250357,
            "studentNo": 9182209996,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097125/CSE21Batch/CSE21BatchBSection/kx8wl1t0lepf2lqr6prk.png"
          },
          {
            "name": "SRAVANI MADAGUNDA",
            "rollNo": "21471A05C8",
            "parentNo": 9989181274,
            "studentNo": 6309196691,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097125/CSE21Batch/CSE21BatchBSection/doyluj1fnbq31buxgwmx.png"
          },
          {
            "name": "SUNKARI KAVYA",
            "rollNo": "21471A05C9",
            "parentNo": 9866402586,
            "studentNo": 8019355008,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097125/CSE21Batch/CSE21BatchBSection/mtdertnsobjd9vtklz4q.png"
          },
          {
            "name": "SUNKIREDDY MADHAVI",
            "rollNo": "21471A05D0",
            "parentNo": 8142901545,
            "studentNo": 8341151983,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097125/CSE21Batch/CSE21BatchBSection/aljdcmnjczqcd3wvvxxc.png"
          },
          {
            "name": "SYED RIZWANA",
            "rollNo": "21471A05D1",
            "parentNo": 9908743790,
            "studentNo": 9908743790,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097125/CSE21Batch/CSE21BatchBSection/j1afgrs4utow4ohtn4ih.png"
          },
          {
            "name": "TATA SUMANTH",
            "rollNo": "21471A05D2",
            "parentNo": 7569331820,
            "studentNo": 8247322869,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097124/CSE21Batch/CSE21BatchBSection/k2stjydqbzwtx94ege4m.png"
          },
          {
            "name": "TEJA SRI VANKAYALA",
            "rollNo": "21471A05D3",
            "parentNo": 9000114421,
            "studentNo": 8074787879,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097124/CSE21Batch/CSE21BatchBSection/ez7kicu17jdojviu5eui.png"
          },
          {
            "name": "THALLAM NAVEEN SATYA",
            "rollNo": "21471A05D4",
            "parentNo": 9908844317,
            "studentNo": 9441458178,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097124/CSE21Batch/CSE21BatchBSection/m1kaczfzevuikjdyi15g.png"
          },
          {
            "name": "VATTIKUTI RAKESH KUMAR",
            "rollNo": "21471A05D5",
            "parentNo": 8790442788,
            "studentNo": 6300415315,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097124/CSE21Batch/CSE21BatchBSection/act2ialllt5rhnpcwqgf.png"
          },
          {
            "name": "VELCHURI BALA HARSHITHA",
            "rollNo": "21471A05D6",
            "parentNo": 9390795346,
            "studentNo": 9908565165,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097123/CSE21Batch/CSE21BatchBSection/tuwjecn2ebgxb42gdczz.png"
          },
          {
            "name": "VENKATA PAVAN KUMAR LAGHUMAVARAPU",
            "rollNo": "21471A05D7",
            "parentNo": 9948029340,
            "studentNo": 9849659692,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097123/CSE21Batch/CSE21BatchBSection/psnpoz8v4n94hkrqgms9.png"
          },
          {
            "name": "VENKAYAMMA AKKAPALLI",
            "rollNo": "21471A05D8",
            "parentNo": 9177136838,
            "studentNo": 9177136838,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097123/CSE21Batch/CSE21BatchBSection/ytcxltgagjzfz4udhnkh.png"
          },
          {
            "name": "YARLAGADDA MADHAVI",
            "rollNo": "21471A05D9",
            "parentNo": 9010283375,
            "studentNo": 9010283375,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097123/CSE21Batch/CSE21BatchBSection/frpvdw3lxfnammdf0dzl.png"
          },
          {
            "name": "YENDLURI SOWMYA",
            "rollNo": "21471A05E0",
            "parentNo": 9505928164,
            "studentNo": 9705632071,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097123/CSE21Batch/CSE21BatchBSection/c3bxg6bt4mkjdowdhrhg.png"
          },
          {
            "name": "AILA MANOGNA",
            "rollNo": "21471A05E1",
            "parentNo": 8121418884,
            "studentNo": 9059266974,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097179/CSE21Batch/CSE21BatchCSection/vmvld2glbvg3pvqyusgb.png"
          },
          {
            "name": "VEMA JHANSI LAKSHMI SIVA NISHITHA",
            "rollNo": "21471A05E2",
            "parentNo": 9000409992,
            "studentNo": 7997560560,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097166/CSE21Batch/CSE21BatchCSection/aldhggen3reu0qjpbunk.png"
          },
          {
            "name": "AVULA RAMU",
            "rollNo": "21471A05E3",
            "parentNo": 7989571870,
            "studentNo": 9676336499,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097163/CSE21Batch/CSE21BatchCSection/jk2sjrk3hc59joccumz0.png"
          },
          {
            "name": "BABU TALARI",
            "rollNo": "21471A05E4",
            "parentNo": 8978559156,
            "studentNo": 7993668185,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097179/CSE21Batch/CSE21BatchCSection/uz6vxaxuzdvnfhpj86s9.png"
          },
          {
            "name": "BOGYAM INDU",
            "rollNo": "21471A05E5",
            "parentNo": 9553040526,
            "studentNo": 9100584945
          },
          {
            "name": "CHAGALA SUNITHA",
            "rollNo": "21471A05E6",
            "parentNo": 9989391048,
            "studentNo": 7993866434,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097179/CSE21Batch/CSE21BatchCSection/txmxqder8x8rsmgzva5m.png"
          },
          {
            "name": "DIVVELA CHANDU VENKATESWARA GUPTHA",
            "rollNo": "21471A05E7",
            "parentNo": 9010299246,
            "studentNo": 9177548531,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097178/CSE21Batch/CSE21BatchCSection/ev3vx9a6wza0un8gaszz.png"
          },
          {
            "name": "DONDAPATI THARUN KUMAR",
            "rollNo": "21471A05E8",
            "parentNo": 6302382742,
            "studentNo": 7386100423,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097178/CSE21Batch/CSE21BatchCSection/hl7arv6n1pxgey749uec.png"
          },
          {
            "name": "GADE SALINI",
            "rollNo": "21471A05E9",
            "parentNo": 9676967117,
            "studentNo": 8522819117,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097178/CSE21Batch/CSE21BatchCSection/k7fzfmtxn2k3yqq1vsyl.png"
          },
          {
            "name": "GANGAVARAPU JASHUVA",
            "rollNo": "21471A05F0",
            "parentNo": 9908338007,
            "studentNo": 9652611281,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097178/CSE21Batch/CSE21BatchCSection/mj9k2npqffgzaaqmseuy.png"
          },
          {
            "name": "GAYATHRI CHENNUPALLI",
            "rollNo": "21471A05F1",
            "parentNo": 7075624068,
            "studentNo": 9573087485,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097178/CSE21Batch/CSE21BatchCSection/fq2mcbbgzq1zwbxojb24.png"
          },
          {
            "name": "GOGADA SIRISHA",
            "rollNo": "21471A05F2",
            "parentNo": 8978589893,
            "studentNo": 8125718544,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097178/CSE21Batch/CSE21BatchCSection/co3rik2nvhqko8bih8ix.png"
          },
          {
            "name": "GORANTLA LAKSHMI TIRUMALA",
            "rollNo": "21471A05F3",
            "parentNo": 9704438039,
            "studentNo": 8008125965,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097178/CSE21Batch/CSE21BatchCSection/nhezfwrtuqgaylzhbjts.png"
          },
          {
            "name": "GUDIPUDI SONY",
            "rollNo": "21471A05F4",
            "parentNo": 9550595450,
            "studentNo": 7601066678,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097177/CSE21Batch/CSE21BatchCSection/eecb12z9ujtkjwwedpay.png"
          },
          {
            "name": "GUNTAKALA ANURADHA",
            "rollNo": "21471A05F5",
            "parentNo": 9390626591,
            "studentNo": 7036465042,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097177/CSE21Batch/CSE21BatchCSection/nhtmrtkai10mdgglcvry.png"
          },
          {
            "name": "GURAZALA CHAITANYA NANDA MOHAN",
            "rollNo": "21471A05F6",
            "parentNo": 9948920148,
            "studentNo": 8008720148,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097177/CSE21Batch/CSE21BatchCSection/qscxy2ndaox072urncti.png"
          },
          {
            "name": "HARI SIVA SWARNA",
            "rollNo": "21471A05F7",
            "parentNo": 9963294647,
            "studentNo": 8688934032,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097177/CSE21Batch/CSE21BatchCSection/xdxu79u7h9djtjvecbvb.png"
          },
          {
            "name": "JAMMIGUMPULA LAKSHMI NARAYANA",
            "rollNo": "21471A05F8",
            "parentNo": 9121496368,
            "studentNo": 9121496368,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097177/CSE21Batch/CSE21BatchCSection/bo4tdq9mgfkaty1zaog5.png"
          },
          {
            "name": "JUJJURI SAI",
            "rollNo": "21471A05F9",
            "parentNo": 9885394354,
            "studentNo": 7989135700,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097177/CSE21Batch/CSE21BatchCSection/q3rgtpzpmykxotymn4ld.png"
          },
          {
            "name": "JUPALLI RAJESH",
            "rollNo": "21471A05G0",
            "parentNo": 7702877082,
            "studentNo": 7794992826,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097177/CSE21Batch/CSE21BatchCSection/hgzjrnsicmwndswn0zlo.png"
          },
          {
            "name": "KALIGIRI HARSHA VARDHAN",
            "rollNo": "21471A05G1",
            "parentNo": 9705038036,
            "studentNo": 7997829186,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097176/CSE21Batch/CSE21BatchCSection/fifmvfzpsuk8alxoqbmp.png"
          },
          {
            "name": "KANDULA RAJESH",
            "rollNo": "21471A05G2",
            "parentNo": 9160790179,
            "studentNo": 9849428625,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097176/CSE21Batch/CSE21BatchCSection/ulhrzrxoeljdj2rusgiq.png"
          },
          {
            "name": "KASA SIVA SANKAR",
            "rollNo": "21471A05G3",
            "parentNo": 9848890866,
            "studentNo": 7842495985,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097176/CSE21Batch/CSE21BatchCSection/mbyczb6qzjl34scu5hh0.png"
          },
          {
            "name": "KASTHALA HAGGAYI",
            "rollNo": "21471A05G4",
            "parentNo": 9000124780,
            "studentNo": 6309741015,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097175/CSE21Batch/CSE21BatchCSection/ahwoge7qp5aac2q4rnpm.png"
          },
          {
            "name": "KATARI VENKATA SIVA RAMA KRISHNA",
            "rollNo": "21471A05G5",
            "parentNo": 9908193511,
            "studentNo": 7702783201,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097175/CSE21Batch/CSE21BatchCSection/mfyv6ipmtnhrobbav1bz.png"
          },
          {
            "name": "KATTIRI SANTHOSHKUMAR",
            "rollNo": "21471A05G6",
            "parentNo": 9490447175,
            "studentNo": 8978468025,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097175/CSE21Batch/CSE21BatchCSection/e3yjq5wf9wrvaq9hmlwy.png"
          },
          {
            "name": "KONAKALLA SAI SURYA PAVAN KUMAR",
            "rollNo": "21471A05G7",
            "parentNo": 9346147451,
            "studentNo": 9398819796,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097176/CSE21Batch/CSE21BatchCSection/h4adqjdzzmc1qbhb7pem.png"
          },
          {
            "name": "KONDEPOGU YUVASRI",
            "rollNo": "21471A05G8",
            "parentNo": 9959366148,
            "studentNo": 9032273874,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097174/CSE21Batch/CSE21BatchCSection/hvwcrodiwbyvxeodryue.png"
          },
          {
            "name": "KONGARA ABHINAYA",
            "rollNo": "21471A05G9",
            "parentNo": 9948620985,
            "studentNo": 9550346891,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097174/CSE21Batch/CSE21BatchCSection/mxem8kbxj4w4ok5apcmj.png"
          },
          {
            "name": "KOTA CHANDRA SEKHAR",
            "rollNo": "21471A05H0",
            "parentNo": 9502507307,
            "studentNo": 9502507307,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097174/CSE21Batch/CSE21BatchCSection/lnoworvri9apbnhnydeb.png"
          },
          {
            "name": "KOTHAMASU THRYLOKYA",
            "rollNo": "21471A05H1",
            "parentNo": 7674883848,
            "studentNo": 8106933755,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097173/CSE21Batch/CSE21BatchCSection/mwrea3uwlfzh4zodjpud.png"
          },
          {
            "name": "KOTTE CHANDRIKA",
            "rollNo": "21471A05H2",
            "parentNo": 9908553350,
            "studentNo": 8008329182,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097173/CSE21Batch/CSE21BatchCSection/ctvvwzxmavnaapu5xuca.png"
          },
          {
            "name": "KOVVURI GANGOTHRI",
            "rollNo": "21471A05H3",
            "parentNo": 8179709898,
            "studentNo": 9502472867,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097173/CSE21Batch/CSE21BatchCSection/ovr3dnknk7yiiwlbogv4.png"
          },
          {
            "name": "KUCHI VINAY",
            "rollNo": "21471A05H4",
            "parentNo": 8247882360,
            "studentNo": 9908634323,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097173/CSE21Batch/CSE21BatchCSection/vxhloacetig6j95prj2a.png"
          },
          {
            "name": "MADANA VENKATA THIRUMALA",
            "rollNo": "21471A05H5",
            "parentNo": 9182983951,
            "studentNo": 7569123380,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097173/CSE21Batch/CSE21BatchCSection/kpy9oozq8c1owt4nedat.png"
          },
          {
            "name": "MANEPALLI YUVA SRAVANI",
            "rollNo": "21471A05H6",
            "parentNo": 8142424321,
            "studentNo": 8019501387,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097172/CSE21Batch/CSE21BatchCSection/hqgwanpxxgtjrkrzh6qf.png"
          },
          {
            "name": "MANIKALA MANIKANTA RAMBABU",
            "rollNo": "21471A05H7",
            "parentNo": 7893261374,
            "studentNo": 9701661374,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097172/CSE21Batch/CSE21BatchCSection/ryxkyhvnqnpeeisyfxhr.png"
          },
          {
            "name": "MANIKANTA CHALLA",
            "rollNo": "21471A05H8",
            "parentNo": 9652682240,
            "studentNo": 8500507715,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097172/CSE21Batch/CSE21BatchCSection/ejvimnfppt8txk3be7ft.png"
          },
          {
            "name": "MATA AJAY KIRAN",
            "rollNo": "21471A05H9",
            "parentNo": 9440990863,
            "studentNo": 9393669099,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097171/CSE21Batch/CSE21BatchCSection/hr56qt5l2deblyndqjrx.png"
          },
          {
            "name": "MEDAM ADI NAGA MANENDRA REDDY",
            "rollNo": "21471A05I0",
            "parentNo": 8121199538,
            "studentNo": 6301799538,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097171/CSE21Batch/CSE21BatchCSection/aazaf1ifqjafphuso6qq.png"
          },
          {
            "name": "MOKKAPATI VENKATESH",
            "rollNo": "21471A05I1",
            "parentNo": 7382897170,
            "studentNo": 7386510327,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097172/CSE21Batch/CSE21BatchCSection/nequ8odgfnfodlk8bdig.png"
          },
          {
            "name": "MUKKAPATI VASUDEVA RAO",
            "rollNo": "21471A05I2",
            "parentNo": 9963346426,
            "studentNo": 8341095393,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097170/CSE21Batch/CSE21BatchCSection/az7wybumwukgfflmbdwo.png"
          },
          {
            "name": "NALADUMMI NAGALAKSHMI",
            "rollNo": "21471A05I3",
            "parentNo": 9492708031,
            "studentNo": 9346722194,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097170/CSE21Batch/CSE21BatchCSection/hueitpybl6b6ea9vpiif.png"
          },
          {
            "name": "NARNAPATI VENKATA NAGA PRASANNA",
            "rollNo": "21471A05I4",
            "parentNo": 8374003846,
            "studentNo": 7075214728,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097170/CSE21Batch/CSE21BatchCSection/uevxiox5lpmrmng0kd96.png"
          },
          {
            "name": "PATAN KARIMULLA KHAN",
            "rollNo": "21471A05I5",
            "parentNo": 9848890391,
            "studentNo": 7995296651,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097170/CSE21Batch/CSE21BatchCSection/c8zorxkna5bt28ugbkkv.png"
          },
          {
            "name": "PAVANI GOURAVARAPU",
            "rollNo": "21471A05I6",
            "parentNo": 9951147825,
            "studentNo": 6303311432,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097169/CSE21Batch/CSE21BatchCSection/wgba8idjz1hi6d16ewvw.png"
          },
          {
            "name": "PONNAGANTI SAIGANESH",
            "rollNo": "21471A05I7",
            "parentNo": 8008379219,
            "studentNo": 6305238240,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097169/CSE21Batch/CSE21BatchCSection/ry06vioqouaparzvq8cj.png"
          },
          {
            "name": "PRATHIPATI LUCKY",
            "rollNo": "21471A05I8",
            "parentNo": 7013524783,
            "studentNo": 8297830255,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097160/CSE21Batch/CSE21BatchCSection/zvwtq1wujsus4vyt9iqd.png"
          },
          {
            "name": "PULIVARTHI PRIYANKA",
            "rollNo": "21471A05I9",
            "parentNo": 9989315936,
            "studentNo": 9059485936,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097169/CSE21Batch/CSE21BatchCSection/uvot20clf6bdljld760r.png"
          },
          {
            "name": "PUTLURI JAGADEESWARA REDDY",
            "rollNo": "21471A05J0",
            "parentNo": 8143239819,
            "studentNo": 6300731104,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097169/CSE21Batch/CSE21BatchCSection/wumxu2tqo5p3by4hp6lo.png"
          },
          {
            "name": "RANGA CHAITANYA SANTOSH MURARI",
            "rollNo": "21471A05J1",
            "parentNo": 9989034186,
            "studentNo": 7997838249,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097163/CSE21Batch/CSE21BatchCSection/wnbqkthiayispcuuaokm.png"
          },
          {
            "name": "SAGIREDDY PAVAN SAI SUBBA REDDY",
            "rollNo": "21471A05J2",
            "parentNo": 9885433407,
            "studentNo": 9666456887,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097169/CSE21Batch/CSE21BatchCSection/yxat4jqm6youq5lfvrkd.png"
          },
          {
            "name": "SANDEEP CHAPPIDI",
            "rollNo": "21471A05J3",
            "parentNo": 8801156926,
            "studentNo": 9948325730,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097167/CSE21Batch/CSE21BatchCSection/eo2ilzv3gtwjdgtd4kfs.png"
          },
          {
            "name": "SEETHA BHAGYA LATHA",
            "rollNo": "21471A05J4",
            "parentNo": 9010010550,
            "studentNo": 8179329358
          },
          {
            "name": "SHAIK NAJMA",
            "rollNo": "21471A05J5",
            "parentNo": 9866463140,
            "studentNo": 7675020093,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097168/CSE21Batch/CSE21BatchCSection/khc5blvkq61lzjbim8je.png"
          },
          {
            "name": "SIDDHARDHA REDDY KUNDURU",
            "rollNo": "21471A05J6",
            "parentNo": 7661038588,
            "studentNo": 9182315901,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097167/CSE21Batch/CSE21BatchCSection/neftjwhgnyt28obaiwr7.png"
          },
          {
            "name": "SIRISHA BIJJALA",
            "rollNo": "21471A05J7",
            "parentNo": 9885876793,
            "studentNo": 8008811280,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097167/CSE21Batch/CSE21BatchCSection/g5omgweqqu9ahxonjq0a.png"
          },
          {
            "name": "SNEHITH ABBURI",
            "rollNo": "21471A05J8",
            "parentNo": 9248095845,
            "studentNo": 7995631718,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097168/CSE21Batch/CSE21BatchCSection/twwwt7rnaqgwxpnrz0st.png"
          },
          {
            "name": "SURE VENKATA JHANSI LAKSHMI",
            "rollNo": "21471A05J9",
            "parentNo": 9490769600,
            "studentNo": 9553054765,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097167/CSE21Batch/CSE21BatchCSection/ethp2yahaca1kk3dxl0i.png"
          },
          {
            "name": "SYED KHAJA MOULA",
            "rollNo": "21471A05K0",
            "parentNo": 9493461101,
            "studentNo": 9392738260,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097166/CSE21Batch/CSE21BatchCSection/q0yxonhgkc3wuw4hsgns.png"
          },
          {
            "name": "TADALA MANI DEEP",
            "rollNo": "21471A05K1",
            "parentNo": 9550169402,
            "studentNo": 8555859327,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097166/CSE21Batch/CSE21BatchCSection/mgryqzbwfrvzmt5ybzdj.png"
          },
          {
            "name": "TANNIRU AKHILA",
            "rollNo": "21471A05K2",
            "parentNo": 9848210171,
            "studentNo": 7396074656,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097166/CSE21Batch/CSE21BatchCSection/htqv91y3utka6z9ulgym.png"
          },
          {
            "name": "THANINKI AKHIL",
            "rollNo": "21471A05K3",
            "parentNo": 9705122766,
            "studentNo": 8179702468,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097166/CSE21Batch/CSE21BatchCSection/nvy6benvqrgrl2jgckmb.png"
          },
          {
            "name": "THOTAKURA BHUVANESH",
            "rollNo": "21471A05K4",
            "parentNo": 9963402858,
            "studentNo": 8790066998,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097165/CSE21Batch/CSE21BatchCSection/jxrvx6i2udahsantbkzn.png"
          },
          {
            "name": "TUMMALAPENTA VINEESHA",
            "rollNo": "21471A05K5",
            "parentNo": 9618143532,
            "studentNo": 9502931495,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097165/CSE21Batch/CSE21BatchCSection/tohvlb9w4pqdszxc4qm0.png"
          },
          {
            "name": "PIDATHALA RAMESH BABU",
            "rollNo": "21471A05K6",
            "parentNo": 9948680419,
            "studentNo": 9491890625
          },
          {
            "name": "VANIPENTA SRI HARSHA VARDHAN REDDY",
            "rollNo": "21471A05K7",
            "parentNo": 9398121250,
            "studentNo": 9502807267,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097164/CSE21Batch/CSE21BatchCSection/hljj5t2mn7oqpuoldamb.png"
          },
          {
            "name": "YARAM KEERTHI",
            "rollNo": "21471A05K8",
            "parentNo": 8919645367,
            "studentNo": 8919645367,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097165/CSE21Batch/CSE21BatchCSection/kfsftmkfbqkxsycspvaz.png"
          },
          {
            "name": "YENUGANTI NARENDRA",
            "rollNo": "21471A05K9",
            "parentNo": 949392745,
            "studentNo": 9381332944,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097163/CSE21Batch/CSE21BatchCSection/aozp9vojyhmdda2fmohy.png"
          },
          {
            "name": "THUMU TEJASWINI",
            "rollNo": "21471A05L0",
            "parentNo": 7799240185,
            "studentNo": 8309213867,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097166/CSE21Batch/CSE21BatchCSection/xw7rsugoqkxa0yq03o7o.png"
          },
          {
            "name": "ABDUL JANI SHAIK",
            "rollNo": "21471A05L1",
            "parentNo": 7780178448,
            "studentNo": 7396121348,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097227/CSE21Batch/CSE21BatchDSection/qsgxgjuwy13fsqvumxbh.png"
          },
          {
            "name": "ADAPALA VISHNU KUMAR",
            "rollNo": "21471A05L2",
            "parentNo": 8499808279,
            "studentNo": 9391996123
          },
          {
            "name": "ALA LAKSHMI PRIYANKA",
            "rollNo": "21471A05L3",
            "parentNo": 9701968394,
            "studentNo": 9032208471
          },
          {
            "name": "ANNAPUREDDY RANGA LAKSHMI",
            "rollNo": "21471A05L4",
            "parentNo": 8179303009,
            "studentNo": 8374245834,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097232/CSE21Batch/CSE21BatchDSection/t9bwy8vpu3yve2xmbhkv.png"
          },
          {
            "name": "BATHULA ANIL KUMAR",
            "rollNo": "21471A05L5",
            "parentNo": 9966696363,
            "studentNo": 9490954365
          },
          {
            "name": "BATTULA VIDHYASAGAR",
            "rollNo": "21471A05L6",
            "parentNo": 7901518498,
            "studentNo": 7702681332
          },
          {
            "name": "BEERALA NAGA VISHNU",
            "rollNo": "21471A05L7",
            "parentNo": 9966027515,
            "studentNo": 7842815055,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097225/CSE21Batch/CSE21BatchDSection/ecc7icvrq95x2c6g3rm2.png"
          },
          {
            "name": "BELLAMKONDA NANDA KRISHNA",
            "rollNo": "21471A05L8",
            "parentNo": 9849614610,
            "studentNo": 8712168116,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097225/CSE21Batch/CSE21BatchDSection/bv17mq683s5e5g22urye.png"
          },
          {
            "name": "BOBBEPALLI ARAVIND BABU",
            "rollNo": "21471A05L9",
            "parentNo": 7780408070,
            "studentNo": 7671023946,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097225/CSE21Batch/CSE21BatchDSection/lpdgqiuudqgoh9g8hkq7.png"
          },
          {
            "name": "BOLLISETTY TRIVENI",
            "rollNo": "21471A05M0",
            "parentNo": 9866909387,
            "studentNo": 8247213104,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097224/CSE21Batch/CSE21BatchDSection/qpv9lmqqm93qcyfg7doq.png"
          },
          {
            "name": "CHELLI PRASANTH",
            "rollNo": "21471A05M1",
            "parentNo": 9989147571,
            "studentNo": 8247784633,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097226/CSE21Batch/CSE21BatchDSection/h0j32r9osabtyltrsfr9.png"
          },
          {
            "name": "CHENNUPATI JYOTHIKA",
            "rollNo": "21471A05M2",
            "parentNo": 9032252209,
            "studentNo": 8688424199,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097224/CSE21Batch/CSE21BatchDSection/qnuygirqkegxvawgbskm.png"
          },
          {
            "name": "DEVARASETTY RAMA DURGA BHAVANI",
            "rollNo": "21471A05M3",
            "parentNo": 9182636350,
            "studentNo": 7386527360,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097223/CSE21Batch/CSE21BatchDSection/ylfbiee4fecr6zkwm5a5.png"
          },
          {
            "name": "GANDIKOTA NARENDRA",
            "rollNo": "21471A05M4",
            "parentNo": 9398590737,
            "studentNo": 9948566970,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097223/CSE21Batch/CSE21BatchDSection/mmrwpqoj4oa71rv8y2hj.png"
          },
          {
            "name": "GORIGE VENKATESH",
            "rollNo": "21471A05M5",
            "parentNo": 6309076919,
            "studentNo": 9603217919,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097222/CSE21Batch/CSE21BatchDSection/rnw6gohibhff1b7omzx2.png"
          },
          {
            "name": "GOTTIMUKKALA SASANK CHANDRA",
            "rollNo": "21471A05M6",
            "parentNo": 9441521924,
            "studentNo": 9502943152,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097222/CSE21Batch/CSE21BatchDSection/t56t3hmpejdzgyivz1av.png"
          },
          {
            "name": "INTHIYAZ SHAIK",
            "rollNo": "21471A05M7",
            "parentNo": 9949310384,
            "studentNo": 9381031776,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097222/CSE21Batch/CSE21BatchDSection/d7v5xkk9sigikahxpjhj.png"
          },
          {
            "name": "KALVA ADIBABU",
            "rollNo": "21471A05M8",
            "parentNo": 7997586723,
            "studentNo": 9100235411,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097224/CSE21Batch/CSE21BatchDSection/gtb614n7douvsgn6b5d5.png"
          },
          {
            "name": "KANDAGADLA SAI VENKATA MANIKANTA",
            "rollNo": "21471A05M9",
            "parentNo": 9951419722,
            "studentNo": 9951419722
          },
          {
            "name": "KATA RAMYA",
            "rollNo": "21471A05N0",
            "parentNo": 6301742850,
            "studentNo": 9392610189,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097221/CSE21Batch/CSE21BatchDSection/mby8zolzypvr9r0ucacm.png"
          },
          {
            "name": "KODE VENKATA NAVEEN",
            "rollNo": "21471A05N1",
            "parentNo": 7330669051,
            "studentNo": 6309399747
          },
          {
            "name": "KOLASANAKOTI JOHN WESLEY",
            "rollNo": "21471A05N2",
            "parentNo": 7036767127,
            "studentNo": 9701126587,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097221/CSE21Batch/CSE21BatchDSection/zrdpm8q5iuwdexaasepa.png"
          },
          {
            "name": "KOLUMULA MABHU SUBHANI",
            "rollNo": "21471A05N3",
            "parentNo": 9963786013,
            "studentNo": 7702423187,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097221/CSE21Batch/CSE21BatchDSection/mkcqqziowdjfwell2gra.png"
          },
          {
            "name": "KURRA VENKATESH",
            "rollNo": "21471A05N4",
            "parentNo": 9581625416,
            "studentNo": 9398851010,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097220/CSE21Batch/CSE21BatchDSection/jwmja3uisbvxgv6ldw8g.png"
          },
          {
            "name": "MALLAVARAPU RISHIK MOULI",
            "rollNo": "21471A05N5",
            "parentNo": 8179929067,
            "studentNo": 9573775868,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097220/CSE21Batch/CSE21BatchDSection/cboafvsjlyojie6tnzfi.png"
          },
          {
            "name": "MEDA VENKATESH",
            "rollNo": "21471A05N6",
            "parentNo": 9347884212,
            "studentNo": 7396128134,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097220/CSE21Batch/CSE21BatchDSection/gakwpoijpzbgrtlnja9e.png"
          },
          {
            "name": "MOTHADIKA VENKATA SAI",
            "rollNo": "21471A05N7",
            "parentNo": 9642293355,
            "studentNo": 9963850025,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097220/CSE21Batch/CSE21BatchDSection/qelzguejftdsn1bbiukt.png"
          },
          {
            "name": "MUNAMALA SREYA REDDY",
            "rollNo": "21471A05N8",
            "parentNo": 8555089678,
            "studentNo": 8328427465,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097219/CSE21Batch/CSE21BatchDSection/j4zgf4cmi2mfmu1zhfmn.png"
          },
          {
            "name": "MUVVA MOKSHAGNA",
            "rollNo": "21471A05N9",
            "parentNo": 9985697333,
            "studentNo": 9391992264,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097219/CSE21Batch/CSE21BatchDSection/u0ewm7orlqmucqxglkau.png"
          },
          {
            "name": "VELPULA VENU",
            "rollNo": "21471A05O0",
            "parentNo": 7569889712,
            "studentNo": 7036986068,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097219/CSE21Batch/CSE21BatchDSection/lkl1qrpiknls8hwraltl.png"
          },
          {
            "name": "PAMIDIMARRI NIKHITHA",
            "rollNo": "21471A05O1",
            "parentNo": 9885757598,
            "studentNo": 8919666427,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097219/CSE21Batch/CSE21BatchDSection/qkvi3hdzxjdj5bkpjow7.png"
          },
          {
            "name": "PENTYALA TANUJA",
            "rollNo": "21471A05O2",
            "parentNo": 9346679077,
            "studentNo": 9705502535,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097218/CSE21Batch/CSE21BatchDSection/rco7ngejo0sdzusbpm1o.png"
          },
          {
            "name": "PETETI UJWALA DEVI",
            "rollNo": "21471A05O3",
            "parentNo": 9398374884,
            "studentNo": 7702478429,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097218/CSE21Batch/CSE21BatchDSection/hodqgfhievkqzbvymj9z.png"
          },
          {
            "name": "PONDUGULA VENKATA NAGA HEMANTHA LAKSHMI",
            "rollNo": "21471A05O4",
            "parentNo": 9440374434,
            "studentNo": 6300038279,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097218/CSE21Batch/CSE21BatchDSection/aswa539srb5ttdb8pfwg.png"
          },
          {
            "name": "PRABHU TEJA PERIKALA",
            "rollNo": "21471A05O5",
            "parentNo": 8341146317,
            "studentNo": 9949029374,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097217/CSE21Batch/CSE21BatchDSection/umocmofashdyeacqwmyn.png"
          },
          {
            "name": "PULI SAI LOKESH REDDY",
            "rollNo": "21471A05O6",
            "parentNo": 8688789846,
            "studentNo": 9392849985,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097217/CSE21Batch/CSE21BatchDSection/neeta1gmyikh6gckp9rw.png"
          },
          {
            "name": "RAJA NANDINI",
            "rollNo": "21471A05O7",
            "parentNo": 9010044864,
            "studentNo": 9392848022,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097217/CSE21Batch/CSE21BatchDSection/mrc8qoiobbmp9iesth8i.png"
          },
          {
            "name": "SHAIK MOHAMMAD ABBAS",
            "rollNo": "21471A05O8",
            "parentNo": 9515445014,
            "studentNo": 7793978259,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097217/CSE21Batch/CSE21BatchDSection/qg7wtsfcxi30izwsuv45.png"
          },
          {
            "name": "SINGU VAMSY",
            "rollNo": "21471A05O9",
            "parentNo": 7780516076,
            "studentNo": 7995421390,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097216/CSE21Batch/CSE21BatchDSection/yynjjvsfkg5w851unupx.png"
          },
          {
            "name": "SUBBARAO KATTA",
            "rollNo": "21471A05P0",
            "parentNo": 8187009449,
            "studentNo": 6305068848,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097216/CSE21Batch/CSE21BatchDSection/o5b19mfyew6woidyespr.png"
          },
          {
            "name": "THODETI SRINADH",
            "rollNo": "21471A05P1",
            "parentNo": 7997793477,
            "studentNo": 7997793477
          },
          {
            "name": "TIRUNAVALLI MOHANA",
            "rollNo": "21471A05P2",
            "parentNo": 7780102903,
            "studentNo": 7396022330
          },
          {
            "name": "VASANTHA SUDARSANAM",
            "rollNo": "21471A05P3",
            "parentNo": 6281645921,
            "studentNo": 7729980220
          },
          {
            "name": "VENKATA SAI DURGA NAIK BUKYA",
            "rollNo": "21471A05P4",
            "parentNo": 7396128134,
            "studentNo": 9347884212
          },
          {
            "name": "VUTLA LAVANYA",
            "rollNo": "21471A05P5",
            "parentNo": 7731923054,
            "studentNo": 9705029970
          },
          {
            "name": "YARRAM GNANESWAR REDDY",
            "rollNo": "21471A05P6",
            "parentNo": 9989677249,
            "studentNo": 9701667249
          },
          {
            "name": "NALLABOTHU NARENDRA KUMAR",
            "rollNo": "21471A05P7",
            "parentNo": 9553870320,
            "studentNo": 9618191519
          },
          {
            "name": "REPUDI VIVEK",
            "rollNo": "21471A05P8",
            "parentNo": 9949029374,
            "studentNo": 8341146317
          },
          {
            "name": "BALAM RAMAKRISHNA",
            "rollNo": "21471A05P9",
            "parentNo": 9866595414,
            "studentNo": 9948225708
          },
          {
            "name": "SHAIK JALEEL",
            "rollNo": "21471A05Q0",
            "parentNo": 9849555135,
            "studentNo": 8688649709
          },
          {
            "name": "GUDI MANIKANTA",
            "rollNo": "21471A05Q1",
            "parentNo": 9705918970,
            "studentNo": 9949631616
          },
          {
            "name": "PANGOTH RANGA NAYAK",
            "rollNo": "21471A05Q3",
            "parentNo": 9912337705,
            "studentNo": 9640918300
          },
          {
            "name": "SY JAGGAPPADORA",
            "rollNo": "21471A05Q4",
            "parentNo": 6302091939,
            "studentNo": 9390906919
          },
          {
            "name": "THORLIKONDA ARJUN",
            "rollNo": "22475A0501",
            "parentNo": 7013228515,
            "studentNo": 6300811035
          },
          {
            "name": "SURUGULA SRIKANTH",
            "rollNo": "22475A0502",
            "parentNo": 7674971787,
            "studentNo": 7674971787
          },
          {
            "name": "SATULURI KALYAN",
            "rollNo": "22475A0503",
            "parentNo": 9490844818,
            "studentNo": 9182240353
          },
          {
            "name": "POTHABATTINI NIKHITHA",
            "rollNo": "22475A0504",
            "parentNo": 9912596329,
            "studentNo": 9441342196
          },
          {
            "name": "KOTA VARUN CHANDA",
            "rollNo": "22475A0505",
            "parentNo": 9390080161,
            "studentNo": 6281728505
          },
          {
            "name": "CHINTAPALLI PAVAN SAI",
            "rollNo": "22475A0506",
            "parentNo": 9893820290,
            "studentNo": 9989753599
          },
          {
            "name": "SHAIK MUNNER",
            "rollNo": "22475A0507",
            "parentNo": 9849091421,
            "studentNo": 6302861684
          },
          {
            "name": "ANNALADASU VAMSI",
            "rollNo": "22475A0508",
            "parentNo": 8096707241,
            "studentNo": 7659977253
          },
          {
            "name": "KODELA DIVYA PRAKASH",
            "rollNo": "22475A0509",
            "parentNo": 6304335720,
            "studentNo": 9553727728
          },
          {
            "name": "BEVARA SUDHEER",
            "rollNo": "22475A0510",
            "parentNo": 9640072375,
            "studentNo": 9640072375
          },
          {
            "name": "PORUGANDI ASHOK",
            "rollNo": "22475A0511",
            "parentNo": 7036100519,
            "studentNo": 6302105097
          },
          {
            "name": "TIRUPATHI ESWAR VARA PRASAD",
            "rollNo": "22475A0512",
            "parentNo": 9948462831,
            "studentNo": 9494206302
          },
          {
            "name": "SIDDELA VINEETH",
            "rollNo": "22475A0513",
            "parentNo": 3533635967,
            "studentNo": 9121358359
          },
          {
            "name": "KOYA MANIKANTESWARA RAO",
            "rollNo": "22475A0514",
            "parentNo": 6302626747,
            "studentNo": 9121342125
          },
          {
            "name": "SYED MAHISHABI",
            "rollNo": "22475A0515",
            "parentNo": 6281823919,
            "studentNo": 6281310020
          },
          {
            "name": "TUNGA PAVAN KUMAR`",
            "rollNo": "22475A0516",
            "parentNo": 9701787097,
            "studentNo": 9160249447
          },
          {
            "name": "BACHALA PAVAN DATH",
            "rollNo": "22475A0517",
            "parentNo": 8919589071,
            "studentNo": 9701858095
          },
          {
            "name": "VANKAYALAPATI SUNIL",
            "rollNo": "22475A0518",
            "parentNo": 9063309167,
            "studentNo": 7075547467
          },
          {
            "name": "KOTA SUPRIYA",
            "rollNo": "22475A0519",
            "parentNo": 9848314574,
            "studentNo": 7331102293
          },
          {
            "name": "VEMULA RAJESH",
            "rollNo": "22475A0520",
            "parentNo": 9908281004,
            "studentNo": 9346127485
          },
          {
            "name": "DASAPPAGARI SREENIVAS",
            "rollNo": "22475A0521",
            "parentNo": 9989660435,
            "studentNo": 9391309451
          },
          {
            "name": "MEENA MADHAVI",
            "rollNo": "22475A0522",
            "parentNo": 9701955391,
            "studentNo": 8074292185
          },
          {
            "name": "SAGI JAYANTH",
            "rollNo": "22475A0523",
            "parentNo": 9948331820,
            "studentNo": 9618307489
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
  