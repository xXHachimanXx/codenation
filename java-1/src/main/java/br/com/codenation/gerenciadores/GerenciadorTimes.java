package br.com.codenation.gerenciadores;

import br.com.codenation.desafio.exceptions.TimeNaoEncontradoException;
import br.com.codenation.model.Jogador;
import br.com.codenation.model.Time;
import jdk.nashorn.api.scripting.ScriptObjectMirror;

import java.util.ArrayList;
import java.util.List;

public class GerenciadorTimes
{
    public static final List <Time> listaDeTimes = new ArrayList <>();

    public static boolean timeExiste(Long id) throws TimeNaoEncontradoException {
        boolean resp = false;

        if(buscarTime(id) != null) {
            resp = true;
        }else {
            throw new TimeNaoEncontradoException();
        }
        return resp;
    }

    public static Time buscarTime(Long id)
    {
        Time time = null;

        // Busca sequencial no vetor de times
        for (int x = 0; x < listaDeTimes.size(); x++) {
            if (listaDeTimes.get(x).getIdTime() == id) {
                x = listaDeTimes.size();
                time = listaDeTimes.get(x);
            }
        }

        return time;
    }


}
