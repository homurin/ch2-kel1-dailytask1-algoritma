const users = [
  {
    "_id": "64f4f787c4f6848d6bba5e85",
    "name": "Beck Newman",
    "eyeColor": "green",
    "age": 39,
    "balance": "$3,472.37",
    "gender": "male",
    "company": "ICOLOGY",
    "email": "becknewman@icology.com",
    "phone": "+1 (967) 468-3490",
    "address": "904 Varanda Place, Hasty, Federated States Of Micronesia, 4027",
    "registered": "2014-08-14T11:19:46 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Grace"
      },
      {
        "id": 1,
        "name": "Alim"
      },
      {
        "id": 2,
        "name": "Grace"
      }
    ],
    "favoriteFruit": "apple"
  },
  {
    "_id": "64f4f7876da03059047bc63f",
    "name": "Sharlene Sexton",
    "eyeColor": "blue",
    "age": 21,
    "balance": "$2,779.33",
    "gender": "female",
    "company": "PASTURIA",
    "email": "sharlenesexton@pasturia.com",
    "phone": "+1 (912) 460-3248",
    "address": "437 Harrison Avenue, Cobbtown, Ohio, 9832",
    "registered": "2015-01-07T01:07:14 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Irfi"
      },
      {
        "id": 1,
        "name": "Alim"
      },
      {
        "id": 2,
        "name": "Adella"
      }
    ],
    "favoriteFruit": "banana"
  },
  {
    "_id": "64f4f787ebb66ce1bda225c5",
    "name": "Evangelina Frost",
    "eyeColor": "blue",
    "age": 32,
    "balance": "$1,815.30",
    "gender": "female",
    "company": "INSURITY",
    "email": "evangelinafrost@insurity.com",
    "phone": "+1 (937) 409-3818",
    "address": "643 Temple Court, Rossmore, Rhode Island, 8942",
    "registered": "2019-03-31T06:59:20 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Imam"
      },
      {
        "id": 1,
        "name": "Alim"
      },
      {
        "id": 2,
        "name": "Imam"
      }
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "64f4f7875e87e94246819a35",
    "name": "Dotson Bowers",
    "eyeColor": "brown",
    "age": 32,
    "balance": "$3,062.31",
    "gender": "male",
    "company": "AMRIL",
    "email": "dotsonbowers@amril.com",
    "phone": "+1 (927) 436-2579",
    "address": "633 Cadman Plaza, Stouchsburg, Maryland, 6908",
    "registered": "2016-02-28T08:54:09 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Alim"
      },
      {
        "id": 1,
        "name": "Adella"
      },
      {
        "id": 2,
        "name": "Imam"
      }
    ],
    "favoriteFruit": "apple"
  },
  {
    "_id": "64f4f787d2648b1136776ddb",
    "name": "Buckner Lowe",
    "eyeColor": "green",
    "age": 27,
    "balance": "$1,414.85",
    "gender": "male",
    "company": "BIOTICA",
    "email": "bucknerlowe@biotica.com",
    "phone": "+1 (952) 503-2514",
    "address": "190 Dunham Place, Thermal, North Dakota, 7571",
    "registered": "2017-09-01T08:49:53 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Grace"
      },
      {
        "id": 1,
        "name": "Alim"
      },
      {
        "id": 2,
        "name": "Alim"
      }
    ],
    "favoriteFruit": "banana"
  },
  {
    "_id": "64f4f78763568797a83d0ebf",
    "name": "Jeanette Padilla",
    "eyeColor": "green",
    "age": 28,
    "balance": "$2,568.02",
    "gender": "female",
    "company": "FANFARE",
    "email": "jeanettepadilla@fanfare.com",
    "phone": "+1 (899) 582-2003",
    "address": "863 Brooklyn Avenue, Guthrie, American Samoa, 5647",
    "registered": "2022-05-01T09:41:27 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Adella"
      },
      {
        "id": 1,
        "name": "Grace"
      },
      {
        "id": 2,
        "name": "Imam"
      }
    ],
    "favoriteFruit": "apple"
  },
  {
    "_id": "64f4f787409dca2c24cf443b",
    "name": "Adrienne Riley",
    "eyeColor": "green",
    "age": 34,
    "balance": "$2,736.24",
    "gender": "female",
    "company": "EBIDCO",
    "email": "adrienneriley@ebidco.com",
    "phone": "+1 (975) 506-3817",
    "address": "886 Albemarle Terrace, Enoree, Pennsylvania, 7613",
    "registered": "2017-07-29T03:37:20 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Imam"
      },
      {
        "id": 1,
        "name": "Imam"
      },
      {
        "id": 2,
        "name": "Adrian"
      }
    ],
    "favoriteFruit": "banana"
  },
  {
    "_id": "64f4f787b8918b49e5f0258d",
    "name": "Laverne Kline",
    "eyeColor": "brown",
    "age": 20,
    "balance": "$1,420.42",
    "gender": "female",
    "company": "KAGGLE",
    "email": "lavernekline@kaggle.com",
    "phone": "+1 (806) 466-2064",
    "address": "943 Duffield Street, Glenshaw, Oregon, 7091",
    "registered": "2017-05-30T04:59:19 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Irfi"
      },
      {
        "id": 1,
        "name": "Grace"
      },
      {
        "id": 2,
        "name": "Grace"
      }
    ],
    "favoriteFruit": "banana"
  },
  {
    "_id": "64f4f787301bad3ab114de8c",
    "name": "Marva Price",
    "eyeColor": "green",
    "age": 36,
    "balance": "$2,143.05",
    "gender": "female",
    "company": "PYRAMI",
    "email": "marvaprice@pyrami.com",
    "phone": "+1 (958) 400-2722",
    "address": "102 Lloyd Street, Beyerville, Montana, 2822",
    "registered": "2022-11-02T03:16:54 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Imam"
      },
      {
        "id": 1,
        "name": "Irfi"
      },
      {
        "id": 2,
        "name": "Imam"
      }
    ],
    "favoriteFruit": "banana"
  }
]

// Soal Nomor 6
// tentukan user yang gender female atau user yang eyeColor nya brown dan ada berapa jumlah user nya 


// 1. Buat function untuk mencari user dengan gender "female" atau eyeColor "brown"
const checkGenderOrEyeColor = (data) => {
  // 2. Buat variable baru untuk menampung array kosong
  let result = [];
  // 3. Looping untuk mengecheck data satu satu
  for (let i = 0; i < data.length; i++) {
    // 4. Mengecheck jika dalam data ada gender Female atau eyeColor dengan nilai Brown
    if (data[i].gender === "female" || data[i].eyeColor === "brown") {
      // 5. Memasukkan data jika sesuai dengan kondisi di atas ke dalam variable array
      result.push(data[i])
    }
  }
  // 6. Mengembalikan hasil looping di atas dengan pengguna yang memiliki gender Female atau eyeColor bernilai Brown
  return result;
}

// 7. Memanggil fungsi checkGenderOrEyeColor dengan array users sebagai argumen
const countGenderOrEyeColor = checkGenderOrEyeColor(users);

// 8. Menampilkan output jumlah user yang memiliki gender Female atau eyeColor dengan nilai Brown
console.log("=======================================================================");
console.log("Jumlah user dengan gender 'Female' atau user dengan eyeColor 'Brown' = " + countGenderOrEyeColor.length);
console.log("=======================================================================");
//9. Menampilkan pengguna yang memiliki gender Female atau eyeColor dengan nilai Brown
console.log(checkGenderOrEyeColor(users));