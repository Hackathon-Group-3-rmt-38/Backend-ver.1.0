// SAMPLE DATA KURSI
const nomorKursi = {
  a: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18'],
  b: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18'],
  c: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17', 'C18'],
  d: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18'],
  e: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'E18'],
  f: ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15'],
  g: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12', 'G13', 'G14', 'G15'],
  h: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'H15'],
  i: ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10', 'I11', 'I12', 'I13', 'I14', 'I15'],
  j: ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10', 'J11', 'J12', 'J13', 'J14', 'J15'],
  k: ['K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'K10', 'K11', 'K12', 'K13', 'K14', 'K15'],
  l: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10', 'L11', 'L12', 'L13', 'L14', 'L15'],
};

// SAMPLE DATA
let movie = {
  "John Wick: Chapter 4": {
    price: 90000,
    rated: 18,
    rating: 10,
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
  "Dune: Part Two": {
    price: 45000,
    rated: 18,
    rating: 10,
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
  'Oppenheimer': {
    price: 30000,
    rated: 18,
    rating: 10,
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
  "Indiana Jones and the Dial of Destiny": {
    price: 50000,
    rated: 18,
    rating: 10,
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
  "Mission: Impossible - Dead Reckoning Part One": {
    price: 70000,
    rated: 18,
    rating: 10,
    schedule: ["09.00", "12.00", "15.00", "17.00", "19.00"],
  },
};

/*
Estimasi Input:
1. Nama Visitor
2. Jumlah Ticket Yang akan Di beli
3. Jadwal Film Yang mau di tonton
4. No kursi
5. Usia (Validasi)

Cart System
*/

// usia untuk orang ke-2, ke-3 dan seterusnya ~ mengikuti usia pemesan tiket. Sebab pemesan tiket dianggap bertanggungjawab sebagai pengawas/wali bagi yang di bawah umur
const input = {
  nama: "Hendra Ahai",
  movie: "Mission: Impossible - Dead Reckoning Part One",
  jumlahTicketDibeli: 5,
  usia: 21,
  schedule: "12.00",
  nomorKursi: ["C7", "C8", "C9", "C10", "C11"]
};

// Bebas mau menggunakan berapa function

// Function untuk mencari movie berdasarkan huruf satu per satu
function searchingMovie(movies, input) {
    const {movie} = input;
    let searchedMovie;
    let flag = false;
    const result = [];
    for (const perMovie in movies) {
        for (let i = 0; i < movie.length; i++) {
            let perHurufInputMovie = movie[i];
            let perHurufDataMovie = perMovie[i];
            if (perHurufInputMovie === perHurufDataMovie) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            searchedMovie = perMovie;
            break;
        }
    }
    !searchedMovie && flag === false ? result.push(flag, 'Movie tidak ditemukan') : result.push(flag, searchedMovie, movies[searchedMovie]);
    return result;
}

console.log(searchingMovie(movie, input));
// EXPECTED OUTPUT
/*

Jika movie yang dicari ditemukan :

[
  true,
  'John Wick: Chapter 4',
  {
    price: 90000,
    rated: 18,
    rating: 10,
    schedule: [ '09.00', '12.00', '15.00', '17.00', '19.00' ]
  }
]

Jika movie yang dicari tidak ditemukan :

[ false, 'Movie tidak ditemukan' ]

*/

function filteringAge(movies, input) {
    
}

function name(params) {
    
}

// EXPECTED OUTPUT
// nama, harga total tiket, jadwal jam & hari, nomor kursi. Dalam Array of Object.
// console.log(movie, nomorKursi, input);

//SAMPLE DATA
const filmTerbaru = [
    {
      judul: "The Avengers: Endgame",
      bulanRilis: "Mei 2019",
      kategoriUmur: "Remaja",
      sutradara: "Anthony Russo, Joe Russo",
      aktor: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
      sinopsis: "Setelah peristiwa yang menghancurkan dalam Infinity War, para Avengers berkumpul sekali lagi untuk membalikkan segala yang telah terjadi dan menghadapi ancaman terbesar mereka, Thanos.",
      jamTayang: ["9", "12", "15", "18", "21"],
      hariTayang: ["Senin", "Selasa", "Kamis", "Sabtu"]
    },
    {
      judul: "Spider-Man: No Way Home",
      bulanRilis: "Desember 2021",
      kategoriUmur: "Remaja",
      sutradara: "Jon Watts",
      aktor: "Tom Holland, Zendaya, Benedict Cumberbatch",
      sinopsis: "Peter Parker berusaha menyeimbangkan kehidupan pribadinya dan tanggung jawabnya sebagai Spider-Man ketika ia menghadapi musuh-musuh baru dan perjalanan melintasi multiverse yang mengubah segalanya.",
      jamTayang: ["12", "15", "18", "21"],
      hariTayang: ["Selasa", "Rabu", "Jumat", "Minggu"]
    },
    {
      judul: "Black Widow",
      bulanRilis: "Juli 2021",
      kategoriUmur: "Remaja",
      sutradara: "Cate Shortland",
      aktor: "Scarlett Johansson, Florence Pugh, David Harbour",
      sinopsis: "Natasha Romanoff alias Black Widow menghadapi masa lalunya yang kelam ketika ia terlibat dalam konspirasi berbahaya yang terhubung dengan masa lalunya sebagai mata-mata dan keluarganya yang dulu.",
      jamTayang: ["9", "12", "15", "18"],
      hariTayang: ["Selasa", "Kamis", "Jumat", "Sabtu"]
    },
    {
      judul: "Shang-Chi and the Legend of the Ten Rings",
      bulanRilis: "September 2021",
      kategoriUmur: "Remaja",
      sutradara: "Destin Daniel Cretton",
      aktor: "Simu Liu, Awkwafina, Tony Leung",
      sinopsis: "Shang-Chi, seorang ahli bela diri yang terlatih secara intensif, terpaksa menghadapi masa lalunya yang ia coba tinggalkan ketika ia terlibat dalam organisasi rahasia dan harus menghadapi Ten Rings yang misterius.",
      jamTayang: ["9", "12", "15", "18"],
      hariTayang: ["Senin", "Rabu", "Kamis", "Sabtu"]
    },
    {
      judul: "Dune",
      bulanRilis: "Oktober 2021",
      kategoriUmur: "Dewasa",
      sutradara: "Denis Villeneuve",
      aktor: "Timothée Chalamet, Rebecca Ferguson, Zendaya",
      sinopsis: "Dalam perjalanan epik di planet gurun yang jauh, Paul Atreides, pewaris keluarga bangsawan yang memiliki takdir besar, terlibat dalam pertempuran untuk mengendalikan sumber daya paling berharga di dunia dan melindungi orang yang dicintainya.",
      jamTayang: ["12", "15", "18", "21"],
      hariTayang: ["Senin", "Rabu", "Jumat", "Minggu"]
    },
    {
      judul: "The Suicide Squad",
      bulanRilis: "Agustus 2021",
      kategoriUmur: "Dewasa",
      sutradara: "James Gunn",
      aktor: "Margot Robbie, Idris Elba, John Cena",
      sinopsis: "Dalam misi baru yang berbahaya, tim antihero super penjahat dikirim ke pulau terpencil untuk menghancurkan instalasi rahasia dan menghadapi pasukan musuh yang kuat.",
      jamTayang: ["12", "15", "18", "21"],
      hariTayang: ["Senin", "Selasa", "Kamis", "Minggu"]
    },
    {
      judul: "No Time to Die",
      bulanRilis: "Oktober 2021",
      kategoriUmur: "Remaja",
      sutradara: "Cary Joji Fukunaga",
      aktor: "Daniel Craig, Léa Seydoux, Rami Malek",
      sinopsis: "James Bond telah pensiun dan menjalani kehidupan yang tenang, tetapi ketika seorang penjahat misterius muncul, ia terpaksa melanjutkan tugasnya untuk menghadapi ancaman global yang mengubah segalanya.",
      jamTayang: ["9", "15", "18", "21"],
      hariTayang: ["Selasa", "Kamis", "Jumat", "Minggu"]
    },
    {
      judul: "A Quiet Place Part II",
      bulanRilis: "Mei 2021",
      kategoriUmur: "Remaja",
      sutradara: "John Krasinski",
      aktor: "Emily Blunt, Cillian Murphy, Millicent Simmonds",
      sinopsis: "Dalam dunia yang dilanda oleh makhluk mengerikan yang peka terhadap suara, keluarga Abbott harus berjuang untuk bertahan hidup dalam kesunyian dan mencari tempat perlindungan baru.",
      jamTayang: ["9", "12", "18", "21"],
      hariTayang: ["Selasa", "Kamis", "Sabtu", "Minggu"]
    },
    {
      judul: "Cruella",
      bulanRilis: "Mei 2021",
      kategoriUmur: "Remaja",
      sutradara: "Craig Gillespie",
      aktor: "Emma Stone, Emma Thompson, Joel Fry",
      sinopsis: "Cerita asal Cruella de Vil yang ikonik, yang menceritakan tentang perjalanan moda terobsesi dan keinginan untuk menjadi seorang desainer terkenal, sambil menghadapi obsesi dengan kulit anjing Dalmatian.",
      jamTayang: ["9", "12", "15", "18"],
      hariTayang: ["Senin", "Rabu", "Jumat", "Sabtu"]
    },
    {
      judul: "Jungle Cruise",
      bulanRilis: "Juli 2021",
      kategoriUmur: "Remaja",
      sutradara: "Jaume Collet-Serra",
      aktor: "Dwayne Johnson, Emily Blunt, Edgar Ramírez",
      sinopsis: "Pemandu wisata eksentrik dan seorang penjelajah bergabung dalam petualangan epik untuk menemukan pohon kehidupan yang legendaris, tetapi mereka harus menghadapi bahaya dan keajaiban di sepanjang sungai Amazon yang mematikan.",
      jamTayang: ["9", "12", "15"],
      hariTayang: ["Senin", "Selasa", "Kamis", "Sabtu"]
    }
  ];
