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
            boolean colocada = false;
            int intentos = 0;

            while (!colocada && intentos < 1000) {
                int fila = r.nextInt(Nfilas);
                int columna = r.nextInt(Ncolumnas);
                // Elegir una dirección: 0 = horizontal, 1 = vertical
                int direccion = r.nextInt(2); 

                if (direccion == 0 && columna + palabra.length() <= Ncolumnas) { // Horizontal
                    boolean espacioLibre = true;
                    for (int j = 0; j < palabra.length(); j++) {
                        if (!matriz[fila][columna + j].equals(String.valueOf((char) ('A' + r.nextInt(26))))) {
                            espacioLibre = false;
                            break;
                        }
                    }

                    if (espacioLibre) {
                        for (int j = 0; j < palabra.length(); j++) {
                            matriz[fila][columna + j] = String.valueOf(palabra.charAt(j));
                        }
                        colocada = true;
                    }
                } else if (direccion == 1 && fila + palabra.length() <= Nfilas) { // Vertical
                    boolean espacioLibre = true;
                    for (int j = 0; j < palabra.length(); j++) {
                        if (!matriz[fila + j][columna].equals(String.valueOf((char) ('A' + r.nextInt(26))))) {
                            espacioLibre = false;
                            break;
                        }
                    }

                    if (espacioLibre) {
                        for (int j = 0; j < palabra.length(); j++) {
                            matriz[fila + j][columna] = String.valueOf(palabra.charAt(j));
                        }
                        colocada = true;
                    }
                }
                intentos++;
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
