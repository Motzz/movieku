var $$ = Dom7;

var device = Framework7.getDevice();

var movies = [];
movies.push({
  judul: "Avenger Infinity War",
  sinopsis:
    "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. ",
  poster: "https://ubaya.fun/images/1.jpg",
});
movies.push({
  judul: "Joker",
  sinopsis:
    "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks --       the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he is part of the world around him. ",
  poster: "https://ubaya.fun/images/2.jpg",
});
movies.push({
  judul: "OnWard",
  sinopsis:
    "Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father.        Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries.",
  poster: "https://ubaya.fun/images/3.jpg",
});
movies.push({
  judul: "Knives Out",
  sinopsis:
    "The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious, but there is one thing that renowned Detective Benoit Blanc knows for sure -- everyone in the wildly dysfunctional Thrombey family is a suspect. ",
  poster: "https://ubaya.fun/images/4.jpg",
});
movies.push({
  judul: "Mulan",
  sinopsis: "A young Chinese maiden disguises herself as a male warrior in order to save her father. ",
  poster: "https://ubaya.fun/images/5.jpg",
});
movies.push({
  judul: "Tenet",
  sinopsis: "In a twilight world of international espionage, an unnamed CIA operative, known as The Protagonist, is recruited by a mysterious organization called Tenet to participate in a global assignment that unfolds beyond real time.",
  poster: "https://ubaya.net/images/5.jpg",
});
function addTicket(id) {
  if (isNaN(localStorage.jumlah_item)) {
    //jika keranjang masik kosong
    localStorage.jumlah_item = 1;
    localStorage.item_0_id = id;
    localStorage.item_0_jumlah = 1;
  } else {
    //jika keranjang tidak kosong/ sudah ada pembelian
    var y = localStorage.jumlah_item;
    var ada = false;
    for (var i = 0; i < y; i++) {
      if (localStorage["item_" + i + "_id"] == id) {
        //jika yang dibeli skrg avenger dan sudah membeli avenger sebelumnya masuk sini
        localStorage["item_" + i + "_jumlah"] = parseInt(localStorage["item_" + i + "_jumlah"]) + 1;
        ada = true;
      }
    }
    if (ada == false) {
      //jika yang dibeli batman tapi batman belum ada di keranjang sebelumnya
      localStorage["item_" + y + "_id"] = id;
      localStorage["item_" + y + "_jumlah"] = 1;
      y++;
      localStorage.jumlah_item = y;
    }
  }
  app.dialog.alert("Berhasil menambah tiket");
}
function deleteFilm(id) {
  localStorage["item_" + id + "_jumlah"] = parseInt(localStorage["item_" + id + "_jumlah"]) - 1;

  if (localStorage["item_" + id + "_jumlah"] <= 0) {
    localStorage.removeItem("item_" + id + "_id");
    localStorage.removeItem("item_" + id + "_jumlah");
    localStorage.jumlah_item = parseInt(localStorage.jumlah_item) - 1;
  } else if (localStorage.jumlah_item <= 0) {
    localStorage.removeItem("jumlah_item");
  }
  location.reload();
  app.dialog.alert("Berhasil menghapus data");
}
var app = new Framework7({
  name: "week2_160419007", // App name
  theme: "auto", // Automatic theme detection
  el: "#app", // App root element

  id: "io.framework7.myapp", // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,

  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
      var teletubbies = ["tinky winky", "dipsi", "lalaa", "po"];

      var actor = [];
      actor.push({
        nama: "Valkyrie",
        biodata: "Salah satu aktor yang memerankan captain amerika pada serial avenger",
        foto: "https://cdn.kincir.com/1/production/media/2017/oktober/tessa-thompson/7-tessa-thompson-700x700.jpg",
      });
      actor.push({
        nama: "Rocket Raccon",
        biodata: "Salah satu aktor yang memerankan racoon serial avenger",
        foto: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bradley-cooper-and-gloria-campano-attend-the-94th-annual-news-photo-1648420553.jpg",
      });
      actor.push({
        nama: "James Rhodes",
        biodata: "Salah satu aktor yang memerankan war machine pada serial avenger",
        foto: "https://static.wikia.nocookie.net/moviedatabase/images/a/a3/James_Rhodes.jpg",
      });
      actor.push({
        nama: "Natasha Romanoff",
        biodata: "Salah satu aktor yang memerankan hawkeye pada serial avenger ",
        foto: "https://i.pinimg.com/originals/14/e6/34/14e63434d7adeb7c87c35fb3b7f49d0d.png",
      });
      actor.push({
        nama: "Clint Barton",
        biodata: "Salah satu aktor pada serial avenger",
        foto: "https://www.slashfilm.com/img/gallery/how-hawkeye-makes-clint-barton-more-than-the-mcus-punching-bag-exclusive/l-intro-1637588432.jpg",
      });
      actor.push({
        nama: "Steve Rogers",
        biodata: "Salah satu aktor yang memerankan captain amerika pada serial avenger",
        foto: "https://i0.wp.com/screengeek.net/wp-content/uploads/2019/12/avengers-endgame-captain-america.jpg",
      });

      $$("#btn1").on("click", function () {
        app.dialog.alert("Halo aku adalah alert");
      });

      $$(document).on("page:init", function (e, page) {
        if (page.name == "theater") {
          // $$("#theater").html("<div class='block'><h1>DIUBAH VIA DOM7</h1></div>");
          // teletubbies.forEach((t) => {
          //   $$("#theater").append("<div class='block'><h1>" + t + "</h1></div>");
          // });
          var id = 0;
          movies.forEach((t, id) => {
            $$("#theaters").append(
              "<div class='col-50'><div class='card'>" +
                "<div class='card-header'>" +
                t.judul +
                "</div><div class='card-content'>" +
                "<img src='" +
                t.poster +
                "' width='100%'>" +
                "</div><div class='card-footer'><a  href='/detailmovie/" +
                id +
                "' class='button button-fill'>detail</a>" +
                "<button class='button button-fill' onclick='addTicket(" +
                id +
                ") '>Beli</button>" +
                "</div></div></div>"
            );
            id++;
          });
        } else if (page.name == "aktor") {
          // $$("#theater").html("<div class='block'><h1>DIUBAH VIA DOM7</h1></div>");
          // teletubbies.forEach((t) => {
          //   $$("#theater").append("<div class='block'><h1>" + t + "</h1></div>");
          // });
          var id = 0;
          actor.forEach((t) => {
            $$("#aktor").append(
              "<div class='col-100'><div class='card'>" +
                "<div class='card-header'>" +
                t.nama +
                "</div><div class='card-content '>" +
                "<img src='" +
                t.foto +
                "' width='100%'>" +
                "</div><div class='caed-footer'><a  href='/detailaktor/" +
                id +
                "' class='button button-fill'>detail</a>" +
                "</div></div></div>"
            );
            id++;
          });
        } else if (page.name == "detailmovie") {
          var id = page.router.currentRoute.params.id;
          $$("#detail").html(
            "<div class='card'>" +
              "<div class='card-header'>" +
              movies[id].judul +
              "</div><div class='card-content'>" +
              "<img src='" +
              movies[id].poster +
              "' width='100%'>" +
              "<br><div class='block'><p>" +
              movies[id].sinopsis +
              "</p></div> </div></div>"
          );
        } else if (page.name == "detailaktor") {
          var id = page.router.currentRoute.params.id;
          $$("#detailaktor").html(
            "<div class='card'>" +
              "<div class='card-header'>" +
              actor[id].nama +
              "</div><div class='card-content'>" +
              "<img src='" +
              actor[id].foto +
              "' width='100%'>" +
              "<br><div class='block'><p>" +
              actor[id].biodata +
              "</p></div> </div></div>"
          );
        } else if (page.name == "popularmovie") {
          // getMovies($$("#txtcari").val());
          app.request.post("https://ubaya.fun/hybrid/160419007/movie_api/movielist.php", {}, function (data) {
            // app.dialog.alert(data);
            var arr = JSON.parse(data);
            var moviesApi = arr["data"];
            for (var i = 0; i < moviesApi.length; i++) {
              $$("#ul_listmovie").append("<li><a href='/detailmovie2/" + moviesApi[i]["movie_id"] + "'>" + moviesApi[i]["title"] + "</a></li>");
            }
          });

          $$("#btncari").on("click", function () {
            $$("#ul_listmovie").html(" ");
            app.request.post("https://ubaya.fun/hybrid/160419007/movie_api/movielist.php", { cari: $$("#txtcari").val() }, function (data) {
              // app.dialog.alert(data);
              var arr = JSON.parse(data);
              var moviesApi = arr["data"];
              // alert(data.cari);
              for (var i = 0; i < moviesApi.length; i++) {
                $$("#ul_listmovie").append("<li><a href='/detailmovie2/" + moviesApi[i]["movie_id"] + "'>" + moviesApi[i]["title"] + "</a></li>");
              }
            });
          });
        } else if (page.name == "detailmovie2") {
          var id = page.router.currentRoute.params.id;
          app.request.post("https://ubaya.fun/hybrid/160419007/movie_api/detailmovie.php", { id: id }, function (data) {
            var arr = JSON.parse(data);
            // return arr['data'];
            var arr = JSON.parse(data);
            movie = arr["data"];
            $$("#judul").html(movie["title"]);
            $$("#overview").html(movie["overview"]);
            $$("#url").html(movie["homepage"]);
            genres = movie["genres"];
            casts = movie["casts"];
            $$("#foot").html("<a href='/editmovie/" + movie["movie_id"] + "' class='button button-fill'>Edit</a>");

            for (i = 0; i < genres.length; i++) {
              $$("#genre").append("<li>" + genres[i]["genre_name"] + "</li>");
            }

            for (i = 0; i < casts.length; i++) {
              $$("#cast").append("<li>" + casts[i]["person_name"] + "(" + casts[i]["character_name"] + ")" + "</li>");
            }
          });
        } else if (page.name == "newmovie") {
          app.calendar.create({
            inputEl: "#tx_rdate",
            closeOnSelect: true,
            dateFormat: "yyyy-mm-dd",
          });

          $$("#btnsubmit").on("click", function () {
            app.request.post(
              "https://ubaya.fun/hybrid/160419007/movie_api/newmovie.php",
              { title: $$("#tx_title").val(), homepage: $$("#tx_homepage").val(), overview: $$("#tx_overview").val(), release_date: $$("#tx_rdate").val() },
              function (data) {
                var arr = JSON.parse(data);
                var result = arr["result"];
                if (result == "success") {
                  app.dialog.alert("Sukses menambah data");
                  app.view.main.router.navigate("/editmovie/" + arr["id"], {
                    reloadCurrent: true,
                    pushState: false,
                  });
                } else app.dialog.alert("Gagal menambah data");
              }
            );
          });
        } else if (page.name == "editmovie") {
          var id = page.router.currentRoute.params.id;
          app.request.post("https://ubaya.fun/hybrid/160419007/movie_api/detailmovie.php", { id: id }, function (data) {
            var arr = JSON.parse(data);
            movie = arr["data"];
            $$("#tx_title").val(movie["title"]);
            $$("#tx_homepage").val(movie["homepage"]);
            $$("#tx_overview").html(movie["overview"]);
            $$("#tx_rdate").val(movie["release_date"]);
            genres = movie["genres"];
            for (i = 0; i < genres.length; i++) {
              $$("#ul_genre").append("<li>" + genres[i]["genre_name"] + "</li>");
            }
          });

          app.request.post("https://ubaya.fun/hybrid/160419007/movie_api/genrelist.php", {}, function (data) {
            var arr = JSON.parse(data);
            genres = arr["data"];
            $$("#sel_genre").append("<option value=''>-tambah genre-</option>");
            for (var i = 0; i < genres.length; i++) {
              $$("#sel_genre").append("<option value='" + genres[i]["genre_id"] + "'>" + genres[i]["genre_name"] + "</option>");
            }

            $$("#sel_genre").on("change", function () {
              var genre = $$("#sel_genre :checked").text();
              $$("#ul_genre").append("<li>" + genre + "</li> ");
              app.request.post("https://ubaya.fun/hybrid/160419007/movie_api/addmoviegenre.php", { movie_id: id, genre_id: $$("#sel_genre").val() }, function (data) {
                var arr = JSON.parse(data);
                if (arr["result"] == "success") {
                  $$("#sel_genre").val("");
                }
              });
            });
          });
        } else if (page.name == "login") {
          localStorage.removeItem("username");

          $$("#btnsignin").on("click", function () {
            app.request.post("https://ubaya.fun/hybrid/160419007/movie_api/login.php", { user_id: $$("#username").val(), user_password: $$("#password").val() }, function (data) {
              var arr = JSON.parse(data);
              var result = arr["result"];
              alert(result);
              if (result == "success") {
                localStorage.username = $$("#username").val();
                page.router.back("/");
              } else app.dialog.alert("Username atau password salah");
            });
          });
        } else if (page.name == "cart") {
          var isi_body = ""; //looping sebanyak LS jumlah item
          for (i = 0; i < localStorage.jumlah_item; i++) {
            var juduls = movies[localStorage["item_" + i + "_id"]].judul;
            isi_body =
              isi_body +
              "<tr><td class='pagelabel-cell'>" +
              juduls +
              "</td><td class='numeric-cell'>" +
              localStorage["item_" + i + "_jumlah"] +
              "</td><td class='numeric-cell'>" +
              "<button class='button button-fill' onclick='deleteFilm(" +
              i +
              ") '>Beli</button>" +
              "</td></tr>";
            // alert(juduls);
          }
          $$("#tbody_cart").html(isi_body);
        }
      });

      $$(document).on("page:afterin", function (e, page) {
        if (!localStorage.username) {
          page.router.navigate("/login");
        }
      });
    },
  },
});
