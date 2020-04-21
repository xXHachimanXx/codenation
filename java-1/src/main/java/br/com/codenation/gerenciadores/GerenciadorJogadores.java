package br.com.codenation.gerenciadores;

import br.com.codenation.desafio.exceptions.JogadorNaoEncontradoException;
import br.com.codenation.desafio.exceptions.TimeNaoEncontradoException;
import br.com.codenation.model.Jogador;
import br.com.codenation.model.Time;

import java.util.ArrayList;
import java.util.List;

public class GerenciadorJogadores
{
    public static final List<Jogador> listaDeJogadores = new ArrayList <>();

    public static boolean jogadorExiste(Long id) throws NullPointerException, JogadorNaoEncontradoException
    {
        boolean resp = false;

        if(id >= 0 && id != null) {
            if (buscarJogador(id) != null) {
                resp = true;
            } else {
                throw new JogadorNaoEncontradoException("Jogador não existe");
            }
        }else {
            throw new NullPointerException("Id inválido");
        }

        return resp;
    }

    public static Jogador buscarJogador(Long id) throws NullPointerException
    {
        Jogador jogador = null;
        if(id >= 0 && id != null) {
            // Busca sequencial no vetor de jogadores do time
            for (int x = 0; x < listaDeJogadores.size(); x++) {
                if (listaDeJogadores.get(x).getIdJogador() == id) {
                    x = listaDeJogadores.size(); // Finalizar loop
                    jogador = listaDeJogadores.get(x);
                }
            }
        }else {
            throw new NullPointerException("Id inválido");
        }

        return jogador;
    }
}
