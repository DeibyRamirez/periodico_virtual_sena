import java.util.Random;

public class SopaDeLetras {
    public static void main(String[] args) {
        Random r = new Random();
        String[] palabras = {
                "ETICA", "INNOVACION", "DESARROLLO", "COMPROMISO", "FORMACION", "RESPONSABILIDAD"
        };

        int Nfilas = 10;
        int Ncolumnas = 20;

        String[][] matriz = new String[Nfilas][Ncolumnas];

        // Inicializar la matriz con letras aleatorias
        for (int i = 0; i < Nfilas; i++) {
            for (int j = 0; j < Ncolumnas; j++) {
                matriz[i][j] = String.valueOf((char) ('A' + r.nextInt(26)));
            }
        }

        // Colocar palabras en posiciones aleatorias
        for (String palabra : palabras) {
            boolean colocada = false;  // Variable para verificar si la palabra se colocó
            int intentos = 0;  // Control de intentos para evitar ciclos infinitos

            // Se intentará colocar la palabra en posiciones aleatorias hasta que se logre o se superen los intentos
            while (!colocada && intentos < 1000) {
                int fila = r.nextInt(Nfilas);
                int columna = r.nextInt(Ncolumnas);

                // Verificar si hay espacio en la fila para la palabra
                if (columna + palabra.length() <= Ncolumnas) {
                    boolean espacioLibre = true;

                    // Comprobar que las posiciones estén libres
                    for (int j = 0; j < palabra.length(); j++) {
                        if (matriz[fila][columna + j].length() != 1) {
                            espacioLibre = false;
                            break;
                        }
                    }

                    // Si hay espacio libre, colocar la palabra
                    if (espacioLibre) {
                        for (int j = 0; j < palabra.length(); j++) {
                            matriz[fila][columna + j] = String.valueOf(palabra.charAt(j));
                        }
                        colocada = true;  // La palabra fue colocada
                    }
                }

                intentos++;
            }

            // Si no se pudo colocar la palabra, se muestra un mensaje
            if (!colocada) {
                System.out.println("No se pudo colocar la palabra: " + palabra);
            }
        }

        // Generar la salida como JSON
        System.out.println("[");
        for (int i = 0; i < Nfilas; i++) {
            System.out.print("  [");
            for (int j = 0; j < Ncolumnas; j++) {
                System.out.print("\"" + matriz[i][j] + "\"");
                if (j < Ncolumnas - 1)
                    System.out.print(", ");
            }
            System.out.print("]");
            if (i < Nfilas - 1)
                System.out.println(",");
        }
        System.out.println("\n]");

        // Ejemplo de conversión a HTML
        String htmlTabla = convertirAMatrizHTML(matriz);
        System.out.println(htmlTabla);
    }

    public static String convertirAMatrizHTML(String[][] matriz) {
        StringBuilder html = new StringBuilder();
        html.append("<table border='1'>");

        for (int i = 0; i < matriz.length; i++) {
            html.append("<tr>");
            for (int j = 0; j < matriz[i].length; j++) {
                html.append("<td>").append(matriz[i][j]).append("</td>");
            }
            html.append("</tr>");
        }

        html.append("</table>");
        return html.toString();
    }
}
