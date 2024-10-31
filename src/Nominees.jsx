import React, { useEffect, useState } from 'react';

const mockNominees = {
  "Indoor Games Sports Person of the Year Award": [
      {
        "nominatorEmail": "musaleeaziz@gmail.com",
        "nomineeName": "Lawrence Osuru",
        "totalVotes": 1843
      },
      {
        "nominatorEmail": "josephkamau912@gmail.com",
        "nomineeName": "Ian Brian Ouma",
        "totalVotes": 1208
      },
      {
      "nominatorEmail": "martinelasty001@gmail.com",
      "nomineeName": "Martin Abwao",
      "totalVotes": 980
      },
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": 469
      },
      {
          "nominatorEmail": "grantonmburu01@gmail.com",
          "nomineeName": "na",
          "totalVotes": 234
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": 174
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": 165
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": 148
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": 115
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": 45
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": 42
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "na ",
          "totalVotes": 30
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": 29
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": 16
      },
      {
          "nominatorEmail": "jacsonkiok3111@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": 14
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": 11
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": 10
      },
      {
          "nominatorEmail": "kiambambondo@gmail.com",
          "nomineeName": "m",
          "totalVotes": 9
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "jesee",
          "totalVotes": 7
      },
      {
          "nominatorEmail": "ivanleaky22@gmail.commusa",
          "nomineeName": "brian ouma",
          "totalVotes": 6
      },
      {
          "nominatorEmail": "stephenwere2003@gmail.com",
          "nomineeName": "ojuka",
          "totalVotes": 6
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "dolor alias unde ad ",
          "totalVotes": 6
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": 5
      },
      {
          "nominatorEmail": "elijaahmumoh@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": 5
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": 5
      },
      {
          "nominatorEmail": "joywanjiku@gmail.com",
          "nomineeName": "sonnie",
          "totalVotes": 5
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "..",
          "totalVotes": 5
      },
      {
          "nominatorEmail": "nafulairene73@gmail.com",
          "nomineeName": "jesse",
          "totalVotes": 4
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "...",
          "totalVotes": 4
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "kama",
          "totalVotes": 4
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": 3
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "chess",
          "totalVotes": 3
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": ". ",
          "totalVotes": 3
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": 3
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "brian",
          "totalVotes": 3
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": 3
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": 3
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "becky",
          "totalVotes": 3
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "g",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "susanmutama90@gmail.com",
          "nomineeName": "brian ",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "mjumbi",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "antodante58@gmail.com",
          "nomineeName": "brian ouma",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "omondibernice455@gmail.com",
          "nomineeName": "manu",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "sabpastels@gmail.com",
          "nomineeName": "kamau mwangi",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "luke evans",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "otienoenock780@gmail.com",
          "nomineeName": "philip idewa",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "yovanmokaya063@gmail.com",
          "nomineeName": "martin abwao",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "h",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": "musa lee",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "badminton ",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "d",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "lawrence ",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "lawrence",
          "totalVotes": 2
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "broookssteven@gmail.com",
          "nomineeName": "mwemde ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "william oyoo",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "karate ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "paul masharia",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "meshack were.",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "okothjohnomondi@gmail.com",
          "nomineeName": "sam",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "mutua",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "peter ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "emmanuelkipkirui90@gmail.com",
          "nomineeName": "emmanuel nyakeri",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "emmanuelkhamati01@gmail.com",
          "nomineeName": "lawrence ojiambo ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "mugambih600@gmail.com",
          "nomineeName": "kelvin eistein ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "faithgathoni16@gmail.com",
          "nomineeName": "chuxx",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "erickmkobia2019@gmail.com",
          "nomineeName": "musau mwende",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "judy wairimu",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "aizomanu0@gmail.com",
          "nomineeName": "t",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "irerieric531@gmail.com",
          "nomineeName": "jasper ombaso",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "essykinjos689@gmail.com",
          "nomineeName": "b",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "youth ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "mugambienock@gmail.com",
          "nomineeName": "nome",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "teddybruno98@gmail.com",
          "nomineeName": "table tennis ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "fabius simiyu ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "uu",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "patrick",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "mwende mutiso ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "denzel tsetsekedy",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "terry tonui",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "margaret.mtheuri@gmail.com",
          "nomineeName": "luke chess",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "atienoflojo26@gmail.com",
          "nomineeName": "luke_chess",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "ryan augustine ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "muenidamaris68@gmail.com",
          "nomineeName": "n /a",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "nelsonwwiseman@gmail.com",
          "nomineeName": "mwende ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": "j",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "mercy ",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "mana kange i",
          "totalVotes": 1
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "mulky",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshuaonyango023@gmail.com",
          "nomineeName": "kydah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "luke evans ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "sokoni nyangweso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "pater",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mcjumadonald36@gmail.com",
          "nomineeName": "mbuzi wa migori",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "antony ochieng' ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "rolline simiyu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "claudia.akongo@gmail.com",
          "nomineeName": "evans luke ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rollinsdenis415@gmail.com",
          "nomineeName": "geneviv",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga4@gmail.com",
          "nomineeName": "nabangi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kibetbrian09@gmail.com",
          "nomineeName": "ann mutua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "tonny the captain.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "incididunt ullamco a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hellenmogoi53@gmail.com",
          "nomineeName": "mitchell ann",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "brian mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "nndnndmdmdndnssn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "stanley ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "nelly akinyi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "mwende sammy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "cohen lulei",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "vivian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "evanceouma277@gmail.com",
          "nomineeName": "musaa lee",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "eric ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "---",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "keisy lenon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "bnm",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "claudette akongo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kelvinsabul0@gmail.com",
          "nomineeName": "emanuel nyakeri ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "tug",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "f",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "tabiths",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "grace",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "ann mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kahigamwangi001@gmail.com",
          "nomineeName": "nil'",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinmbugua300@gmail.com",
          "nomineeName": "murage",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "alice",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hussein010715@gmail.com",
          "nomineeName": "muhammad samah msatuk director",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "claudette akong'o",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "lilian tsisika ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "samy keshe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue167@gmail.com",
          "nomineeName": "jeseee",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "elizabethanyungu@gmail.com",
          "nomineeName": "badminton captain",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "mitchell ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "peter karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "mwemde mutemi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piuskimathi5@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "melissa.nicholas55@gmail.com",
          "nomineeName": "philip idewa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ekuria@studentsforliberty.org",
          "nomineeName": "peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Waniyundung@gmail.com",
          "nomineeName": "not ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "ann",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "grace achieng",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "diananaipande@gmail.com",
          "nomineeName": "ultimate frisbee ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "brian. musau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "tt",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "basketball ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "bdhh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeromecole@gmail.com",
          "nomineeName": "ian brian ouma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "sammy keshe ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "kilonzo mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "angela chepkemoi (angie) ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "ian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinmwendwa005@gmail.com",
          "nomineeName": "martin kitonga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "cjui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "evans luke",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gondamohammed05@gmail.com",
          "nomineeName": "mohamed gonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "q",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "chebet",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "mita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "msatuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the indoor games sports person of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "everlyne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "magni id et numquam ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanguimaina7462@gmail.com",
          "nomineeName": "kalekye",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "joshua mark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "faith",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "mwania mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesopiyo@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "agnescherono@tukenya.ac.ke",
          "nomineeName": "not applicable.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "non",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": "..... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "karma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "mwemde sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "pascal juma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "muendo peter ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "steve",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "jackson ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okinyiphelix2@gmail.com",
          "nomineeName": "nip",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "pablo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "kamau mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "modi quisquam animi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "oliver valentine",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryankiplimo20@gmail.com",
          "nomineeName": "he",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "james",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chebetterrytonui@gmail.com",
          "nomineeName": "ian ouma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "meshackkariuki@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isdora043@gmail.com",
          "nomineeName": "joel ojuka ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "rachesl ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onlygodcanjudgme@gmail.com",
          "nomineeName": "outdoor games sports person of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "lekish malei",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "faith rono ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "musa lee ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "gh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianwangombe4@gmail.com",
          "nomineeName": "faith rono",
          "totalVotes": "1"
      }
  ],
  "Indoor Games Sports Team of the Year Award": [
      
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "taekwondo",
          "totalVotes": "1846"
      },
      {
        "nominatorEmail": "simmic997@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "1378"
      },
      {
        "nominatorEmail": "nafulairene73@gmail.com",
        "nomineeName": "badminton ",
        "totalVotes": "774"
      },
      {
        "nominatorEmail": "david105kingi@gmail.com",
        "nomineeName": "chess",
        "totalVotes": "534"
    },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "na",
          "totalVotes": "235"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "188"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "161"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "148"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "113"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "46"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "42"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "32"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "table tennis ",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "26"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "badminton",
          "totalVotes": "21"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "tt",
          "totalVotes": "19"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "Victor.bkmudiir@gmail.com",
          "nomineeName": "none",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "Veromwende9@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "taekwondo ",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "aalexmwangangi@gmail.com",
          "nomineeName": "m",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "gpropdissick@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "quia a unde qui fuga",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "table tennis",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "chess ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "brendaanne21@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "julianogutu@gmail.com",
          "nomineeName": "na n",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "scrabble",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "t",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "handball",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "samuelkahinga@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "football ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "info1@website.com",
          "nomineeName": "tykwondo",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mathew23mogambim@gmail.com",
          "nomineeName": "hand ball",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Wekesaeunice32@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "bb",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "info3@website.com",
          "nomineeName": "tykwondo ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "furrystepper@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "tabel tennis ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "basketball ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "...",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "penina anyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "odit laudantium ut ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "mercy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "hellen",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "cricket",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "lawn tennis",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "corporis quis sit om",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "msatuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "no one me ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "bandminton",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sonnick993@gmail.com",
          "nomineeName": "tennis",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mugambih600@gmail.com",
          "nomineeName": "football",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hezronratemo@students.tukenya.ac.ke",
          "nomineeName": "chess club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "amos too",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "soldiers ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "njagicollins2@students.tukenya.ac.ke",
          "nomineeName": "table tennis team",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": "f",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "evanceouma277@gmail.com",
          "nomineeName": "tykuondo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "faith",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "atienoflojo26@gmail.com",
          "nomineeName": "scrabble ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangodavid655@gmail.com",
          "nomineeName": "n/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the indoor games sports team of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "mjumbi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "q",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "abigail kimondiu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "beatricewanjue98@gmail.com",
          "nomineeName": "none n",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "fabius simiyu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "joy mbithi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yujonyaga@gmail.com",
          "nomineeName": "sonnie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": "karate",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "winnie yesang",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "lawrence osuru",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "meshackkariuki@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "gh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmulongo82@students.tukenya.ac.ke",
          "nomineeName": "table dennis ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "mary wanjiku",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "essykinjos689@gmail.com",
          "nomineeName": "h",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "chess game",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "vel velit qui qui eu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "habe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "cjui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "stable tenniss",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinmbugua300@gmail.com",
          "nomineeName": "elite tuk chess",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "netball team",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okukumarcelingnatius@gmail.com",
          "nomineeName": "i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "stephen ndung'u ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "tennis ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "p",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "c",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "chess team",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "emmanueli josephini ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "bad minton ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "jg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "tuk hammers ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "back ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bingwa1boy@gmail.com",
          "nomineeName": "tae kwon do",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "tt team",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "tuk chess club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "abdihanan@students.tukenya.ac.ke",
          "nomineeName": "ian brian ouma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "birdminton ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "uu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "hhhg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "lawrence ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "y",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onlygodcanjudgme@gmail.com",
          "nomineeName": "outdoor games sports person of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "austinekin254@gmail.com",
          "nomineeName": "the kwon do",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "tar",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": "b",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "hockey ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "cavana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "chess team ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga4@gmail.com",
          "nomineeName": "watu wa musa lee(taekwondo)🔥",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      }
  ],
  "Outdoor Games Sports Person of the Year Award": [
      
      {
          "nominatorEmail": "omondilucky21@gmail.com",
          "nomineeName": "mitchell anne adhiambo",
          "totalVotes": "1838"
      },
      {
        "nominatorEmail": "simmic997@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "1385"
      },
      {
        "nominatorEmail": "mbuziwamigori@gmail.com",
        "nomineeName": "manu palimwacha",
        "totalVotes": "823"
      },
      {
        "nominatorEmail": "enrkiarithagikonyo90@gmail.com",
        "nomineeName": "jasper ombaso",
        "totalVotes": "419"
      },
      {
          "nominatorEmail": "grantonmburu01@gmail.com",
          "nomineeName": "na",
          "totalVotes": "251"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "171"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "168"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "150"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "115"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "47"
      },
      {
          "nominatorEmail": "martinnyaga965@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "39"
      },
      {
          "nominatorEmail": "ochienggeoff01@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "30"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "25"
      },
      {
          "nominatorEmail": "nyancheray@gmail.com",
          "nomineeName": "emmanuel ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "jacsonkiok3111@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "12"
      },
      {
          "nominatorEmail": "najudec@gmail.com",
          "nomineeName": "manu",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "proident ipsam sequ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "emmanuel",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "julianogutu@gmail.com",
          "nomineeName": "m",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "nyakeriemanuel@gmail.com",
          "nomineeName": "emanuel nyakeri ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "...",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "juliusntikoisa@gmail.com",
          "nomineeName": "mitchell ann adhiambo",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "esthertimanto6@gmail.com",
          "nomineeName": "julius ntikoisa narikae ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "ochiengelvis098@gmail.com",
          "nomineeName": "emanuel nyakeri",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "emmanuel palimwacha",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "rotichjustus2020@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "atienoruth145@gmail.com",
          "nomineeName": "..",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "a",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "venus.karen@gmail.com",
          "nomineeName": "not ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "nelly",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mcjumadonald36@gmail.com",
          "nomineeName": "nelly akinyi",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "jaspher ombaso",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "carlosabich46@gmail.com",
          "nomineeName": "nev",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "paul masharia",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "peterson karanja",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sethmusyoka2021@gmail.com",
          "nomineeName": "palimwacha emmanuel",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "marylinobonyo@gmail.com",
          "nomineeName": "mitchell anne adhiambo ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "meshackkariuki@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "emmanuel palimwacha ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shishmarya89@gmail.com",
          "nomineeName": "julius ntikoisa narikae",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "nyaga",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "pirorispenina401@gmail.com",
          "nomineeName": "emmanuel nyakeri ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "kelly",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "galatagirma59@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "football",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "kelvin einstein ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "c",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kimallanwe@gmail.com",
          "nomineeName": "julius ntikoisa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "yvonnewanjiru19@gmail.com",
          "nomineeName": "joel ojuka",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "isdora043@gmail.com",
          "nomineeName": "joel ojuka ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": "partet dan",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gondamohammed05@gmail.com",
          "nomineeName": "mohamed gonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "kiema mbaluku",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "nabangi wanyonyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "prince ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": "..... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "moja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "partetkisai85@gmail.com",
          "nomineeName": "jullius narikae",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "hilary lichenga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okukumarcelingnatius@gmail.com",
          "nomineeName": "f",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "d8991577@gmail.com",
          "nomineeName": "lichenga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "yvonne nyachera ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wambui6679@gmail.com",
          "nomineeName": "many palimwacha ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "mary atieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "shiko shiko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "i'm also jasper ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "bbaa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "ian murimi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "kiema wakwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hellenmogoi53@gmail.com",
          "nomineeName": "mitchell ann ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "kamau munywa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "palimwacha emmanuel ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lawrencekosen65@gmail.com",
          "nomineeName": "sarbabi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshuaonyango023@gmail.com",
          "nomineeName": "paul nyarieri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maureennjoroge46@gmail.com",
          "nomineeName": "emanuel nyakeri pasimwacha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brittaodongo@gmail.com",
          "nomineeName": "palimwacha emmanuel nyakeri ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "emmanuel nyakeri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "johnsonlucky@gmail.com",
          "nomineeName": "ojuka ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "martin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "kevin afron",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "wellington ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "patrick ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "kama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "egg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kibetbrian09@gmail.com",
          "nomineeName": "brian kalekye",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienoenock780@gmail.com",
          "nomineeName": "gonda mwinyihaji",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": " ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "shawn john",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "dennis kobia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "stephen otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shapashinamirriam@gmail.com",
          "nomineeName": "jaspon ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Wanyonyigedion2@gmail.com",
          "nomineeName": "nonone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yemix36@gmail.com",
          "nomineeName": "jilius ntikoisa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "y",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "chagara",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "sydney ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "prince indah ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okothjohnomondi@gmail.com",
          "nomineeName": "zadok ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "owino",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "emannuel",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "sydney musalia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "mumo sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "adhiambojanemarion3@gmail.com",
          "nomineeName": "sam lusi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithgathoni16@gmail.com",
          "nomineeName": "biggie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "samuel murage",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "james",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "bh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wellingtoneagaih145@gmail.com",
          "nomineeName": "wellingtone agaih",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "o",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "acc. lubanga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "billy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "leemosesaziz@gmail.com",
          "nomineeName": "palimwacha emanuel",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "h",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "aggai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "jay carlos",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "handball",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianwangombe4@gmail.com",
          "nomineeName": "einstein ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "erickmkobia2019@gmail.com",
          "nomineeName": "kelvin atulo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "enim non magna conse",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "pascal jokoth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "essykinjos689@gmail.com",
          "nomineeName": "g",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "kamau mwangi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Tabithachep12@gmail.com",
          "nomineeName": "elizabeth anne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "w",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "kelvin benjamin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stephenwere2003@gmail.com",
          "nomineeName": "hillary lichenga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "morristentei@gmail.com",
          "nomineeName": "mitchell ann adhiambo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeromecole@gmail.com",
          "nomineeName": "mitchelle",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewanjiku071@gmail.com",
          "nomineeName": "i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "mwikali",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "kioko mweene",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "silairene123@gmail.com",
          "nomineeName": "michelle obonyo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "yelele momita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rachaelmutheu3456@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "mathew lulu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "ut molestiae duis in",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "rugby ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "johstone69@gmail.com",
          "nomineeName": "ba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "jasper obaso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "broookssteven@gmail.com",
          "nomineeName": "mami",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "fred ashu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "muli mutisya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgekariuki@gmail.com",
          "nomineeName": " not applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "noreply2@sample.com",
          "nomineeName": "ojuka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "ruth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nelsonwwiseman@gmail.com",
          "nomineeName": "peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "rachesl",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benardbsr@gmail.com",
          "nomineeName": "carlos ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "collinsomukala@gmail.com",
          "nomineeName": "tabitha ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "douglasgwangari@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "john",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "mark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "hanifa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "---",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "lder",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "fabius simiyu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lilphiljeffrey@gmail.com",
          "nomineeName": "kuke arnest obat",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanguimaina7462@gmail.com",
          "nomineeName": "njeri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "cjui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "immanuel ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "steve ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "weremeshack2003@gmail.com",
          "nomineeName": "hilary ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "diananaipande@gmail.com",
          "nomineeName": "julius ndikoisa narikae",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "evanceouma277@gmail.com",
          "nomineeName": "emanuel palimwacha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ingabirechristelle4@gmail.com",
          "nomineeName": "no o e",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "allan",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "olonana peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the outdoor games sports person of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke5@gmail.com",
          "nomineeName": "emmanuel pamwach",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "moses musasula",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "kelvin wekesa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "kiluta",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "mike dozzer",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ivanleaky22@gmail.commusa",
          "nomineeName": "mitchelle adhiambo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "geoffrey muteti ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "kevin einstein ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyusufsama@gmail.com",
          "nomineeName": "sama mohamed",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "janetnekesa13@gmail.com",
          "nomineeName": "ultimate frisbee ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "patrick",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "kinuthia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "elizabethanyungu@gmail.com",
          "nomineeName": "wanyama.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "peter karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "joseph ombaso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "oscar juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "mwania cuzo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "abdulaziz omar",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "d",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onlygodcanjudgme@gmail.com",
          "nomineeName": "outdoor games sports person of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "ian brian ouma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cliffenjugush@gmail.com",
          "nomineeName": "peter ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "odhiambo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "lenix",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "kiema mukulu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "samuel murage ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "iceberglovesu@gmail.com",
          "nomineeName": "mitchell ann othiambo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "ea ex qui est repre",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "ggr",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "fhj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "mukulu kioko",
          "totalVotes": "1"
      }
  ],
  "Outdoor Games Sports Team of the Year Award": [
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "1803"
      },
      {
        "nominatorEmail": "musaleeaziz@gmail.com",
        "nomineeName": "basketball ladies",
        "totalVotes": "1328"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "tuk hammers",
          "totalVotes": "927"
      },
      {
        "nominatorEmail": "martinelasty001@gmail.com",
        "nomineeName": "hockey",
        "totalVotes": "422"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "na",
          "totalVotes": "218"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "191"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "169"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "148"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "113"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "football ",
          "totalVotes": "75"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "46"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "41"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "33"
      },
      {
          "nominatorEmail": "ochienggeoff01@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "22"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "football",
          "totalVotes": "20"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "spacialjoy00@gmail.com",
          "nomineeName": "tuk fc",
          "totalVotes": "13"
      },
      {
          "nominatorEmail": "juliusntikoisa@gmail.com",
          "nomineeName": "ultimate frisbee ",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "Victor.bkmudiir@gmail.com",
          "nomineeName": "none",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "najudec@gmail.com",
          "nomineeName": "hammers",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "johnojunga7@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "isaactananko@gmail.com",
          "nomineeName": "ultimate frisbee",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "keirantonny@gmail.com",
          "nomineeName": "m",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "carlosabich46@gmail.com",
          "nomineeName": "football game ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "aliquid aut dolores ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "basketball ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "felsimel3@gmail.com",
          "nomineeName": "frisbee",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "t",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "amakokha@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "football team ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "rollinsdenis415@gmail.com",
          "nomineeName": "tukhammers",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "rugby ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "elizabethanyungu@gmail.com",
          "nomineeName": "tuk hammers fc",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jasperombaso7@gmail.com",
          "nomineeName": "soccer",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "bakutibin@gmail.com",
          "nomineeName": "rugby",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "samuelkahinga@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "volleyball ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "lilianouma567@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "h",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "basketball",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "handball",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "tuk hammers ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": "frisbee ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "wamaegeaorge76@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mugambienock@gmail.com",
          "nomineeName": "nome",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "rr",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david.nate012@gmail.com",
          "nomineeName": "jaspher ombaso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "beheh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "jacob wafula",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "soccer team",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "gangster guru ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinmbugua300@gmail.com",
          "nomineeName": "basket ball",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hezronratemo@students.tukenya.ac.ke",
          "nomineeName": "hockey team",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "football tuk hammers ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "jade",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "rgh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onlygodcanjudgme@gmail.com",
          "nomineeName": "outdoor games sports person of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "kgf",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyussuf026@gmail.com",
          "nomineeName": "football team",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinmwendwa005@gmail.com",
          "nomineeName": "chess",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "msatuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "mitchell ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "bubu wa mtaa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "theemark12756@gmail.com",
          "nomineeName": "tukfc",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shazzymuriuki03@students.tukenya.ac.ke",
          "nomineeName": "jasper ombaso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "hesbon randy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "triple chess ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "toriki taani ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "adults out of order ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "football men ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmulongo82@students.tukenya.ac.ke",
          "nomineeName": "soccer ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "y",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hussein010715@gmail.com",
          "nomineeName": "msatuk team",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "kevin waithera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "furrystepper@gmail.com",
          "nomineeName": "emmanuel nyakeri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "palesarita9@gmail.com",
          "nomineeName": "hammers ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "asperiores ad itaque",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the outdoor games sports team of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "sospet ayiemo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "meshackkariuki@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daltonelogovane@gmail.com",
          "nomineeName": "tuk hammer",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyusufsama@gmail.com",
          "nomineeName": "msatuk football club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "ambassadors",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi19@gmail.com",
          "nomineeName": "an",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": "..... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "minim et natus sint ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelkhamati01@gmail.com",
          "nomineeName": "football/soccer ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "patrick",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga4@gmail.com",
          "nomineeName": "emmanuel ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "tuk stingers",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "tuk football ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "hg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "davidlenkume@gmail.com",
          "nomineeName": "nana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Tabithachep12@gmail.com",
          "nomineeName": "tresors (basketball ladies )",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mukunzijoseph18@gmail.com",
          "nomineeName": "nio",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "r",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kiprotichedith@gmail.com",
          "nomineeName": "ultimate freesbie ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "b",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "michael odhiambo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "mike dozzer",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "cynthia ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "theojoan6@gmail.com",
          "nomineeName": "julius ntikoisa narikae",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "cjui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "badminton ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "tuk football club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wambui6679@gmail.com",
          "nomineeName": "many palimwacha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "f",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kipchogeeliud@gmail.com",
          "nomineeName": "n. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "josphatmuroki02@gmail.com",
          "nomineeName": "hockey ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "info1@website.com",
          "nomineeName": "tuk howkey",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "essykinjos689@gmail.com",
          "nomineeName": "tuk skaters",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "amomutish2@gmail.com",
          "nomineeName": "men's football team",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bingwa1boy@gmail.com",
          "nomineeName": "tuk.hammers",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "senti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "hocky",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "dmdndmsmksmssm",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "mbuzi wa migori",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "irerieric531@gmail.com",
          "nomineeName": "j",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "bb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "quisquam voluptate d",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      }
  ],
  "The Blogger of the Year Award": [
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "mercyline namasaka",
          "totalVotes": "2454"
      },
      {
        "nominatorEmail": "ojiambol43@gmail.com",
        "nomineeName": "austine wambingwa",
        "totalVotes": "1636"
      },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "mbuzi wa migori",
          "totalVotes": "320"
      },
      {
        "nominatorEmail": "stevenosore63@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "255"
    },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "164"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "155"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "131"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "105"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "45"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "mbuzi wa migori",
          "totalVotes": "41"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "40"
      },
      {
          "nominatorEmail": "gloriousmukai@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "30"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "lucky jones",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "22"
      },
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "austin wambingwa ",
          "totalVotes": "19"
      },
      {
          "nominatorEmail": "awinochelsea4@gmail.com",
          "nomineeName": "mbuzi wa migori ",
          "totalVotes": "17"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "mbuzi",
          "totalVotes": "13"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "austin wambingwa",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "lucky jones ",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "austine wambingwa ",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "shanicenyambura@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "awindajosha12@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "lucky jones (mbuzi wa migori)",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "fugiat in aute dolo",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "nyamzi290@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "faustinelempasila09@gmail.com",
          "nomineeName": ".",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "marymwanzia34@gmail.com",
          "nomineeName": "mbuzi wa migori (lucky jonnes)",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "tuk cu advocacy ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "kennymwas690@gmail.com",
          "nomineeName": "real kimani",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "tuk cu advocacy",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "marysururu261@gmail.com",
          "nomineeName": "no",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "austin wambigwa",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "omondik706@gmail.com",
          "nomineeName": "austine wabingwa",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "faithgathoni16@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "me",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "j",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "tuk comrade ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "yvonnewanjiru19@gmail.com",
          "nomineeName": "lucky jonnes",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshuaadika08@gmail.com",
          "nomineeName": "joshua mark ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sethmusyoka2021@gmail.com",
          "nomineeName": "lawrence",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hudsonmriale04@gmail.com",
          "nomineeName": "wambingwa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "vonstone ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "samwelogechi856@gmail.com",
          "nomineeName": "c",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "kama",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "...",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "bachcynthia2@gmail.com",
          "nomineeName": "nip",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "wabingwa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "joshua mark",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "wallacemuriuki@gmail.com",
          "nomineeName": "as justin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "comradewatuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "davekiraguk22@gmail.com",
          "nomineeName": "tuk cu advocacy subcommittee ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "susanmutama90@gmail.com",
          "nomineeName": "evans",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingkelvineinstein@gmail.com",
          "nomineeName": "lenox onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": "y",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "sir luka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "mwende kiema ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "mwende sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cliffenjugush@gmail.com",
          "nomineeName": "evans ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "daren",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bakutibin@gmail.com",
          "nomineeName": "comrade premium tuk ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jason@tando.me",
          "nomineeName": "kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mathekaclinton52@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "ben kangai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "evans ochieng ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmonari042@gmail.com",
          "nomineeName": "austine wa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "derrickwanjala32@gmail.com",
          "nomineeName": "asutine wambingwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "kilonzo mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "est quia eaque ullam",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "acti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rotichjustus2020@gmail.com",
          "nomineeName": "kingi david",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "kikoko sandra",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "tuk-cu advocacy blog",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "joshua mark adika",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "french baby",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "physlis kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "karanja mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "jahshsjsjsnxb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mosesgathungu99@gmail.com",
          "nomineeName": "m",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "albert kipngetich",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "tuk premium account ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "deniss rowlings ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oshadrack489@gmail.com",
          "nomineeName": "sharon ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryanne2003jj@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "mbuzzi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "mwania mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "mbuzi gang ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "evans lucky",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bearnadmuhia@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "austin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "sammy keshe ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "kevin kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "ambagwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshuaonyango023@gmail.com",
          "nomineeName": "joseph mutuku",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "lucky jonnes( mbuzi wa migori",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wickklifeapollo@gmail.com",
          "nomineeName": "apollo odhiambo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "kisiagi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "izzohp008@gmail.com",
          "nomineeName": "kimm",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "yyf",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "timothylomunyak6@gmail.com",
          "nomineeName": "advocacy subcommittee",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "kelvin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryankiplimo20@gmail.com",
          "nomineeName": "mbuzi wa migori (lucky jonnes",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the blogger of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "info2@website.com",
          "nomineeName": "austine wambigwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jobjason338@gmail.com",
          "nomineeName": "lucy john ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "nyaga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oluochivictor11@gmail.com",
          "nomineeName": "tuk cu advocacy blog",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rollinsdenis415@gmail.com",
          "nomineeName": "mbuzi wa migori ( lucky jonnes)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "simon.w.saruni@gmail.com",
          "nomineeName": "simon saruni ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Mwawasiholi@gmail.com",
          "nomineeName": "pas",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyamburaessy14@gmail.com",
          "nomineeName": "tuk comrade",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga4@gmail.com",
          "nomineeName": "wambingwa austin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "tuk-cu advocacy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "emmanuel githinji ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "moses okal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kianshii3@gmail.com",
          "nomineeName": "peter muchina",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "b",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "chai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "kaush musundi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "lucky jones mbuzi wa migori ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "tuk- cu advocacy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "stella",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daltonelogovane@gmail.com",
          "nomineeName": "bwibo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjisharon2@gmail.com",
          "nomineeName": "lucky johns",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "comrade premium ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyusufsama@gmail.com",
          "nomineeName": "tony blaire",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "rolex",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "dds",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "adrian otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ramadhanjumah39@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "austine",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "tuk blogger",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kyalocharlesmuthoka1@gmail.com",
          "nomineeName": "austine ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "pter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "tabitha mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "zeliphah macharia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga@gmail.com",
          "nomineeName": "austin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "sammy keshe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "kyumwa trizah ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinnyaga965@gmail.com",
          "nomineeName": "lucky jonnes ologi (mbuzi wa migori)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "kijana ya sugoi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "richard nyagaka ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "ny",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lydiakimeu2003@gmail.com",
          "nomineeName": "wambingwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "tazama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "augustinebilly2@gmail.coma",
          "nomineeName": "ian ndenga fet polycarp",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "kioko muli",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "juliemumbi847@gmail.com",
          "nomineeName": "pss",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "aizomanu0@gmail.com",
          "nomineeName": "t",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "lucky jones (mbuzi wa migori) ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okukumarcelingnatius@gmail.com",
          "nomineeName": "g",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "cd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "steve",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "nyakwar otare",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "mwende sammy dl",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "kamua mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "elinahnuru@gmail.com",
          "nomineeName": "lucky jones( mbuzi wa migori)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharonkatha686@gmail.com",
          "nomineeName": "lucky jonnes (mbuzi wa migori)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "allanrayian96@gmail.com",
          "nomineeName": "advocacy subcommittee ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayrashahalla@gmail.com",
          "nomineeName": "mum",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi21@gmail.com",
          "nomineeName": "na.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "charity ngili",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "meshackkariuki@gmail.com",
          "nomineeName": "austin’s wambingwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "unde enim et ad volu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": "afara_society.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wycliffemwaniki354@gmail.com",
          "nomineeName": "n.a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "lawrence ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "quis in deserunt eni",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "timothylomunyak6@students.tukenya.ac.ke",
          "nomineeName": "m/a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "km cyberhub",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "stanley ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyamwayajoseph48@students.tukenya.ac.ke",
          "nomineeName": "kevin karuga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "lenox onyango ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "kelvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "patrick njoroge ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "jimmy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "elvis ochieng",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "bravine ludenyo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sherlinewambui19@gmail.com",
          "nomineeName": "austije wambingwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "xerxestechnologies254@gmail.com",
          "nomineeName": "kelvin karuga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "bb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "calvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamonyangi66@gmail.com",
          "nomineeName": "n/v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "hope malei",
          "totalVotes": "1"
      }
  ],
  "The Club and or Society of the Year Award": [
      
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "drama",
          "totalVotes": "1876"
      },
      {
        "nominatorEmail": "simmic997@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "1562"
      },
      {
        "nominatorEmail": "spacialjoy00@gmail.com",
        "nomineeName": "french club ",
        "totalVotes": "648"
      },
      {
        "nominatorEmail": "henryomwoyo2020@gmail.com",
        "nomineeName": "biochemistry and biotechnology students association ",
        "totalVotes": "321"
      },
      {
          "nominatorEmail": "ahubacastrol@gmail.com",
          "nomineeName": "na",
          "totalVotes": "198"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "161"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "150"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "128"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "111"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "45"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "41"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "ycs",
          "totalVotes": "30"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "28"
      },
      {
          "nominatorEmail": "gloriousmukai@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "palesarita9@gmail.com",
          "nomineeName": "tuk cu",
          "totalVotes": "25"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "cu",
          "totalVotes": "24"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "drama club",
          "totalVotes": "22"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "gracemwangi0264@gmail.com",
          "nomineeName": "rotaract club ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "support11@mock.com",
          "nomineeName": "tuksoc",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "nyamburamargaret521@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "najudec@gmail.com",
          "nomineeName": "tukcu",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "Olyobure@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "christian union",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "rotaract",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "tuk christian union",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "french club",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "fugiat veritatis ius",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "admin12@website.com",
          "nomineeName": "technical university of kenya society of chemistry",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "stanleywanjohi12183@gmail.com",
          "nomineeName": "ames",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "stephenwere2003@gmail.com",
          "nomineeName": "christian union ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "briankipkoech865@gmail.com",
          "nomineeName": "tuk christian union ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "tuk cu ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "joshuaadika08@gmail.com",
          "nomineeName": "tukcu ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "sambosaid123@gmail.com",
          "nomineeName": "ieee",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "ochiengjoy12@gmail.com",
          "nomineeName": "sda",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "kiambambondo@gmail.com",
          "nomineeName": "m",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "demo2@website.com",
          "nomineeName": "ylfa ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "allanrayian96@gmail.com",
          "nomineeName": "technical university of kenya christian union ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "vatuk",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "drama club ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "chrispinajohn781@gmail.com",
          "nomineeName": "biochemistry and biotechnology students association",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "angelachepkemoi22@gmail.com",
          "nomineeName": "bbsa",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Kairuware@gmail.com",
          "nomineeName": "technical university of kenya society of chemistry tuksoc",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "marysururu261@gmail.com",
          "nomineeName": "no",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "danallan58@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "msatuk",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "drama ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "hellennyongesa861@gmail.com",
          "nomineeName": "rotaract club",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "stephanyhilda38@gmail.com",
          "nomineeName": "tuk french club",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "winniemurugi01@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "obrenlourmex@gmail.com",
          "nomineeName": "tuk french club ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "martinnyaga965@gmail.com",
          "nomineeName": "tuk ycs",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mohanurein90@gmail.com",
          "nomineeName": "msa-tuk",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "samuelkahinga@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "lynettegichira@gmail.com",
          "nomineeName": "tabsa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "captainat2023@gmail.com",
          "nomineeName": "csa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Joanndiwa42@gmail.com",
          "nomineeName": "environmental club",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "g",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "aylf",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "ames ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "...",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "odhiamboa822@gmail.com",
          "nomineeName": "chess",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mugambienock@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "admin11@website.com",
          "nomineeName": "tuksoc technical university of kenya society of chemistry",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "patrickyegon97@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hananmwangi8@gmail.com",
          "nomineeName": "rotaract club of tuk",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "peter son karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinmbugua300@gmail.com",
          "nomineeName": "elite tuk chess club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "bbst",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "odiwuorooko@gmail.com",
          "nomineeName": "n.a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "chess club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "purity ann ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "cu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "kioko sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevohyutman21@gmail.com",
          "nomineeName": "ajira digital",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nashisakoamos@gmail.com",
          "nomineeName": "tu-k french club ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "patrick",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Tabithachep12@gmail.com",
          "nomineeName": "biochemistry and biotechnology student association (bbsa)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "mk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mutisyad678@gmail.com",
          "nomineeName": "y c s",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "ruto samoi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hopeshapashina@gmail.com",
          "nomineeName": "4",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "grantonmburu01@gmail.com",
          "nomineeName": "association of engineering students ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "aizomanu0@gmail.com",
          "nomineeName": "t",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "newsmankamau35@students.tukenya.ac.ke",
          "nomineeName": "association of mechanical engineering students ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "b",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gondamohammed05@gmail.com",
          "nomineeName": "msatuk-muslim student association",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "kioko mwemdwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "explicabo quaerat d",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "ty",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the club and/or society of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kelvinsabul0@gmail.com",
          "nomineeName": "technical university of kenya society of chemists ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "mumo mwemde",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kangetheerick39@gmail.com",
          "nomineeName": "association of mechanical engineering students",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "karate club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyakeriemanuel@gmail.com",
          "nomineeName": "tuk hammers ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sherlinewambui19@gmail.com",
          "nomineeName": "rotaract ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hadijajillo5@gmail.com",
          "nomineeName": "muslim student association of the technical university of kenya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "mu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jamesgkaroki@gmail.com",
          "nomineeName": "nq",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "debate club ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintonkoikai331@gmail.com",
          "nomineeName": "football club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "o",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hellenmogoi53@gmail.com",
          "nomineeName": "athletics ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoer66@gmail.com",
          "nomineeName": "association of mechanical engineering students-(tuk)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": "e",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "sunt est explicabo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "dndnldske. s",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nantoyieshelmith@gmail.com",
          "nomineeName": "c.u",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "byrone otieno onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wambui6679@gmail.com",
          "nomineeName": "tukec",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "tukek",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "tuk-cu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "riggie0012@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "taekwondo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maurinekimathi@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga4@gmail.com",
          "nomineeName": "tuk taekwondo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Jumajoshua101@gmail.com",
          "nomineeName": "elphas aduwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nellyokebiro2003@gmail.com",
          "nomineeName": "biochemistry and biotechnology student association ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmulongo82@students.tukenya.ac.ke",
          "nomineeName": "sports club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "george ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "aviation ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "tabisth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musilidinahmwikali@gmail.com",
          "nomineeName": "green planet ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelkhamati01@gmail.com",
          "nomineeName": "esatuk ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": "cof ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wycliffemwaniki354@gmail.com",
          "nomineeName": "_",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "ibmesu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brendaorbab@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "miendo kiema ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "iankim7709@gmail.com",
          "nomineeName": "young aviators club of africa tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "contact10@sample.com",
          "nomineeName": "ylfa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "(bbsa) biochemistry and biotechnology student association ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvonnewanjiru19@gmail.com",
          "nomineeName": "cu christian union",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmonari042@gmail.com",
          "nomineeName": "bbsa (biochemistry and biotechnology student association)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "fsst ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bernice.amondi@bihc.ac.ke",
          "nomineeName": "fast",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oshadrack489@gmail.com",
          "nomineeName": "luo association ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dennisnyutu11@students.tukenya.ac.ke",
          "nomineeName": "gssa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shazmahshamilah@gmail.com",
          "nomineeName": "muslim student association of technical university of kenya ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "admin14@website.com",
          "nomineeName": "tuksoc ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nicholasmusangi@students.tukenya.ac.ke",
          "nomineeName": " biochemistry and biotechnology students association ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "abdisaid868@gmail.com",
          "nomineeName": "muslim students association ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "the tuk french club ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "mumo sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "lesalaon shirim",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yovanmokaya063@gmail.com",
          "nomineeName": "datuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "user39@demo.com",
          "nomineeName": "technical univesity of  kenya ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "tuk hammers",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kunduwanjala76@gmail.com",
          "nomineeName": "sgd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "chess club ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "abdileila27@gmail.com",
          "nomineeName": "satuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nafulairene73@gmail.com",
          "nomineeName": "tuksda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ivanleaky22@gmail.commusa",
          "nomineeName": "tuk drama club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lydiakimeu2003@gmail.com",
          "nomineeName": "engineering ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "kioko mwendd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "briannyabochwa245@gmail.com",
          "nomineeName": "kuza",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "contact7@sample.com",
          "nomineeName": "yfla ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yahyaderow15@gmail.com",
          "nomineeName": "muslim student association tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rolexokoth191@gmail.com",
          "nomineeName": "the association of engineering students ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "admin15@website.com",
          "nomineeName": "tuksoc tehnical university of kenya society of chemistry",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "cu society",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "user36@demo.com",
          "nomineeName": "technical society of kenya society of chemistry ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "britneykibaara22@gmail.com",
          "nomineeName": " not applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "windrexodhiambo@gmail.com",
          "nomineeName": "taekwondo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marymwanzia34@gmail.com",
          "nomineeName": "rotorqct",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "dolor et magnam nobi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "01mainaben@gmail.com",
          "nomineeName": "dance",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alfiekennie@gmail.com",
          "nomineeName": "biotechnology and biochemistry student association (bbsa)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daltonelogovane@gmail.com",
          "nomineeName": "hamsass",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "r",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "non one",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hudsonmriale04@gmail.com",
          "nomineeName": "tuk-bbsa(biochemistry and biotechnology students association) club ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mbuguar858@gmail.com",
          "nomineeName": "tukgema",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kayiaacollins3@gmail.com",
          "nomineeName": "construction student association",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "rono",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "muslim ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "msatuk ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muteti.ur@gmail.com",
          "nomineeName": "tuk-cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "velmawasilwa@gmail.com",
          "nomineeName": "biochemistry and biotechnology ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "football ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "deny",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamonyangi66@gmail.com",
          "nomineeName": "n/v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "journalism club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "kevin kariuki (csa)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "association of mechanical engineering students (ames) - tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "tuk-bbsa (biochemistry and biotechnology students association) club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hussein010715@gmail.com",
          "nomineeName": "msatuk club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "ieee, institute of electrical and electronics engineers ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "melissa.nicholas55@gmail.com",
          "nomineeName": "games and a sports ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "kisumu association ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lucasochieng007@gmail.com",
          "nomineeName": "ieee ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "ssme",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "njeriogoll@gmail.com",
          "nomineeName": "vattuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "tae kwon do",
          "totalVotes": "1"
      }
  ],
  "The Commitment to Service Award": [
      
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "damaris mwaura",
          "totalVotes": "1849"
      },
      {
        "nominatorEmail": "simmic997@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "1598"
      },
      {
        "nominatorEmail": "kigwemilly1@gmail.com",
        "nomineeName": "lenox onyango",
        "totalVotes": "740"
      },
      {
        "nominatorEmail": "kigwemilly1@gmail.com",
        "nomineeName": "maurice cornel",
        "totalVotes": "344"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "na",
          "totalVotes": "251"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "169"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "159"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "142"
      },
      {
          "nominatorEmail": "kisuyasitati12@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "111"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "47"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "41"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "33"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "nabangi",
          "totalVotes": "13"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "kisiagi",
          "totalVotes": "12"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "Victor.bkmudiir@gmail.com",
          "nomineeName": "none",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "mikeaiyolah@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "keirantonny@gmail.com",
          "nomineeName": "m",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "voluptatem ut et qu",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com.com",
          "nomineeName": "damaris",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "ruth",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "4"
      },
      
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "rodneyidi@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "julianogutu@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kangetherose51@gmail.com",
          "nomineeName": "damaris njeri",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": "t",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "rollinsdenis415@gmail.com",
          "nomineeName": "ongwano",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "j",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "muliurbanus36@gmail.com",
          "nomineeName": "peter kanyua",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "evance",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "pascal juma",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mukunzijoseph18@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "c",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "quod facilis et in p",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "abigail kimondiu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "tuk cu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jessicahoprah@gmail.com",
          "nomineeName": "oprah jessicah ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "elam kiama ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "peterson mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "tuk cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "yvone ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okiogaangogo@gmail.com",
          "nomineeName": "damaris mwaura njeri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "angel odhiambo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lydiakimeu2003@gmail.com",
          "nomineeName": "nabangi alex",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "kelly ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "shipoto washipoto",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "meshackkariuki@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "otieno byron onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "kioko sammy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sabpastels@gmail.com",
          "nomineeName": "marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "andrea lantanye ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "getald koech",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "gj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "claudette akongo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "stam",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinnyaga965@gmail.com",
          "nomineeName": "ruth wamuhu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "steve musembi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "brain ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "bbshs",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "bb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "gg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "irerieric531@gmail.com",
          "nomineeName": "d tonui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "karanja musa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "ruth mynar",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "pascay",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "kamau mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "f",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "kiema mutiso ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "weremeshack2003@gmail.com",
          "nomineeName": "nabangi wanyonyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "dinah mwikali",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "cjui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musilidinahmwikali@gmail.com",
          "nomineeName": "dinah mwikali ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "hospitality management ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "ian omondi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "elijah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "p",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "ruth moraa richard ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "tony onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "nicole prudence ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "sunt dignissimos ex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga4@gmail.com",
          "nomineeName": "damaris ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "hospitality ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "mumo mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "enrkiarithagikonyo90@gmail.com",
          "nomineeName": "andrea lentaaya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "reprehenderit cupid",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "njoronge karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "koh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "kelly ochieng ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "abigail kimondiu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "mark ogola",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "musa ali",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "bernard masila ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daltonelogovane@gmail.com",
          "nomineeName": "kelly",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "broookssteven@gmail.com",
          "nomineeName": "marite ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "alice kimani",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "joan chelangat ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "lemaroon kinya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "christian union",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lagateliud56@gmail.com",
          "nomineeName": "pasw",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "oguk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "mwikali",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "blank",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "thiongosharon5@gmail.com",
          "nomineeName": "damaris njeri ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yovanmokaya063@gmail.com",
          "nomineeName": "roy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "zach",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "family kimawachi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "marite kiema ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "tecla",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "hold",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "cristian union",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "pascal njuma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "allan yiemba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "mercy naneu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "ishamel yahya kibaba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "charity ngilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "silairene123@gmail.com",
          "nomineeName": "damages njeri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue819@gmail.com",
          "nomineeName": "denno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okukumarcelingnatius@gmail.com",
          "nomineeName": "e",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "kioko kilonzo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "hi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "grace",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "simon saruni ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "faith rono",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the commitment to service award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "physlis mukulu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onlygodcanjudgme@gmail.com",
          "nomineeName": "outdoor games sports person of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "peterson njoroge ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "jane",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "hjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "paula mnyazi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "daisy achieng",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "ui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "gf",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "ochieng dr",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "jerry",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "r",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewanjiku071@gmail.com",
          "nomineeName": "h",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "babemakilodiwor1208@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "clayton opio",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "ian ouma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": "tecla barasa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "tf",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "noreply3@sample.com",
          "nomineeName": "muraya martha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "mwania mutoto",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "japhethochieng440@gmail.com",
          "nomineeName": "n/an",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "no one at all",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "sammy keshe ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mutisyad678@gmail.com",
          "nomineeName": "david kingi",
          "totalVotes": "1"
      }
  ],
  "The Content Creator of the Year Award": [
      
      {
          "nominatorEmail": "obuyacalvince672@students.tukenya.ac.ke",
          "nomineeName": "comrade premium tuk - ken",
          "totalVotes": "1836"
      },
      {
        "nominatorEmail": "alextaleh@gmail.com",
        "nomineeName": "burudani 14",
        "totalVotes": "1486"
      },
      {
        "nominatorEmail": "cyasenic@yahoo.com",
        "nomineeName": "tuk comrade x",
        "totalVotes": "746"
    },
      {
        "nominatorEmail": "yvetteolel@gmail.com",
        "nomineeName": "tuk comrade ",
        "totalVotes": "36"
     },
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "391"
      },
      {
          "nominatorEmail": "grantonmburu01@gmail.com",
          "nomineeName": "na",
          "totalVotes": "223"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "169"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "153"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "123"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "109"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "45"
      },
      {
          "nominatorEmail": "ochiengprvvuy@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "38"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "30"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "tuk comrade",
          "totalVotes": "29"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "comrade premium tuk",
          "totalVotes": "17"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "leemosesaziz@gmail.com",
          "nomineeName": "comrade premium ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "comrade premium",
          "totalVotes": "13"
      },
      {
          "nominatorEmail": "jacsonkiok3111@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "13"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "8"
      },
      
      {
          "nominatorEmail": "susanmutama90@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "ducimus ipsum aut p",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "rollinsdenis415@gmail.com",
          "nomineeName": "stephanie namnyak",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "kelvinkaruga9628@gmail.com",
          "nomineeName": "real kimani",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "waemabrian12@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "stevendahi3@gmail.com",
          "nomineeName": "burudani 14 ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "mwende",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mercykami08@gmail.com",
          "nomineeName": "burudani14",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kevinkebut39@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "kijana ya tuk",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "collinsomukala@gmail.com",
          "nomineeName": "kama",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sharonmueni2000@gmail.com",
          "nomineeName": "comrade premium tuk ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "millie",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "j",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": ".... ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "peter muchina",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mercychelangat@gmail.com",
          "nomineeName": "m",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": ". ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "tuk comrade premium",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "yovan manoa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "d8991577@gmail.com",
          "nomineeName": "me",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "isaackiaritha8@gmail.com",
          "nomineeName": "tuk cu advocacy ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "weremeshack2003@gmail.com",
          "nomineeName": "comrade wa tuk",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "samwelogechi856@gmail.com",
          "nomineeName": "s",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shazzymuriuki03@students.tukenya.ac.ke",
          "nomineeName": "tuk comrades",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "omondibernice455@gmail.com",
          "nomineeName": "premium",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "kinuthia",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "tamesmy177@gmail.com",
          "nomineeName": "tuk comerade x",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "carlosabich46@gmail.com",
          "nomineeName": "stephanie ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "r",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "kk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "kalonzo musyoka ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "tuk premium comrade ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "kingi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bingwa1boy@gmail.com",
          "nomineeName": "tuk comrade (hollie kid)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hezronratemo@students.tukenya.ac.ke",
          "nomineeName": "comradepremiumtuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "many",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "mumo mwemde",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samanthalinda443@gmail.com",
          "nomineeName": "burudani 14 podcast ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "mitchele",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jamesgkaroki@gmail.com",
          "nomineeName": "james karoki ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "kioko mwemde",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "kavana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "hjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "malient ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "kifagio ya tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "tuk cartel",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayrashahalla@gmail.com",
          "nomineeName": "winston",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "lieh matei",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "enrkiarithagikonyo90@gmail.com",
          "nomineeName": "advocacy tuk cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "tuk cu advocacy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "dhh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "rolex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "dopoi mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mlemayian47@gmail.com",
          "nomineeName": "lemar",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wickklifeapollo@gmail.com",
          "nomineeName": "apollo odhiambo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "b",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "mu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemmyphe@gmail.com",
          "nomineeName": "lennox onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "01mainaben@gmail.com",
          "nomineeName": "comrade premium tuk-ken",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "nancy njoroge ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "kish koronboi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "solomon ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "karanja mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondik706@gmail.com",
          "nomineeName": "tuk premium",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "sharon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the content creator of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyussuf026@gmail.com",
          "nomineeName": "steph",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "peter marite ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brendaorbab@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gasteen2@gmail.com",
          "nomineeName": "tukcomrade ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lawrencekosen65@gmail.com",
          "nomineeName": "austine wambingwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianwangombe4@gmail.com",
          "nomineeName": "victor oluoch ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "namnyak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "manuel bokea",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "thiongosharon5@gmail.com",
          "nomineeName": "c",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "hannah njeri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "hellen",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "irerieric531@gmail.com",
          "nomineeName": "mbuzi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Mesh52044@gmail.com",
          "nomineeName": "emmanuel bokea (tuk comrade)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "immaculatewangu@students.tukenya.ac.ke",
          "nomineeName": "tuk comrades premium ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojeff1502@gmail.com",
          "nomineeName": "burudani 14 podcast",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "french baby ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "ad in non similique ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "mwende mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "expedita dolores con",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryankiplimo20@gmail.com",
          "nomineeName": "stephaniie namnyak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ramadhanjumah39@gmail.com",
          "nomineeName": "ni",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "manwaelvin6@gmail.com",
          "nomineeName": "ken muiruri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "comrade@tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muthuragibs7@gmail.com",
          "nomineeName": "comrades premium tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mwihakitiras@gmail.com",
          "nomineeName": "comrade ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "5",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wycliffemwaniki354@gmail.com",
          "nomineeName": "____",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "ann naigeyio",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "aizomanu0@gmail.com",
          "nomineeName": "t",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "atienozippy00@gmail.com",
          "nomineeName": "ken muiruri ( commrade premium)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "benjamin mboya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lilphiljeffrey@gmail.com",
          "nomineeName": "hilarious aura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "simon.w.saruni@gmail.com",
          "nomineeName": "simon saruni ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david.nate012@gmail.com",
          "nomineeName": "manu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wambuaryan97@gmail.com",
          "nomineeName": "tuk  comrade",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "stacy nduta",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sonnick993@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "ian jack ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "brian kyumwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "ann",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimanielizabeth9047@gmail.com",
          "nomineeName": "yovan manoah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "brian simiyu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "vv",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "tuk comrade(hollie kidd).",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "mwende sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ekuria@studentsforliberty.org",
          "nomineeName": "evans",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mutisyad678@gmail.com",
          "nomineeName": "colnul warren",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "inco",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "emmanuel adika",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyamwayajoseph48@students.tukenya.ac.ke",
          "nomineeName": "tuk comred",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "moraagloryne@gmail.com",
          "nomineeName": "n)a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "patrick njoroge ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "noreply4@sample.com",
          "nomineeName": "tuk camrade",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Wanjirudalia55@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "df",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "tuk cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "austinekin254@gmail.com",
          "nomineeName": "hollie kid ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "stella",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "josephkingili@gmail.com",
          "nomineeName": "nnn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "tuk diaries ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamonyangi66@gmail.com",
          "nomineeName": "n/v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "kelvin einstein ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "brian mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "muendo karanja ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "mbuzi wa migori (lucky jonnes) ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "kenna crazy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "stephanie lengala",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "kamau munywa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "mumo sammy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "kulembi awino",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue167@gmail.com",
          "nomineeName": "premium comradd6",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hopeshapashina@gmail.com",
          "nomineeName": "e",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mwihakitairus@gmail.com",
          "nomineeName": "comrade",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimani687@gmail.com",
          "nomineeName": "v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "kiddie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmulongo82@students.tukenya.ac.ke",
          "nomineeName": "kinsley brian ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yujonyaga@gmail.com",
          "nomineeName": "stephannie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nantoyieshelmith@gmail.com",
          "nomineeName": "namunyak stephanie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "kelvin karuga ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keziahnjeri34@gmail.com",
          "nomineeName": "psss",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "millie finance ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "stephanie namnyak ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimmarion040@gmail.com",
          "nomineeName": "purity",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyakeriemanuel@gmail.com",
          "nomineeName": "calvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "mulky",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "stevoh ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "mbuzi wa migori",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "tuk premium ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "peter muchina ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marymwanzia34@gmail.com",
          "nomineeName": "stephanie namnyank",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "kianga general",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joywanjiku@gmail.com",
          "nomineeName": "stehpanie namnyak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "mwemde ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benardbsr@gmail.com",
          "nomineeName": "yovan",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "in molestias id ven",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "tuk premium account ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "premium comrade",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "stephanie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "bsbsnskdkdbssb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "galatagirma59@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "mummy mwinzi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "gichina",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rowzilp@gmail.com",
          "nomineeName": "peter kanyingi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mathew23mogambim@gmail.com",
          "nomineeName": "yovan mokaya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "bill",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "meyomeso54@gmail.com",
          "nomineeName": "pas",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "stelur",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "ian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "kamau waingo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "charlies bwibo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      }
  ],
  "The Dance Crew of the Year Award": [
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "3424"
      },
      {
        "nominatorEmail": "marionlokusi@gmail.com",
        "nomineeName": "creative ministry ",
        "totalVotes": "417"
      },
      {
        "nominatorEmail": "paulettejoy05@gmail.com",
        "nomineeName": "catalan",
        "totalVotes": "366"
      },
      {
        "nominatorEmail": "pavizu@mailinator.com",
        "nomineeName": "dolores tempora temp",
        "totalVotes": "295"
    },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "na",
          "totalVotes": "233"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "x",
          "totalVotes": "183"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "170"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "149"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "114"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "47"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "42"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "33"
      },
      
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "drama",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "25"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "creative ministry",
          "totalVotes": "23"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "Victor.bkmudiir@gmail.com",
          "nomineeName": "none",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "stellandian@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "drama club",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "bryankiplimo20@gmail.com",
          "nomineeName": "dancers",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "kiambambondo@gmail.com",
          "nomineeName": "m",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "cream",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "isaackiaritha8@gmail.com",
          "nomineeName": "tuk cu creative ministry ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "tuk cu creative ministry",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "tuk cu cream ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "the dancers",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "t",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "cu crew",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "brantonkennedy17@gmail.com",
          "nomineeName": "tuk cu cream",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "luckykathoki@gmail.com",
          "nomineeName": "catalan ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "douglasgwangari@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ruzzwanjiku@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "sakata",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "susanmutama90@gmail.com",
          "nomineeName": "drama club ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "osonkoone@gmail.com",
          "nomineeName": "victor oluoch",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nafulairene73@gmail.com",
          "nomineeName": "the dancers ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "peter",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "artika",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "najudec@gmail.com",
          "nomineeName": "dancers ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "tuk cu",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "...",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "drama club dance crew",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "mwania mwemde",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "f",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "leahmwende30@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "creative ministry-tuk cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "benson maina",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gliffingitonga8244@gmail.com",
          "nomineeName": "tukcu creative ministry",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stephenwere2003@gmail.com",
          "nomineeName": "cu creative ministry",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "crimax crew",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "steph lengala ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "leemosesaziz@gmail.com",
          "nomineeName": "gje",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "creative dancers ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "the crew",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi15@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "dance 254",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "creative dancers",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "kk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "dance 98",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brianjune606@gmail.com",
          "nomineeName": "cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "bb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "amomutish2@gmail.com",
          "nomineeName": " tuk cu creative arts",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "tuk x",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "winniemurugi01@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "brian mwebi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "leslie ochieng",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benkasero@gmail.com",
          "nomineeName": "creative ministry tuk cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "ttt",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingkelvineinstein@gmail.com",
          "nomineeName": "cream-creative ministry ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "rff",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "cupidatat nisi nihil",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mutisyad678@gmail.com",
          "nomineeName": "ycs catalan",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "tuk creative ministry",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "pook petter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "akh cjui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "mabichea",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "e.presidentafricancaribbeanm@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "esther",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "sammy kioko dance cres",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "cream cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "kiema mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "gg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "haggar crew",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "bypass",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "gji",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "kioko sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lydiakimeu2003@gmail.com",
          "nomineeName": "tuk dance crew",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "ocean movers",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onlygodcanjudgme@gmail.com",
          "nomineeName": "outdoor games sports person of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "delilah nyanchoka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "hers",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "auris yollanda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "mbogi 2",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": "v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "tuk elites ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": "..... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hezronratemo@students.tukenya.ac.ke",
          "nomineeName": "tukcu creative ministry (cream)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "drama club members",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "steppers",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okukumarcelingnatius@gmail.com",
          "nomineeName": "g",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "bwibo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaupurity80@gmail.com",
          "nomineeName": "creative ministry cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "u",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyancheray@gmail.com",
          "nomineeName": "catalan dancers",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "maureen tabitha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "creme",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "ycs catalan ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "ycs catalan dancers",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "no one at all",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanguimaina7462@gmail.com",
          "nomineeName": "drams",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeremymueni@gmail.com",
          "nomineeName": "creative ministry (cream)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi21@gmail.com",
          "nomineeName": "an",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "davekiraguk22@gmail.com",
          "nomineeName": "cream dance crew ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "qui ab corporis odio",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "mqania nutiso ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "evans otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calmaxokello@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "nev wanjala",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "5",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianwangombe4@gmail.com",
          "nomineeName": "tukcu creative ministry ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "cream tuk cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "creative ministries.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "p",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "tuk crew",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bachcynthia2@gmail.com",
          "nomineeName": "nip",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "priscakanini40@gmail.com",
          "nomineeName": "were",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "elite dance crew ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "tukcu - creative ministry ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "mitchell anne adhiambo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "cha ilale dance crew",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewanjiku071@gmail.com",
          "nomineeName": "c",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daltonelogovane@gmail.com",
          "nomineeName": "crew",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "peterson karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "irvinemwangi@gmail.com",
          "nomineeName": "tuk cu creative arts ministry (cream) ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "erickmkobia2019@gmail.com",
          "nomineeName": "drama club crew",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "mercy naipah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "d8991577@gmail.com",
          "nomineeName": "cu cream ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the dance crew of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "elite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jason@tando.me",
          "nomineeName": "drwma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "kioko mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "peter kamu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "ab est libero error ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "mi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "dance",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "dramma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "otiende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "drama ",
          "totalVotes": "1"
      }
  ],
  "The Entrepreneurial Student of the Year Award": [
      
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "martha muraya",
          "totalVotes": "1867"
      },
      {
        "nominatorEmail": "enrkiarithagikonyo90@gmail.com",
        "nomineeName": "malei tirati",
        "totalVotes": "1174"
      },
      {
        "nominatorEmail": "stevenosore63@gmail.com",
        "nomineeName": "dinah mwikali",
        "totalVotes": "1030"
      },
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "370"
      },
      {
        "nominatorEmail": "otienosteveneo24@students.tukenya.ac.ke",
        "nomineeName": "rigo wear",
        "totalVotes": "260"
    },
      {
          "nominatorEmail": "grantonmburu01@gmail.com",
          "nomineeName": "na",
          "totalVotes": "74"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "166"
      },
      {
          "nominatorEmail": "andrewkago16@gmail.com",
          "nomineeName": "x",
          "totalVotes": "95"
      },
      {
        "nominatorEmail": "kimani890@gmail.com",
        "nomineeName": "n",
        "totalVotes": "81"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "80"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "45"
      },
      {
          "nominatorEmail": "ochiengprvvuy@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "42"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "31"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "29"
      },
      {
          "nominatorEmail": "musilachristine16@gmail.com",
          "nomineeName": "rigobert song ",
          "totalVotes": "20"
      },
      {
          "nominatorEmail": "njeriogoll@gmail.com",
          "nomineeName": "zenah oloo",
          "totalVotes": "20"
      },
      {
          "nominatorEmail": "ephraimlandis@gmail.com",
          "nomineeName": "rigo wear ",
          "totalVotes": "20"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "martha muraya ",
          "totalVotes": "18"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "joshuaadika08@gmail.com",
          "nomineeName": "prime mark stationery ",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "Veromwende9@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "12"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "onyango",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "rigobert song",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "raykhay53@gmail.com",
          "nomineeName": "dina mwikali",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "patrickkapolonto677@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "kiambambondo@gmail.com",
          "nomineeName": "m",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "benardbsr@gmail.com",
          "nomineeName": "zennah oloo",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "ritasue819@gmail.com",
          "nomineeName": "rigo",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "malei tirati ",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "prime mark stationery",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "musilidinahmwikali@gmail.com",
          "nomineeName": "dinah mwikali ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "velit minus eu offic",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "najudec@gmail.com",
          "nomineeName": "rigowear",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "kelvinkaruga9628@gmail.com",
          "nomineeName": "prime mark",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "joshua mark",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "rigo designs",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "awindajosha12@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "blessing ngaira",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "prime mark stationary ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mosskal@yahoo.com",
          "nomineeName": "tecla baraza",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "rigobertsong254@gmail.com",
          "nomineeName": "rigobert song (rigo wear)",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "paulotundu1@gmail.com",
          "nomineeName": "tirati malei",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kennymwas690@gmail.com",
          "nomineeName": "prime mark stationers",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "felistusngula63@gmail.com",
          "nomineeName": "dina mwikali ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "dinnah mwikali ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "onyango lenox",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": "maley tirati",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "kioko mwania",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "technicaluniversitycu@gmail.com",
          "nomineeName": "prime mark stationery(joshua mark)",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "cynthia ojwang",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "wambuaderrick553@gmail.com",
          "nomineeName": "zena oloo",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "samuelkahinga@gmail.com",
          "nomineeName": "tecla",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "yvonnewanjiru19@gmail.com",
          "nomineeName": "rigo wears",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "yovanmokaya063@gmail.com",
          "nomineeName": "pascal juma",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "otienoenock780@gmail.com",
          "nomineeName": "tecla barasa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "rigobert",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sethmusyoka2021@gmail.com",
          "nomineeName": "muraya martha",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "joshua mark adika ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kamaupurity80@gmail.com",
          "nomineeName": "joshua mark adika",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "g",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "patience tecla",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "faithgathoni16@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "evanceouma277@gmail.com",
          "nomineeName": "muraya",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mogereedgar20@gmail.com",
          "nomineeName": "mwikali",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "t",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "oumatillen35@gmail.com",
          "nomineeName": "tira",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "leahmany540@gmail.com",
          "nomineeName": "joshua mark ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "monicaah630@gmail.com",
          "nomineeName": "prime mark stationers ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercynthenya262@gmail.com",
          "nomineeName": "prime mark stationaries ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "anne apiyo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muteti.ur@gmail.com",
          "nomineeName": "joshua mark adika (prime mark stationeries)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lynettegichira@gmail.com",
          "nomineeName": "k",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "mambo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "obrenlourmex@gmail.com",
          "nomineeName": "martha n. muraya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "oloo zenaha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "tecla patience ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "mwende mutemi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "agnescherono@tukenya.ac.ke",
          "nomineeName": "not applicable.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "mwania mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "esteriakello@gmail.com",
          "nomineeName": "rigobert song (rigowear)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "victorwambua765@gmail.com",
          "nomineeName": "joshua mark-mechanical engineering ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chebetterrytonui@gmail.com",
          "nomineeName": "mark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "duis ut do quas duis",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeremymueni@gmail.com",
          "nomineeName": "prime mark stationary",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": "u",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "muendo sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "elkanamwangi00@gmail.com",
          "nomineeName": "zeena oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": ". ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "ggh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "kiema mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "nelly",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "odhiamboa822@gmail.com",
          "nomineeName": "v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "edwinngare4@gmail.com",
          "nomineeName": "blessings ngaira",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "george ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingkelvineinstein@gmail.com",
          "nomineeName": "joshua mark-prime mark stationery ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevina.akello7@gmail.com",
          "nomineeName": "robert song (rigowear)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "claver mwai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "collins",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoer66@gmail.com",
          "nomineeName": "maleo tirati",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "david nganga ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sibabigregory@gmail.com",
          "nomineeName": "mark adika",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "sam",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "palesarita9@gmail.com",
          "nomineeName": "riowear",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muriukivictor299@gmail.com",
          "nomineeName": "zennah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelkhamati01@gmail.com",
          "nomineeName": "doris cherotich ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "earnest kinyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "doresisylivia18@gmail.com",
          "nomineeName": "primemark stationery",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "prime mark stationeries",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "charity ngilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "njerrysharon01@gmail.com",
          "nomineeName": "martha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyancheray@gmail.com",
          "nomineeName": "donal mwikali",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": "dinah ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ecsm/00169/2023",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "charles manza",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "matrixojiambol678@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "lizer",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "patrick njoroge ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tommyfrankprotich02@gmail.com",
          "nomineeName": "robert song",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "peterson karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "sunt nostrud volupta",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "none at all",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithchero23@students.tukenya.ac.ke",
          "nomineeName": "joshua adika",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "kelvin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojeff1502@gmail.com",
          "nomineeName": "charles bwibo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "paulntoyaitaiko@gmail.com",
          "nomineeName": "thee mark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "britneymadline@gmail.com",
          "nomineeName": "rid",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kokowinny527@gmail.com",
          "nomineeName": "pas",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "joseph kibe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okothjohnomondi@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "captainat2023@gmail.com",
          "nomineeName": "rigobert ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "ken maria",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga4@gmail.com",
          "nomineeName": "rigo wears ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maureennjoroge46@gmail.com",
          "nomineeName": "prime joshua mark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otoyootoyo@254gmail.com",
          "nomineeName": "×",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the entrepreneurial student of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hopeshapashina@gmail.com",
          "nomineeName": "malei. tirati",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "gift",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "yvonne ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "koneemalei@gmail.com",
          "nomineeName": "male tirati",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gtexmahinda112@gmail.com",
          "nomineeName": "diana mwikali",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "ribort song",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "david ng'anga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "sherry chen",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "kelvin makau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "galatagirma59@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "edmon otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "kevin kibet",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "samuel kahinga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "judyabony@gmail.com",
          "nomineeName": "zennah olooh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "felistus and anne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "prime mark stationeries.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lucasochieng007@gmail.com",
          "nomineeName": "zena",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "nemo quam quidem est",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "collins onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "andrea letaya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "o",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "mu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "mumo mwemde",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "mr. tirati malei ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kibetbrian09@gmail.com",
          "nomineeName": "dennis rowling's ni",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "catherinenzuki@students.tukenya.ac.ke",
          "nomineeName": "mark thee",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "matukuveronica1@gmail.com",
          "nomineeName": "blessing ngaria",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintonkoikai331@gmail.com",
          "nomineeName": "anakala michael",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyamwayajoseph48@students.tukenya.ac.ke",
          "nomineeName": "prime stations ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ekuria@studentsforliberty.org",
          "nomineeName": "briam",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithoduor87@gmail.com",
          "nomineeName": "rigoberto song",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "odiwuorooko@gmail.com",
          "nomineeName": "n.a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "charity ngilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "franklin kaunda ecsm/00169/2023.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joywanjiku@gmail.com",
          "nomineeName": "rblessing ngaira",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "chebet",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "phelix",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "koolvanaih@gmail.com",
          "nomineeName": "primemark stationeries, joshua mark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "kalonzo musyoka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "amos",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimmarion040@gmail.com",
          "nomineeName": "lenox ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "samuel ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "priscakanini40@gmail.com",
          "nomineeName": "rigo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "admin12@website.com",
          "nomineeName": " evans kimutai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "wasya witu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "amomutish2@gmail.com",
          "nomineeName": "prime mark stationaries ( joshua mark)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "auoma hellen",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "simon saruni",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "prime mark stationeries - joshua mark adika",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nantoyieshelmith@gmail.com",
          "nomineeName": "cynthia angieng",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "vostone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi13@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "primemark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Ojwangcynthia5@gmail.com",
          "nomineeName": "cynthia ojwang ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jason@tando.me",
          "nomineeName": "onyango ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "grantons nyange",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "broookssteven@gmail.com",
          "nomineeName": "patrick",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharonyandiwa973@gmail.com",
          "nomineeName": "sharon nyandiwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "mwenda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "abuya.otieno06@gmail.com",
          "nomineeName": "dinah  mwikali",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "mwania mutiso ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "wayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "kyumwa ndeto",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "muraya martha ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cliffenjugush@gmail.com",
          "nomineeName": "lenox",
          "totalVotes": "1"
      }
  ],
  "The Environment Advocate of the Year Award": [
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "yvette olel",
          "totalVotes": "1857"
      },
      {
        "nominatorEmail": "simmic997@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "1226"
    },
      {
        "nominatorEmail": "martineabwao2003@gmail.com",
        "nomineeName": "moses okal",
        "totalVotes": "816"
      },
      {
        "nominatorEmail": "bwibo6charles@gmail.com",
        "nomineeName": "onduto",
        "totalVotes": "617"
      },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "na",
          "totalVotes": "232"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "174"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "168"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "151"
      },
      {
          "nominatorEmail": "kisuyasitati12@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "114"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "47"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "43"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "30"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "26"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "mosesokal94@gmail.com",
          "nomineeName": "moses okal ",
          "totalVotes": "12"
      },
      {
          "nominatorEmail": "johnojunga7@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "david natembea",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "none",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "ruth",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "david natembeya",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "qui recusandae volu",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "shapashinamirriam@gmail.com",
          "nomineeName": "david natembea ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "david natembeya ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "kiambambondo@gmail.com",
          "nomineeName": "m",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": "t",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "rosemwende@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mcjumadonald36@gmail.com",
          "nomineeName": "kelvin",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "david kiragu",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "carlosabich46@gmail.com",
          "nomineeName": "ruth ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "elizabethanyungu@gmail.com",
          "nomineeName": "okal moses",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "ruth wamuhu",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "faithgathoni16@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "mwende ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "linet muuru",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "agere sigunga",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "keisy lenon ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "michael onduto",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "yvette ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "...",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "lucasochieng007@gmail.com",
          "nomineeName": "okal",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "mwemde",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sabpastels@gmail.com",
          "nomineeName": "adama mwinzi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "claudia ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "onduto (ssss)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "natembeya david ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "evette ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingazariah96@gmail.com",
          "nomineeName": "natembeya david",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "michael onduti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "cjui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "mambo muema",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ekuria@studentsforliberty.org",
          "nomineeName": "benad",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "fgt",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "brian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "ljhg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "keshe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "mitchell otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ochiengjoy12@gmail.com",
          "nomineeName": "vetted olel",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "amunga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hadasakibet@gmail.com",
          "nomineeName": "latifa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kipchogeeliud@gmail.com",
          "nomineeName": "n. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yujonyaga@gmail.com",
          "nomineeName": "rosemary",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "kaisy lenon ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "vivian nyaminsa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "emmanuel githinji ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "john",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "caltone agugo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "tecla patience barasa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rotichjustus2020@gmail.com",
          "nomineeName": "wamuhu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okumuchristine798@gmail.com",
          "nomineeName": "creative ministry ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "furrystepper@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi21@gmail.com",
          "nomineeName": "na.na",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyussuf026@gmail.com",
          "nomineeName": "brian muuo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daisymueni52@gmail.com",
          "nomineeName": "david onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "mark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "bh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "mutiso mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hezronratemo@students.tukenya.ac.ke",
          "nomineeName": "advocacy subcommittee tukcu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "yvett olel kenyatta",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nimooh2018@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "kioko muli",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "samuel",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "pascal juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke5@gmail.com",
          "nomineeName": "okay moses",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "kilei",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "enviromental club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "kelly",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "contact15@mock.com",
          "nomineeName": "dama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "kasmuel makoure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "alice wangui ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "yvonne nyanchera ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "waitwa sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "centrinejuman@gmail.com",
          "nomineeName": "job natembeya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "geoffrey muteti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "peter kariuki ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "maima asu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewanjiku071@gmail.com",
          "nomineeName": "d",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "paulettejoy05@gmail.com",
          "nomineeName": "yvete olel",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "grace",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "esse animi exercit",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cliffenjugush@gmail.com",
          "nomineeName": "nabangi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "tpx mwenyewe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "mercy wangechi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "abigail kimondiu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onlygodcanjudgme@gmail.com",
          "nomineeName": "outdoor games sports person of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kennedymwangik20@students.tukenya.ac.ke",
          "nomineeName": "natembea",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mghoimaryanne3@gmail.com",
          "nomineeName": "eyvette",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "susanmutama90@gmail.com",
          "nomineeName": "wanyonyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omwamijoshua913@gmail.com",
          "nomineeName": "onduto micheal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "no one at all",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "cupiditate nihil exc",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelkhamati01@gmail.com",
          "nomineeName": "andré etulo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "deluxe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "r",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "meshackkariuki@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "reagangranddy@gmail.com",
          "nomineeName": "yvette elizabeth olel",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "oimre ahinya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "uu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "david natembeya.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sonnick993@gmail.com",
          "nomineeName": "malei tirati",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daltonelogovane@gmail.com",
          "nomineeName": "olelo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sethmusyoka2021@gmail.com",
          "nomineeName": "onduto michael",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "onduto micheal ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "kioko waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "knight ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "kesley lenon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "sheilah oketch",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "konduti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "nancy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "onduto michael ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "kalekye tuyu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "mumo meende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "yvete olle",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "noel",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "tuk cu advocacy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "faith loronyokwe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "beverly ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "grace wendo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "lewis mose",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "irerieric531@gmail.com",
          "nomineeName": "eric ireri ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "charles wafula",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "mwemde mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "e",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "kibe antony",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "mutua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "sammy keshe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "nelly",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyancherayvone@gmail.com",
          "nomineeName": "yvette olel ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "teressiah njeri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com.com",
          "nomineeName": "yvette olle",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the environment advocate of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "carroll burian ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingkelvineinstein@gmail.com",
          "nomineeName": "kelvin einstein ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyakeriemanuel@gmail.com",
          "nomineeName": "tuk environmental club ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "jv",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvonnewanjiru19@gmail.com",
          "nomineeName": "yvette",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brendaorbab@gmail.com",
          "nomineeName": "j",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "actus",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "u",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mugambienock@gmail.com",
          "nomineeName": "nonone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okukumarcelingnatius@gmail.com",
          "nomineeName": "h",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "dean munene",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "gg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "peterson karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "kaumbuthi peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "githinji",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "mwende sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "environment club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "rosemary njeri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "et ullam ullam commo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "kiko nguli",
          "totalVotes": "1"
      }
  ],
  "The Faculty of the Year Award": [
      {
        "nominatorEmail": "cliffenjugush@gmail.com",
        "nomineeName": "fsst ",
        "totalVotes": "1917"
      },
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "febe",
          "totalVotes": "1598"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "fast",
          "totalVotes": "928"
      },
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "264"
      },
      {
          "nominatorEmail": "ahubacastrol@gmail.com",
          "nomineeName": "na",
          "totalVotes": "187"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "166"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "150"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "112"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "fsst",
          "totalVotes": "104"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "55"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "44"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "20"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "19"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "19"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "febe ",
          "totalVotes": "18"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "fast ",
          "totalVotes": "17"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "pirorispenina401@gmail.com",
          "nomineeName": "f.e.b.e",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "porro accusamus sequ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Matadbright@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "peter kanyua",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "faculty of engineering and built environment ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "nafulairene73@gmail.com",
          "nomineeName": "peter marite",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "tommyfrankprotich02@gmail.com",
          "nomineeName": "engineering and built environment ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mbaisaberah25@gmail.com",
          "nomineeName": "faculty of applied sciences",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "hananmwangi8@gmail.com",
          "nomineeName": "faculty of applied sciences and technology ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "manwaelvin6@gmail.com",
          "nomineeName": "faculty of social sciences and technology",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "emmanuelbakari002@gmail.com",
          "nomineeName": "m",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "support15@mock.com",
          "nomineeName": "faculty of applied sciences and technology",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "j",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "...",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "support14@mock.com",
          "nomineeName": "faculty of applied sciences an technology",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "murima001@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "marysururu261@gmail.com",
          "nomineeName": "no",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "josephkingili@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "p.kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bachcynthia2@gmail.com",
          "nomineeName": "nip",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "allanrayian96@gmail.com",
          "nomineeName": "engineering and building environment ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemmyphe@gmail.com",
          "nomineeName": "spti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "ffst",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "philomenairungu254@gmail.com",
          "nomineeName": "faculty of engineering ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mugambih600@gmail.com",
          "nomineeName": "scps",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "shhe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yovanmokaya063@gmail.com",
          "nomineeName": "social sience and technology",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "elizabeth achieng",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alfiekennie@gmail.com",
          "nomineeName": "f.a.s.t ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "user36@demo.com",
          "nomineeName": "faculty of apllied sciences and technology",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "cyprian kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sambosaid123@gmail.com",
          "nomineeName": "febr",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "irvinemwangi@gmail.com",
          "nomineeName": "siss",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "doris",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "vostone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david.nate012@gmail.com",
          "nomineeName": "kanyua peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the faculty of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "pelistri evansjo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "neenkekekeennd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "at quidem veritatis ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmulongo82@students.tukenya.ac.ke",
          "nomineeName": "engineering and building science ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "njeriogoll@gmail.com",
          "nomineeName": "rigobert song",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "leahmany540@gmail.com",
          "nomineeName": "faculty of applied science and  technology ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samwelogechi856@gmail.com",
          "nomineeName": "c",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondilucky21@gmail.com",
          "nomineeName": "facaulty of engineering and built environment",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "britneymadline@gmail.com",
          "nomineeName": "kanyua(febe)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "faculty of engineering and built environment.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hopeshapashina@gmail.com",
          "nomineeName": "rr",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "palesarita9@gmail.com",
          "nomineeName": "first",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamonyangi66@gmail.com",
          "nomineeName": "n/v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "nu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "atienoflojo26@gmail.com",
          "nomineeName": "social sciences and technology ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hezronratemo@students.tukenya.ac.ke",
          "nomineeName": "faculty of engineering and the built environment ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "kamau munywa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kunduwanjala76@gmail.com",
          "nomineeName": "education science ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Innocentowino3@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "contact23@sample.com",
          "nomineeName": "faculty of applied sciences and technology fast",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "technology (design)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "juliusntikoisa@gmail.com",
          "nomineeName": "engineering and the building environment ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshuaonyango023@gmail.com",
          "nomineeName": "smas",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jonezohuru@gmail.com",
          "nomineeName": "peter marite ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isdora043@gmail.com",
          "nomineeName": "applied science and technology ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "karanja mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "user37@demo.com",
          "nomineeName": "faculty of sciences and technology fast",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "aizomanu0@gmail.com",
          "nomineeName": "t",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "sass",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Mutugib@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvonnewanjiru19@gmail.com",
          "nomineeName": "faculty of engineering and building environment",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kangetherose51@gmail.com",
          "nomineeName": "x ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muliurbanus36@gmail.com",
          "nomineeName": "technology and built environment ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "faculty of social sciences and technology ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayrashahalla@gmail.com",
          "nomineeName": "mee",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alexmurithi176@gmail.com",
          "nomineeName": "fest",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oluochivictor11@gmail.com",
          "nomineeName": "faculty of engineering and the built environment",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "user39@demo.com",
          "nomineeName": "faculty of sciences and applied chemistry",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Marynyamai339@gmail.com",
          "nomineeName": "f. e. b. e",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "applied sciences",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oshadrack489@gmail.com",
          "nomineeName": "sasp",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "b",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "danilo kisemei ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "briankipkoech865@gmail.com",
          "nomineeName": "mechanical and mechatronics ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "faulty",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "cooks",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "civil and resource engineering",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "patrick njoroge ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sonnick993@gmail.com",
          "nomineeName": "fbbe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "musembi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Ngarvey9241@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lynettegichira@gmail.com",
          "nomineeName": "applied sciences and technology ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kelvinkiptum@gmail.com",
          "nomineeName": "n. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "dennis murimi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "4",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "allan aoko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yemix36@gmail.com",
          "nomineeName": "applied sciences and technology",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "faculty ofarchitecture and built environment",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "muendo vincent ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dlonrahednohk@gmail.com",
          "nomineeName": "n/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "sharon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryayanoloo321@gmail.com",
          "nomineeName": "electrical and electronics",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "yuhh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "engineering",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Tabithachep12@gmail.com",
          "nomineeName": "s.b.l.s",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "magdalene.wangu@ajiraemobilis.org",
          "nomineeName": "no one ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewanjiku071@gmail.com",
          "nomineeName": "d",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "carsonmulongo@gmail.com",
          "nomineeName": "marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "magni consequatur u",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "rodgers okoth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "faculty of social sciences",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kangetheerick39@gmail.com",
          "nomineeName": "engineering and built environment",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "sciences and leisure studies ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "engineering ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Faithfevoh@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": "i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "melissa.nicholas55@gmail.com",
          "nomineeName": "electrical engineering ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "eddy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "est mollit voluptat",
          "totalVotes": "1"
      }
  ],
  "The Graphic Designer of the Year Award": [
      
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "evans kimutai",
          "totalVotes": "1838"
      },
      {
        "nominatorEmail": "Muchina032@gmail.com",
        "nomineeName": "peter muchina",
        "totalVotes": "1021"
      },
      {
        "nominatorEmail": "enrkiarithagikonyo90@gmail.com",
        "nomineeName": "isaac kiaritha",
        "totalVotes": "718"
      },
      {
        "nominatorEmail": "musaleeaziz@gmail.com",
        "nomineeName": "evans mitei",
        "totalVotes": "489"
      },
      {
        "nominatorEmail": "simmic997@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "454"
      },
      {
          "nominatorEmail": "grantonmburu01@gmail.com",
          "nomineeName": "na",
          "totalVotes": "220"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "146"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "148"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "119"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "113"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "46"
      },
      
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "40"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "30"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "gracemwangi0264@gmail.com",
          "nomineeName": "evans kimutai ",
          "totalVotes": "24"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "benard bosire",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "emmanuelmagoba157@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "13"
      },
      {
          "nominatorEmail": "josephatgiles@gmail.com",
          "nomineeName": "kennedy mwangi",
          "totalVotes": "12"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "kobe",
          "totalVotes": "12"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "peter muchina ",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "none",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "kazungurobert555@students.tukenya.ac.ke",
          "nomineeName": "evance kimutai",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "marywanjiku@tukenya.ac.ke",
          "nomineeName": "not applicable",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "felixkemboi108@gmail.com",
          "nomineeName": "m",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "isaac kiaritha ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "deniswanjiku290@gmail.com",
          "nomineeName": "kennedy mwangi ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "hyneviolet@gmail.com",
          "nomineeName": "bernard bosire",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "do fugiat odio illu",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "admin12@website.com",
          "nomineeName": " evans kimutai",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "kennedy kamau mwangi",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "brianabuya814@gmail.com",
          "nomineeName": "benard bosire ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kelvinkaruga9628@gmail.com",
          "nomineeName": "ken mwangi",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ephraimlandis@gmail.com",
          "nomineeName": "evance kimutai ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kayiaacollins3@gmail.com",
          "nomineeName": "collins kayiaa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "j",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "furrystepper@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "tumateraphael@gmail.com",
          "nomineeName": "bernard bosire ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jason@tando.me",
          "nomineeName": "kamau",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "briankipkoech865@gmail.com",
          "nomineeName": "kiaritha isaac",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kitoer66@gmail.com",
          "nomineeName": "kennedy kamau",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "carlosabich46@gmail.com",
          "nomineeName": "kamau ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "faithgathoni16@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "info8@domain.com",
          "nomineeName": "kimutai",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "broookssteven@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "rotichjustus2020@gmail.com",
          "nomineeName": "marite",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sharonmueni2000@gmail.com",
          "nomineeName": "c",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "info3@website.com",
          "nomineeName": "evans kemutai ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "peterqariz161@gmail.com",
          "nomineeName": "kennedy mwangi kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": ".u",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "mwenee waya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "peter muchina.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "ut possimus delenit",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "britneymadline@gmail.com",
          "nomineeName": "rigo song (rigo wear)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "....",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okumuchristine798@gmail.com",
          "nomineeName": "isaac  kiaritha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "brian ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "mumo sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "yuu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "esther nduta",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "josephkingili@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cliffenjugush@gmail.com",
          "nomineeName": "brio",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "info1@website.com",
          "nomineeName": "evans kemutai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dansonkinyanjui10@gmail.com",
          "nomineeName": "...",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "ian omondi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shapashinamirriam@gmail.com",
          "nomineeName": "isacc kiaritha ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "slimdreals",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmuthini00@gmail.com",
          "nomineeName": "evans kimtai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muliurbanus36@gmail.com",
          "nomineeName": "eg graphics",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "kelvin kariuki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "g",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "grace wamaitha ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinmwendwa005@gmail.com",
          "nomineeName": "enga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the graphic designer of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Samsonwambua@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "peter paul ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "james gichamba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "d8991577@gmail.com",
          "nomineeName": "were",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "kama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rollinsdenis415@gmail.com",
          "nomineeName": "jesse",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "adikacindy06@gmail.com",
          "nomineeName": "timothy lomunyaak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "ian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daltonelogovane@gmail.com",
          "nomineeName": "slimdreal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muteti.ur@gmail.com",
          "nomineeName": "isaac kiathira",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "babu owino",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "blessing ngaira",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mcjumadonald36@gmail.com",
          "nomineeName": "mwenda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "agnes.wangare02@gmail.com",
          "nomineeName": "issac kiaritha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "peter kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "kairitha isaac",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "evanceouma277@gmail.com",
          "nomineeName": "evance kumutai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndanujoseph890@gmail.com",
          "nomineeName": "colins kaitaa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "mihari ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "captainat2023@gmail.com",
          "nomineeName": "collins kaiyaa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "kavana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "edwin mukaria ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "mordecai carmon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "hafsa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "charles koech",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "kelvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "eugene ambagwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "incididunt est labor",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "maurice",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "jacob omake",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rigobertsong254@gmail.com",
          "nomineeName": "kobe ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "madowa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "paul kamau ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "vincent ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "leon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "bb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "kioko sammy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "grace wamaitha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "mutua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "evette",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "si",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marysururu9@gmail.com",
          "nomineeName": "not ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "mundwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "01mainaben@gmail.com",
          "nomineeName": "evans mithi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "lenoss",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "envsonson kamuri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienosteveneo24@students.tukenya.ac.ke",
          "nomineeName": "rigo wear",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "xady",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mosejamesjm1234@gmail.com",
          "nomineeName": "isaac kirathi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "peterson karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "kariuki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brittaodongo@gmail.com",
          "nomineeName": "nol",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "zennahkobungu@gmail.com",
          "nomineeName": "benard busire",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jamesfaraja8@gmail.com",
          "nomineeName": "isaac kiarithi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "sammy keshe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hopeshapashina@gmail.com",
          "nomineeName": "1",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "mwende sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "grace ngile",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "joshua simba ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "were photography ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "johnadongo@gmail.com",
          "nomineeName": "evance kiplagat",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi18@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "stephan ochieng ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshuaadika08@gmail.com",
          "nomineeName": "muchina peter ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "guu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "mumo waitwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "mwende mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "collinsomukala@gmail.com",
          "nomineeName": "beian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "susanmutama90@gmail.com",
          "nomineeName": "lexon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "muchina peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "marite peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "kioko mwinzi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "mbuzi wa migori",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "yusuf",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryankiplimo20@gmail.com",
          "nomineeName": "jeff",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "listone okelo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "ann",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "kibe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimmarion040@gmail.com",
          "nomineeName": "onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jobjason338@gmail.com",
          "nomineeName": "mihari",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bakutibin@gmail.com",
          "nomineeName": "comrade premium tuk ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sequeiraogechi98@gmail.com",
          "nomineeName": "joshua gikemi ragira",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmulongo82@students.tukenya.ac.ke",
          "nomineeName": "white shadow",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "priscakanini40@gmail.com",
          "nomineeName": "evans kim ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "kipkoech ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienosylvia28@gmail.com",
          "nomineeName": "name ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "r",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musilidinahmwikali@gmail.com",
          "nomineeName": "orechi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "nelly ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "steven oluoch",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "kevin kiplagat (duma) ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "rolex okoth ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "lfff",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "mwnede",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "lilian tsisika ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "kennedy mwangi (ken poster)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "galatagirma59@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "stephen onyango ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Laurineliech2@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sethmusyoka2021@gmail.com",
          "nomineeName": "ambagwa graphics",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "vel debitis voluptat",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "samuel kahinga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "contact13@mock.com",
          "nomineeName": "kimutai evance",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "japhethochieng440@gmail.com",
          "nomineeName": "n/ac",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "rachesl",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "makau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "felistus kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "steve musembi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "abigail kimondiu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "newtondelancy@gmail.com",
          "nomineeName": "newton ngui ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "beckywachira57@gmail.com",
          "nomineeName": "peter onyaro",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "none at all ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "t",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "elizabethanyungu@gmail.com",
          "nomineeName": "maurice owuor",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okellolusa@gmail.com",
          "nomineeName": "nio",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "phelix",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimani687@gmail.com",
          "nomineeName": "v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "kiema mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "kk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "mutiso kiema",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okothjohnomondi@gmail.com",
          "nomineeName": "mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "calvin klein",
          "totalVotes": "1"
      }
  ],
  "The Humanitarian of the Year Award": [
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "1969"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "daltone ogoda",
          "totalVotes": "1837"
      },
      {
        "nominatorEmail": "info7@domain.com",
        "nomineeName": "jayne felicity orifa ",
        "totalVotes": "393"
      }, 
      {
        "nominatorEmail": "w0088141@gmail.com",
        "nomineeName": "elphas aduwa",
        "totalVotes": "282"
      }, 
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "na",
          "totalVotes": "253"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "167"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "147"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "134"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "111"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "45"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "40"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "31"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "orifah",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "nyamburamargaret521@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "ruth",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "aduwaelphas@gmail.com",
          "nomineeName": "elphas aduwa ",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "kiambambondo@gmail.com",
          "nomineeName": "m",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "admin2@sample.com",
          "nomineeName": "dalton ogoda ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "eos excepteur natus",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "khiddie",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "martinnyaga965@gmail.com",
          "nomineeName": "orifa",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "..",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "dennischege431@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "mcjumadonald36@gmail.com",
          "nomineeName": "kingi",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sheldon18onyango@gmail.com",
          "nomineeName": "orifah jayne felicity ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "stephenwere2003@gmail.com",
          "nomineeName": "meshack were ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "orife",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com.com",
          "nomineeName": "daltone",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kisuyasitati12@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "marysururu261@gmail.com",
          "nomineeName": "no",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "beatricewanjue98@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "julianogutu@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kazungurobert555@students.tukenya.ac.ke",
          "nomineeName": "daltone agonda",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "odhiamboa822@gmail.com",
          "nomineeName": "rollins",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "ruth moraa richard ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sabpastels@gmail.com",
          "nomineeName": "kama",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sicilyneonzere@gmail.com",
          "nomineeName": "daltone ogonda ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "orifah jayne felicity",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "nicole prudence ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "enrkiarithagikonyo90@gmail.com",
          "nomineeName": "andrea lentaaya",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mungaisamuel624@gmail.com",
          "nomineeName": "jayne felicity orifa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "h",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "peter",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": ".... ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "chebetterrytonui@gmail.com",
          "nomineeName": "orifah ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "carlosabich46@gmail.com",
          "nomineeName": "nabangi",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joywanjiku@gmail.com",
          "nomineeName": "felicity orifa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "collinsomukala@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "zennahkobungu@gmail.com",
          "nomineeName": "elphas",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "sammy muendo",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "lucasochieng007@gmail.com",
          "nomineeName": "karian ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "khiddie ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ephraimlandis@gmail.com",
          "nomineeName": "daltone agonda ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "ruth wamuhu",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "info1@website.com",
          "nomineeName": "nelly akinyi ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hopeshapashina@gmail.com",
          "nomineeName": "t",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "gracemwangi0264@gmail.com",
          "nomineeName": "dalton ogoda",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "mumo sammy",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "da",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "s",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "peter karanja ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "kireira",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "faith ruth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hellennyongesa861@gmail.com",
          "nomineeName": "jayne felicity orifah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "gloria mutiku",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "spacialjoy00@gmail.com",
          "nomineeName": "nelly akinyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "timothylomunyak6@gmail.com",
          "nomineeName": "urbanus muteti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "general ogolla",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "ruth(gender sec)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "brian ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "kaisy lenon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hudsonmriale04@gmail.com",
          "nomineeName": "ruth wamughu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "peter marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewanjiku071@gmail.com",
          "nomineeName": "i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "irerieric531@gmail.com",
          "nomineeName": "gssa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mnashepmk@gmail.com",
          "nomineeName": "jayne felicity",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sherlinewambui19@gmail.com",
          "nomineeName": "dalton ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleywanjohi12183@gmail.com",
          "nomineeName": "tecla",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "simon.w.saruni@gmail.com",
          "nomineeName": "simon saruni ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brianwahungu123@gmail.com",
          "nomineeName": "not  applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "ouko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "?",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "daltone logovane",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "info4@website.com",
          "nomineeName": "moses okal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "darlington lugavovane",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "karanja mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "dennis y",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "mutiso mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muliurbanus36@gmail.com",
          "nomineeName": "peter kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "hannah mutuku ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kariukisarah467@gmail.com",
          "nomineeName": "lydiah kimeu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nellyvilla254@gmail.com",
          "nomineeName": "felicity orifah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "voluptas et ut id es",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "meshack were",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "peter marite ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "dr. ngugi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "habiba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "caleb ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "charity ngilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "charles wafula",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "ann",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienoenock780@gmail.com",
          "nomineeName": "enock otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "abayo vostone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "stephen koech",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "y",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Millyochoro@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "marion seleon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "kioko mwangi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "lydia kimeu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rollinsdenis415@gmail.com",
          "nomineeName": "agere sigunga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamonyangi66@gmail.com",
          "nomineeName": "n/v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "michaelkishoyian20@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "abdileila27@gmail.com",
          "nomineeName": "kiddle",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "ghh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "what are this ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okothjohnomondi@gmail.com",
          "nomineeName": "david ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "mwinzi kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mukunzijoseph18@gmail.com",
          "nomineeName": "nol",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "incidunt vero lorem",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "jack collins ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "mercy sella",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "amet maxime volupta",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "fabian suek",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "msatuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "demo7@website.com",
          "nomineeName": "jayne felicity ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "hildah owino",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nafulairene73@gmail.com",
          "nomineeName": "khidi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "peter ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "frolence wanjiru",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "mary mercy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "bridget theuri ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "maureen ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryankiplimo20@gmail.com",
          "nomineeName": "kisiagi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "gendri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanguimaina7462@gmail.com",
          "nomineeName": "kelvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "vincent chagara",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yovanmokaya063@gmail.com",
          "nomineeName": "rosemary wairimu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "charles kibaki ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calmaxokello@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "kelvin makau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marymwanzia34@gmail.com",
          "nomineeName": "frlicity",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the humanitarian of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "g",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "emmanuel githinji",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "damaris njeri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musilidinahmwikali@gmail.com",
          "nomineeName": "elam kiama (khiddie)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "kk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Nashipaihilda@gmail.com",
          "nomineeName": "ass",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "caleb nyaanga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "ian wafula",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello6@random.com",
          "nomineeName": "orifah felicity",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "kingi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "hu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "samson makomele",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "antone onyango ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "mi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "kisiagi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "andrea lantanye ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "adede elvis ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lucynzioki77@gmail.com",
          "nomineeName": "/a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "mwende mumo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "glowers foundation ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "mwania mutio",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "evanceouma277@gmail.com",
          "nomineeName": "dalton ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienosteveneo24@students.tukenya.ac.ke",
          "nomineeName": "diana modi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingkelvineinstein@gmail.com",
          "nomineeName": "ruth moraa-joyous foundation ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "kirui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nashisakoamos@gmail.com",
          "nomineeName": "n/al",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "stacy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kianshii3@gmail.com",
          "nomineeName": "mercy sella ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "edwine omengo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "mwemde mutemi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nellyakinyi528@gmail.com",
          "nomineeName": "nelly akinyi ouma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "julius.mogaka24@gmail.com",
          "nomineeName": "nana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithgathoni16@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "basil",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "allanrayian96@gmail.com",
          "nomineeName": "n/à",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndirangungu@gmail.com",
          "nomineeName": "nip",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "beryl auma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jessicahoprah@gmail.com",
          "nomineeName": "oprah jessicah ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "makau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "japheth okello ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daisymueni52@gmail.com",
          "nomineeName": "david natembeya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "tony onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "b",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "theresamercy32@gmail.com",
          "nomineeName": "orifah felicity ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "mwende mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "u",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "slaahn ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "britneymadline@gmail.com",
          "nomineeName": "nyaga martin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "steveochieng@students.tukenya.ac.ke",
          "nomineeName": "zena oloo",
          "totalVotes": "1"
      }
  ],
  "The Most Influential Student of the Year Award": [
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "julius ntikoisa narikae",
          "totalVotes": "1892"
      },
      {
        "nominatorEmail": "nyancheray@gmail.com",
        "nomineeName": "evance ouma",
        "totalVotes": "1256"
      },
      {
        "nominatorEmail": "juliusntikoisa@gmail.com",
        "nomineeName": "charles bwibo",
        "totalVotes": "1029"
      },
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "329"
      },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "na",
          "totalVotes": "195"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "171"
      },
      {
          "nominatorEmail": "kimani687@gmail.com",
          "nomineeName": "n",
          "totalVotes": "112"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "110"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "109"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "43"
      },
      {
          "nominatorEmail": "felixmakambo0034@gmail.com",
          "nomineeName": "evance ",
          "totalVotes": "37"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "37"
      },
      {
          "nominatorEmail": "musilachristine41@gmail.com",
          "nomineeName": "charles bwibo ",
          "totalVotes": "33"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "bwibo charles",
          "totalVotes": "26"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "evance",
          "totalVotes": "21"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "17"
      },
      {
        "nominatorEmail": "cougauhneyouma99@gmail.com",
        "nomineeName": "evance ouma ",
        "totalVotes": "17"
      },
      {
          "nominatorEmail": "jacsonkiok3111@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "Ojwangcynthia5@gmail.com",
          "nomineeName": "bwibo",
          "totalVotes": "12"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "bwibo charles ",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "rowling's ",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "raykhay53@gmail.com",
          "nomineeName": "c bwibo",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "evans ouma",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "nisi fugiat ipsum el",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "loshanmmoja@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "samwelogechi856@gmail.com",
          "nomineeName": "evance ongoro",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "kimallanwe@gmail.com",
          "nomineeName": "julius ntikoisa",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "wycliff akaka",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "kama",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "stephenwere2003@gmail.com",
          "nomineeName": "c. bwibo",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "okothjohnomondi@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "shapashinamirriam@gmail.com",
          "nomineeName": "..",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "peter marite",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "evans",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "mbuzi wa migori",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "terry tonui ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "pascal juma",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hadasakibet@gmail.com",
          "nomineeName": "c.bwibo",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jerutojael896@gmail.com",
          "nomineeName": "c bwoi",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "priscakanini40@gmail.com",
          "nomineeName": "evance ongoro ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "m",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "t",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": ". ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "faithchepngeno915@gmail.com",
          "nomineeName": "emmanuel leshoo",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "githinjisharon2@gmail.com",
          "nomineeName": "austine",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "elijaahmumoh@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshuaonyango023@gmail.com",
          "nomineeName": "leshoo emmanuel ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "akaka ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "wamaegeaorge76@gmail.com",
          "nomineeName": "pas",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "ben masila",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "evans ongoro",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "galatagirma59@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "r",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "marysururu261@gmail.com",
          "nomineeName": "no",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "bwibo charlse",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "kiema mutiso",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kianodavid730@gmail.com",
          "nomineeName": "julius ntikoisa narikae ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Kelseymudoro123@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "lawrencekosen65@gmail.com",
          "nomineeName": "emmanuel leshoo ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "rowlings",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "alex",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "y",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "maima mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muliurbanus36@gmail.com",
          "nomineeName": "tuk comrade ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kairuware@gmail.com",
          "nomineeName": " charles bwibo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "tony blair ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maureengioche68@gmail.com",
          "nomineeName": "dinah mwikali ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "melissa.nicholas55@gmail.com",
          "nomineeName": "raphael oguk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "kamau munywa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanueljones5820@gmail.com",
          "nomineeName": "lucky jones",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "peter muchina",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "kelvin makau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "janetnekesa13@gmail.com",
          "nomineeName": "julius",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "patrick njoroge ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "simon.w.saruni@gmail.com",
          "nomineeName": "simon saruni ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "u",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "rowlings juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "leemosesaziz@gmail.com",
          "nomineeName": "denis tonui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamonyangi66@gmail.com",
          "nomineeName": "n/v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bakutibin@gmail.com",
          "nomineeName": "comrade premium tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinmbugua300@gmail.com",
          "nomineeName": "faith mutheu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "ojuka edward ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayrashahalla@gmail.com",
          "nomineeName": "obelsibuth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "mutinda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "joseph maina ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienoenock780@gmail.com",
          "nomineeName": "philip idewa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "collinsokiaka@gmail.com",
          "nomineeName": "nana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "kioko musa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the most influential student of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "kelvin kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "ukg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lilphiljeffrey@gmail.com",
          "nomineeName": "bold mbithe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "mutiso mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "alex chege",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kelvinsabul0@gmail.com",
          "nomineeName": "emanuel leshoo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "gichina",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "simeon ochoi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "tuk premium comrade ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "mark ogola",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gasteen2@gmail.com",
          "nomineeName": "tukcomrade",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "joash agola",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "j",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "rolex okoth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "malient angela ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "ojuka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karimaolivia4@gmail.com",
          "nomineeName": "bwibo charles.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "luchericyprian@gmail.com",
          "nomineeName": "david onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "otb ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "vd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "kikoko mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "geoffreyruoho6@gmail.com",
          "nomineeName": "not. available",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "bwibo charlse ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "moses dikir ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "evansomote14@gmail.com",
          "nomineeName": "vc wa tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "whiclif akaka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "alice wambui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rowzilp@gmail.com",
          "nomineeName": "rowzil paultine ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kunduwanjala76@gmail.com",
          "nomineeName": "victor apicha ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "diananaipande@gmail.com",
          "nomineeName": "julius ndikoisa narikae",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "pee mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "kioko mwemde",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jasperombaso7@gmail.com",
          "nomineeName": "nik",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "patrick",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "james kabila",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "wamuhu ruth ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wickklifeapollo@gmail.com",
          "nomineeName": "apollo odhiambo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mariansheikhabdi@gmail.com",
          "nomineeName": "yahya derow",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "wafula",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "kioko samy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintonkoikai331@gmail.com",
          "nomineeName": "anakala michael",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "mutiso mwania ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "lentaaya andrea peres ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelkipkirui90@gmail.com",
          "nomineeName": "emmanuel kipkirui ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mugambienock@gmail.com",
          "nomineeName": "nonone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "kiddie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "iusto officiis non i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "karanja mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "mutua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "christinekolol17@gmail.com",
          "nomineeName": "julius ntikoisa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "yvette",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maureen.maina408@gmail.com",
          "nomineeName": "lawrence ojiambo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "broookssteven@gmail.com",
          "nomineeName": "paacal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "carolwanjala8@gmail.com",
          "nomineeName": "null ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "deniss rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": "o",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "pascal otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "franklin kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kianshii3@gmail.com",
          "nomineeName": "eliam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemmyphe@gmail.com",
          "nomineeName": "c. bwibo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rollinsdenis415@gmail.com",
          "nomineeName": "beibo charles",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mugambih600@gmail.com",
          "nomineeName": "luke abayo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "austine wabingwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisuyasitati12@gmail.com",
          "nomineeName": "no one at all",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "kufagio ya tuk ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jturpesio@gmail.com",
          "nomineeName": "julius tikoisa narikae ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "musyoka kitavi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kangetheerick39@gmail.com",
          "nomineeName": "real kimani",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingkelvineinstein@gmail.com",
          "nomineeName": "kisiagi 001",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kipngenobrian56878@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "christian ojiambo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga@gmail.com",
          "nomineeName": "lawrence ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "austine.odhiambo14600@gmail.com",
          "nomineeName": "mbuzi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "non aut ut nulla in ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "mwende sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kennedymwangik20@students.tukenya.ac.ke",
          "nomineeName": "dennis rollins",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kelvinkaruga9628@gmail.com",
          "nomineeName": "tony blair",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oshadrack489@gmail.com",
          "nomineeName": "sharon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmulongo82@students.tukenya.ac.ke",
          "nomineeName": "mutheu faith ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alfiekennie@gmail.com",
          "nomineeName": "antony onyango (tk)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oluochivictor11@gmail.com",
          "nomineeName": "joash ogola",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevina.akello7@gmail.com",
          "nomineeName": "bwibo  charles",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "henry momanyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "augustinebilly2@gmail.coma",
          "nomineeName": "lerosho speaker ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyussuf026@gmail.com",
          "nomineeName": "nabangi wanyonyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "puritysopiato2013@gmail.com",
          "nomineeName": "julias ntikoisa narikae ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimmarion040@gmail.com",
          "nomineeName": "nabangi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "josphatmuroki02@gmail.com",
          "nomineeName": "peter okoth ayuka ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "achieng' otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": "..... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "peter marite ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "ishmael yahya kibaba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "mm",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "dennis rollins ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "musa ali",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "mc'nyangweso peter ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "deborahmuchiri06@gmail.com",
          "nomineeName": "c bwibo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "oguk raphael",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "proident irure ut a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "b",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "ntimama tobiko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "bvbnmvhjknb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryansankui@gmail.com",
          "nomineeName": "julius narikae ntikoisa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "g",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "paulntoyaitaiko@gmail.com",
          "nomineeName": "lenox onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "mulky",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "partetkisai85@gmail.com",
          "nomineeName": "jullius narikae",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kulubilloyd09@gmail.com",
          "nomineeName": "lennox onyango. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvonnewanjiru19@gmail.com",
          "nomineeName": "stanley motinda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "mbuzi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "bwibk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "1"
      }
  ],
  "The Most Innovative and Creative Student of the Year Award": [
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "2749"
      },
      {
        "nominatorEmail": "fj.orifah@icloud.com",
        "nomineeName": "kevin kariuki",
        "totalVotes": "735"
     },
      {
        "nominatorEmail": "kenmwaah@gmail.com",
        "nomineeName": "david onyango",
        "totalVotes": "711"
      },
      {
        "nominatorEmail": "fj.orifah@icloud.com",
        "nomineeName": "francis mwendwa",
        "totalVotes": "324"
     },
      {
          "nominatorEmail": "sambosaid123@gmail.com",
          "nomineeName": "na",
          "totalVotes": "241"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "170"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "168"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "152"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "114"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "46"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "43"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "29"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "26"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "david onyango ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "mikeaiyolah@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "engineer mwendwa",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "voluptas commodi ali",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "kimani687@gmail.com",
          "nomineeName": "m",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "kobe",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "marite",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "peter marite",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "rodneyidi@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "peter",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "carlosabich46@gmail.com",
          "nomineeName": "marite ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "simeon nyakundi",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "leemosesaziz@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "...",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "evans",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "steve jades ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kipchogeeliud@gmail.com",
          "nomineeName": "n. ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "d8991577@gmail.com",
          "nomineeName": "phoebe ngeno",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "u",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "silgho",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "john",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": ".... ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "samwelogechi856@gmail.com",
          "nomineeName": "b",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "zadok",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the most innovative and creative student of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "samson makomele ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "gg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "grantonmburu01@gmail.com",
          "nomineeName": "granton mburu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "maryann",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mcjumadonald36@gmail.com",
          "nomineeName": "patrick",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oshadrack489@gmail.com",
          "nomineeName": "timothy lomunyok",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "t5",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yujonyaga@gmail.com",
          "nomineeName": "engineer mwendwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "kama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "davy kena",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cliffenjugush@gmail.com",
          "nomineeName": "briam",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "ut sint ex mollitia ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "keisy lenon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "wambingwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "calvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "mwende kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "obuyacalvince672@gmail.com",
          "nomineeName": "c",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewanjiku071@gmail.com",
          "nomineeName": "o",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "agola",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "dennis murimi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "brian muinde",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "mutua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "boaz onserii",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "ken mwangi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "kevin kibet",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "granton mburu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "samuel maina",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "sarah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bakutibin@gmail.com",
          "nomineeName": "comrade premium tuk ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "catherinenzuki@students.tukenya.ac.ke",
          "nomineeName": "peter muchina",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "tecla patience ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maureennjoroge46@gmail.com",
          "nomineeName": "henry john",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndirangungu@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "kk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryankiplimo20@gmail.com",
          "nomineeName": "engieer mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue819@gmail.com",
          "nomineeName": "kobe ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "ex autem aut mollit ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "luke evans",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "r",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "luke",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "emanuel githenji",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "peter ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "william ruto",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "jacob juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "kioko mwinz",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hopeshapashina@gmail.com",
          "nomineeName": "4",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vivian02020@gmail.com",
          "nomineeName": "nana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "davidwainainam5@gmail.com",
          "nomineeName": "eng. mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "calvin clein",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "100.hello11@random.com",
          "nomineeName": "comrade premium tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "priscakanini40@gmail.com",
          "nomineeName": "engineering ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okukumarcelingnatius@gmail.com",
          "nomineeName": "g",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "phoebe ng'eno.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "clinton david",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "michael anakala",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "kiema mutiso ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "carlos julyne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "stacy thondi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "patience tecla",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "dante",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "kioko mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nancynyasani12@gmail.com",
          "nomineeName": "n)a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "pascal juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "d",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shailaodour12@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinmwendwa005@gmail.com",
          "nomineeName": "martin kitonga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "boaz ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "kelvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "belinda atieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sabpastels@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "michael obonyo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "mumo sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianmuthara@gmail.com",
          "nomineeName": "not  applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "odiwuorooko@gmail.com",
          "nomineeName": "n.a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "sammy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "mwania mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "alloys okello",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "emmanuel githinji",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "caro cynthia ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimmarion040@gmail.com",
          "nomineeName": "peterson ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omwaizaia@gmail.com",
          "nomineeName": "keneddy mwangi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "ann",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "boina",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "caro tito",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "h",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musilachristine41@gmail.com",
          "nomineeName": "francis mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "evans kimutai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "joy waithera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "karogo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "ghg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "rolex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "one minute man",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "mutia katuku",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "joy brenda wanjagi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "mumo sammy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyamzi290@gmail.com",
          "nomineeName": "deniss rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lydiakimeu2003@gmail.com",
          "nomineeName": "grantone ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kyalocharlesmuthoka1@gmail.com",
          "nomineeName": "engineer ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musilachristine16@gmail.com",
          "nomineeName": "francis mwendwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "muendo waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kianshii3@gmail.com",
          "nomineeName": "timothy olomunyak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "cedric rapando",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "fgh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "mwe de marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "charles kibaki ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david.nate012@gmail.com",
          "nomineeName": "david onyango otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "drislar akale",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithgathoni16@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "alice wambui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "grace mwaura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "mbuzi wa migori",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "emmanuel adika",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "moulin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "tuk premium",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yovanmokaya063@gmail.com",
          "nomineeName": "justino juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nellyokebiro2003@gmail.com",
          "nomineeName": "henry momanyi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "odhiamboa822@gmail.com",
          "nomineeName": "tecla barasa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "creative ministry",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "malei tirati ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshuaonyango023@gmail.com",
          "nomineeName": "victoria wenwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "collinsomukala@gmail.com",
          "nomineeName": "evanson",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "mu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "kioma kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "reiciendis voluptati",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "sqmmy kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "collins kibet kwambai",
          "totalVotes": "1"
      }
  ],
  "The Photographer of the Year Award": [
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "1343"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com.com",
          "nomineeName": "white shadow photography",
          "totalVotes": "1866"
      },
      {
        "nominatorEmail": "marthamuraya806@gmail.com.com",
        "nomineeName": "kenyanza art photography",
        "totalVotes": "755"
      },
      {
        "nominatorEmail": "marthamuraya806@gmail.com.com",
        "nomineeName": "crews photography",
        "totalVotes": "471"
      },
      {
          "nominatorEmail": "grantonmburu01@gmail.com",
          "nomineeName": "na",
          "totalVotes": "227"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "165"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "147"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "122"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "113"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "white shadow photography ",
          "totalVotes": "67"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "45"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "white shadow",
          "totalVotes": "45"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "37"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "32"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "23"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "peter muchina",
          "totalVotes": "18"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "kavana",
          "totalVotes": "12"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "none",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "mlemayian47@gmail.com",
          "nomineeName": "whiteshadow photography ",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "johnojunga7@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "white shadow ",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "were",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "peter muchina ",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "keirantonny@gmail.com",
          "nomineeName": "m",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "evans kimutai",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "fj.orifah@icloud.com",
          "nomineeName": "crew",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "calvince",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "furrystepper@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "onyiegoduke123@gmail.com",
          "nomineeName": "joshua gikemi ragira",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "leon",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "shapashinamirriam@gmail.com",
          "nomineeName": "..",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "sam were",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "nyamburajudy@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": "t",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "okothjohnomondi@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "crewsphotography",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "cliffenjugush@gmail.com",
          "nomineeName": "mwangi",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "calvin ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "muchina",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "were the grapher",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "feixbett8650@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "whiteshadow",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "kennedy ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "calvince obuzietter",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ritasue167@gmail.com",
          "nomineeName": "crews",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "osonkoone@gmail.com",
          "nomineeName": "david natembea",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "mbuzi wa migori",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "kenyanza",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "victoronyango336@gmail.com",
          "nomineeName": "nip",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "y",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "muchina peter ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mcjumadonald36@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "lucasochieng007@gmail.com",
          "nomineeName": "shadow ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshuaadika08@gmail.com",
          "nomineeName": "ken photography ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kennymwas690@gmail.com",
          "nomineeName": "kenyanza ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kelvinkaruga9628@gmail.com",
          "nomineeName": "isaac mutethia",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "musundi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "dawn ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "ui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "mumo sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "kk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "kava",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "janetchenet@gmail.com",
          "nomineeName": ". not applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "antoniah nyawino ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "jane wamboka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "mi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "no one at all",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "tabitha mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "patiencetecla2002@gmail.com",
          "nomineeName": "kimutai evans",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "white shodow",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "?",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "kelvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "sammy keshe ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "kalonzo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oluochivictor11@gmail.com",
          "nomineeName": "david kiragu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "hassan mohammed ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maurinekimathi@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "ben",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "austinekimurgor@gmail.com",
          "nomineeName": "calvo white shadow photography ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "kiokobsammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yemix36@gmail.com",
          "nomineeName": "white shadows photography",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "kimani",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "omosh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "kilumbu mweene",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "broookssteven@gmail.com",
          "nomineeName": "mutua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "b32160432021@students.uonbi.ac.ke",
          "nomineeName": "calvince obuya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dephneyann@gmail.com",
          "nomineeName": "not applicable n",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "mary",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "demo1@website.com",
          "nomineeName": "were photography ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "kamuri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "dinah wandiri ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "motinfa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "essykinjos689@gmail.com",
          "nomineeName": "b",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "ghh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "mwania mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "mega pixels",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "davidmutua@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "kioko mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sabpastels@gmail.com",
          "nomineeName": "ngui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the photographer of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "muchina peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Machariacollins79@gmail.com",
          "nomineeName": "not  applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bostoneochieng@gmail.com",
          "nomineeName": " white shadow photography",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "timothylomunyak6@gmail.com",
          "nomineeName": "michael anakala",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "gerald",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kangetheerick39@gmail.com",
          "nomineeName": "kenyanza arts",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "z",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "alan ryan",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "elizabethanyungu@gmail.com",
          "nomineeName": "navas",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "pascal jumah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "admin12@website.com",
          "nomineeName": " n/a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjisharon2@gmail.com",
          "nomineeName": "white ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okukumarcelingnatius@gmail.com",
          "nomineeName": "g",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mutisyad678@gmail.com",
          "nomineeName": "gerad wellem",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "o",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "weremeshack2003@gmail.com",
          "nomineeName": "anakala michael ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "kalekye mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyussuf026@gmail.com",
          "nomineeName": "raphael muigai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "calvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "christopher mutunga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "dante",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "centrinejuman@gmail.com",
          "nomineeName": " ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewanjiku071@gmail.com",
          "nomineeName": "v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "lucky jones",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": "shadow",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "were philip ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryayanoloo321@gmail.com",
          "nomineeName": "dennis mitaru",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fatmabakari@gmail.com",
          "nomineeName": "nay",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "kennedy kamau mwangi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wycliffemwaniki354@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "meshackkariuki@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muthamimathew@gmail.com",
          "nomineeName": "shadow phography",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david.nate012@gmail.com",
          "nomineeName": "lion",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvonnewanjiru19@gmail.com",
          "nomineeName": "warren",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "pinton nyauke",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimmarion040@gmail.com",
          "nomineeName": "marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyamwayajoseph48@students.tukenya.ac.ke",
          "nomineeName": "brayan kenyanza",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "info8@domain.com",
          "nomineeName": "white3 shadow",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "collins agalomba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "gerald wellem",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "f",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryankiplimo20@gmail.com",
          "nomineeName": "the",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "dancan njuguna",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "mwende mweene ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "shirim samson",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "najudec@gmail.com",
          "nomineeName": "crews photography",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "priscillahnyawino@gmail.com",
          "nomineeName": "whiteshadows",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "amos ngurule",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "fotomoto",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "bill gates ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rollinsdenis415@gmail.com",
          "nomineeName": "wakadinali",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "mary mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "nthenya mwinzi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "tyg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pascalkemboi52@gmail.com",
          "nomineeName": "kim",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yovanmokaya063@gmail.com",
          "nomineeName": "micah mitoko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Faithfevoh@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielgilbert642@gmail.com",
          "nomineeName": "joshua gikemi ragira ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hopeshapashina@gmail.com",
          "nomineeName": "2",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshuanyameto200@gmail.com",
          "nomineeName": "evans kimutai ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "tracy seredi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "pater ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "david otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "kimani ichungwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "evance kimutai ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": "..... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "davekiraguk22@gmail.com",
          "nomineeName": "kennedy mwangi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "kilonzo muli",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "kamau munywa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "q",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "briankipkoech865@gmail.com",
          "nomineeName": "justin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "bh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      }
  ],
  "The Poet and Song Writer of the Year Award": [
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "timothy olumunyak",
          "totalVotes": "1840"
      },
      {
        "nominatorEmail": "simmic997@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "1366"
      },
      {
        "nominatorEmail": "raykhay53@gmail.com",
        "nomineeName": "ray junior orek ",
        "totalVotes": "708"
      },
      {
        "nominatorEmail": "raykhay53@gmail.com",
        "nomineeName": "yovan manoa",
        "totalVotes": "521"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "na",
          "totalVotes": "204"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "165"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "150"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "131"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "115"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "47"
      },
      {
          "nominatorEmail": "ochiengprvvuy@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "42"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "34"
      },
      {
          "nominatorEmail": "chrispinewameyo@gmail.com",
          "nomineeName": "timothy olumunyak ",
          "totalVotes": "28"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "timothy olumunyak ",
          "totalVotes": "24"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "timothy lomunyak",
          "totalVotes": "24"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "22"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "timothy olomunyak",
          "totalVotes": "21"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "18"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "clintonkoikai331@gmail.com",
          "nomineeName": "timothy lomunyak ",
          "totalVotes": "13"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "nyancheray@gmail.com",
          "nomineeName": "austine wambingwa",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "mikeaiyolah@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "daisymueni52@gmail.com",
          "nomineeName": "olomunyak timothy",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "najudec@gmail.com",
          "nomineeName": "austin",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "bryankiplimo20@gmail.com",
          "nomineeName": "wambingwa austine",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "quo excepturi consec",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "timothy olomunyak ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "alvinkutialo@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "adikacindy06@gmail.com",
          "nomineeName": "timothy lomunyaak",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "wambingwa austin",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "wambuaryan97@gmail.com",
          "nomineeName": " timothy olumunyak",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "siza",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ekuria@studentsforliberty.org",
          "nomineeName": "mwende",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "timothy ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mayamwikali0067@gmail.com",
          "nomineeName": "b",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "marionlokusi@gmail.com",
          "nomineeName": "ray junior ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "nyancherayvone@gmail.com",
          "nomineeName": "austine wambingwa ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ochiengjoy12@gmail.com",
          "nomineeName": "austin wambingwa",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "perismuthoni480@gmail.com",
          "nomineeName": "austine wabingwa",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "nimooh2018@gmail.com",
          "nomineeName": "ray junior orek",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "patrick",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "carlosabich46@gmail.com",
          "nomineeName": "evanson ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "wambigwa austin ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "tim",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "davidwainainam5@gmail.com",
          "nomineeName": "austin kiai",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "austine",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "...",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "john isidore",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "otienonoran45@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "cesswanjiku468@gmail.com",
          "nomineeName": "timothy olumunak",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "yovan manoa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "odhiamboa822@gmail.com",
          "nomineeName": "winfrey",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshuaadika08@gmail.com",
          "nomineeName": "olokunyaak timothy ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "wanjikucecilia207@gmail.com",
          "nomineeName": "timothy olumunak ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "vivian achieng",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yujonyaga@gmail.com",
          "nomineeName": "rigobert song",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "peterson karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okukumarcelingnatius@gmail.com",
          "nomineeName": "o",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "luckykathoki@gmail.com",
          "nomineeName": "justine wambingwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "julyen carlos",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "chagara vincent ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "joshua onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "rita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "isidore ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "monicah ngene ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimmarion040@gmail.com",
          "nomineeName": "peter ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jason@tando.me",
          "nomineeName": "dennis",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sabpastels@gmail.com",
          "nomineeName": "kingi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "olala",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shapashinamirriam@gmail.com",
          "nomineeName": "olomunyak ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "kioko sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mcjumadonald36@gmail.com",
          "nomineeName": "mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "faith mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "mark tony ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "mwikali",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanueljones5820@gmail.com",
          "nomineeName": "emmanuel kiptoo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "olomunyak timoth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "ayiega odede",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "austine ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "brian muendo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jonezohuru@gmail.com",
          "nomineeName": "teddy bruno onyango ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oludheann@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "peter son karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "denis ct",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brianwefwila@gmail.com",
          "nomineeName": "olomunyack timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "simiyu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "fde",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "zennahkobungu@gmail.com",
          "nomineeName": "teddy bruno onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "nonini",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the poet and song writer of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "trizah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "timothy olomunyak.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "kiema",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "mi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojeff1502@gmail.com",
          "nomineeName": "lb letitbe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "john wanjohi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mnashepmk@gmail.com",
          "nomineeName": "timothy olomunysk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nafulairene73@gmail.com",
          "nomineeName": "wambingwa austin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "antoniah nyawino ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okothjohnomondi@gmail.com",
          "nomineeName": "mwendwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lavietabbie@gmail.com",
          "nomineeName": "olomunyak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "ivy moraa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": "..... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue167@gmail.com",
          "nomineeName": "fayy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musilidinahmwikali@gmail.com",
          "nomineeName": "elam kiama ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "charity ngilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "maiores qui non even",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke5@gmail.com",
          "nomineeName": "khiddie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "w",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jobjason338@gmail.com",
          "nomineeName": "isidore",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "bradley ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi11@gmail.com",
          "nomineeName": "nak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue819@gmail.com",
          "nomineeName": "leila",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "kile",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "mwende sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "mark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "tazama the poet",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "steveochieng@students.tukenya.ac.ke",
          "nomineeName": "austin kin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "u",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "austin kin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dancangichimu@gmail.com",
          "nomineeName": "timothy. namunyak ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "kilonzo kiongora",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "nabangi wanyonyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "stacy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithgathoni16@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "y",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jessicahoprah@gmail.com",
          "nomineeName": "teddy onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "anb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "thj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "bj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "soloh the poet",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "priscah mwinzi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david.nate012@gmail.com",
          "nomineeName": "omunyak timothy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vivian02020@gmail.com",
          "nomineeName": "ns",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "gladys njuguna",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "paswa@sironka.com",
          "nomineeName": "lomunyak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "kioko muli",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "sophie deveroue",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "kk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercychelangat@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "ian amukoya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "austin wambingwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "kobe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "augustinebilly2@gmail.coma",
          "nomineeName": "cavin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "vonstone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "kiddie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "githinji",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no  any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "t",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "dolorem deserunt sed",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "lemayian parity ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tommyfrankprotich02@gmail.com",
          "nomineeName": "teddy bruno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "collins asiga ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "wambingwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "everlasting yaunde ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "ivy gathoni",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "fara mahalo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nzomoambiel001463@gmail.com",
          "nomineeName": "nana ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "evanson kamuri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "kamau ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "gg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "mwemde sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "collinsomukala@gmail.com",
          "nomineeName": "manu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "deleniti minus quo v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "timothy lomnyak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "kioko mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "abigail kimondiu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "kimawachi the artist",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gatharapeter@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lydiakimeu2003@gmail.com",
          "nomineeName": "lamunyak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mumeitahenry@gmail.com",
          "nomineeName": "olomunyak tomothy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "ann rono",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alexiaclaire96@gmail.com",
          "nomineeName": "timothy ilmunak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithoduor87@gmail.com",
          "nomineeName": "joyce cherop",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "aizomanu0@gmail.com",
          "nomineeName": "clomunyal timothy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "amomutish2@gmail.com",
          "nomineeName": "lomunyak timothy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "soloh the poet ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "nancy macharia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "drama club",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "kiluta",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelkahinga4@gmail.com",
          "nomineeName": "olumanyak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmulongo82@students.tukenya.ac.ke",
          "nomineeName": "timothy olumonyo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "no one at all",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingsleymwangi085@gmail.com",
          "nomineeName": "teddy bruno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rotichjustus2020@gmail.com",
          "nomineeName": "drama club members ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "samson makomele ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "kelvin kariuki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eliaswalela8@gmail.com",
          "nomineeName": "olomonyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oshadrack489@gmail.com",
          "nomineeName": "timothy lomunyok ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "ann",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hopeshapashina@gmail.com",
          "nomineeName": ",",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "susanmutama90@gmail.com",
          "nomineeName": "kama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kunduwanjala76@gmail.com",
          "nomineeName": "olomunyak timothy.",
          "totalVotes": "1"
      }
  ],
  "The President's Commendation Award": [
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "2647"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "joshua praise",
          "totalVotes": "1850"
      },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "na",
          "totalVotes": "264"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "168"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "161"
      },
      {
          "nominatorEmail": "kimani687@gmail.com",
          "nomineeName": "n",
          "totalVotes": "146"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "108"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "46"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "39"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "26"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "26"
      },
      {
          "nominatorEmail": "jacsonkiok3111@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "17"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "nabangi",
          "totalVotes": "17"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "joshua praise ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "none",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "lawrence ojiambo",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "optio deserunt sint",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "nyamzi290@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "..",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "lawrence ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "najudec@gmail.com",
          "nomineeName": "lawrence",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "johnominde00@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "davidlukar16@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "nabangi wanyonyi",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "lucy.mutioj@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "malei tirati",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "g",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kisuyasitati12@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "liliankemboi@gmail.com",
          "nomineeName": "pas",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "beatricewanjue98@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "y",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "evans",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "malei tirati ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "mutua",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kyalocharlesmuthoka1@gmail.com",
          "nomineeName": "joshua ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "obedomwenga@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "nabangi ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "marymwanzia34@gmail.com",
          "nomineeName": "evance",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "me",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "felixmakambo0034@gmail.com",
          "nomineeName": "b",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "musilidinahmwikali@gmail.com",
          "nomineeName": "lawrence ojiambo ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "timothy lomunyak",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "muchoki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "weremeshack2003@gmail.com",
          "nomineeName": "james oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyussuf026@gmail.com",
          "nomineeName": "tecla",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "nthenya mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanueljones5820@gmail.com",
          "nomineeName": "magdaline mwita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "akaka wickliffe ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "patrick ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "gf",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "wafula",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "beatrice ne ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "wamdy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "vincent ngala",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjisharon2@gmail.com",
          "nomineeName": "austine",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "rolince",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "kelvin mwicha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joywanjiku@gmail.com",
          "nomineeName": "lukas ochieng",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "kamau mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "britneymadline@gmail.com",
          "nomineeName": "ayub aloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "billi augustine ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the president's commendation award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "kamu nabangi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "peter tosh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "kevin ogondi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "psalmskit@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "vera sidika",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "nabangi evans wanyonyi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maureennjoroge46@gmail.com",
          "nomineeName": "joshua maua hezekiah ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "mutua vc",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "elit ut soluta exce",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "deniss rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayrashahalla@gmail.com",
          "nomineeName": "dottie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "evans ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "kioko mweene ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kennymwas690@gmail.com",
          "nomineeName": "kirera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "maryann",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wandirilydia689@gmail.com",
          "nomineeName": "pase",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martin098@gmail.com",
          "nomineeName": "c",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "kioko mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "jackson toriki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "muema mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "d8991577@gmail.com",
          "nomineeName": "oloo owiti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "immaculatewangu@students.tukenya.ac.ke",
          "nomineeName": "nabiangi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muliurbanus36@gmail.com",
          "nomineeName": "peter kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "steve musembi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "matukuveronica1@gmail.com",
          "nomineeName": "kirera michoki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "mutua ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "arnold",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingkelvineinstein@gmail.com",
          "nomineeName": "mbuzi wa migori",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "antoniah nyawino",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "kibet",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "tony blair",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sethotieno45@g.mail.com",
          "nomineeName": "sethotieno45@g.mail.com",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "r",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "ben masila",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "salmon ondiek",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maiyok002@gmail.com",
          "nomineeName": "mai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "peter mburu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "ngilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "mercy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "maurice ouko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "adrian nyaga ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "id atque culpa ipsa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamonyangi66@gmail.com",
          "nomineeName": "n/v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yujonyaga@gmail.com",
          "nomineeName": "scorpy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "beatricewekhe3@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "kelvin opiyo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "titus",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "mwende sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "sammy kesho",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "akaka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienoenock780@gmail.com",
          "nomineeName": "enock otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "hon dennis rollins",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jacintamatheu@gmail.com",
          "nomineeName": " not applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "mutia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "ian kiprono ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "samyy muendo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "stephen magoka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kulubilloyd09@gmail.com",
          "nomineeName": "nabangi. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "phoebe ng'eno.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "simon.w.saruni@gmail.com",
          "nomineeName": "simon saruni ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "isaac kiagiri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "abdisaid868@gmail.com",
          "nomineeName": " na",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "fgu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "henry momanyi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "rollins ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "peter karanja ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "ngala mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "roline simiyu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "lee moses",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "twainmigenimark@gmail.com",
          "nomineeName": "nip",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "kelvin kaloki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "kelvin lepile",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "has",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sabpastels@gmail.com",
          "nomineeName": "nabangi waonyonyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinnyaga965@gmail.com",
          "nomineeName": "cheya is cheya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "hb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "kingi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "m",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "david otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "moses",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "carolwanjala8@gmail.com",
          "nomineeName": "null ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "john muchoki ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue819@gmail.com",
          "nomineeName": "grey",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "enim quia lorem labo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "pascal juma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "odhiamboa822@gmail.com",
          "nomineeName": "gershom njogu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "hhh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "palesarita9@gmail.com",
          "nomineeName": "laurence",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Johnmunene@gmail.com",
          "nomineeName": "nonr",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "ian kiprono",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "nyanchama ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": "..... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "brian mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "elizabethanyungu@gmail.com",
          "nomineeName": "dominic owino",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "kanyau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "h",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelkipkirui90@gmail.com",
          "nomineeName": "joshua prince ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "shakabum",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "alphonce kamtix",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Jumajoshua101@gmail.com",
          "nomineeName": "ñ/a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "austine.odhiambo14600@gmail.com",
          "nomineeName": "winstone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "ekiru ekamais",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "aizomanu0@gmail.com",
          "nomineeName": "t",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "nabangi wanyonyi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "melichizedek amasai",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "info6@domain.com",
          "nomineeName": "joshua",
          "totalVotes": "1"
      }
  ],
  "The PWDs Advocate of the Year Award": [
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "leila",
          "totalVotes": "1853"
      },
      {
        "nominatorEmail": "simmic997@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "1211"
      },
      {
        "nominatorEmail": "njerisharon405@gmail.com",
        "nomineeName": "albert ooko",
        "totalVotes": "1014"
      },
      {
        "nominatorEmail": "martineabwao2003@gmail.com",
        "nomineeName": "asumwa amwilu",
        "totalVotes": "419"
     },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "na",
          "totalVotes": "265"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "174"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "166"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "150"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "113"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "47"
      },
      {
          "nominatorEmail": "ochiengprvvuy@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "41"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "leila abdi",
          "totalVotes": "36"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "30"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "25"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "bevonateka@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "none",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "qui dolores quasi si",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "kiambambondo@gmail.com",
          "nomineeName": "i'm",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "g",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "ekuria@studentsforliberty.org",
          "nomineeName": "peter",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "kama",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "achieng'maureen@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "non",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "josephkingili@gmail.com",
          "nomineeName": "m",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "wamuhu",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "d",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "ruth",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "t",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "rith",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hamphreymaina@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "leila ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nyamburaemma01@gmail.com",
          "nomineeName": "albert ooko ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "keziahnjeri34@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hadasakibet@gmail.com",
          "nomineeName": "mercy",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "no one at all",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shadrackopiyo94@gmail.com",
          "nomineeName": "alber ooko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "ere",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "hopw",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "weremeshack2003@gmail.com",
          "nomineeName": "james oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "muteti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nafulairene73@gmail.com",
          "nomineeName": "leila abdi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "kelvin makau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "kelvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "et velit qui incidun",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "aloograce800@gmail.com",
          "nomineeName": "n/s",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "chris",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi23@gmail.com",
          "nomineeName": "na.na",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "fred otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jerutojael896@gmail.com",
          "nomineeName": "albet ooko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "mwende sammy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "ann",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "mose 17",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mugambienock@gmail.com",
          "nomineeName": "noone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "whee",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "lewis mose ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hv",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "yvonne nyanchera ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "hildah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mahigajoyce@gmail.com",
          "nomineeName": "nyaga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "molestiae ut aut ver",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "kelele takatifu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "waititu mwenyewe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "awilo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "john muriethi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "bfr",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "moses musasula",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "blank",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "abduba2001@gmail.com",
          "nomineeName": "leila - pwd rep",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "abigail kimondiu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "helen kwamboka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "nehemiah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the pwds advocate of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "peter marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "charity mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mcjumadonald36@gmail.com",
          "nomineeName": "karen",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "evanson karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "nichollas",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "mimo waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jason@tando.me",
          "nomineeName": "brian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "beatricewanjue98@gmail.com",
          "nomineeName": "mone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "luckykathoki@gmail.com",
          "nomineeName": "leila abdo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "mwende sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "pascal juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "marite muendo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "obonyo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "ruth njahia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue819@gmail.com",
          "nomineeName": "grace",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "mark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "kiokobmwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "kalvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "mwania juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "mwende muteti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "kinya karen ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "martha ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "evanceouma277@gmail.com",
          "nomineeName": "brother robert",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "d8991577@gmail.com",
          "nomineeName": "sijui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "eveniet esse fugia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sonnick993@gmail.com",
          "nomineeName": "david natembea",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "martin otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "kelsy lenon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "hg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "fred machoka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "habiba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "emory ruth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "elizabethochanyo@gmail.com",
          "nomineeName": "leila abdi hassan",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "david onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "cjui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "dr ochieng",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "wangui ann ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "abigail kimondiu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "kileskee",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "okukumarcelingnatius@gmail.com",
          "nomineeName": "y",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "q",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "mwende mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "peter karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kipronomanuel670@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "peresianamina@gmail.com",
          "nomineeName": "leyla abdi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "muende sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "lewis",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "fridah adongo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "kavana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onlygodcanjudgme@gmail.com",
          "nomineeName": "outdoor games sports person of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jobjason338@gmail.com",
          "nomineeName": "nq",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "john",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "ochieng ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "sijui huyo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kibetvictor2005@gmail.com",
          "nomineeName": "n_a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "john manyeki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "bb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "steve musembi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "broookssteven@gmail.com",
          "nomineeName": "kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndirangungu@gmail.com",
          "nomineeName": "nip",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "peterson karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "muta katuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "kimani",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Jasminthuo@gmail.com",
          "nomineeName": "not  applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "stanley motinda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "joyline jebet",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "eunice ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "steveochieng@students.tukenya.ac.ke",
          "nomineeName": "mose17",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "advocacy tuk cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "kilinga mweene",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "kelvin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "susan kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "phelix otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": ".....",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": "5",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kisalibildadlidambitsa@gmail.com",
          "nomineeName": "mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rigathigashagua@gmail.com",
          "nomineeName": "n. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "joy victory",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "behehehe",
          "totalVotes": "1"
      }
  ],
  "The Service Provider of the Year Award": [
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "tecla barasa",
          "totalVotes": "1852"
      },
      {
        "nominatorEmail": "simmic997@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "1052"
      },
      {
        "nominatorEmail": "kenmwaah@gmail.com",
        "nomineeName": "rolex omondi",
        "totalVotes": "855"
      },
      {
        "nominatorEmail": "kenmwaah@gmail.com",
        "nomineeName": "ladslaus adika",
        "totalVotes": "701"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "na",
          "totalVotes": "247"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "166"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "156"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "148"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "111"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "46"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "42"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "30"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "david kingi",
          "totalVotes": "23"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "tecla",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "mosesokal94@gmail.com",
          "nomineeName": "tecla baraza",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "gloriousmukai@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "none",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "denno",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "kiambambondo@gmail.com",
          "nomineeName": "m",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "ephraimlandis@gmail.com",
          "nomineeName": "tecla baraza ",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "mutisyacline@gmail.com",
          "nomineeName": "tecla barasa ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "ruthmumu198@gmail.com",
          "nomineeName": "nabangi",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "praesentium dolores ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "david kingi ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "jamesotieno@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "main canteen ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "nafulairene73@gmail.com",
          "nomineeName": "deno",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "main canteen",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "leemosesaziz@gmail.com",
          "nomineeName": "patience tecla",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "alexancarley@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "tecla patience ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "patiencetecla2002@gmail.com",
          "nomineeName": "barasa patience tecla",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "sethmusyoka2021@gmail.com",
          "nomineeName": "tecla patience",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "douglasgwangari@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "f",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mutisyad678@gmail.com",
          "nomineeName": "kingi david ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": "b",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "allanokinyo@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "faithgathoni16@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "mwende",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "ruth",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "t",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "tecla patience barasa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "carlosabich46@gmail.com",
          "nomineeName": "onyango",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "broookssteven@gmail.com",
          "nomineeName": "musau",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "nelsonwwiseman@gmail.com",
          "nomineeName": "drama club",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "enrkiarithagikonyo90@gmail.com",
          "nomineeName": "anne mugure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "osurulawrence@gmail.com",
          "nomineeName": "patience tecla ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinnyaga965@gmail.com",
          "nomineeName": "dellcom cyber",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "hakuna ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "satuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "samuel murage",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "redbull restaurant ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "r",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chayuronald@gmail.com",
          "nomineeName": "tecla ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "dellcom cyber j block",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacomondi@gmail.com",
          "nomineeName": "no one at all",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "mwende mutemi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "briankipkoech865@gmail.com",
          "nomineeName": "gideon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "mwania sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "muasya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "colins omondi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "kk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kemboikelly852@gmail.com",
          "nomineeName": "the poet and song writer of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "kamau ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "wonder hope",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "kiema waingo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "mwende sammy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "sytam technologies",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmulongo82@students.tukenya.ac.ke",
          "nomineeName": "mark andika",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "barbraomite@gmail.com",
          "nomineeName": "nan",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "charles manza",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "calvin ambityo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jason@tando.me",
          "nomineeName": "kama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue819@gmail.com",
          "nomineeName": "leila abdi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "faith wangila",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "john",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "tuk cu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "onesmus kuria",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "collinsomukala@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "chris kirubi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "austine juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "patrick",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lilphiljeffrey@gmail.com",
          "nomineeName": "safaricom",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "hospitality ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "josphatmuroki02@gmail.com",
          "nomineeName": "benedict wambua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "students mess",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "samuel murage ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "prime mark stationeries ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "joshua mark adika ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mail4@demo.com",
          "nomineeName": "teclaa baraza",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "bezwe ekelebe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "mwende sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kipkemoisimon@gmail.com",
          "nomineeName": " not applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "fvjk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "nulla qui dignissimo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "obrenlourmex@gmail.com",
          "nomineeName": "safaricom ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "whiclif akaka ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "mj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "elvis ouma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "betty",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cynthianamaromew1@gmail.com",
          "nomineeName": "kingi david",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "ishmael yahya kibaba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "shop 3",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "thomevans62@gmail.com",
          "nomineeName": "tecala barasa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "millie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "kama kamtix",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "michael ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "aliqua vitae accusa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "achieng grace ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "andrea ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "trizadell mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "shop8",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "suleiman",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "denno (shop 1)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "jk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "victordavidmuinamu@gmail.com",
          "nomineeName": "teclar",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvonnewanjiru19@gmail.com",
          "nomineeName": "cyber",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "t square ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ekuria@studentsforliberty.org",
          "nomineeName": "brian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "ann mugure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "kioko muteti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "faith",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "shop 11",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lewisomondi@gmail.com",
          "nomineeName": "passs",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "h",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jobjason338@gmail.com",
          "nomineeName": "kingi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "jj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Tabithachep12@gmail.com",
          "nomineeName": "simon macharia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharonyandiwa973@gmail.com",
          "nomineeName": "tuk cu instruments",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "mercy wamboi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "harrison mugambi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "ken maria",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "mwemde sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the service provider of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "dopoi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "grees",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "vincent chagar",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "darmond",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "lennox onyango ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "furrystepper@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "meshackkariuki@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "olomunyak timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "starlink",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "kamaj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "pihdf",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "ruf",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "telcom",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "rotarat",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "cjui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "samson okeyo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "alias voluptatibus r",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "linetgakii20@gmail.com",
          "nomineeName": "patience tecla barasa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "service cyber tuk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "kelvin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kianshii3@gmail.com",
          "nomineeName": "prime mark stationary ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oluochivictor11@gmail.com",
          "nomineeName": "joshua mark ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onlygodcanjudgme@gmail.com",
          "nomineeName": "outdoor games sports person of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "kamtix clearners",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marknderi@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bmwaura233@gmail.com",
          "nomineeName": "passp",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oludheann@gmail.com",
          "nomineeName": "no e",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "safaris ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "my lord",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "jeff",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "alice mwenyewe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "cyber ",
          "totalVotes": "1"
      }
  ],
  "The Student Leader of the Year Award": [
      {
        "nominatorEmail": "BENARDBSR@STUDENTS.TUKENYA.AC.KE",
        "nomineeName": "peter marite",
        "totalVotes": "1235"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "peter kanyua",
          "totalVotes": "1038"
      },
      {
        "nominatorEmail": "peresianamina@gmail.com",
        "nomineeName": "yvonne nyanchera",
        "totalVotes": "1019"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "pascal juma",
          "totalVotes": "919"
      },
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "285"
      },
      {
          "nominatorEmail": "grantonmburu01@gmail.com",
          "nomineeName": "na",
          "totalVotes": "179"
      },
      {
          "nominatorEmail": "oderaisaack@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "165"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "n",
          "totalVotes": "129"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "x",
          "totalVotes": "125"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "110"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "43"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "36"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "peter kanyua ",
          "totalVotes": "31"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "27"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "denis tonui ",
          "totalVotes": "26"
      },
      {
          "nominatorEmail": "brianokello@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "jacsonkiok3111@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "15"
      },
      {
          "nominatorEmail": "marionlokusi@gmail.com",
          "nomineeName": "yvone nyanchera",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "info7@domain.com",
          "nomineeName": "elam kiama ",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "Ojwangcynthia5@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "14"
      },
      
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "13"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "none",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "nabangi",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "wanguingugi2003@gmail.com",
          "nomineeName": "sherline wambui nyambura",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "musilidinahmwikali@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "Chizeboy4@gmail.com",
          "nomineeName": "pascal juma ",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "atienoflojo26@gmail.com",
          "nomineeName": "yvonne nyanchera ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "collinsomukala@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "portiakeuya@gmail.com",
          "nomineeName": "sherline wambui nyambura ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "ben masila",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "raykhay53@gmail.com",
          "nomineeName": "paskal juma",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "rem dignissimos dolo",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "kiambambondo@gmail.com",
          "nomineeName": "dennis tonui ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "dennis tonui",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "denis tonui",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "peter kanyi",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "ruth wamuhu",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "nyancheray@gmail.com",
          "nomineeName": "yvone nyanchera ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "peter marite ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "lawrence ojiambo",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "keilvo@mail.com",
          "nomineeName": "peter kanywa ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "shapashinamirriam@gmail.com",
          "nomineeName": "..",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "gtessnyokabi7@gmail.com",
          "nomineeName": "kevin kariuki ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "joel ojuka",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "judithkaimenyi80@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Josephkingori@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "josephkingili@gmail.com",
          "nomineeName": "denis",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "abduba2001@gmail.com",
          "nomineeName": "ishmael kibaba",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "kanyua",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "johnokoth990@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kitoer66@gmail.com",
          "nomineeName": "lentaaya andrea",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "allanrayian96@gmail.com",
          "nomineeName": "bernard masila",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "ruth",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "makoriadvocacy@gmail.com",
          "nomineeName": "not as ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mohamedyusufsama@gmail.com",
          "nomineeName": "ismael kibaba",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "stanleywanjohi12183@gmail.com",
          "nomineeName": "andrea lentaaya",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "karanjamungai35@gmail.com",
          "nomineeName": "sherline nyambura",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "wekesa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "t",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "agnescherono@tukenya.ac.ke",
          "nomineeName": "not applicable.",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "tamesmy177@gmail.com",
          "nomineeName": "peter kanywa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joywanjiku@gmail.com",
          "nomineeName": "peter kinyua",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "h",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "kioko mwende",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "odhiamboa822@gmail.com",
          "nomineeName": "millie kigweru",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "augustinebilly2@gmail.coma",
          "nomineeName": "wamuhu",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kanjarebecca50@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "maureen.maina408@gmail.com",
          "nomineeName": "evance",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "i",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "nabangi wanyonyi",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mosesgathungu99@gmail.com",
          "nomineeName": "m",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "kioko mwania ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanueljones5820@gmail.com",
          "nomineeName": "mark ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingazariah96@gmail.com",
          "nomineeName": "juma pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alehmalia@gmail.com",
          "nomineeName": "ismail kibaba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "muema mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "emekwi caleb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "noreply5@sample.com",
          "nomineeName": "millie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mghoimaryanne3@gmail.com",
          "nomineeName": "yvonne nyanchira",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "kioko mwemde",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngajohn81@gmail.com",
          "nomineeName": "john ng'ang'a gathundia ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "abdileila27@gmail.com",
          "nomineeName": "kiddle",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "neemamwaura30@gmail.com",
          "nomineeName": "evance ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "brian chira",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rueprecious15@gmail.com",
          "nomineeName": "yvone nyachera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kennymwas690@gmail.com",
          "nomineeName": "andrea lentaaya ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryayanoloo321@gmail.com",
          "nomineeName": "francis mwendwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cliffenjugush@gmail.com",
          "nomineeName": "kama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wesochienga@gmail.com",
          "nomineeName": "mr timothy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "margaret",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "briankipkoech865@gmail.com",
          "nomineeName": "akaka wycliffe ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mugambih600@gmail.com",
          "nomineeName": "peter  kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sethotieno45@g.mail.com",
          "nomineeName": "sethotieno45@g.mail.com",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "vostone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "kelvin kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangodavid655@gmail.com",
          "nomineeName": "andreya lantana ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi9@gmail.com",
          "nomineeName": "nan",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "ojiambo ochieng ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "perfect muendo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngachageoffrey@gmail.com",
          "nomineeName": "shaleen wambui nyambura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "ohf",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "emannuel sampeke",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "maurice otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanyoikecollins25@gmail.com",
          "nomineeName": "sharleen nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ivanleaky22@gmail.commusa",
          "nomineeName": "musa lee",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "andatibrian099@gmail.com",
          "nomineeName": "zenah oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "elvis",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "moses mwangi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hildahnekesa822@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jturpesio@gmail.com",
          "nomineeName": "julius ntikoisa narikae ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianwangombe4@gmail.com",
          "nomineeName": "benard masila ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "marcel okuku",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "arnoldnyams@gmail.com",
          "nomineeName": "nal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sentukimayo@yahoo.com",
          "nomineeName": "hon. peter marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "nabangi alex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chebetterrytonui@gmail.com",
          "nomineeName": "p.kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "ian kiprono ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "zacharia chege ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "david otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "b.muthama105@gmail.com",
          "nomineeName": "yvonne nyancherra ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "nelly",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lilphiljeffrey@gmail.com",
          "nomineeName": "teddy odhiambo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "paacal juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "plurujackson1998@gmail.com",
          "nomineeName": "denise tonui ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kunduwanjala76@gmail.com",
          "nomineeName": "victor apicha ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kulubilloyd09@gmail.com",
          "nomineeName": "yvonne nyanchera. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamonyangi66@gmail.com",
          "nomineeName": "n/v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "thomas kingori",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "irerieric531@gmail.com",
          "nomineeName": "d tonui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "simon.w.saruni@gmail.com",
          "nomineeName": "simon saruni ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshuaonyango023@gmail.com",
          "nomineeName": "leshoo emmanuel ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omwaizaia@gmail.com",
          "nomineeName": "andrea lentaaya perez",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "evanceouma277@gmail.com",
          "nomineeName": "tonui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kevina.akello7@gmail.com",
          "nomineeName": "peter kanyua (pk)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "patrick",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "moses dikir ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "vice chairman ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "done",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kianshii3@gmail.com",
          "nomineeName": "eliam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kangetheerick39@gmail.com",
          "nomineeName": "leentaya andrea peres",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeremymueni@gmail.com",
          "nomineeName": "ivyonne nyanchera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "lentaaya andrea peres ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oukoj852@gmail.com",
          "nomineeName": "mo one ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sospeterokothmuga@gmail.com",
          "nomineeName": "elphas aduwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oshadrack489@gmail.com",
          "nomineeName": "sharon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mutisyad678@gmail.com",
          "nomineeName": "yvonne nyachera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "dennis",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": "... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "moses mwituma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmonari042@gmail.com",
          "nomineeName": "oguk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "rerum nam et omnis v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jeffmutua081@gmail.com",
          "nomineeName": "peter kanyua.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "kanyua ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "esthermutindis@gmail.com",
          "nomineeName": "nip",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "edith mwangi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "wamuhu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "robert nyang ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Morris.mm294@gmail.com",
          "nomineeName": "sharleen wambui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "njerubernard207@gmail.com",
          "nomineeName": "sharlene wambui nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "timothylomunyak6@gmail.com",
          "nomineeName": "nabangi alex wanyonyi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "margaret.mtheuri@gmail.com",
          "nomineeName": "vyonne nyanchera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "ishmael yahya kibaba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the student leader of the year",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "margaret ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "newsmankamau35@students.tukenya.ac.ke",
          "nomineeName": "andreas peres ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "iceberglovesu@gmail.com",
          "nomineeName": "marite peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "delanru@gmail.com",
          "nomineeName": "lawrence ojiambo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "nj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "njeriogoll@gmail.com",
          "nomineeName": "pascal juna",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "steve musembi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "zachariah chege",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "muendo sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "patrickkapolonto677@gmail.com",
          "nomineeName": "pater marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "eunice ojwang'",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "kanyua peter",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "timothylomunyak6@students.tukenya.ac.ke",
          "nomineeName": "nabangi alex wanyonyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "nabangi wanyonyi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "kioko waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "peter karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngarirose199@gmail.com",
          "nomineeName": "sherlin wambui nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "kiema mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "officiis qui adipisi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lydiakimeu2003@gmail.com",
          "nomineeName": "leila abdi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "beckywachira57@gmail.com",
          "nomineeName": "kevin kariuki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daltonelogovane@gmail.com",
          "nomineeName": "khiddie ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "quidem atque et corp",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david.nate012@gmail.com",
          "nomineeName": "lentaaya andrew",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjisharon2@gmail.com",
          "nomineeName": "elam kia ma(kiddie)",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mbuguar858@gmail.com",
          "nomineeName": "gift madiba ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "mwende chagara",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "chagara vincent ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "violamwangi22@gmail.com",
          "nomineeName": "pas",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hussein010715@gmail.com",
          "nomineeName": "msatuk chairman ismail kibaba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kambua198@gmail.com",
          "nomineeName": "non le",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "w",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kinyajoy646@gmail.com",
          "nomineeName": "joy munene",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lakatichacha12718@gmail.com",
          "nomineeName": "yvonne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "dennis kipkoech",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "sammy mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "you",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wickklifeapollo@gmail.com",
          "nomineeName": "marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "ian kip",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chayuronald@gmail.com",
          "nomineeName": "peter matite ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "karen makungu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "andrea letaya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jewelobed5@gmail.com",
          "nomineeName": "yvonne nanchera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "p",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omwarehlloyds88@gmail.com",
          "nomineeName": "elphas aduwa",
          "totalVotes": "1"
      }
  ],
  "The Student's Affairs Advocate of the Year Award": [
      {
        "nominatorEmail": "simmic997@gmail.com",
        "nomineeName": "n/a",
        "totalVotes": "3668"
      },
      {
        "nominatorEmail": "marthamuraya806@gmail.com",
        "nomineeName": "james kinuthia",
        "totalVotes": "97"
      },
      {
        "nominatorEmail": "marthamuraya806@gmail.com",
        "nomineeName": "stanely motinda",
        "totalVotes": "85"
      },
      {
        "nominatorEmail": "marthamuraya806@gmail.com",
        "nomineeName": "martin nyaga",
        "totalVotes": "73"
      },
      {
        "nominatorEmail": "serahthuku22@gmail.com",
        "nomineeName": "x",
        "totalVotes": "707"
    },
    
    {
        "nominatorEmail": "kenmwaah@gmail.com",
        "nomineeName": "na",
        "totalVotes": "239"
    },
    {
        "nominatorEmail": "roselynenekesa262@gmail.com",
        "nomineeName": "not applicable ",
        "totalVotes": "163"
    },
    {
        "nominatorEmail": "kimani890@gmail.com",
        "nomineeName": "n",
        "totalVotes": "153"
    },
    {
        "nominatorEmail": "nyiethgabbie@gmail.com",
        "nomineeName": "pass",
        "totalVotes": "113"
    },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "45"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "42"
      },
      {
          "nominatorEmail": "spacialjoy00@gmail.com",
          "nomineeName": "martin nyaga ",
          "totalVotes": "32"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "29"
      },
      {
          "nominatorEmail": "okalodhiambo@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "25"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "nyaga",
          "totalVotes": "20"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "murimitony59@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none",
          "totalVotes": "11"
      },
      {
          "nominatorEmail": "rollinsdenis415@gmail.com",
          "nomineeName": "nyaga martin",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "nyancheray@gmail.com",
          "nomineeName": "charles bwibo",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "kevinkebut39@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "aduwaelphas@gmail.com",
          "nomineeName": "pascal juma",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "collinsomukala@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "nyamzi290@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "nyaga martin irungu",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "necessitatibus dolor",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "ruth",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "nyancherayvone@gmail.com",
          "nomineeName": "nyaga martin ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "u",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "jeropcynthia413@gmail.com",
          "nomineeName": "rowlings ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "kinuthia",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "ruth wamuhu",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "martin irungu nyaga",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "marysururu261@gmail.com",
          "nomineeName": "no",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "susanmutama90@gmail.com",
          "nomineeName": "nabangi",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "duncanmanoah@gmail.com",
          "nomineeName": "not applicable.",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "mercy sella ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "brian",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "kisiagi lucas",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "yvanashivon@gmail.com",
          "nomineeName": "t",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "...",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "tuk cu advocacy ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "emmanuel githinji",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "nyaga irungu",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "mumo sammy",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "simon saruni ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ogutusamuel93@gmail.com",
          "nomineeName": "a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshuaadika08@gmail.com",
          "nomineeName": "advocacy subcommittee ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "enrkiarithagikonyo90@gmail.com",
          "nomineeName": "mercy sela",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "njeriogoll@gmail.com",
          "nomineeName": "nyaga ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "marite",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "musau mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "candidblack17@gmail.com",
          "nomineeName": "mwikali ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "muwnd sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "annete mueni",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "viderascar5@gmail.com",
          "nomineeName": "petr",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "pasacal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue819@gmail.com",
          "nomineeName": "onduto",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "advocacy tuk cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sentukimayo@yahoo.com",
          "nomineeName": "peter marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "d8991577@gmail.com",
          "nomineeName": "boston ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "vincent ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyusufsama@gmail.com",
          "nomineeName": "rob duba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "stacy seredi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "harun",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "musa lee",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "tuk cu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ekuria@studentsforliberty.org",
          "nomineeName": "luke",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "peter kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "j",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "ojuka ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ritasue167@gmail.com",
          "nomineeName": "khiddie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "dero",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "moses mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "kikok sammy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "jack otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "y",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sethmusyoka2021@gmail.com",
          "nomineeName": "kisagi lucas",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "psalmskit@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "chromwel ndirago",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "justin kipkemoi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "martha muraya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "mwende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "solo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isdora043@gmail.com",
          "nomineeName": "joel ojuka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "keshe",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "hellen ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "stela",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jturpesio@gmail.com",
          "nomineeName": "julius ntikoisa narikae ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "weremeshack2003@gmail.com",
          "nomineeName": "meshack were ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "samuel muthia i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "njsnzbdbshjsjw",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mayamwikali0067@gmail.com",
          "nomineeName": "n ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "nyaggah",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "irerieric531@gmail.com",
          "nomineeName": "febe congress lady",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "marite ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "dree",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "samson shirim",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "vg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "austinemakungu@gmail.con",
          "nomineeName": "pass ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "domitillah khabarika ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "odio consequat fuga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngomoambruce@gmail.com",
          "nomineeName": "peter kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jmwas0797@gmail.com",
          "nomineeName": "tjul",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "lucky dube ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "collinsokiaka@gmail.com",
          "nomineeName": "nana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "mwende mutiso ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "priscakanini40@gmail.com",
          "nomineeName": "nyanya ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "sammy muendo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mosesgathungu99@gmail.com",
          "nomineeName": "m",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "azizdogojanja@gmail.com",
          "nomineeName": "ishmael yahya kibaba",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke5@gmail.com",
          "nomineeName": "martin irungu nyaga ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "keisy lenon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "kioko sammy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "simon githaiga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "01mainaben@gmail.com",
          "nomineeName": "austine wambingwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "josephkibanyu6@gmail.com",
          "nomineeName": "obala-odongo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "gachagua odhiambo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wickklifeapollo@gmail.com",
          "nomineeName": "apollo odhiambo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "f",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "billi augustine ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bingwa1boy@gmail.com",
          "nomineeName": "irungu nyaga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "sallale ruto",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Bilalachaltu@gmail.com",
          "nomineeName": "no o e",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "euniceamati20@gmail.com",
          "nomineeName": "vincent mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jason@tando.me",
          "nomineeName": "nabangi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "ut quo dolor quas do",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "kisiagi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hezronratemo@students.tukenya.ac.ke",
          "nomineeName": "tukcu advocacy subcommittee ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamonyangi66@gmail.com",
          "nomineeName": "n/v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "peter marite ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the student's affairs advocate of the year award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mugambih600@gmail.com",
          "nomineeName": "caleb emekwi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "muendo sammy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "dwnnis rowling's ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonyk139@gmail.com",
          "nomineeName": "e ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "tyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "randy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "pwterson karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmukuha5@gmail.com",
          "nomineeName": "b",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayrashahalla@gmail.com",
          "nomineeName": "eddie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hudsonmriale04@gmail.com",
          "nomineeName": "lenox otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jobjason338@gmail.com",
          "nomineeName": "charles bwibi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "obala odongo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "idkytm",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "raphael oguk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "mwania mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinnyaga965@gmail.com",
          "nomineeName": "irungu martin nyaga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "pascal ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "h",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "eugene",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "patrick njoroge ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "omnis quod in ut tem",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oshadrack489@gmail.com",
          "nomineeName": "sharon ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "tony blair ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "ian",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "faith nzisa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "steve osore",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "jimmy kinuthia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "is there one",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "milka macharia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "mwende mutiso",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Joanndiwa42@gmail.com",
          "nomineeName": "joan ndiwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "yvonne nyachera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "vivian bosire ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "kioko muli",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "mutua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "evans otieno",
          "totalVotes": "1"
      }
  ],
  "The Upcoming Student Leader of the Year Award": [
      
      {
          "nominatorEmail": "kamaudennis900@gmail.com",
          "nomineeName": "sherline wambui nyambura",
          "totalVotes": "2284"
      },
      {
        "nominatorEmail": "ogutusamuel93@gmail.com",
        "nomineeName": "lawrence ojiambo",
        "totalVotes": "1899"
    },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "adam mwinzi ",
          "totalVotes": "418"
      },
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "224"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "lawrence ojiambo ",
          "totalVotes": "175"
      },
      {
          "nominatorEmail": "lincantaniy@gmail.com",
          "nomineeName": "sherline wambui nyambura ",
          "totalVotes": "98"
      },
      {
          "nominatorEmail": "benardbsr@gmail.com",
          "nomineeName": "na",
          "totalVotes": "89"
      },
      {
          "nominatorEmail": "Owuormoses081@gmail.com",
          "nomineeName": "moses owuor abraham ",
          "totalVotes": "88"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "64"
      },
      {
          "nominatorEmail": "jumahmwambaji0@gmail.com",
          "nomineeName": "sherline wambui",
          "totalVotes": "45"
      },
      {
          "nominatorEmail": "Kairuware@gmail.com",
          "nomineeName": "sherlene wambui",
          "totalVotes": "31"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "marcel okuku",
          "totalVotes": "31"
      },
      {
          "nominatorEmail": "info1@website.com",
          "nomineeName": "sharlene nyambura ",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "kevin kariuki ",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "matthewmutero@gmail.com",
          "nomineeName": "kevin kariuki",
          "totalVotes": "12"
      },
      {
          "nominatorEmail": "maongadarlius@gmail.com",
          "nomineeName": "ray junior orek",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "marthamuraya806@gmail.com",
          "nomineeName": "evance",
          "totalVotes": "10"
      },
      {
          "nominatorEmail": "user1@example.com",
          "nomineeName": "sherline nyambura wambui ",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "9"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "evance ongoro",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "daltonelogovane@gmail.com",
          "nomineeName": "lawrence ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "nam rem ex inventore",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "peter kanyua",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "deniskipkoech@gmail.com",
          "nomineeName": "n",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "marcel okuku ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "ochiengprvvuy@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "bmarkbee@gmail.com",
          "nomineeName": "sherline wambui ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "adam mwinzi",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "ben masila",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "portiakeuya@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "briankipkoech865@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "shapashinamirriam@gmail.com",
          "nomineeName": "..",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "kevin lepile",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "wamerekaranja@gmail.com",
          "nomineeName": "shirleen wambui nyambura ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "godfreymuinuki029@gmail.com",
          "nomineeName": "sharline wambui nyambura",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "joyatieno@gmail.com",
          "nomineeName": "shirlene wambui",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "onyangootieno23@students.tukenya.ac.ke",
          "nomineeName": ". ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "...",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "kennedy mwendwa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "marysururu261@gmail.com",
          "nomineeName": "no",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "lawrence",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "marshl@gmail.com",
          "nomineeName": "lawrence ojimbo ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kimutaibrian110@gmail.com",
          "nomineeName": "lawre ojiambo",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "njengaduncan312@gmail.com",
          "nomineeName": "sharlene wambui nyambura",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sambosaid123@gmail.com",
          "nomineeName": "francis mwendwa",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "odhiamboa822@gmail.com",
          "nomineeName": "gustavo",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "martha muraya",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mosesgathungu99@gmail.com",
          "nomineeName": "m",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "hh",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "eunice ojwang",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "lawrence odhiambo ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "okeyobrian999@gmal.com",
          "nomineeName": "sherlin wambui nyambura ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "awinochelsea4@gmail.com",
          "nomineeName": "o",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "t",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "keilvo@mail.com",
          "nomineeName": "lawrence ojimbo",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "kyalocharlesmuthoka1@gmail.com",
          "nomineeName": "peter kanyua ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "elijahkihiu1@gmail.com",
          "nomineeName": "shirleen nyambura",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "ngunjirikimani021@gmail.com",
          "nomineeName": "shirleen wambui nyambura",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "alfiekennie@gmail.com",
          "nomineeName": "sharline nyambura",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "owinonovice@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mickeygkatana@gmail.com",
          "nomineeName": "kelvin lepile",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jeanroseonchiri@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mercymangigath@gmail.com",
          "nomineeName": "sharline wambui nyambura ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "stvinredstar@gmail.com",
          "nomineeName": "sherlin wambui nyambura",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "raykhay53@gmail.com",
          "nomineeName": "ray junior orek ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "irerieric531@gmail.com",
          "nomineeName": "austine wabingwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "susanmutama90@gmail.com",
          "nomineeName": "adam mwi zi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "abdisaid868@gmail.com",
          "nomineeName": "sherline wambui nyambwera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": "marcel ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "adama mwinzi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "peter saneri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "peter kariuki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "melissa.nicholas55@gmail.com",
          "nomineeName": "ogola joash",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "peterokoth974@gmail.com",
          "nomineeName": "peter okoth ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dracarysdrogon801@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bonifacekihungi0@gmail.com",
          "nomineeName": "sherline  wambui nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "evansmwangi948@gmail.com",
          "nomineeName": "sherline nyambura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muirurianthony@gmail.com",
          "nomineeName": "adam nguli mwinzi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianwangombe4@gmail.com",
          "nomineeName": "catherine ndanu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "nj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercynthenya262@gmail.com",
          "nomineeName": "yvonne nyanchera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "caleb njogu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "mollitia error labor",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yujonyaga@gmail.com",
          "nomineeName": "lawrence ojiamno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "yvone nyanchera ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "wistone",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "peter marite",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "molestias eveniet a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "lentaaya andrea",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kunduwanjala76@gmail.com",
          "nomineeName": "victor apicha ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kinyajoy646@gmail.com",
          "nomineeName": "joy munene",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "alice wangui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "inventore velit illo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orifah@gmail.com",
          "nomineeName": "join ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "kariuki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "lydia kimeu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daisymueni52@gmail.com",
          "nomineeName": "peter marite ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "brian mwebi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muthonijunny@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charleswambui@gmail.com",
          "nomineeName": "lawrence ojiamb ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "salahsalimm04@gmail.com",
          "nomineeName": "lawrence odhiambi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "kinuthia ndu`ngu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kianshii3@gmail.com",
          "nomineeName": "daltone oganda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "dominic ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "isaacongeri450@gmail.com",
          "nomineeName": "sherlyne wambui nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "simon.w.saruni@gmail.com",
          "nomineeName": "simon saruni ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musilidinahmwikali@gmail.com",
          "nomineeName": "evans ongore",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mohamedyussuf026@gmail.com",
          "nomineeName": "sharleen ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "evansomote14@gmail.com",
          "nomineeName": "sharlene nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karpovkarpov445@gmail.com",
          "nomineeName": "me",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "kevin opiyo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kilingefestus820@gmail.com",
          "nomineeName": "moses owuor abraham",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chayuronald@gmail.com",
          "nomineeName": "andrew andrea ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesopiyo@gmail.com",
          "nomineeName": "ojiambo lawrence ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "johntekuria123@gmail.com",
          "nomineeName": "shereline wambui nyandarua ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "ydy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "esteriakello@gmail.com",
          "nomineeName": "kevina.akello7@gmail.com",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayrashahalla@gmail.com",
          "nomineeName": "oguk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bernice.amondi@bihc.ac.ke",
          "nomineeName": "evancs",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "h",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lilianwamuyu24@gmail.com",
          "nomineeName": "kelvin kariuki ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joshuaonyango023@gmail.com",
          "nomineeName": "leshoo emmanuel ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "palesarita9@gmail.com",
          "nomineeName": "evans",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "kimberly njoki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimondiuabi@gmail.com",
          "nomineeName": "p",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "josphatmuroki02@gmail.com",
          "nomineeName": "peter okoth ayuka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "martin ndungu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kitoneanne@gmail.com",
          "nomineeName": ".... ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "david otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hussein010715@gmail.com",
          "nomineeName": "msatuk chairman ismail kibana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "kelvin lepile ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Jumajoshua101@gmail.com",
          "nomineeName": "n/à",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hellenmungai080@gmail.com",
          "nomineeName": "sherline wambui nyanbura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "elvingitari@gmail.com",
          "nomineeName": "kelvin kariuki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nichojane76@gmail.com",
          "nomineeName": "sherline wambūi nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "admin10@sample.com",
          "nomineeName": "sherline nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "steveochieng@students.tukenya.ac.ke",
          "nomineeName": "kisiagi lukas",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "jjj",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "charles bwibo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kennedymwangik20@students.tukenya.ac.ke",
          "nomineeName": "andrea lentaaya",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "info2@website.com",
          "nomineeName": "sharlene nymbura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dnyakiomwangi@gmail.com",
          "nomineeName": "sherline wambui nyambura  ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "javick321@gmail.com",
          "nomineeName": "sherlyne wambui nyambura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cynthiakosumo@gmail.com",
          "nomineeName": "kevin wamaitha",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tibenyanchoka@gmail.com",
          "nomineeName": "sherline wanbui nyambura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "sharlene nyambura wambui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "edwinachuka94@gmail.com",
          "nomineeName": " sherline wambui nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "john njogu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "moses mwituma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "malei tirati",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kibemercy038@gmail.com",
          "nomineeName": "sharleen wambui nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "peter k",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "ian omondi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the upcoming student leader of the year award",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "brian okeri",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lawrencekosen65@gmail.com",
          "nomineeName": "emmanuel leshoo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "the",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kangetheerick39@gmail.com",
          "nomineeName": "lentaya andrea peres",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "paskalinebracy@gmail.com",
          "nomineeName": "ray junior ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienoenock780@gmail.com",
          "nomineeName": "henry charles",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjisharon2@gmail.com",
          "nomineeName": "marcel",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mariansheikhabdi@gmail.com",
          "nomineeName": "yahya derow",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "contact15@mock.com",
          "nomineeName": "sherline ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mwendejoy47@gmail.com",
          "nomineeName": "lawrence ajiambo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tamesmy177@gmail.com",
          "nomineeName": "lawrence ojiimbo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "peter saitoti ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "noreply5@sample.com",
          "nomineeName": "sherline",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "partetkisai85@gmail.com",
          "nomineeName": "jullius narikae",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "u",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "lepile kelvin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kelvinkaruga9628@gmail.com",
          "nomineeName": "caleb karani",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "sam",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Ruthkerubo78@gmail.com",
          "nomineeName": "yvone nyancera",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wickklifeapollo@gmail.com",
          "nomineeName": "apollo odhiambo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "windrex onyancha ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wanjabeatrice006@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "delanru@gmail.com",
          "nomineeName": "pascal juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "i",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "karanjajkuria@gmail.com",
          "nomineeName": "upcoming student leader",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "mlunjee mwishto",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "labanmwaniki454@gmail.com",
          "nomineeName": "have not seen one",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ngachageoffrey@gmail.com",
          "nomineeName": "n//a",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "eunice nyamberi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanueljones5820@gmail.com",
          "nomineeName": "kidhie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "francismwaura415@gmail.com",
          "nomineeName": "sherline wambui  nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wambuindungu75@gmail.com",
          "nomineeName": "none",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "kinuthia ngu`ngu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "margaret.mtheuri@gmail.com",
          "nomineeName": "mercy",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "adams",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "james okoth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omwarehlloyds88@gmail.com",
          "nomineeName": "elphas aduwa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "shirleen wambui ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yahyaderow15@gmail.com",
          "nomineeName": "trevor mavyuva",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "levisouma90@gmail.com",
          "nomineeName": "levis ouma onyango ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "shirlene wambui nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "edwinngare4@gmail.com",
          "nomineeName": "sherlin wambui",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oluochivictor11@gmail.com",
          "nomineeName": "elizabeth emma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jturpesio@gmail.com",
          "nomineeName": "julius ntikoisa narikae ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "oshadrack489@gmail.com",
          "nomineeName": "sharon",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kennymwas690@gmail.com",
          "nomineeName": "andrea lentaaya ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ivanleaky22@gmail.commusa",
          "nomineeName": "rigobert",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hildahnekesa822@gmail.com",
          "nomineeName": "shirline wambui nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nzivommoses@gmail.com",
          "nomineeName": "mosesoduor",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "sherlene wambui nyambura",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "thiongosharon5@gmail.com",
          "nomineeName": "evance ",
          "totalVotes": "1"
      }
  ],
  "The Vice Chancellor's Award": [
      {
          "nominatorEmail": "simmic997@gmail.com",
          "nomineeName": "n/a",
          "totalVotes": "2653"
      },
      {
          "nominatorEmail": "alextaleh@gmail.com",
          "nomineeName": "phoebe cheptoo",
          "totalVotes": "1840"
      },
      {
          "nominatorEmail": "martinelasty001@gmail.com",
          "nomineeName": "na",
          "totalVotes": "220"
      },
      {
          "nominatorEmail": "roselynenekesa262@gmail.com",
          "nomineeName": "not applicable ",
          "totalVotes": "173"
      },
      {
          "nominatorEmail": "serahthuku22@gmail.com",
          "nomineeName": "x",
          "totalVotes": "167"
      },
      {
          "nominatorEmail": "kimani687@gmail.com",
          "nomineeName": "n",
          "totalVotes": "143"
      },
      {
          "nominatorEmail": "nyiethgabbie@gmail.com",
          "nomineeName": "pass",
          "totalVotes": "110"
      },
      {
          "nominatorEmail": "wambuaderrick553@gmail.com",
          "nomineeName": "na ",
          "totalVotes": "43"
      },
      {
          "nominatorEmail": "markmwaniki2020@gmail.com",
          "nomineeName": "nil",
          "totalVotes": "42"
      },
      {
          "nominatorEmail": "danielmbunde45@gmail.com",
          "nomineeName": "not available ",
          "totalVotes": "39"
      },
      {
          "nominatorEmail": "muriithipatrick111@gmail.com",
          "nomineeName": "not available",
          "totalVotes": "22"
      },
      {
          "nominatorEmail": "johnojunga7@gmail.com",
          "nomineeName": "no one ",
          "totalVotes": "21"
      },
      {
          "nominatorEmail": "Sharo.gibz@gmail.com",
          "nomineeName": "no one",
          "totalVotes": "21"
      },
      {
          "nominatorEmail": "engkiarithagikonyo90@gmail.com",
          "nomineeName": "michael katana",
          "totalVotes": "16"
      },
      {
          "nominatorEmail": "sammykeshedopoi@gmail.com",
          "nomineeName": "mutua",
          "totalVotes": "14"
      },
      {
          "nominatorEmail": "Keterbrian@gmail.com",
          "nomineeName": "none",
          "totalVotes": "8"
      },
      {
          "nominatorEmail": "xlynsymo@gmail.com",
          "nomineeName": "elvin manwa",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "maleitirati@gmail.com",
          "nomineeName": "michael katana ",
          "totalVotes": "7"
      },
      {
          "nominatorEmail": "generalagola@gmail.com",
          "nomineeName": "..",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "pavizu@mailinator.com",
          "nomineeName": "quam ut ipsam volupt",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "therapistafara@gmail.com",
          "nomineeName": ".",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "nyamzi290@gmail.com",
          "nomineeName": "dennis rowling's ",
          "totalVotes": "6"
      },
      {
          "nominatorEmail": "fj.orifah@gmail.com",
          "nomineeName": "dennis",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "cougauhneyouma99@gmail.com",
          "nomineeName": "motinda",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "ouyahbrian001@gmail.com",
          "nomineeName": "none ",
          "totalVotes": "5"
      },
      {
          "nominatorEmail": "murungaemmedy12@gmail.com",
          "nomineeName": "pass ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "mcjumadonald36@gmail.com",
          "nomineeName": "nabangi",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "ojiambol564@gmail.com",
          "nomineeName": "a",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Bokeaangwenyi@gmail.com",
          "nomineeName": ". ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "mbuziwamigori@gmail.com",
          "nomineeName": "denis rollins",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "johnominde00@gmail.com",
          "nomineeName": "non applicable ",
          "totalVotes": "4"
      },
      {
          "nominatorEmail": "Pisabo145@gmail.com",
          "nomineeName": "no",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "manwaelvin6@gmail.com",
          "nomineeName": "elvin manwa ogetii",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "orifahjayne@gmail.com",
          "nomineeName": "dennis rollins",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "palesarita9@gmail.com",
          "nomineeName": "denis",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kigwemilly1@gmail.com",
          "nomineeName": "rugby guy",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "martin098@gmail.com",
          "nomineeName": "b",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "mtanne6@gmail.com",
          "nomineeName": "n/l",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "gracemoragwa91@gmail.com",
          "nomineeName": "elvin manwa ogetii ",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "ea341708@gmail.com",
          "nomineeName": "n\\a",
          "totalVotes": "3"
      },
      {
          "nominatorEmail": "kevinkariuki293@gmail.com",
          "nomineeName": "lydia kimeu",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "damahmutemi@gmail.com",
          "nomineeName": "...",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "brivanmutuba@gmail.com",
          "nomineeName": "×",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "joshsimiyu40@gmail.com",
          "nomineeName": "g",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "Christopherkisemei765@gmail.com",
          "nomineeName": "peter marite",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "odhiamboa822@gmail.com",
          "nomineeName": "rollins",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sebmunyao@gmail.com",
          "nomineeName": "k",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "pdiddy@gmail.com",
          "nomineeName": "me",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "eldridgemanje@yahoo.com",
          "nomineeName": ".... ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "estheronyango04@gmail.com",
          "nomineeName": "n/a ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "levylg2001@gmail.com",
          "nomineeName": "rowling's ",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "jacksonlesinkokamau11@gmail.com",
          "nomineeName": "katana",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "lilianouma567@gmail.com",
          "nomineeName": "nn",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "shawnndeto@gmail.com",
          "nomineeName": "whiteshadow photography",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "arera12@gmail.com",
          "nomineeName": "arera",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "hafsamohamed23@students.tukenya.ac.ke",
          "nomineeName": "h",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "chogeshirley001@gmail.com",
          "nomineeName": "nill",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "oafransisca@gmail.com",
          "nomineeName": "mutua vc",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "sherlinewambui19@gmail.com",
          "nomineeName": "stanley mutinda",
          "totalVotes": "2"
      },
      {
          "nominatorEmail": "mohamedyussuf026@gmail.com",
          "nomineeName": "ojuka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ojiambol43@gmail.com",
          "nomineeName": "cheptoo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Ericotieno@gmail.com",
          "nomineeName": "ericotieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "monicaah630@gmail.com",
          "nomineeName": "oduor ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hrbitoboevans@gmail.com",
          "nomineeName": "muema",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daiveycarl128@gmail.com",
          "nomineeName": "japheth odiwuor okello ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "info2@website.com",
          "nomineeName": "stanley mtinda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "example@placeholder.com",
          "nomineeName": "collins",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mbuguar858@gmail.com",
          "nomineeName": "lydia nduta ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stacythondi1@gmail.com",
          "nomineeName": "wambua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "001patricknjoroge@gmail.com",
          "nomineeName": "kk",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "faithowuorlawino7@gmail.com",
          "nomineeName": "kamau munywa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "susanmutama90@gmail.com",
          "nomineeName": "mutua evanson",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "01mainaben@gmail.com",
          "nomineeName": "phoebe chetoo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "pecu@mailinator.com",
          "nomineeName": "ut non quam sapiente",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "billgraham337@gmail.com",
          "nomineeName": "vc",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "antonekingstone15@gmail.com",
          "nomineeName": "antone onyango ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuelmmpole588@gmail.com",
          "nomineeName": "m",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Shalonnjuki@gmail.com",
          "nomineeName": "nabangi wanyonyi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "cleveroupat2023@gmail.com",
          "nomineeName": "hello ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maxfeston435@gmail.com",
          "nomineeName": "alex",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sharone@gmail.com",
          "nomineeName": "test",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Chokemedaddy277@gmail.com",
          "nomineeName": "stephan ochieng ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyamburaj441@gmail.com",
          "nomineeName": "elvin manwa ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Kipchumbag554@gmail.com",
          "nomineeName": "mwnede meme",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "generalkaush@mail.com",
          "nomineeName": "franklin musundi kaunda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maryaminat03@gmail.com",
          "nomineeName": "kliff",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "akakamtucorleone@gmail.com",
          "nomineeName": "kavana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayrashahalla@gmail.com",
          "nomineeName": "dottie",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "matukuveronica1@gmail.com",
          "nomineeName": "habiba abdi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bernice.amondi@bihc.ac.ke",
          "nomineeName": "denno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "easumwa@gmail.com",
          "nomineeName": "asumwa amwilu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "britneymadline@gmail.com",
          "nomineeName": "lenox ongwano",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "machariaedwin8205@gmail.com",
          "nomineeName": "gd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "trizahwanjiku251@gmail.com",
          "nomineeName": "lawrence ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Sanchadavid6@gmail.com",
          "nomineeName": "nominate a person for the vice chancellor's award ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "muliurbanus36@gmail.com",
          "nomineeName": "peter kanyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "m0413715@gmail.com",
          "nomineeName": "mbuzi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "catherinenzuki@students.tukenya.ac.ke",
          "nomineeName": "catherine ndanu ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chebetterrytonui@gmail.com",
          "nomineeName": "sir musa lee",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musaleeaziz@gmail.com",
          "nomineeName": "rr",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftmapenzi@gmail.com",
          "nomineeName": "sammy mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "clintononyango@student.tukenya.ac.ke",
          "nomineeName": "nb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "daltonelogovane@gmail.com",
          "nomineeName": "phibi ngeno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "liouvillestheo@gmail.com",
          "nomineeName": "f",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanueljones5820@gmail.com",
          "nomineeName": "ian asiachi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "info4@website.com",
          "nomineeName": "stanley mutinda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "keshestephen91@gmail.com",
          "nomineeName": "moses dikir ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mboyafedelyne8@gmail.com",
          "nomineeName": "kamau munywa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "valentinegithiri@gmail.com",
          "nomineeName": "*",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fredrickkisipan273@gmail.com",
          "nomineeName": "charity ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "timothylomunyak6@gmail.com",
          "nomineeName": "lenox ndeda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maleytirati@gmail.com",
          "nomineeName": "katana michael ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "charlesmichira8@gmail.com",
          "nomineeName": "lenox onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sethotieno45@g.mail.com",
          "nomineeName": "sethotieno45@g.mail.com",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "benjaminkiche0@gmail.com",
          "nomineeName": "kevin edwards ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "simon.w.saruni@gmail.com",
          "nomineeName": "simon saruni ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "omondigordon20@gmail.com",
          "nomineeName": "zenna oloo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "musundifranklin@gmail.com",
          "nomineeName": "fabius simiyu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelamalient@gmail.com",
          "nomineeName": "omondi oketch",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kanyuapeter650@gmail.com",
          "nomineeName": "kamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kimani890@gmail.com",
          "nomineeName": "p",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ryca@mailinator.com",
          "nomineeName": "lorem maiores cum vo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndutalydiah42@gmail.com",
          "nomineeName": "elam kiama",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "100.hello11@random.com",
          "nomineeName": "starnly motinda",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owino16704@gmail.com",
          "nomineeName": "timothy lomunyak",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "richardruth438@gmail.com",
          "nomineeName": "0",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hopeshapashina@gmail.com",
          "nomineeName": "kamau ngamau",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anakalamichael28@gmail.com",
          "nomineeName": "phoebe ng'eno.",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "angelandungu9412@gmail.com",
          "nomineeName": "ouma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bravinotieno20@gmail.com",
          "nomineeName": "bravin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vostoneluke78@gmail.com",
          "nomineeName": "mito robin",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lucyatieno475@gmail.com",
          "nomineeName": "nalucyatieno475@gmail.com i ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rockymyles63@gmail.com",
          "nomineeName": "philip oluoch",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "broookssteven@gmail.com",
          "nomineeName": "mutua ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "piesepholic28@gmail.com",
          "nomineeName": "vincent chagara ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "olonanapeter12@gmail.com",
          "nomineeName": "emmanuel adika ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samsonshirim278@gmail.com",
          "nomineeName": "morgan delmark",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "anyanchama28@gmail.com",
          "nomineeName": "not sure",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martineabwao2003@gmail.com",
          "nomineeName": "ndu`ngu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ianogola537@gmail.com",
          "nomineeName": "ochieng' alphonso ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Emmanuelpatisi@gmail.com",
          "nomineeName": "karanja mumo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stevveibmesum@gmail.com",
          "nomineeName": "collins peter ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "norinenaliaka@gmail.com",
          "nomineeName": "bob",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "magaratom656@gmail.com",
          "nomineeName": "namagaratom656@gmail.com",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mawiaalice8@gmail.com",
          "nomineeName": "mwende alvine",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nulash546@gmail.com",
          "nomineeName": "pater karanja",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "orengojames920@gmail.com",
          "nomineeName": "##",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyagakaontieri1@gmail.com",
          "nomineeName": "nyanchama ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "tsisikalilian@gmail.com",
          "nomineeName": "henry momanyi ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "githinjiemmanuel9@students.tukenya.ac.ke",
          "nomineeName": "gifton ndemo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "chepngetichbre@gmail.com",
          "nomineeName": "ian kiprono ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "giftsonge@gmail.com",
          "nomineeName": "mercylinne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "robertotieno372@gmail.com",
          "nomineeName": "non applicable",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "leemosesaziz@gmail.com",
          "nomineeName": "phoebe ngeno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "david105kingi@gmail.com",
          "nomineeName": "kingi david ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marcelokuku474@gmail.com",
          "nomineeName": "yvonne nyanchera ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ayekhakennedy003@gmail.com",
          "nomineeName": "mwende kioko",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "boazgori@gmail.com",
          "nomineeName": "hon dennis rollins",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "calebwafula757380@gmail.com",
          "nomineeName": "kioko mwania",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nguliadam@gmail.com",
          "nomineeName": "tuk vc ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joyatieno@gmail.com",
          "nomineeName": "nana",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bryankiplimo20@gmail.com",
          "nomineeName": "denis roline",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brechepngetich@gmail.com",
          "nomineeName": "ian kiprono",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rodahtracey3@gmail.com",
          "nomineeName": "none applicable ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "devdreamergal@yahoo.com",
          "nomineeName": "nill ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "carolwanjala8@gmail.com",
          "nomineeName": "null ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "petermcnyamgweso@gmail.com",
          "nomineeName": "kevin afron",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "titus.jome@gmail.com",
          "nomineeName": "obren lourmex ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "owanemax262@gmail.com",
          "nomineeName": "peter son",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marymwanzia34@gmail.com",
          "nomineeName": "denis rollins ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "rosengima333@gmail.com",
          "nomineeName": "hi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nimooh2018@gmail.com",
          "nomineeName": "sheryl wairimu karani",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nyokabialice100@gmail.com",
          "nomineeName": ".. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kingkelvineinstein@gmail.com",
          "nomineeName": "phoebe chepng'eno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maureennjoroge46@gmail.com",
          "nomineeName": "maureen waigwe njoroge ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "memdepay009@gmail.com",
          "nomineeName": "james omondi otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "martinnyaga965@gmail.com",
          "nomineeName": "vc ajiamulie tu",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "johnnyaito403@gmail.com",
          "nomineeName": "vice chancellor ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "yvetteolel@gmail.com",
          "nomineeName": "john otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ewetcaleb8@students.tukenya.ac.ke",
          "nomineeName": "peter kinyua",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stanleyomondi10793@gmail.com",
          "nomineeName": "t",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienoenock780@gmail.com",
          "nomineeName": "enock otieno",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Abigaelkadenge0@gmail.com",
          "nomineeName": "brian muende",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ocsdave26@gmail.com",
          "nomineeName": "david otieno ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kellyleroy672@gmail.com",
          "nomineeName": "phibi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "samuejnjoroge@gmail.com",
          "nomineeName": "pascal juma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "emmanuelomondi46@gmail.com",
          "nomineeName": "zenah oloo ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ndiritujoyce031@gmail.com",
          "nomineeName": "lucy njoki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "fisixy@mailinator.com",
          "nomineeName": "aut omnis iure et en",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "hello@random.com",
          "nomineeName": "conrad",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Paulwanjiru63@gmail.com",
          "nomineeName": "no any",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "braightonjeremy@gmail.com",
          "nomineeName": "braiton jeremy ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lentaayaandrea@gmail.com",
          "nomineeName": "lentaaya andrea peres ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bwibo6charles@gmail.com",
          "nomineeName": "joshua praise",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nerdnyamweya7332@gmail.com",
          "nomineeName": "daniel oboga",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "joywanjiku@gmail.com",
          "nomineeName": "wyclife akaka",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "temoidiana261@gmail.com",
          "nomineeName": "mutua muteti",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ericomondi12@gmail.com",
          "nomineeName": "ma",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "lizakinyi@students.tukenya.ac.ke",
          "nomineeName": "amber ray",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "Muchina032@gmail.com",
          "nomineeName": "ogolla",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "gashericarolyn@gmail.com",
          "nomineeName": "kamu munywa",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienomartin26@gmail.com",
          "nomineeName": "pascal",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sensonicevans@gmail.com",
          "nomineeName": "francis muchoki ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ftedrickwanjiku1@gmail.com",
          "nomineeName": "not applicable",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "elizabethanyungu@gmail.com",
          "nomineeName": "onduto michael ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "nnimcanhilac143@gmail.com",
          "nomineeName": "hhh",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "vincenttobiko6@gmail.com",
          "nomineeName": "patrick mwende ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "ephraimchege1@gmail.com",
          "nomineeName": "ephraim chege ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "blvckheart04@gmail.com",
          "nomineeName": "kalonzo",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "stvinredstar@gmail.com",
          "nomineeName": "wacheke wanjohi",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "eunicedavid45@gmail.com",
          "nomineeName": "mumo waita",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wilsononyino2021@gmail.com",
          "nomineeName": "na. ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "onyangolasty@gmail.com",
          "nomineeName": "harun ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kabuejoyce789@gmail.com",
          "nomineeName": "/",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kamaudnjuguna@gmail.com",
          "nomineeName": "samuel kimani",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "brandonkupper85@gmail.com",
          "nomineeName": "odinga rao",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "mercywafula025@gmail.com",
          "nomineeName": "peterson karanja ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "danielmulongo82@students.tukenya.ac.ke",
          "nomineeName": "mercy sella",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "dankimilu93@gmail.com",
          "nomineeName": "kelvin benjamin ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maundunicholas9693@gmail.com",
          "nomineeName": "fd",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "sabpastels@gmail.com",
          "nomineeName": "mutua vincent ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "marthamonyangi66@gmail.com",
          "nomineeName": "n/v",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "khvv0@gmail.com",
          "nomineeName": "oyrg",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "shaddiorifah@gmail.com",
          "nomineeName": "orifah jayne",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "d8991577@gmail.com",
          "nomineeName": "francis onyango",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "georgeotty27@gmail.com",
          "nomineeName": "daltone ogonda ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "jkiplimo@studentsforliberty.org",
          "nomineeName": "mutia",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "foxcreations31@gmail.com",
          "nomineeName": "-",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kunduwanjala76@gmail.com",
          "nomineeName": "rongo university ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "theemark12756@students.tukenya.ac.ke",
          "nomineeName": "mike katana ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "austinereomo@gmail.com",
          "nomineeName": "null",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "otienobrollins@gmail.com",
          "nomineeName": "vc ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "phoelixotieno6@gmail.com",
          "nomineeName": "xx",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "bellaminke88@gmail.com",
          "nomineeName": "damaris mwaura ",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "wafulacharles463@gmail.com",
          "nomineeName": "rolex okoth",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kenmwaah@gmail.com",
          "nomineeName": "prof.oduor",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "naylowreagan@gmail.com",
          "nomineeName": "fb",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "maendenicole@gmail.com",
          "nomineeName": "muchoki",
          "totalVotes": "1"
      },
      {
          "nominatorEmail": "kianshii3@gmail.com",
          "nomineeName": "nambangi",
          "totalVotes": "1"
      }
  ]
};


const Nominees = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const itemsPerPage = 5;

  useEffect(() => {
    // Simulate data loading for 3 seconds
    setTimeout(() => {
      setData(mockNominees);
      setPagination(
        Object.keys(mockNominees).reduce((acc, category) => {
          acc[category] = 1;
          return acc;
        }, {})
      );
      setLoading(false);
    }, 3000);
  }, []);

  const paginate = (array, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return array.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (type, category, totalPages) => {
    setPagination((prev) => {
      const newPage = type === 'next' && prev[category] < totalPages ? prev[category] + 1
                      : type === 'prev' && prev[category] > 1 ? prev[category] - 1
                      : prev[category];
      return { ...prev, [category]: newPage };
    });
  };

  const toTitleCase = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Nominees</h1>

      {Object.keys(data).map((category) => {
        const nominees = data[category];
        const totalPages = Math.ceil(nominees.length / itemsPerPage);
        const paginatedNominees = paginate(nominees, pagination[category]);
        const totalVoters = nominees.reduce((sum, nominee) => sum + parseInt(nominee.totalVotes, 10), 0);

        return (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category.replace(/_/g, ' ')}</h2>

            {/* Nominees Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border">Name</th>
                    <th className="py-2 px-4 border">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedNominees.map((nominee, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border">{toTitleCase(nominee.nomineeName)}</td>
                      <td className="py-2 px-4 border">{nominee.totalVotes}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Total Voters:</td>
                    <td className="py-2 px-4">{totalVoters}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between my-4">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => handlePageChange('prev', category, totalPages)}
              >
                Previous
              </button>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => handlePageChange('next', category, totalPages)}
              >
                Next
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Nominees;

