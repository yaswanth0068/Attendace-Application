document.addEventListener("DOMContentLoaded", () => {
    const StudentsInfo = document.getElementById("StudentsInfo");

    let StudentsInfoList = [
        // place your data here
          {
              "name": "ACHAIBHAR ARTHI",
              "rollNo": "22471A0501",
              "parentNo": 9963403892,
              "studentNo": 8790706892,
              "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097258/CSE22Batch/CSE22BatchASection/tpnpwrjejelp83m0f4uy.png"
            },
          {
            "name": "ATMAKURI JAGADEESH",
            "rollNo": "22471A0502",
            "parentNo": 9247892586,
            "studentNo": 6305916338,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097258/CSE22Batch/CSE22BatchASection/hrdwjsnckg9vsbfpmjdx.png"
          },
          {
            "name": "BATTINENI ARUN KUMAR",
            "rollNo": "22471A0503",
            "parentNo": 6305528332,
            "studentNo": 8309563136,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097259/CSE22Batch/CSE22BatchASection/wioapilpxbgi5clg66dp.png"
          },
          {
            "name": "BIRAKA VELANGINI RANI",
            "rollNo": "22471A0504",
            "parentNo": 9966773106,
            "studentNo": 9966306773,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097259/CSE22Batch/CSE22BatchASection/qmfu4cxc7ytikysmxxwc.png"
          },
          {
            "name": "BONTHA JOHN BABU",
            "rollNo": "22471A0505",
            "parentNo": 9505081144,
            "studentNo": 9705760839,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097259/CSE22Batch/CSE22BatchASection/m8bhwjttppd32ehnwuwo.png"
          },
          {
            "name": "CHALLA JASWANTH REDDY",
            "rollNo": "22471A0506",
            "parentNo": 6305009381,
            "studentNo": 7093826794,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097261/CSE22Batch/CSE22BatchASection/fncv1czmoo2jcxazl9dk.png"
          },
          {
            "name": "CHALLA ROHITH",
            "rollNo": "22471A0507",
            "parentNo": 9603783182,
            "studentNo": 7013449965,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097259/CSE22Batch/CSE22BatchASection/iexlv3liotlkd69uxx5y.png"
          },
          {
            "name": "CHEPURI CHAITANYA VENKAT",
            "rollNo": "22471A0508",
            "parentNo": 9247192616,
            "studentNo": 8341456619,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097260/CSE22Batch/CSE22BatchASection/tpm2l2gwtl4f6vlesg6u.png"
          },
          {
            "name": "CHERUKURI THIRUMALA MALYADRI",
            "rollNo": "22471A0509",
            "parentNo": 9618440903,
            "studentNo": 8019696270,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097260/CSE22Batch/CSE22BatchASection/nbzge2eoaze2jqweqqgi.png"
          },
          {
            "name": "CHEVULA MOUNIKA",
            "rollNo": "22471A0510",
            "parentNo": 7659940439,
            "studentNo": 9110305255,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097260/CSE22Batch/CSE22BatchASection/jit6zfszgntctumthaqo.png"
          },
          {
            "name": "CHEVURI CHANDU",
            "rollNo": "22471A0511",
            "parentNo": 9908955289,
            "studentNo": 7036475233,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097261/CSE22Batch/CSE22BatchASection/omunpnhqfvfh5e6ynr1p.png"
          },
          {
            "name": "CHILAMKURI VIJAYA RANI",
            "rollNo": "22471A0512",
            "parentNo": 7337272092,
            "studentNo": 9177205349,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097261/CSE22Batch/CSE22BatchASection/fqhjvif1mvpa9l4r7c9m.png"
          },
          {
            "name": "CHIRUMALA CHARAN TEJA",
            "rollNo": "22471A0513",
            "parentNo": 6301179070,
            "studentNo": 7702400259,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097261/CSE22Batch/CSE22BatchASection/cveohoez6ouyzl54q0v7.png"
          },
          {
            "name": "CHOWDARI RAMA KRISHNA",
            "rollNo": "22471A0514",
            "parentNo": 9014178361,
            "studentNo": 9704961576,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097263/CSE22Batch/CSE22BatchASection/gs3ezwkhfxph4gmm5tol.png"
          },
          {
            "name": "DARLA DIVYA",
            "rollNo": "22471A0515",
            "parentNo": 7993471359,
            "studentNo": 7337591416,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097262/CSE22Batch/CSE22BatchASection/r851elfvqarmmxppymej.png"
          },
          {
            "name": "DESIREDDY CHARAN VENKATA SIVA NAGI REDDY",
            "rollNo": "22471A0516",
            "parentNo": 9963405532,
            "studentNo": 9949484946,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097263/CSE22Batch/CSE22BatchASection/bi61respctvklzoefxl6.png"
          },
          {
            "name": "DUGGI SAMPATH KUMAR",
            "rollNo": "22471A0517",
            "parentNo": 9701051807,
            "studentNo": 8374204134,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097264/CSE22Batch/CSE22BatchASection/vbvwoe8bcaij3vlkbwbs.png"
          },
          {
            "name": "GADDAM MEGHANA",
            "rollNo": "22471A0518",
            "parentNo": 8179200896,
            "studentNo": 9989275969,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097264/CSE22Batch/CSE22BatchASection/lnk4ojhflcuqyflnp2nf.png"
          },
          {
            "name": "GADDAM RAGHU RAMI REDDY",
            "rollNo": "22471A0519",
            "parentNo": 9666818443,
            "studentNo": 8179454120,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097263/CSE22Batch/CSE22BatchASection/ppcaqbnrllvlyllmvwhh.png"
          },
          {
            "name": "GADDIPATI KEERTHANA DIVYA",
            "rollNo": "22471A0520",
            "parentNo": 9491703365,
            "studentNo": 6305110857,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097264/CSE22Batch/CSE22BatchASection/kxfawdwwlhfsjccmyhwd.png"
          },
          {
            "name": "GARIKAPATI REVANTH SAI",
            "rollNo": "22471A0521",
            "parentNo": 9392914940,
            "studentNo": 6309417492,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097264/CSE22Batch/CSE22BatchASection/my2zhxavscooxsdtwvrr.png"
          },
          {
            "name": "GARIKAPUDI PRUDVIRAJ",
            "rollNo": "22471A0522",
            "parentNo": 9390996704,
            "studentNo": 7793996704,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097264/CSE22Batch/CSE22BatchASection/cgtsao5ptgltyik1nh4r.png"
          },
          {
            "name": "GOPU PAVANI",
            "rollNo": "22471A0523",
            "parentNo": 9347751061,
            "studentNo": 9908038370,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097265/CSE22Batch/CSE22BatchASection/gfj4oefqriiv7aninby0.png"
          },
          {
            "name": "GRANDHISILA DURGA VYSHNAVI",
            "rollNo": "22471A0524",
            "parentNo": 7901089835,
            "studentNo": 6305547288,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097266/CSE22Batch/CSE22BatchASection/cxvuxqnjgz0yggjxlkx2.png"
          },
          {
            "name": "GUNJI VENKATA GANESH",
            "rollNo": "22471A0525",
            "parentNo": 9618178589,
            "studentNo": 7569835661,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097265/CSE22Batch/CSE22BatchASection/cx0iqzeb7wk9lyzt6hze.png"
          },
          {
            "name": "KALLAM THIRUPATAMMA",
            "rollNo": "22471A0526",
            "parentNo": 7981487368,
            "studentNo": 9392898878,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097266/CSE22Batch/CSE22BatchASection/z4o0modwjmtjt8kccxai.png"
          },
          {
            "name": "KARLAKUNTA ADITHYA",
            "rollNo": "22471A0527",
            "parentNo": 9494963864,
            "studentNo": 8522894889,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097266/CSE22Batch/CSE22BatchASection/t39u299wf6nvehfytcbf.png"
          },
          {
            "name": "KARTHIK MALLALA",
            "rollNo": "22471A0528",
            "parentNo": 8099260482,
            "studentNo": 9346442945,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097266/CSE22Batch/CSE22BatchASection/qzfqxnav3p0495fandnt.png"
          },
          {
            "name": "KATEKENI HEMANTHINI",
            "rollNo": "22471A0529",
            "parentNo": 9182071755,
            "studentNo": 7396056839,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097266/CSE22Batch/CSE22BatchASection/nscni5xowfgg5r1hvtve.png"
          },
          {
            "name": "KHAJJAYAM ASRITHA",
            "rollNo": "22471A0530",
            "parentNo": 7989326677,
            "studentNo": 7569050063,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097267/CSE22Batch/CSE22BatchASection/hakly4wudio6ze8ajgeq.png"
          },
          {
            "name": "KOMARAGIRI DURGAPRASAD",
            "rollNo": "22471A0531",
            "parentNo": 8106986127,
            "studentNo": 9392656243,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097267/CSE22Batch/CSE22BatchASection/ezfdxtvwqio7y0zgsiis.png"
          },
          {
            "name": "KONDAVEETY VENUGOPALA SWAMY",
            "rollNo": "22471A0532",
            "parentNo": 8985956853,
            "studentNo": 9347957375,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097267/CSE22Batch/CSE22BatchASection/ftqcezc4h6fueh69lvfo.png"
          },
          {
            "name": "KOYYALAMUDI VENKATA RAMESH",
            "rollNo": "22471A0533",
            "parentNo": 8019955586,
            "studentNo": 9392704278,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097268/CSE22Batch/CSE22BatchASection/ylskc7rvxpqbmpj0qxhn.png"
          },
          {
            "name": "MALAPATI SRINU",
            "rollNo": "22471A0535",
            "parentNo": 6302050430,
            "studentNo": 7013391850,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097273/CSE22Batch/CSE22BatchASection/yrjcyqse9zkgxueivmiv.png"
          },
          {
            "name": "MERUGU GOWTHAM",
            "rollNo": "22471A0536",
            "parentNo": 6300267041,
            "studentNo": 7386891931,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097269/CSE22Batch/CSE22BatchASection/mriypkbf3ftmpzztljuu.jpg"
          },
          {
            "name": "MITTA VENU",
            "rollNo": "22471A0537",
            "parentNo": 7702632290,
            "studentNo": 8143611398,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097270/CSE22Batch/CSE22BatchASection/tewej7glvdts5kgtcn1k.jpg"
          },
          {
            "name": "MOGHAL BABAR",
            "rollNo": "22471A0538",
            "parentNo": 9701302877,
            "studentNo": 9705778355,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097277/CSE22Batch/CSE22BatchASection/nt4cxzlgcvs4jqtgkbpp.jpg"
          },
          {
            "name": "MOHAMMAD SAKHIB SATULURI",
            "rollNo": "22471A0539",
            "parentNo": 9985287819,
            "studentNo": 9390601459,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097273/CSE22Batch/CSE22BatchASection/vriwbrq7eqzpnnwbmk2f.jpg"
          },
          {
            "name": "MUTYAM SRILAKSHMI",
            "rollNo": "22471A0541",
            "parentNo": 9908421062,
            "studentNo": 8341832980,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097258/CSE22Batch/CSE22BatchASection/lis2wnntalwbcuau6w4a.png"
          },
          {
            "name": "NALABOLU BALA KRISHNA REDDY",
            "rollNo": "22471A0542",
            "parentNo": 8688996542,
            "studentNo": 9502693576,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097278/CSE22Batch/CSE22BatchASection/mca64psuxamhwh3rvaq0.jpg"
          },
          {
            "name": "NELATURI VINAY",
            "rollNo": "22471A0543",
            "parentNo": 8374100038,
            "studentNo": 7207261367,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097272/CSE22Batch/CSE22BatchASection/hqintykdbrvjspyxbssc.jpg"
          },
          {
            "name": "PATIBANDLA PRASANTHI",
            "rollNo": "22471A0544",
            "parentNo": 7729955728,
            "studentNo": 7794055728,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097274/CSE22Batch/CSE22BatchASection/zfiifzbdvwhqs3labwc5.jpg"
          },
          {
            "name": "RAMISETTY ANJANEYA KUMAR",
            "rollNo": "22471A0545",
            "parentNo": 9989159491,
            "studentNo": 9059882471,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097275/CSE22Batch/CSE22BatchASection/yilq3qspbisg2utczxny.jpg"
          },
          {
            "name": "SHAIK ABDUL NABI",
            "rollNo": "22471A0547",
            "parentNo": 7659075684,
            "studentNo": 9392735557,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097257/CSE22Batch/CSE22BatchASection/xcubz9euks7fdzvbkljm.png"
          },
          {
            "name": "SHAIK ISMAIL",
            "rollNo": "22471A0549",
            "parentNo": 9701353998,
            "studentNo": 9701308696,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097285/CSE22Batch/CSE22BatchASection/pnxzwjmr3og4ymcywpz7.jpg"
          },
          {
            "name": "SHAIK KAGAJI RABIA BASRI",
            "rollNo": "22471A0550",
            "parentNo": 7396469158,
            "studentNo": 9059779158,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097279/CSE22Batch/CSE22BatchASection/yuumqvrf1ziedpkj38ii.jpg"
          },
          {
            "name": "SHAIK MADEENA NOUSHIK",
            "rollNo": "22471A0551",
            "parentNo": 9392448068,
            "studentNo": 8919810202,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097283/CSE22Batch/CSE22BatchASection/s7jbguqsmgz6cefcwg3c.jpg"
          },
          {
            "name": "SHAIK MOHAMMAD FAROOQ",
            "rollNo": "22471A0552",
            "parentNo": 9704010782,
            "studentNo": 9395126880,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097287/CSE22Batch/CSE22BatchASection/f57dyo7if7cxuusoha6c.jpg"
          },
          {
            "name": "SHAIK MOHAMMAD KHALEEL",
            "rollNo": "22471A0553",
            "parentNo": 9000786151,
            "studentNo": 6303191369,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097281/CSE22Batch/CSE22BatchASection/rfwgroks9qlakuhqndwk.jpg"
          },
          {
            "name": "SHAIK PEER MOHAMMAD SHAAHID",
            "rollNo": "22471A0554",
            "parentNo": 9392302382,
            "studentNo": 9966604334,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097282/CSE22Batch/CSE22BatchASection/nugervfa1dbrzi75gvie.jpg"
          },
          {
            "name": "LATIKA CHARAN MANI",
            "rollNo": "22471A0555",
            "parentNo": 8309379198,
            "studentNo": 9391243446,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097257/CSE22Batch/CSE22BatchASection/xythuwyckgvrbuix4sh1.jpg"
          },
          {
            "name": "SURYA PRASAD BANGARU",
            "rollNo": "22471A0557",
            "parentNo": 9000446361,
            "studentNo": 9441257930,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097284/CSE22Batch/CSE22BatchASection/bt6ypwmqgzs73c7wsa22.jpg"
          },
          {
            "name": "SYAVALA YASWANTH RAHUL",
            "rollNo": "22471A0558",
            "parentNo": 9247556651,
            "studentNo": 7013677395,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097285/CSE22Batch/CSE22BatchASection/xha77yvmnxc0gwcmjdcb.jpg"
          },
          {
            "name": "SYED MATHEEN BABA",
            "rollNo": "22471A0559",
            "parentNo": 9885615315,
            "studentNo": 8328040290,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097286/CSE22Batch/CSE22BatchASection/tsuwchotlgxg4v3fzuzt.jpg"
          },
          {
            "name": "THULLIBILLI NAGAIAH",
            "rollNo": "22471A0561",
            "parentNo": 7093439718,
            "studentNo": 7780236515,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097286/CSE22Batch/CSE22BatchASection/f5th77lhljbrvtulk2ey.jpg"
          },
          {
            "name": "UMA BHAVANI BHUKYA",
            "rollNo": "22471A0563",
            "parentNo": 9381266595,
            "studentNo": 8978101360,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097286/CSE22Batch/CSE22BatchASection/dpw5qezyilsieugkwqov.jpg"
          },
          {
            "name": "UTALAPALLI PAVITRA",
            "rollNo": "22471A0564",
            "parentNo": 9959458449,
            "studentNo": 6304775599,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097287/CSE22Batch/CSE22BatchASection/uwljgcllw9atdqujzfhl.jpg"
          },
          {
            "name": "VINUKONDA JOSHI",
            "rollNo": "22471A0565",
            "parentNo": 8019902792,
            "studentNo": 7075193823,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097287/CSE22Batch/CSE22BatchASection/mpvxttbg7o6qqacic2fe.jpg"
          },
          {
            "name": "YANNAKULA SHIVA SAI",
            "rollNo": "22471A0566",
            "parentNo": 9542905340,
            "studentNo": 9515242243,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097287/CSE22Batch/CSE22BatchASection/a0eaj2xuyn39fgkopdhz.jpg"
          },
          {
            "name": "YARAGANI HEMANTH RAJA",
            "rollNo": "22471A0567",
            "parentNo": 7981615275,
            "studentNo": 9492473318,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097287/CSE22Batch/CSE22BatchASection/ybs8xladhasvirkb9ivx.jpg"
          },
          {
            "name": "YENDETI NANDINI",
            "rollNo": "22471A0568",
            "parentNo": 9014385508,
            "studentNo": 9908126738,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097288/CSE22Batch/CSE22BatchASection/b5dpbne1sgwycqg7owpj.jpg"
          },
          {
            "name": "YENUMALA MYTHRI",
            "rollNo": "22471A0569",
            "parentNo": 9000349089,
            "studentNo": 7794949089,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097288/CSE22Batch/CSE22BatchASection/wxkxc1x4tfsadg47eu3r.jpg"
          },
          {
            "name": "YERRAGUNTA MAHESH KUMAR REDDY",
            "rollNo": "22471A0570",
            "parentNo": 8688261485,
            "studentNo": 9441006460,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097288/CSE22Batch/CSE22BatchASection/nnkvzdm7kwketlt9mgsl.jpg"
          },
          {
            "name": "ADDANKI VARUN YADAV",
            "rollNo": "22471A0571",
            "parentNo": 7013720819,
            "studentNo": 7013720819,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097305/CSE22Batch/CSE22BatchBSection/bw1v2fqy6ugvadu695w8.jpg"
          },
          {
            "name": "ANITHA AMBATI",
            "rollNo": "22471A0572",
            "parentNo": 9063748467,
            "studentNo": 8790263399,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097305/CSE22Batch/CSE22BatchBSection/ieymfpjjcsefiicdbzod.jpg"
          },
          {
            "name": "BADINA CHANDANA PRIYA",
            "rollNo": "22471A0573",
            "parentNo": 9989949475,
            "studentNo": 9440190432,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097307/CSE22Batch/CSE22BatchBSection/wm6xi4otkqtyghs1jboh.jpg"
          },
          {
            "name": "BANDI SRI LAKSHMI",
            "rollNo": "22471A0574",
            "parentNo": 7386657071,
            "studentNo": 8328697556,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097306/CSE22Batch/CSE22BatchBSection/irqbbtcs1jw2cgv474nf.jpg"
          },
          {
            "name": "BATHULA TIMOTHI",
            "rollNo": "22471A0575",
            "parentNo": 6303273725,
            "studentNo": 6303273725,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097307/CSE22Batch/CSE22BatchBSection/g56ctyaztqzzbkvipg94.jpg"
          },
          {
            "name": "BELLAMKONDA TARUN",
            "rollNo": "22471A0576",
            "parentNo": 9701254126,
            "studentNo": 9701827813,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097307/CSE22Batch/CSE22BatchBSection/hty1wwxd7wpfemwusz8a.jpg"
          },
          {
            "name": "KODURI SOWJANYA",
            "rollNo": "22471A0577",
            "parentNo": 9032003918,
            "studentNo": 9032003918,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097307/CSE22Batch/CSE22BatchBSection/zpulsyw7zbnibtqukznb.jpg"
          },
          {
            "name": "BODDU PRABHAS",
            "rollNo": "22471A0578",
            "parentNo": 9989347816,
            "studentNo": 9985953049,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097308/CSE22Batch/CSE22BatchBSection/a6ef2vr2vexbsjpplxwm.jpg"
          },
          {
            "name": "BOKKISAM NAGA ANIL KUMAR",
            "rollNo": "22471A0579",
            "parentNo": 7013800040,
            "studentNo": 9849965404,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097308/CSE22Batch/CSE22BatchBSection/vtayvon7u4ktfakuxma5.jpg"
          },
          {
            "name": "CHAKKA SATWIKA JAHNAVI",
            "rollNo": "22471A0580",
            "parentNo": 6303599226,
            "studentNo": 9704831601,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097309/CSE22Batch/CSE22BatchBSection/giuttnecrhiygmagp0rw.jpg"
          },
          {
            "name": "CHIKLI ASIFA SHAIK",
            "rollNo": "22471A0581",
            "parentNo": 8639226770,
            "studentNo": 9866871319,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097309/CSE22Batch/CSE22BatchBSection/ftjandgkek2enuznq9qf.jpg"
          },
          {
            "name": "CHINNA REDDY SUDHEER REDDY",
            "rollNo": "22471A0582",
            "parentNo": 9010513466,
            "studentNo": 7396106382,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097314/CSE22Batch/CSE22BatchBSection/lszb1zfjup0vjrvtabym.jpg"
          },
          {
            "name": "CHINNAPAREDDY ANJALI REDDY",
            "rollNo": "22471A0583",
            "parentNo": 9703456931,
            "studentNo": 7331130189,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097311/CSE22Batch/CSE22BatchBSection/wpwos7qsgknjrhj5mraz.jpg"
          },
          {
            "name": "CHINTHALANKA POOJITHA",
            "rollNo": "22471A0584",
            "parentNo": 6302461007,
            "studentNo": 6302461007,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097310/CSE22Batch/CSE22BatchBSection/crxvqlyfzdjtbflmjsm1.jpg"
          },
          {
            "name": "DERANGULA DURGA RAO",
            "rollNo": "22471A0585",
            "parentNo": 7993615361,
            "studentNo": 9603020171,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097313/CSE22Batch/CSE22BatchBSection/vnruetrj3nuqxdm1znfg.jpg"
          },
          {
            "name": "DIDDI SANDHYA",
            "rollNo": "22471A0586",
            "parentNo": 6281595311,
            "studentNo": 6281595311,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097311/CSE22Batch/CSE22BatchBSection/wv6azhmxl376f7njzv6o.jpg"
          },
          {
            "name": "DOGIPARTHI DHANUSHA",
            "rollNo": "22471A0587",
            "parentNo": 8074497100,
            "studentNo": 9885766123,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097311/CSE22Batch/CSE22BatchBSection/e2pgan3odbhhlx6w4zba.jpg"
          },
          {
            "name": "GALLA DEEPTHI",
            "rollNo": "22471A0588",
            "parentNo": 9390158121,
            "studentNo": 9390158121,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097312/CSE22Batch/CSE22BatchBSection/z5sbcr0hu4qjichzuugq.jpg"
          },
          {
            "name": "GARIKIPATI RANJITH KUMAR",
            "rollNo": "22471A0589",
            "parentNo": 9989006620,
            "studentNo": 7569685280,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097312/CSE22Batch/CSE22BatchBSection/rlyzmx8ovcelnrjupwvn.jpg"
          },
          {
            "name": "GAYAM THRISONY",
            "rollNo": "22471A0590",
            "parentNo": 9701518290,
            "studentNo": 7396059729,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097312/CSE22Batch/CSE22BatchBSection/udnfukpx6ahalqgdoqqw.jpg"
          },
          {
            "name": "GORRE JAYASRI",
            "rollNo": "22471A0591",
            "parentNo": 7207228746,
            "studentNo": 8499858998,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097313/CSE22Batch/CSE22BatchBSection/k8my3paqcsp8ftt2oq4u.jpg"
          },
          {
            "name": "GUNDA YASWANTH",
            "rollNo": "22471A0592",
            "parentNo": 9390017531,
            "studentNo": 7993942469,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097313/CSE22Batch/CSE22BatchBSection/njqngdbsobp92qbnzklh.jpg"
          },
          {
            "name": "GUNDABATTINI BALAJI",
            "rollNo": "22471A0593",
            "parentNo": 7660817403,
            "studentNo": 7660817403,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097313/CSE22Batch/CSE22BatchBSection/vmse4xfkzyffszavi0za.jpg"
          },
          {
            "name": "GUNTI SRINIVAS",
            "rollNo": "22471A0594",
            "parentNo": 9030025419,
            "studentNo": 9030025419,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097314/CSE22Batch/CSE22BatchBSection/hw3b1ksyqiq9q29jdcpp.jpg"
          },
          {
            "name": "HARI LAKSHMI SAI MANIKANTA",
            "rollNo": "22471A0595",
            "parentNo": 8977296395,
            "studentNo": 9393996395,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097290/CSE22Batch/CSE22BatchBSection/c104sxlhhv3jnf7rpjdo.jpg"
          },
          {
            "name": "HEMALATHA MUCHUMARI",
            "rollNo": "22471A0596",
            "parentNo": 9502259315,
            "studentNo": 9502299200,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097314/CSE22Batch/CSE22BatchBSection/io4rh1tyn1e6llvb8iat.jpg"
          },
          {
            "name": "KAKUMANU SRAVANI",
            "rollNo": "22471A0597",
            "parentNo": 9290048974,
            "studentNo": 9290048974,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097314/CSE22Batch/CSE22BatchBSection/krql4zhvtoji8vy4y8k9.jpg"
          },
          {
            "name": "KAMBHAMPATI JOHN WESLY",
            "rollNo": "22471A0598",
            "parentNo": 9949275152,
            "studentNo": 9010012317,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097315/CSE22Batch/CSE22BatchBSection/pko4sg2knymsgqx1h7ep.jpg"
          },
          {
            "name": "KANNEKANTI TEJA VARDHANA CHARI",
            "rollNo": "22471A0599",
            "parentNo": 7416950733,
            "studentNo": 6309168322,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097315/CSE22Batch/CSE22BatchBSection/sas7jjuh6vkqv5m3cw5o.jpg"
          },
          {
            "name": "KANUMURI NARENDRA",
            "rollNo": "22471A05A0",
            "parentNo": 9010656727,
            "studentNo": 9948457599,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097290/CSE22Batch/CSE22BatchBSection/tlbpdcvxzuddpilb7mju.jpg"
          },
          {
            "name": "KAPPA JAHNAVI",
            "rollNo": "22471A05A1",
            "parentNo": 9390450911,
            "studentNo": 9440748448,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097291/CSE22Batch/CSE22BatchBSection/fbdssjsaazryfjnndsrl.png"
          },
          {
            "name": "KOLISETTY SRI VARSHA",
            "rollNo": "22471A05A2",
            "parentNo": 7674838134,
            "studentNo": 7674838134,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097292/CSE22Batch/CSE22BatchBSection/mtmwbjeoddbnegkpfwoe.jpg"
          },
          {
            "name": "KONDAVARJU RAMYA",
            "rollNo": "22471A05A4",
            "parentNo": 9502856186,
            "studentNo": 6302306562,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097292/CSE22Batch/CSE22BatchBSection/ldlu2b0envcuy1jw1kqr.jpg"
          },
          {
            "name": "KUPPALA PURNA CHANDRA RAO",
            "rollNo": "22471A05A5",
            "parentNo": 8978212200,
            "studentNo": 7569105022,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097290/CSE22Batch/CSE22BatchBSection/q4gyanxfhyzr80ra6ifj.jpg"
          },
          {
            "name": "KURIVELLA BALA VENKATA MANIKANTA",
            "rollNo": "22471A05A6",
            "parentNo": 8639593858,
            "studentNo": 9390031567,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097292/CSE22Batch/CSE22BatchBSection/cf7wkjrymirqfdipglo8.jpg"
          },
          {
            "name": "KURRA VAMSI KRISHNA",
            "rollNo": "22471A05A7",
            "parentNo": 9676955538,
            "studentNo": 9849627938,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097293/CSE22Batch/CSE22BatchBSection/fslsclanpebqt0kyc9mb.jpg"
          },
          {
            "name": "CHILAKA BALA MUNEENDRA",
            "rollNo": "22471A05A8",
            "parentNo": 9908435181,
            "studentNo": 6301247096,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097293/CSE22Batch/CSE22BatchBSection/ogodxlogdx7sea62wltd.jpg"
          },
          {
            "name": "MUTHYALA KATHYAYANI",
            "rollNo": "22471A05A9",
            "parentNo": 6301245933,
            "studentNo": 8522945933,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097293/CSE22Batch/CSE22BatchBSection/t6ghaujrljvgv1nzahte.jpg"
          },
          {
            "name": "NAGASARAPU MOHANA SRI KRUPA",
            "rollNo": "22471A05B0",
            "parentNo": 9704805618,
            "studentNo": 9704805618,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097293/CSE22Batch/CSE22BatchBSection/kxnbvilywa5jumvocroo.jpg"
          },
          {
            "name": "NALLAMEKALA VIGNESH",
            "rollNo": "22471A05B1",
            "parentNo": 8367533709,
            "studentNo": 9963210401,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097295/CSE22Batch/CSE22BatchBSection/eon2yuwq5uftzwjcvi01.jpg"
          },
          {
            "name": "NIMMALA ASHOK",
            "rollNo": "22471A05B2",
            "parentNo": 9849789023,
            "studentNo": 9398367339,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097294/CSE22Batch/CSE22BatchBSection/klagn7wpnv1ejbc0whw9.jpg"
          },
          {
            "name": "PALLOTHU VENKATA SAI KRISHNA",
            "rollNo": "22471A05B3",
            "parentNo": 9603361165,
            "studentNo": 9963215057,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097296/CSE22Batch/CSE22BatchBSection/rdcjnm45hptlkeepsegh.jpg"
          },
          {
            "name": "PARELLA AKHILA",
            "rollNo": "22471A05B4",
            "parentNo": 8096159580,
            "studentNo": 9951492431,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097295/CSE22Batch/CSE22BatchBSection/wn8mbepvwcezjxdnjvxa.jpg"
          },
          {
            "name": "PATALAM NAYEEM",
            "rollNo": "22471A05B5",
            "parentNo": 9381697915,
            "studentNo": 9030403691,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097295/CSE22Batch/CSE22BatchBSection/gvdzwmaohodc8ui6rywy.jpg"
          },
          {
            "name": "PATAN HASHMI",
            "rollNo": "22471A05B6",
            "parentNo": 7013155358,
            "studentNo": 9618093160,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097295/CSE22Batch/CSE22BatchBSection/vhi6yusyffn1xec6mwjb.jpg"
          },
          {
            "name": "PATHAN KARISHMA",
            "rollNo": "22471A05B7",
            "parentNo": 7386209269,
            "studentNo": 9490180380,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097297/CSE22Batch/CSE22BatchBSection/uscyva3alspcdnqqym6e.jpg"
          },
          {
            "name": "PEDDIPAKA UDAY KIRAN",
            "rollNo": "22471A05B8",
            "parentNo": 9550305956,
            "studentNo": 9346089594,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097296/CSE22Batch/CSE22BatchBSection/ok2rierswsg9nnsth3vx.jpg"
          },
          {
            "name": "PENTYALA LAKSHMI PRASANNA",
            "rollNo": "22471A05B9",
            "parentNo": 9346679077,
            "studentNo": 9010865146,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097296/CSE22Batch/CSE22BatchBSection/txkbdnkrhql7ivpbi8ea.jpg"
          },
          {
            "name": "PINNEBOINA ANUSHA",
            "rollNo": "22471A05C0",
            "parentNo": 8520805318,
            "studentNo": 8985968009,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097296/CSE22Batch/CSE22BatchBSection/uryyfsucnvx0bffqrwam.jpg"
          },
          {
            "name": "POKALA APPAIAH",
            "rollNo": "22471A05C1",
            "parentNo": 6302350535,
            "studentNo": 6302350535,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097297/CSE22Batch/CSE22BatchBSection/ia7tfdmz0ufp7ldng3tp.jpg"
          },
          {
            "name": "POLISETTY RISHITHA SAI SRI",
            "rollNo": "22471A05C2",
            "parentNo": 9666223841,
            "studentNo": 9642124039,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097299/CSE22Batch/CSE22BatchBSection/uorzoyxlvnrlk8nfrxl1.jpg"
          },
          {
            "name": "PRAJAPATHI SATYANARAYANA",
            "rollNo": "22471A05C3",
            "parentNo": 9553460740,
            "studentNo": 8106340769,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097299/CSE22Batch/CSE22BatchBSection/dyil3ic66vltsmup8gql.jpg"
          },
          {
            "name": "RAVI BHARGAVI",
            "rollNo": "22471A05C4",
            "parentNo": 9949275030,
            "studentNo": 8688063760,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097298/CSE22Batch/CSE22BatchBSection/eddwhdqsnm1plcm0wnoa.jpg"
          },
          {
            "name": "RAYALA LAKSHMI",
            "rollNo": "22471A05C5",
            "parentNo": 9948463665,
            "studentNo": 8074151183,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097299/CSE22Batch/CSE22BatchBSection/msngm5cmuqcsvy1wpgtd.jpg"
          },
          {
            "name": "SANAGALA HARISHINI",
            "rollNo": "22471A05C6",
            "parentNo": 7386572277,
            "studentNo": 7842361545,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097299/CSE22Batch/CSE22BatchBSection/ygu7hkdvd5ke6xx5alz6.jpg"
          },
          {
            "name": "SHAIK AFREEN NEHA",
            "rollNo": "22471A05C7",
            "parentNo": 9849265401,
            "studentNo": 9849614829,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097299/CSE22Batch/CSE22BatchBSection/yl5joqjbmwkbv6vne7oj.jpg"
          },
          {
            "name": "SHAIK GANGARAM SUMIYA",
            "rollNo": "22471A05C8",
            "parentNo": 9640727408,
            "studentNo": 9640727408,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097301/CSE22Batch/CSE22BatchBSection/mhopypdncorblalxgyxb.jpg"
          },
          {
            "name": "SHAIK MANEPALLI MASTAN VALI",
            "rollNo": "22471A05C9",
            "parentNo": 7993578839,
            "studentNo": 7995423851,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097303/CSE22Batch/CSE22BatchBSection/aak5jnanbrrfoxersnh4.jpg"
          },
          {
            "name": "SHAIK MEERA JASMINE",
            "rollNo": "22471A05D0",
            "parentNo": 9493978134,
            "studentNo": 9440939992,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097300/CSE22Batch/CSE22BatchBSection/rxtqqtbb1kkwstlfy5sl.jpg"
          },
          {
            "name": "SHAIK MOHAMMAD THAHEER",
            "rollNo": "22471A05D1",
            "parentNo": 8008446116,
            "studentNo": 7997900939,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097300/CSE22Batch/CSE22BatchBSection/o5lzgmmecnsq52iii7tk.jpg"
          },
          {
            "name": "SHAIK MOTHAD AZHAR",
            "rollNo": "22471A05D2",
            "parentNo": 8247338935,
            "studentNo": 8247338935,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097303/CSE22Batch/CSE22BatchBSection/yjkbmjtotiisbkbxuyrg.jpg"
          },
          {
            "name": "SHAIK NAZEEMA",
            "rollNo": "22471A05D3",
            "parentNo": 9949067432,
            "studentNo": 9885469435,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097301/CSE22Batch/CSE22BatchBSection/mjr1ya4mgkavsypedieh.jpg"
          },
          {
            "name": "SHAIKTHETTU SHARIF",
            "rollNo": "22471A05D4",
            "parentNo": 9000954240,
            "studentNo": 7675043201,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097303/CSE22Batch/CSE22BatchBSection/w4bvftbatgne3joptpii.jpg"
          },
          {
            "name": "SIDDI VENKATESH",
            "rollNo": "22471A05D5",
            "parentNo": 8919635933,
            "studentNo": 8919635933,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097302/CSE22Batch/CSE22BatchBSection/dkrj6qijzfubyfzax8zo.jpg"
          },
          {
            "name": "VALLURI BHAVANA",
            "rollNo": "22471A05D6",
            "parentNo": 9550229486,
            "studentNo": 9381965746,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097303/CSE22Batch/CSE22BatchBSection/kpnwsgxjewxt906h7icv.jpg"
          },
          {
            "name": "VATRAM BHAVANA",
            "rollNo": "22471A05D7",
            "parentNo": 9985799316,
            "studentNo": 9381393119,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097306/CSE22Batch/CSE22BatchBSection/nwgjl24fzgnm7jwyjkha.jpg"
          },
          {
            "name": "VINNAKOTA MANOJ KUMAR",
            "rollNo": "22471A05D8",
            "parentNo": 9963205096,
            "studentNo": 9963205096,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097303/CSE22Batch/CSE22BatchBSection/s6ezqoif22afdtbmh0h6.jpg"
          },
          {
            "name": "YAMARTHY VENKATA KRISHNA",
            "rollNo": "22471A05D9",
            "parentNo": 7981604855,
            "studentNo": 9390058850,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097304/CSE22Batch/CSE22BatchBSection/nf3gfjmy43dzh2ocfpbm.jpg"
          },
          {
            "name": "YELCHURI SIVA RAMA KRISHNA VINAY",
            "rollNo": "22471A05E0",
            "parentNo": 8790571049,
            "studentNo": 7013781126,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097308/CSE22Batch/CSE22BatchBSection/hxqgp0xxhsnma4gtohz8.jpg"
          },
          {
            "name": "ADHIKARI SATISH",
            "rollNo": "22471A05E1",
            "parentNo": 9866361227,
            "studentNo": 7674846745,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097331/CSE22Batch/CSE22BatchCSection/gxxxtq7f9vv5qcewe5lp.jpg"
          },
          {
            "name": "ADI LAKSHMI THOGATI",
            "rollNo": "22471A05E2",
            "parentNo": 8897362386,
            "studentNo": 9490598492,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097332/CSE22Batch/CSE22BatchCSection/huspmmrlrry2dqavqw3v.jpg"
          },
          {
            "name": "ALAJANGI KEERTHI SREE",
            "rollNo": "22471A05E3",
            "parentNo": 8639958444,
            "studentNo": 9885436155,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097332/CSE22Batch/CSE22BatchCSection/beubnpp0gbwpoi0hqb9d.jpg"
          },
          {
            "name": "AMIREDDY NAVYA",
            "rollNo": "22471A05E4",
            "parentNo": 8519963801,
            "studentNo": 9989866580,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097332/CSE22Batch/CSE22BatchCSection/cn8qxozthelkeymybkho.jpg"
          },
          {
            "name": "ATTULURI PAVANA PRUDULA SRI",
            "rollNo": "22471A05E5",
            "parentNo": 9573293043,
            "studentNo": 9346556274,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097333/CSE22Batch/CSE22BatchCSection/bxj8gt3ns1nfbtqvh2xz.jpg"
          },
          {
            "name": "BADIGUNCHALA PUSHPA SIVALEELAVATHI",
            "rollNo": "22471A05E6",
            "parentNo": 7997135602,
            "studentNo": 7680882158,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097333/CSE22Batch/CSE22BatchCSection/dh4uraem4najdrsgkxqa.jpg"
          },
          {
            "name": "BHUMIREDDY SAILAJA",
            "rollNo": "22471A05E7",
            "parentNo": 9177969612,
            "studentNo": 9177969612,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097333/CSE22Batch/CSE22BatchCSection/z9nrsxoph27d7ncp63od.jpg"
          },
          {
            "name": "BORIGARLA VENKATAGOPI",
            "rollNo": "22471A05E8",
            "parentNo": 9603872789,
            "studentNo": 9603872789,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097333/CSE22Batch/CSE22BatchCSection/rjfjhtj1m6xuwaychthk.jpg"
          },
          {
            "name": "CHATTI NAVYA",
            "rollNo": "22471A05E9",
            "parentNo": 8374033569,
            "studentNo": 8523833569,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097334/CSE22Batch/CSE22BatchCSection/sc90ovqdhsoatersvtgv.jpg"
          },
          {
            "name": "DASARI SRUJANASANKEERTHI",
            "rollNo": "22471A05F0",
            "parentNo": 7569079945,
            "studentNo": 8019171033,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097334/CSE22Batch/CSE22BatchCSection/rjhwfsfsngnlpgpfvnkd.jpg"
          },
          {
            "name": "DHANUSH JASWANTH TEJA IKKURTHI",
            "rollNo": "22471A05F1",
            "parentNo": 9959109884,
            "studentNo": 9182049259,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097335/CSE22Batch/CSE22BatchCSection/mazdt2ok9llc8sr07vht.jpg"
          },
          {
            "name": "DOGIPARTHI VENKATA SAI GIRISH",
            "rollNo": "22471A05F2",
            "parentNo": 9908706343,
            "studentNo": 8179936343,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097335/CSE22Batch/CSE22BatchCSection/arnryk1vqhwqcm51v7p8.jpg"
          },
          {
            "name": "DUDDU DIVYA",
            "rollNo": "22471A05F3",
            "parentNo": 9505520787,
            "studentNo": 7995420787,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097335/CSE22Batch/CSE22BatchCSection/yydljjgcopgkxc9oqnzx.jpg"
          },
          {
            "name": "EERLAPATI LAKSHMAIAH",
            "rollNo": "22471A05F4",
            "parentNo": 9110567514,
            "studentNo": 9110567514,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097336/CSE22Batch/CSE22BatchCSection/rtmemsipc1aw7zfsntdf.jpg"
          },
          {
            "name": "GAIRUBOINA NAVEEN KUMAR",
            "rollNo": "22471A05F5",
            "parentNo": 9908292054,
            "studentNo": 9059109173,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097336/CSE22Batch/CSE22BatchCSection/anpwwiow7q4lypgjwdkn.jpg"
          },
          {
            "name": "GARIKAPATI AISHWARYA",
            "rollNo": "22471A05F6",
            "parentNo": 8328022600,
            "studentNo": 9866627014,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097336/CSE22Batch/CSE22BatchCSection/rjbmk1y58s5xle2vp6ot.jpg"
          },
          {
            "name": "GUGGILAM CHINMAYEE",
            "rollNo": "22471A05F7",
            "parentNo": 9440768153,
            "studentNo": 9493188004,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097337/CSE22Batch/CSE22BatchCSection/vyjeenyrmyioxmr0iutg.jpg"
          },
          {
            "name": "JALUKURI GOPI",
            "rollNo": "22471A05F8",
            "parentNo": 8790899675,
            "studentNo": 7207024328,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097337/CSE22Batch/CSE22BatchCSection/sw4zc3v80k734cu70s8i.jpg"
          },
          {
            "name": "JONNALAGADDA MAHESH BABU",
            "rollNo": "22471A05F9",
            "parentNo": 6304736234,
            "studentNo": 7702297189,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097337/CSE22Batch/CSE22BatchCSection/nnblfdpzbtcxvmk3uigq.jpg"
          },
          {
            "name": "KADAPA GANDHI KUMARI",
            "rollNo": "22471A05G0",
            "parentNo": 7330653879,
            "studentNo": 7036063879,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097338/CSE22Batch/CSE22BatchCSection/vqavntfqqxcilu6rrah8.jpg"
          },
          {
            "name": "KATARI THANMAI",
            "rollNo": "22471A05G1",
            "parentNo": 7981705996,
            "studentNo": 9963031059,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097338/CSE22Batch/CSE22BatchCSection/jikm0p3afpynm1ybmfde.jpg"
          },
          {
            "name": "KAVERI KOLLI",
            "rollNo": "22471A05G2",
            "parentNo": 9949062370,
            "studentNo": 7730854578,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097339/CSE22Batch/CSE22BatchCSection/pw1iajx4o5xxpxlhxcrw.jpg"
          },
          {
            "name": "KONDA PRATYUSHA",
            "rollNo": "22471A05G3",
            "parentNo": 9704685489,
            "studentNo": 8309506077,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097339/CSE22Batch/CSE22BatchCSection/dhnpsvxlp9a6mpjhzpyz.jpg"
          },
          {
            "name": "KOPPARAPU SIVA HEMANTH KUMAR",
            "rollNo": "22471A05G5",
            "parentNo": 9014804399,
            "studentNo": 9701007035,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097340/CSE22Batch/CSE22BatchCSection/uzpursv7yfo5xbssnf9u.jpg"
          },
          {
            "name": "KSHATRIYA JAYA LAKSHMI",
            "rollNo": "22471A05G6",
            "parentNo": 6281843943,
            "studentNo": 9014928958,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097340/CSE22Batch/CSE22BatchCSection/w1nt2wmtnghhg2smyway.jpg"
          },
          {
            "name": "KURAPATI ANUSHA",
            "rollNo": "22471A05G7",
            "parentNo": 9502415592,
            "studentNo": 7730983412,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097340/CSE22Batch/CSE22BatchCSection/cn0piqsj4nyhpzh6ckbe.jpg"
          },
          {
            "name": "LAKSHMI SIVA SAI TULLIBILLI",
            "rollNo": "22471A05G8",
            "parentNo": 7799635391,
            "studentNo": 9618034413,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097341/CSE22Batch/CSE22BatchCSection/ugw0jzvldg6aaco3a8le.jpg"
          },
          {
            "name": "MAHAMKALI RAMADEVI",
            "rollNo": "22471A05G9",
            "parentNo": 8106313231,
            "studentNo": 7671986957,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097341/CSE22Batch/CSE22BatchCSection/tgtiy5ivfdz9zvyx0l2r.jpg"
          },
          {
            "name": "MAKKENA RAJESWARI",
            "rollNo": "22471A05H0",
            "parentNo": 9948429803,
            "studentNo": 6303200409,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097341/CSE22Batch/CSE22BatchCSection/c1x2r1jcmkxpgaacwpsb.jpg"
          },
          {
            "name": "MALLELA JYOTHI",
            "rollNo": "22471A05H1",
            "parentNo": 9989798957,
            "studentNo": 7288989080,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097342/CSE22Batch/CSE22BatchCSection/mymkl0ahhljv4iasqxru.jpg"
          },
          {
            "name": "MALLELA MANIKANTA",
            "rollNo": "22471A05H2",
            "parentNo": 7207144637,
            "studentNo": 8501944637,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097342/CSE22Batch/CSE22BatchCSection/c5rouliy35dsbruffurs.jpg"
          },
          {
            "name": "MEESALA SIVAIAH",
            "rollNo": "22471A05H4",
            "parentNo": 9849384253,
            "studentNo": 9640339223,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097343/CSE22Batch/CSE22BatchCSection/ahkn2gsbcafpftrh7a8s.jpg"
          },
          {
            "name": "MOUNICA PULAGORLA",
            "rollNo": "22471A05H5",
            "parentNo": 7981903689,
            "studentNo": 9347813886,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097343/CSE22Batch/CSE22BatchCSection/icbticl4nvrlosdhqemo.jpg"
          },
          {
            "name": "MUNDLAMURI VIJAYA KUMARACHARI",
            "rollNo": "22471A05H6",
            "parentNo": 9666609103,
            "studentNo": 7288040426,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097344/CSE22Batch/CSE22BatchCSection/xzxlcupxhzfisviscbww.jpg"
          },
          {
            "name": "NAGARAM PRASAD RAO",
            "rollNo": "22471A05H7",
            "parentNo": 9885826635,
            "studentNo": 9440481134,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097344/CSE22Batch/CSE22BatchCSection/tzhsi2sbiyefjesrlafd.jpg"
          },
          {
            "name": "NAKKA VIJAY BHASKAR REDDY",
            "rollNo": "22471A05H8",
            "parentNo": 9704688782,
            "studentNo": 9347706001,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097345/CSE22Batch/CSE22BatchCSection/tygkcnayjyyhd99vcywg.jpg"
          },
          {
            "name": "NALLAMOTHU VINAY",
            "rollNo": "22471A05H9",
            "parentNo": 9441196172,
            "studentNo": 9885013668,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097345/CSE22Batch/CSE22BatchCSection/rgkmedtmrlizg2ujjoh7.jpg"
          },
          {
            "name": "NAMBURI TEJA",
            "rollNo": "22471A05I0",
            "parentNo": 9618619225,
            "studentNo": 9346235676,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097345/CSE22Batch/CSE22BatchCSection/ciohj53c8p2fjmxfzoi7.jpg"
          },
          {
            "name": "PALLAPU HARISH",
            "rollNo": "22471A05I1",
            "parentNo": 9701491446,
            "studentNo": 9492424686,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097346/CSE22Batch/CSE22BatchCSection/agpv4kah51ds4t25xnyw.jpg"
          },
          {
            "name": "PALUTLA VENKATA NAVEEN",
            "rollNo": "22471A05I2",
            "parentNo": 9550850611,
            "studentNo": 8247272418,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097347/CSE22Batch/CSE22BatchCSection/tnbgrrir82399en8slwc.jpg"
          },
          {
            "name": "PANCHUMARTHI PRASANNA",
            "rollNo": "22471A05I3",
            "parentNo": 9491152895,
            "studentNo": 9000504591,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097347/CSE22Batch/CSE22BatchCSection/nriw5nangoviyq5gml5r.jpg"
          },
          {
            "name": "PEKALA VEERA DHANUSH KUMAR",
            "rollNo": "22471A05I4",
            "parentNo": 8919304258,
            "studentNo": 9063620258,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097346/CSE22Batch/CSE22BatchCSection/qgikaljohzasf2wtelqq.jpg"
          },
          {
            "name": "KUMBA CHANDRA SEKHAR",
            "rollNo": "22471A05I5",
            "parentNo": 7702097629,
            "studentNo": 7093479860,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097346/CSE22Batch/CSE22BatchCSection/t6dwq5ttry93ml4yvsce.jpg"
          },
          {
            "name": "SANIKOMMU NIRUPAM REDDY",
            "rollNo": "22471A05I6",
            "parentNo": 9885774875,
            "studentNo": 9014501104,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097347/CSE22Batch/CSE22BatchCSection/bceaalppaafcyanfkfsc.jpg"
          },
          {
            "name": "SATTENPALLI SADARANI",
            "rollNo": "22471A05I7",
            "parentNo": 9989877347,
            "studentNo": 6303439306,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097349/CSE22Batch/CSE22BatchCSection/t5fcjsildskehbo790ez.jpg"
          },
          {
            "name": "SEGGEM SRINIVAS",
            "rollNo": "22471A05I8",
            "parentNo": 9912164317,
            "studentNo": 8106408872,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097348/CSE22Batch/CSE22BatchCSection/x9tgkcj55z1e0kpm7jup.jpg"
          },
          {
            "name": "SHAIK APSA",
            "rollNo": "22471A05I9",
            "parentNo": 7093126568,
            "studentNo": 8341945484,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097348/CSE22Batch/CSE22BatchCSection/asymrk5hqojqaqtrnqqr.jpg"
          },
          {
            "name": "SHAIK MOHAMMAD FAYAZ",
            "rollNo": "22471A05J0",
            "parentNo": 9908037989,
            "studentNo": 9908037989,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097348/CSE22Batch/CSE22BatchCSection/z19nzlrpkohootivqh26.jpg"
          },
          {
            "name": "SHAIK MYNAMPATI SAIDA VALI",
            "rollNo": "22471A05J1",
            "parentNo": 9550157580,
            "studentNo": 9347204459,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097349/CSE22Batch/CSE22BatchCSection/gmtjhwbmuavbvm8ub06v.jpg"
          },
          {
            "name": "SHAIK NAZEERA",
            "rollNo": "22471A05J2",
            "parentNo": 9703109824,
            "studentNo": 6300376716,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097349/CSE22Batch/CSE22BatchCSection/xvyfhf3m4tomcn5loqkw.jpg"
          },
          {
            "name": "SHAIK RASHEED",
            "rollNo": "22471A05J3",
            "parentNo": 9573428373,
            "studentNo": 9494046505,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097349/CSE22Batch/CSE22BatchCSection/sungediaoihb2cbnjqzi.jpg"
          },
          {
            "name": "SHAIK SUMAYA",
            "rollNo": "22471A05J4",
            "parentNo": 7569487948,
            "studentNo": 9885740169,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097349/CSE22Batch/CSE22BatchCSection/cdoplhsydrfemdn8tg3r.jpg"
          },
          {
            "name": "SIRISHA PAGADALA",
            "rollNo": "22471A05J5",
            "parentNo": 6300947586,
            "studentNo": 7680030673,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097350/CSE22Batch/CSE22BatchCSection/vkwcak0l7omjwveadq34.jpg"
          },
          {
            "name": "SONTI VINEELA",
            "rollNo": "22471A05J6",
            "parentNo": 9441410533,
            "studentNo": 9059607495,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097350/CSE22Batch/CSE22BatchCSection/xwl1dz8mnnkxtstezgnd.jpg"
          },
          {
            "name": "SOUDAGAR MIN HAZ",
            "rollNo": "22471A05J7",
            "parentNo": 8019332910,
            "studentNo": 9515119734,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097350/CSE22Batch/CSE22BatchCSection/ltn0s7a5p4dzoispsk3v.jpg"
          },
          {
            "name": "SUNKARA HARINI",
            "rollNo": "22471A05J8",
            "parentNo": 9581126272,
            "studentNo": 8688531506,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097351/CSE22Batch/CSE22BatchCSection/lipy4hlzwllqj1f30g5e.jpg"
          },
          {
            "name": "SURA VENKATA SIVA NAGA LAKSHMI",
            "rollNo": "22471A05J9",
            "parentNo": 9704342546,
            "studentNo": 8317548851,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097351/CSE22Batch/CSE22BatchCSection/hwnszuvxe2chv1m5smfg.jpg"
          },
          {
            "name": "SYED SHAFIA ZAINAB",
            "rollNo": "22471A05K0",
            "parentNo": 7075867385,
            "studentNo": 9704664638,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097351/CSE22Batch/CSE22BatchCSection/m6oh4nqakaphykbatm6e.jpg"
          },
          {
            "name": "SYED TASNEEM BANU",
            "rollNo": "22471A05K1",
            "parentNo": 9110366712,
            "studentNo": 9703579035,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097352/CSE22Batch/CSE22BatchCSection/bpioex1d8z4qc2vddmlq.jpg"
          },
          {
            "name": "THANNERU VENKATA SIVA",
            "rollNo": "22471A05K2",
            "parentNo": 6300298388,
            "studentNo": 8247632390,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097352/CSE22Batch/CSE22BatchCSection/gbwoytrkhpxk7m4rtul4.jpg"
          },
          {
            "name": "TIPPANAPOINA RAMESH",
            "rollNo": "22471A05K3",
            "parentNo": 9959658795,
            "studentNo": 7993742185,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097352/CSE22Batch/CSE22BatchCSection/eh61wx3mfxe3gc6grjw7.jpg"
          },
          {
            "name": "VALIVARTHI ABHINAYASRI",
            "rollNo": "22471A05K4",
            "parentNo": 8466934835,
            "studentNo": 6304686376,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097353/CSE22Batch/CSE22BatchCSection/us35sv5uhdcigzbkbpxy.jpg"
          },
          {
            "name": "VATTIKUTI HEMANTH",
            "rollNo": "22471A05K5",
            "parentNo": 9010987798,
            "studentNo": 6301436139,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097353/CSE22Batch/CSE22BatchCSection/u1hkea2ihwjgflqsurlg.jpg"
          },
          {
            "name": "VIPPARALA CHETAN",
            "rollNo": "22471A05K6",
            "parentNo": 9912261552,
            "studentNo": 7989880790,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097353/CSE22Batch/CSE22BatchCSection/ni4uhmdfeogiysfnvdll.jpg"
          },
          {
            "name": "YADAVALLI KARTHIKA",
            "rollNo": "22471A05K7",
            "parentNo": 9573423020,
            "studentNo": 7386423020,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097354/CSE22Batch/CSE22BatchCSection/n2njcn6pcsnjnfqpkziu.jpg"
          },
          {
            "name": "YAGNAPRIYA PICHALA",
            "rollNo": "22471A05K8",
            "parentNo": 8106707695,
            "studentNo": 7093980836,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097354/CSE22Batch/CSE22BatchCSection/bfrkxoj5w8wy2njsxywc.jpg"
          },
          {
            "name": "YARRA JAKRAIAH KINNERA",
            "rollNo": "22471A05K9",
            "parentNo": 7997799896,
            "studentNo": 9494468474,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097339/CSE22Batch/CSE22BatchCSection/d07zyjakgv4cgwc9rtug.jpg"
          },
          {
            "name": "YEPURI TEJA NAGA ANIL KUMAR",
            "rollNo": "22471A05L0",
            "parentNo": 7981214757,
            "studentNo": 9381644372,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097354/CSE22Batch/CSE22BatchCSection/h25dcfs41og6cu7tyht7.jpg"
          },
          {
            "name": "RAJABOINA CHANDRA SEKHAR",
            "rollNo": "21471A05Q2",
            "parentNo": 7981286381,
            "studentNo": 7981286381
          },
          {
            "name": "MERAJOTHU AKHIL KUMAR",
            "rollNo": "21471A0536",
            "parentNo": 9701406096,
            "studentNo": 9392841553
          },
          {
            "name": "AMMISETTY CHAMUNDESWARI",
            "rollNo": "22471A05L1",
            "parentNo": 6305344159,
            "studentNo": 9032149346,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097356/CSE22Batch/CSE22BatchDSection/jpg7o08wkv8ky8mlhamh.jpg"
          },
          {
            "name": "APPALA CHANDANA PRIYA",
            "rollNo": "22471A05L2",
            "parentNo": 9398224260,
            "studentNo": 9398224260,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097356/CSE22Batch/CSE22BatchDSection/uqymz83ek3bcjrywj1hj.jpg"
          },
          {
            "name": "ATMAKURI JASHWANTH",
            "rollNo": "22471A05L3",
            "parentNo": 9247892586,
            "studentNo": 6305916338,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097356/CSE22Batch/CSE22BatchDSection/sxnplq2lgovxw8spjqhj.jpg"
          },
          {
            "name": "BANAVATHU VENKATA DURGA NAIK",
            "rollNo": "22471A05L4",
            "parentNo": 9000508918,
            "studentNo": 8688380176,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097356/CSE22Batch/CSE22BatchDSection/edz6fams4ob3r9yfr7wp.jpg"
          },
          {
            "name": "BUDALA JAYABHARATHI",
            "rollNo": "22471A05L5",
            "parentNo": 9701201407,
            "studentNo": 7893276356,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097357/CSE22Batch/CSE22BatchDSection/odlpszdxfkmks4mx0czz.jpg"
          },
          {
            "name": "CHAKKA BHARADWAJ",
            "rollNo": "22471A05L6",
            "parentNo": 9849369414,
            "studentNo": 7396705255,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097357/CSE22Batch/CSE22BatchDSection/vm3rrttlcr7oawrjchio.jpg"
          },
          {
            "name": "CHENNUPALLI CHANDRIKA TIRUMALA",
            "rollNo": "22471A05L7",
            "parentNo": 8978621083,
            "studentNo": 7013444177,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097358/CSE22Batch/CSE22BatchDSection/qmskew1ladfghvx8e4lu.jpg"
          },
          {
            "name": "CHINTHIRALA JOHN WESLY",
            "rollNo": "22471A05L8",
            "parentNo": 9063695315,
            "studentNo": 8019565315,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097358/CSE22Batch/CSE22BatchDSection/wfaiokoagi0l9goactqe.jpg"
          },
          {
            "name": "DOGIPARTHI GOPI VENKATA NAGA VISWANATH",
            "rollNo": "22471A05L9",
            "parentNo": 9951360344,
            "studentNo": 7989706191,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097358/CSE22Batch/CSE22BatchDSection/wgh3xmpk1owikubfnw13.jpg"
          },
          {
            "name": "DUDDU SATISH BABU",
            "rollNo": "22471A05M0",
            "parentNo": 7799518688,
            "studentNo": 7680048961,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097359/CSE22Batch/CSE22BatchDSection/ofofwi2ifi3jfafsvbdm.jpg"
          },
          {
            "name": "GALI LAKSHMI THIRUPATHAMMA",
            "rollNo": "22471A05M1",
            "parentNo": 8520062639,
            "studentNo": 9299303044,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097359/CSE22Batch/CSE22BatchDSection/t7yemu9x0xqyugjpz1to.jpg"
          },
          {
            "name": "GARNEPUDI SAGARBABU",
            "rollNo": "22471A05M2",
            "parentNo": 8367779113,
            "studentNo": 8186892691,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097359/CSE22Batch/CSE22BatchDSection/ztve3e86bexb3g0xqdh5.jpg"
          },
          {
            "name": "GUGGILLA KAVYA",
            "rollNo": "22471A05M4",
            "parentNo": 9642936469,
            "studentNo": 9642936469,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097360/CSE22Batch/CSE22BatchDSection/jpucepw6xb4rxzwscl0h.jpg"
          },
          {
            "name": "GUJJARLAPUDI KEERTHANA LAZARUS",
            "rollNo": "22471A05M5",
            "parentNo": 9849091770,
            "studentNo": 9908888519,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097360/CSE22Batch/CSE22BatchDSection/x8fam5ldwvifqjgfpenu.jpg"
          },
          {
            "name": "JADAM SURYA TEJA",
            "rollNo": "22471A05M6",
            "parentNo": 8019960123,
            "studentNo": 6300054355,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097361/CSE22Batch/CSE22BatchDSection/atuudq6aluqbre6wpugv.jpg"
          },
          {
            "name": "KODAVATI JAYAMMMA",
            "rollNo": "22471A05M7",
            "parentNo": 7659929718,
            "studentNo": 9908888519,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097361/CSE22Batch/CSE22BatchDSection/mtdiedtofji8hft9miff.jpg"
          },
          {
            "name": "KOPPURAVURI V.S.N.S.S.ASHOK KUMAR",
            "rollNo": "22471A05M8",
            "parentNo": 7093452080,
            "studentNo": 9391498723,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097362/CSE22Batch/CSE22BatchDSection/iuebixuyfamknbpdp1dk.jpg"
          },
          {
            "name": "KOTHA LAHARI",
            "rollNo": "22471A05N0",
            "parentNo": 9849652416,
            "studentNo": 9652102416,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097363/CSE22Batch/CSE22BatchDSection/mdhx0kzh9gcsccamllla.jpg"
          },
          {
            "name": "KOTHAMADDI ARJUN REDDY",
            "rollNo": "22471A05N1",
            "parentNo": 9989969857,
            "studentNo": 7093686839,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097363/CSE22Batch/CSE22BatchDSection/zrzxd8upptqpgvd6r5kg.jpg"
          },
          {
            "name": "MADANU JOSEPH KUMAR",
            "rollNo": "22471A05N2",
            "parentNo": 7286069874,
            "studentNo": 7286069874,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097363/CSE22Batch/CSE22BatchDSection/zv1f0ua8cgnpycxwiv1n.jpg"
          },
          {
            "name": "MUTLURI PRAVEEN KUMAR",
            "rollNo": "22471A05N4",
            "parentNo": 9949748216,
            "studentNo": 9949331488,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097364/CSE22Batch/CSE22BatchDSection/qurmbwblyuy0mdexatjo.jpg"
          },
          {
            "name": "NALLAMSETTY VINAY",
            "rollNo": "22471A05N5",
            "parentNo": 9032946091,
            "studentNo": 7993394905,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097364/CSE22Batch/CSE22BatchDSection/hcbagnlgsqofiz7ynhli.jpg"
          },
          {
            "name": "PALETI RAHUL",
            "rollNo": "22471A05N6",
            "parentNo": 9966807176,
            "studentNo": 9989027176,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097364/CSE22Batch/CSE22BatchDSection/swe6cfaqvvwnnlnmtlti.jpg"
          },
          {
            "name": "PANCHUMARTHI LAKSHMI GOPINATH",
            "rollNo": "22471A05N7",
            "parentNo": 6302697245,
            "studentNo": 6302697245,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097364/CSE22Batch/CSE22BatchDSection/doznkvsl76ykveiinbyf.png"
          },
          {
            "name": "SHAIK ANAMTARAM ABDUL KAREEM",
            "rollNo": "22471A05N8",
            "parentNo": 9949243161,
            "studentNo": 9949335641,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097365/CSE22Batch/CSE22BatchDSection/h85eztb8uwnfwfhnxsep.jpg"
          },
          {
            "name": "SHAIK FAHEEM AHMED",
            "rollNo": "22471A05N9",
            "parentNo": 9550858394,
            "studentNo": 8522848042,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097365/CSE22Batch/CSE22BatchDSection/azcxhsazehirdza90a6t.jpg"
          },
          {
            "name": "YANAMALA MAHESH BABU",
            "rollNo": "22471A05O0",
            "parentNo": 9642861174,
            "studentNo": 8341606195,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097366/CSE22Batch/CSE22BatchDSection/gyxbxio9vwoxiqsajwxc.jpg"
          },
          {
            "name": "SHAIK SHAKEER AHAMAD",
            "rollNo": "22471A05O1",
            "parentNo": 9440796297,
            "studentNo": 9440796398,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097366/CSE22Batch/CSE22BatchDSection/pkdl9rdd6v6ep3bvadhw.jpg"
          },
          {
            "name": "SHAIK SIRAZ",
            "rollNo": "22471A05O2",
            "parentNo": 9989974462,
            "studentNo": 9959041783,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097366/CSE22Batch/CSE22BatchDSection/kbc822qjqv9wbatlqjal.jpg"
          },
          {
            "name": "SHAIK YALAVARTHI KHAJABI",
            "rollNo": "22471A05O3",
            "parentNo": 8897131555,
            "studentNo": 9701170114,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097367/CSE22Batch/CSE22BatchDSection/cbnhen7lznu7vzwl93ym.jpg"
          },
          {
            "name": "TADI ANUSHA",
            "rollNo": "22471A05O4",
            "parentNo": 9703163009,
            "studentNo": 6305892622,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097367/CSE22Batch/CSE22BatchDSection/gm3y32nc4a6q4lvlr348.jpg"
          },
          {
            "name": "TATAPUDI RAJESH",
            "rollNo": "22471A05O5",
            "parentNo": 8179777267,
            "studentNo": 9182327043,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097367/CSE22Batch/CSE22BatchDSection/qaoukp3ftkmushzwou5a.jpg"
          },
          {
            "name": "TUMMA DURGA BHAVANI",
            "rollNo": "22471A05O6",
            "parentNo": 7893936517,
            "studentNo": 7671946513,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097368/CSE22Batch/CSE22BatchDSection/tkln4bnqmfjcd7opugun.jpg"
          },
          {
            "name": "YELLAMELLI KRUPA CHAITANYA",
            "rollNo": "22471A05O7",
            "parentNo": 9381900979,
            "studentNo": 9398413328,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097368/CSE22Batch/CSE22BatchDSection/mvsrfyed7rsdp1bogkfb.jpg"
          },
          {
            "name": "KONAKANCHI SAI MANIKANTA",
            "rollNo": "22471A05O8",
            "parentNo": 9390284258,
            "studentNo": 8008518337,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097368/CSE22Batch/CSE22BatchDSection/ae6uymtegtafqg0rg2el.jpg"
          },
          {
            "name": "SHAIK MALKA JAN SHAFI",
            "rollNo": "22471A05O9",
            "parentNo": 9347680387,
            "studentNo": 6300967456,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097369/CSE22Batch/CSE22BatchDSection/waujn0fycrc7gebljkom.jpg"
          },
          {
            "name": "SHAIK CHINNA MASTAN VALI",
            "rollNo": "22471A05P0",
            "parentNo": 9908830090,
            "studentNo": 9110795907,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097369/CSE22Batch/CSE22BatchDSection/xwzqxnbu6fedlinj7ng6.jpg"
          },
          {
            "name": "SHAIK INKOLLU FARZAN BASHA",
            "rollNo": "22471A05P1",
            "parentNo": 9381177267,
            "studentNo": 9581410072,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097370/CSE22Batch/CSE22BatchDSection/plj0we5x5xwoe2eg8fev.png"
          },
          {
            "name": "YALAGALA LEELA KRISHNA",
            "rollNo": "22471A05P2",
            "parentNo": 8074758119,
            "studentNo": 9502694410,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097370/CSE22Batch/CSE22BatchDSection/gwbcdx6ziyqixgo4ostu.png"
          },
          {
            "name": "MASIMUKKALA PHANI KUMAR",
            "rollNo": "22471A05P3",
            "parentNo": 9346881593,
            "studentNo": 8121290190,
            "imageUrl": "https://res.cloudinary.com/dfl09yw03/image/upload/v1723097370/CSE22Batch/CSE22BatchDSection/htniomqoxcovjaifhdat.png"
          },
          {
            "name": "PARLAPALLI HASEENA",
            "rollNo": "23475A0501",
            "parentNo": 9502216756,
            "studentNo": 9848697249
          },
          {
            "name": "YARROJU REKHA SRI",
            "rollNo": "23475A0502",
            "parentNo": 9010211172,
            "studentNo": 7569590473
          },
          {
            "name": "SHAIK SUBHANI",
            "rollNo": "23475A0503",
            "parentNo": 8520937938,
            "studentNo": 8555863900
          },
          {
            "name": "NUTI NANDA KAMESWAR",
            "rollNo": "23475A0504",
            "parentNo": 9392528760,
            "studentNo": 9849332044
          },
          {
            "name": "KOTTE NARESH BABU",
            "rollNo": "23475A0505",
            "parentNo": 9491819629,
            "studentNo": 9177110886
          },
          {
            "name": "KOTA DAVID SHALEM",
            "rollNo": "23475A0506",
            "parentNo": 6300521852,
            "studentNo": 9493319642
          },
          {
            "name": "GOGINENI LAKSHMI VARAPRASAD",
            "rollNo": "23475A0507",
            "parentNo": 9550832816,
            "studentNo": 7396099151
          },
          {
            "name": "DUDDI AKHIL",
            "rollNo": "23475A0508",
            "parentNo": 9550992307,
            "studentNo": 8500101623
          },
          {
            "name": "CHAGANTI RETHIKA REDDY",
            "rollNo": "23475A0509",
            "parentNo": 8500754512,
            "studentNo": 8341184535
          },
          {
            "name": "BEESABATTUNI SARATH CHANDRA",
            "rollNo": "23475A0510",
            "parentNo": 7013567316,
            "studentNo": 9885383809
          },
          {
            "name": "CHILAKA SANTHOSH",
            "rollNo": "23475A0511",
            "parentNo": 9490924879,
            "studentNo": 9912566488
          },
          {
            "name": "SHAIK SILAR",
            "rollNo": "23475A0512",
            "parentNo": 9000974030,
            "studentNo": 6305747538
          },
          {
            "name": "ANDRAJU DEEPTHI PRIYA",
            "rollNo": "23475A0513",
            "parentNo": 9705887653,
            "studentNo": 7075562194
          },
          {
            "name": "PIKKILI VENKATESH",
            "rollNo": "23475A0514",
            "parentNo": 8790597115,
            "studentNo": 9676254705
          },
          {
            "name": "APPINI MANIKANTA",
            "rollNo": "23475A0515",
            "parentNo": 9989290836,
            "studentNo": 8978459660
          },
          {
            "name": "MULLANGI POTHANA PAVAN REDDY",
            "rollNo": "23475A0516",
            "parentNo": 6301731389,
            "studentNo": 8555029055
          },
          {
            "name": "LAKKOJU VENKATESH",
            "rollNo": "23475A0517",
            "parentNo": 8125428243,
            "studentNo": 7995824360
          },
          {
            "name": "GUNTREDDI HARSHAVARDHAN",
            "rollNo": "23475A0518",
            "parentNo": 9885766065,
            "studentNo": 7993003842
          },
          {
            "name": "SHAIK SHAJAHAN",
            "rollNo": "23475A0519",
            "parentNo": 9866053233,
            "studentNo": 8247859004
          },
          {
            "name": "GOLI NITHIN",
            "rollNo": "23475A0520",
            "parentNo": 7306992467,
            "studentNo": 9347679119
          },
          {
            "name": "RAVULA NANDU",
            "rollNo": "23475A0521",
            "parentNo": 8074225141,
            "studentNo": 9391248738
          },
          {
            "name": "NALLAGORLA VENKATA CHITANYA SUDHEER",
            "rollNo": "23475A0522",
            "parentNo": 9959336035,
            "studentNo": 8464912097
          },
          {
            "name": "CHIRAKALA GOPI KRISHNA",
            "rollNo": "23475A0523",
            "parentNo": 9618229328,
            "studentNo": 9912739348
          },
          {
            "name": "BODDANA HEMANTH KUMAR",
            "rollNo": "23475A0524",
            "parentNo": 7661022353,
            "studentNo": 9948626654
          },
          {
            "name": "KONAKANCHI SAI RAM",
            "rollNo": "23475A0525",
            "parentNo": 7569496262,
            "studentNo": 9010939405
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
    