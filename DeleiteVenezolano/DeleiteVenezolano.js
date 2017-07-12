
    function ocultar() {
      var inicio = document.getElementById("sec_inicio");
      inicio.style.display = "none";
      var nosotros = document.getElementById("sec_nosotros");
      nosotros.style.display = "none";
      var menu = document.getElementById("sec_menu");
      menu.style.display = "none";
      var promocion = document.getElementById("sec_promociones");
      promocion.style.display = "none";
      var contactenos = document.getElementById("sec_contactenos");
      contactenos.style.display = "none";
      var comprar = document.getElementById("sec_comprar");
      comprar.style.display = "none";
      var confirmado = document.getElementById("sec_confirmado");
      confirmado.style.display = "none";
      var perfil = document.getElementById("sec_perfil");
      perfil.style.display = "none";

    }

    function mostrar2(ref) {
      ocultar();
      var elemento = document.getElementById(ref);
      elemento.style.display = "block";
      alert('Has acumulado 10 puntos :)')
    }

    function mostrar(ref) {
      ocultar();
      var elemento = document.getElementById(ref);
      elemento.style.display = "block";
    }

    function principal() {
      ocultar();
      var inicio = document.getElementById("sec_inicio");
      inicio.style.display = "block";
    }

    function cambio(ref) {
      ocultar();
      var elemento = document.getElementById(ref);
      elemento.style.display = "block";
      if (ref == "sec_salado") {
        mostrar("sec_menu");
        salado();
      } else if (ref == "sec_dulce") {
        mostrar("sec_menu");
        dulce();
      } else if (ref == "sec_bebidas") {
        mostrar("sec_menu");
        bebidas();
      } else if (ref == "sec_adicionales") {
        mostrar("sec_menu");
        adicionales();
      }
    }
    //Para la barra de menu lateral
    function ocultar2() {
      var salado = document.getElementById("sec_salado");
      salado.style.display = "none";
      var dulce = document.getElementById("sec_dulce");
      dulce.style.display = "none";
      var bebidas = document.getElementById("sec_bebidas");
      bebidas.style.display = "none";
      var adicionales = document.getElementById("sec_adicionales");
      adicionales.style.display = "none";
    }

    function salado() {
      ocultar2();
      var salado = document.getElementById("sec_salado");
      salado.style.display = "block";
    }

    function dulce() {
      ocultar2();
      var dulce = document.getElementById("sec_dulce");
      dulce.style.display = "block";
    }

    function bebidas() {
      ocultar2();
      var bebidas = document.getElementById("sec_bebidas");
      bebidas.style.display = "block";
    }

    function adicionales() {
      ocultar2();
      var adicionales = document.getElementById("sec_adicionales");
      adicionales.style.display = "block";
    }

    function cambio2(ref) {
      ocultar2();
      var elemento = document.getElementById(ref);
      elemento.style.display = "block";
    }
function primero(){
 $(document).ready(function () {

      $("#myModal2").modal("show");

      $(".close").click(function () {
        $("#myModal3").modal("show");
      });
    });

      var __slice = [].slice;

    (function ($, window) {
      var Starrr;

      Starrr = (function () {
        Starrr.prototype.defaults = {
          rating: void 0,
          numStars: 5,
          change: function (e, value) {}
        };

        function Starrr($el, options) {
          var i, _, _ref,
            _this = this;

          this.options = $.extend({}, this.defaults, options);
          this.$el = $el;
          _ref = this.defaults;
          for (i in _ref) {
            _ = _ref[i];
            if (this.$el.data(i) != null) {
              this.options[i] = this.$el.data(i);
            }
          }
          this.createStars();
          this.syncRating();
          this.$el.on('mouseover.starrr', 'span', function (e) {
            return _this.syncRating(_this.$el.find('span').index(e.currentTarget) + 1);
          });
          this.$el.on('mouseout.starrr', function () {
            return _this.syncRating();
          });
          this.$el.on('click.starrr', 'span', function (e) {
            return _this.setRating(_this.$el.find('span').index(e.currentTarget) + 1);
          });
          this.$el.on('starrr:change', this.options.change);
        }

        Starrr.prototype.createStars = function () {
          var _i, _ref, _results;

          _results = [];
          for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
            _results.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));
          }
          return _results;
        };

        Starrr.prototype.setRating = function (rating) {
          if (this.options.rating === rating) {
            rating = void 0;
          }
          this.options.rating = rating;
          this.syncRating();
          return this.$el.trigger('starrr:change', rating);
        };

        Starrr.prototype.syncRating = function (rating) {
          var i, _i, _j, _ref;

          rating || (rating = this.options.rating);
          if (rating) {
            for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --
              _i) {
              this.$el.find('span').eq(i).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
            }
          }
          if (rating && rating < 5) {
            for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
              this.$el.find('span').eq(i).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
            }
          }
          if (!rating) {
            return this.$el.find('span').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
          }
        };

        return Starrr;

      })();
      return $.fn.extend({
        starrr: function () {
          var args, option;

          option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          return this.each(function () {
            var data;

            data = $(this).data('star-rating');
            if (!data) {
              $(this).data('star-rating', (data = new Starrr($(this), option)));
            }
            if (typeof option === 'string') {
              return data[option].apply(data, args);
            }
          });
        }
      });
    })(window.jQuery, window);

    $(function () {
      return $(".starrr").starrr();
    });

    $(document).ready(function () {

      $('#hearts').on('starrr:change', function (e, value) {
        $('#count').html(value);

        var mensaje = "Has calificado a Deleite Venezolano con " + value + " estrellas"
        alert(mensaje);
      });

    });
}
   


  

    function cambiaimagen(nuevaimagen, titulo, precio) {
      var imagenid = document.getElementById('prueba');
      imagenid.src = nuevaimagen;
      $('#tituloimagen').html(titulo);
      $('#precioimagen').html(precio);
      alert('Producto agregado al carrito');
      var cantidades = document.getElementById("canti");
      cantidades.style.display = "block";
    }

    function calculo() {
      var cantidad = $('#p1').val();
      var p = $('#precio').html();
      pre = parseInt(p);
      var calcular = pre * cantidad;
      $('#precioimagen').html('Precio: ' + calcular + ' soles.');
    }

    function cambiaimagen1(nuevaimagen, titulo, precio) {
      var imagenid = document.getElementById('prueba1');
      imagenid.src = nuevaimagen;
      $('#tituloimagen1').html(titulo);
      $('#precioimagen1').html(precio);
      alert('Producto agregado al carrito');
      var cantidades = document.getElementById("canti1");
      cantidades.style.display = "block";
    }

    function calculo1() {
      var cantidad = $('#p2').val();
      var p = $('#precio1').html();
      pre = parseInt(p);
      var calcular = pre * cantidad;
      $('#precioimagen1').html('Precio: ' + calcular + ' soles.');
    }

    function cambiaimagen2(nuevaimagen, titulo, precio) {
      var imagenid = document.getElementById('prueba2');
      imagenid.src = nuevaimagen;
      $('#tituloimagen2').html(titulo);
      $('#precioimagen2').html(precio);
      alert('Producto agregado al carrito');
      var cantidades = document.getElementById("canti2");
      cantidades.style.display = "block";
    }

    function calculo2() {
      var cantidad = $('#p3').val();
      var p = $('#precio2').html();
      pre = parseInt(p);
      var calcular = pre * cantidad;
      $('#precioimagen2').html('Precio: ' + calcular + ' soles.');
    }

    function calculototal() {
      var cantidad = $('#p1').val();
      var calcular = 13 * cantidad;
      var cantidad1 = $('#p2').val();
      var calcular1 = 15 * cantidad1;
      var cantidad3 = $('#p3').val();
      var calcular3 = 7 * cantidad3;
      var total = calcular + calcular1 + calcular3;
      $('#preciototal').html('TOTAL: S/' + total);
    }

    function calculopuntos() {
      var acum = $('#puntoacum').html();
      var punto = parseInt(acum);
      var puntos;
      if (acum = '0') {
        puntos = punto + 10;
        acum = $('#puntoacum').html(puntos);
      }
    }

    function cambioperfil(nuevaimagen, descrip) {
      var imagenid = document.getElementById('ima');
      imagenid.src = nuevaimagen;
      $('#descripcion').html(descrip);
    }

    function cambioperfil1(nuevaimagen, descrip) {
      var imagenid = document.getElementById('ima1');
      imagenid.src = nuevaimagen;
      $('#descripcion1').html(descrip);
    }

    function cambioperfil2(nuevaimagen, descrip) {
      var imagenid = document.getElementById('ima2');
      imagenid.src = nuevaimagen;
      $('#descripcion2').html(descrip);
    }

    function ingresousuario() {
      $('#ingreso').css({
        'visibility': 'hidden'
      });
      $('#usu').css({
        'visibility': 'visible'
      });
      $('#menuperfil').css({
        'visibility': 'visible'
      });
      $('#btn1').css({
        'visibility': 'visible'
      });
      $('#myBtn').css({
        'visibility': 'hidden'
      });
    }

    function salirusuario() {
      $('#ingreso').css({
        'visibility': 'visible'
      });
      $('#usu').css({
        'visibility': 'hidden'
      })
      $('#menuperfil').css({
        'visibility': 'hidden'
      });
      $('#btn1').css({
        'visibility': 'hidden'
      });
      $('#myBtn').css({
        'visibility': 'visible'
      });
      alert('Sesión cerrada.');
    }
    function date(){
      var now = new Date();
      $('#fecha1').html(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear()+" "+now.getHours()+":"+now.getMinutes());
    }



  //SDK para el inicio de facebook
  
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.9&appId=1819488521703347";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  

  
    //Para los MODALS
    function inicioModal(){
 $(document).ready(function () {
      $("#myBtn").click(function () {
        $("#myModal1").modal();
      });
    });
    $(document).ready(function () {
      $("#myBtn1").click(function () {
        $("#myModal1").modal("hide");
        $("#myModal4").modal();
      });
    });
    }
   

