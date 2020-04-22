package br.com.codenation.gerenciadores;

import br.com.codenation.desafio.exceptions.IdentificadorUtilizadoException;
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

        if (buscarJogador(id) != null) {
            resp = true;
        } else {
            throw new JogadorNaoEncontradoException("Jogador não existe");
        }

        return resp;
    }

    public static Jogador buscarJogador(Long id) throws NullPointerException, JogadorNaoEncontradoException
    {
        Jogador jogador = null;

        // Busca sequencial no vetor de jogadores do time
        for (int x = 0; x < listaDeJogadores.size(); x++) {
            if (listaDeJogadores.get(x).getIdJogador() == id) {
                x = listaDeJogadores.size(); // Finalizar loop
                jogador = listaDeJogadores.get(x);
            }
        }
        if(jogador == null) { throw new JogadorNaoEncontradoException("Jogador não encontrado"); }


        return jogador;
    }

    public static void identificadorDeJogadorUtilizado(Long idJogador) throws IdentificadorUtilizadoException
    {
        for(Jogador t : listaDeJogadores) {
            if(t.getIdJogador() == idJogador){
                throw new IdentificadorUtilizadoException();
            }
        }
    }

    public static List<Jogador> copiarListaDeJogadores()
    {
        List<Jogador> copia = new ArrayList <>();
        for ( Jogador j : listaDeJogadores ) {
            copia.add(j);
        }

        return copia;
    }

}
