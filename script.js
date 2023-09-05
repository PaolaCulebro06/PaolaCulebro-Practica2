$(document).ready(function() {
    $("#generar").click(function(){
        var nombre = $("#nombre").val().toUpperCase();
        var apellido_p = $("#apellido_p").val().toUpperCase();
        var apellido_m = $("#apellido_m").val().toUpperCase();
        var fechanacimiento = $("#fechanacimiento").val();
        
        var rfc = generarRFC(nombre, apellido_p, apellido_m, fechanacimiento);
        
        var ultimos3 = generarUltimos3Caracteres();
        
        $("#resultado").val(rfc + ultimos3);
    });
    
    function generarRFC(nombre, apellido_p, apellido_m, fechanacimiento) {
        var rfcParcial = apellido_p.charAt(0) + obtenerSiguienteVocal(apellido_p) + apellido_m.charAt(0) + nombre.charAt(0) +
                          fechanacimiento.substring(2, 4) + fechanacimiento.substring(5, 7) + fechanacimiento.substring(8, 10);
        
        return rfcParcial;
    }

    function obtenerSiguienteVocal(texto) {
        var vocales = "AEIOU";
        for (var i = 1; i < texto.length; i++) {
            if (vocales.includes(texto.charAt(i))) {
                return texto.charAt(i);
            }
        }
        return "";
    }
    
    function generarUltimos3Caracteres() {
        var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var ultimosCaracteres = "";
        
        for (var i = 0; i < 3; i++) {
            ultimosCaracteres += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        
        return ultimosCaracteres;
    }

    
});
$(document).ready(function() {
    $("#consultar").click(function() {
        $.get("https://jsonplaceholder.typicode.com/users/7", function(data) {
            $("#name").val(data.name);
            $("#email").val(data.email);
        });
    });
});
