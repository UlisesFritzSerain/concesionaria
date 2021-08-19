const autos = require("./autos")

const concesionaria = {
   autos: autos,

   buscarAuto: function (patente) {

      let resultado = this.autos.find((auto) => auto.patente === patente);
      return (resultado === undefined) ? null : resultado
   },
venderAuto: function (patente) {

let objetoAuto = this.buscarAuto(patente);
if (objetoAuto != null){
   objetoAuto.vendido = true;
}
},
autosParaLaVenta: function(){
   return this.autos.filter(auto => auto.vendido === false)
},
autosNuevos: function(){
   let autosVentas = this.autosParaLaVenta();
   return autosVentas.filter(auto => auto.km <= 100);
}


};

