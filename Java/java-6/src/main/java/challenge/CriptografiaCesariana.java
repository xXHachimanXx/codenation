package challenge;

public class CriptografiaCesariana implements Criptografia {
    @Override
    public String criptografar(String texto)
    {
        String criptografado = "";
        int cifra = 3;
        char ch;
        char chCript;

        if(texto != "") {
            for (int x = 0; x < texto.length(); x++) {
                ch = Character.toLowerCase(texto.charAt(x));
                if (ch >= 97 && ch <= 122) {
                    chCript = (char) (((int) ch + cifra) % 122);
                } else {
                    chCript = ch;
                }

                criptografado += chCript;
            }
        }else{
            if(texto == "") { throw new IllegalArgumentException(); }
            else { throw new NullPointerException(); }
        }
        return criptografado;
    }


    @Override
    public String descriptografar(String texto)
    {
        String descrip = "";
        int cifra = 3;
        char ch;
        char chDescript;

        if(texto != "" && texto != null) {
            for (int x = 0; x < texto.length(); x++) {
                ch = Character.toLowerCase(texto.charAt(x));
                if (ch >= 97 && ch <= 122) {
                    chDescript = (char) ((ch - cifra - 97) % 26 + 97);
                } else {
                    chDescript = ch;
                }

                descrip += chDescript;
            }
        }
        else{
            if(texto == "") { throw new IllegalArgumentException(); }
            else { throw new NullPointerException(); }
        }
        return descrip;
    }

}

