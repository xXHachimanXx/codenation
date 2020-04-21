package br.com.codenation.gerenciadores;

import br.com.codenation.model.Jogador;
import br.com.codenation.model.Time;

import java.util.ArrayList;
import java.util.List;

public class GerenciadorJogadores
{
    public static boolean jogadorExiste(Long id, Long idTime)
    {
        return buscarJogador(id, idTime) != null;
    }

    public static Jogador buscarJogador(Long id, Long idTime)
    {
        Jogador jogador = null;
        List<Jogador> listaDeJogadores = GerenciadorTimes.buscarTime(idTime).getJogadoresDoTime();

        // Busca sequencial no vetor de jogadores do time
        for (int x = 0; x < listaDeJogadores.size(); x++) {
            if (listaDeJogadores.get(x).getIdJogador() == id) {
                x = listaDeJogadores.size(); // Finalizar loop
                jogador = listaDeJogadores.get(x);
            }
        }

        return jogador;
    }
}
