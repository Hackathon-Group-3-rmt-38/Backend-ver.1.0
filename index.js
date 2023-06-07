// Bebas mau menggunakan berapa function
function name(params) {
    
}

function name(params) {
    
}

function name(params) {
    
}

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
  movie: "John Wick: Chapter 4",
  jumlahTicketDibeli: 5,
  usia: 21,
  schedule: "12.00",
  nomorKursi: ["C7", "C8", "C9", "C10", "C11"]
}

// EXPECTED OUTPUT
// nama, harga total tiket, jadwal jam & hari, nomor kursi. Dalam Array of Object.

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
