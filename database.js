// database.js
const database = {
  berita: [
    {
      id: 1,
      title: "Revolusi AI dalam Dunia Pendidikan",
      category: "Teknologi",
      date: "12 Mei 2025",
      author: "Administrator",
      image: "news1.jpg",
      excerpt: "Inovasi terbaru dalam pembelajaran berbasis AI.",
      content: "<p>Artificial Intelligence (AI) telah membawa perubahan signifikan dalam dunia pendidikan. Teknologi ini memungkinkan pengalaman belajar yang lebih personal dan adaptif. Dengan algoritma canggih, sistem AI dapat menganalisis gaya belajar setiap siswa dan menyesuaikan materi pembelajaran sesuai kebutuhan individu.</p>",
    },
    {
      id: 2,
      title: "Strategi Pembelajaran Modern",
      category: "Pendidikan",
      date: "2025",
      author: "Administrator",
      image: "news2.jpg",
      excerpt: "Metode baru dalam sistem pendidikan digital.",
      content: "<p>(text)</p>",
    },
    {
      id: 3,
      title: "Puncak Kemarau Di Indonesia Diprediksi Bulan Juni",
      category: "Cuaca",
      date: "2025",
      author: "Administrator",
      image: "news3.jpg",
      excerpt: "BMKG memprediksi puncak musim kemarau di indonesia akan teejadi pada bulan Juni hingga Agustus 2025, dengan variasi wilayah dan sifat kemarau.",
      content: "<p>(text)</p>",
    },
    {
      id: 4,
      title: "Indonesia Jadi Incaran Utama Serangan Siber Canggih",
      category: "Keamana Siber",
      date: "2025",
      author: "Administrator",
      image: "news4.jpg",
      excerpt: "Grup-IB meliris laporan yamg mengungkap Indonesia sebagai target uta serangan siber canggih.",
      content: "<p>(text)</p>",
    },
    {
      id: 5,
      title: "Mantan Presiden Filipina Duterte Ditangkap Atas Perintah ICC",
      category: "Hukum Internasional",
      date: "2025",
      author: "Administrator",
      image: "news5.jpg",
      excerpt: "Rodrigo Duterte ditangkap di Bandara Internasional Manila terkait kasus kejahatan terhadap kemanusiaan",
      content: "<p>(text)</p>",
    },
    {
      id: 6,
      title: "Roket SpaceX Meledak, Ganggu 240 Penerbangan di AS",
      category: "Teknologi",
      date: "2025",
      author: "Administrator",
      image: "news6.jpg",
      excerpt: "Roket Starship SpaceX meledak, mempengaruhi 240 penerbangan dan memicu penyelidikan FAA",
      content: "<p>(text)</p>",
    },
    {
      id: 7,
      title: "170 Warga Tewas Akibat Banjir dan Tanah Longsor di Nepal",
      category: "Bencana Alam",
      date: "2025",
      author: "Administrator",
      image: "news7.jpg",
      excerpt: "Banjir dan tanah longsor di Nepal menyebabkan 170 korbam jiwa dan kerusakan infrastruktur",
      content: "<p>(text)</p>",
    }, 
    {
      id: 8,
      title: "Misssouri Luluh Lantak Disapu Tornado",
      category: "Bencana Alam",
      date: "2025",
      author: "Administrator",
      image: "news8.jpg",
      excerpt: "Kota Missouri, AS, diterjamg tornado hebat, menyebabkan kerusakan parah",
      content: "<p>(text)</p>",
    },
    {
      id: 9,
      title: "Mark Carney Alan Gantikan Justin Trudeau Jadi PM Kanada",
      category: "Politik",
      date: "2025",
      author: "Administrator",
      image: "news9.jpg",
      excerpt: "Mark Carney trpilih sebagai pemimipin partai Liberal dan akan mengantikan Justin Trudeau sebagai Perdana Menteri Kanada",
      content: "<p>(text)</p>",
    },
    {
      id: 10,
      title: "Chinan Umumkam Tarif Balasan untuk Produk Makanan dari Kanada",
      category: "Ekonomi",
      date: "2025",
      author: "Administrator",
      image: "news10.jpg",
      excerpt: "China umumkan tarif baru senilai lebih dari US$ 2,6 miliar pafa produk makanan Kanada sebagai tanggapan atsa bea masuk dari Ottawa",
      content: "<p>(text)</p>",
    },
    {
      id: 11,
      title: "CIA Sebut AS Stop Bantuan Intelejen dan Senjata ke Ukraina",
      category: "Militer",
      date: "2025",
      author: "Administrator",
      image: "news11.jpg",
      excerpt: "As menghentikan semtara dukungan intelejen dan senjata ke Ukraina setelah bentrokan di Gedung Putih antara Trump dan Zelensky",
      content: "<p>(tex)</p>",
    },
    {
      id: 12,
      title: "Bursa Wall Steert Rontok, Infestor Panik Kebijakam Trump",
      category: "Ekonomi",
      date: "2025",
      author: "Administrator",
      image: "news12.jpg",
      excerpt: "Indeks bursa Wall Street anjlok akibat kekhwatrian terhadap kebijakan ekonomi Presiden Trump",
      content: "<p>(text)</p>",
    },
  ],
  
  
  buku: [
    {
      id: 1,
      title: "Seni Menulis Kreatif",
      author: "Andrea Hirata",
      cover: "book1.jpg",
      publisher: "Bentang Pustaka",
      year: 2023,
      chapters: [
        {
          title: "Bab 1: Dasar-Dasar Menulis",
          pages: [
            "Konten halaman 1...",
            "Konten halaman 2...",
            "Konten halaman 3..."
          ]
        },
        {
          title: "Bab 2: Mengembangkan Karakter",
          pages: [
            "Konten halaman 1...",
            "Konten halaman 2..."
          ]
        }
      ]
    }
  ],

  // DATA NOVEL
  novel: [
    {
      id: 1,
      title: "Rembulan Tengah Malam",
      genre: "romance",
      cover: "novel1.png",
      chapters: [
        {
          title: "Pertemuan Tak Terduga",
          content: "Pada suatu senja yang kelam...",
          choices: [
            {
              text: "Terima tawarannya",
              next: 2
            },
            {
              text: "Tolak dengan halus",
              next: 3
            }
          ]
        },
        {
          title: "Jalan Berliku",
          content: "Dia melangkah dengan ragu...",
          choices: []
        }
      ]
    }
  ]
};