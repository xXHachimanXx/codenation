package br.com.codenation;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import br.com.codenation.desafio.exceptions.TimeNaoEncontradoException;
import br.com.codenation.gerenciadores.GerenciadorTimes;
import br.com.codenation.model.Jogador;
import br.com.codenation.model.Time;
import br.com.codenation.desafio.annotation.Desafio;
import br.com.codenation.desafio.app.MeuTimeInterface;
import br.com.codenation.desafio.exceptions.IdentificadorUtilizadoException;

public class DesafioMeuTimeApplication implements MeuTimeInterface {

	@Desafio("incluirTime")
	public void incluirTime(Long id, String nome, LocalDate dataCriacao, String corUniformePrincipal, String corUniformeSecundario) {
		try {
			Time novoTime = new Time(id, nome, dataCriacao, corUniformePrincipal, corUniformeSecundario);
			GerenciadorTimes.listaDeTimes.add(novoTime);
		}catch (NullPointerException ne) {
			System.err.println("Campo inválido: " + ne.getMessage());
		}
		catch (IdentificadorUtilizadoException iue){
			System.err.println("Identificador utilizado: " + iue.getMessage());
		};
	}

	@Desafio("incluirJogador")
	public void incluirJogador(Long id, Long idTime, String nome, LocalDate dataNascimento, Integer nivelHabilidade, BigDecimal salario) {
		try {
			Jogador jogador = new Jogador(id, idTime, nome, dataNascimento, nivelHabilidade, salario); // Pode ter parametros invalidos

			Time time = GerenciadorTimes.buscarTime(idTime); // Pode não existir time
			time.adicionarJogador(jogador);
		}
		catch (NullPointerException ne) {
			System.err.println("Campo inválido: " + ne.getMessage());
		}
		catch (IdentificadorUtilizadoException iue){
			System.err.println("Identificador utilizado: " + iue.getMessage());
		}
		catch (TimeNaoEncontradoException tnee){
			System.err.println("Time não encontrado: " + tnee.getMessage());
		};
	}

	@Desafio("definirCapitao")
	public void definirCapitao(Long idJogador) {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarCapitaoDoTime")
	public Long buscarCapitaoDoTime(Long idTime) {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarNomeJogador")
	public String buscarNomeJogador(Long idJogador) {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarNomeTime")
	public String buscarNomeTime(Long idTime) {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarJogadoresDoTime")
	public List<Long> buscarJogadoresDoTime(Long idTime) {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarMelhorJogadorDoTime")
	public Long buscarMelhorJogadorDoTime(Long idTime) {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarJogadorMaisVelho")
	public Long buscarJogadorMaisVelho(Long idTime) {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarTimes")
	public List<Long> buscarTimes() {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarJogadorMaiorSalario")
	public Long buscarJogadorMaiorSalario(Long idTime) {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarSalarioDoJogador")
	public BigDecimal buscarSalarioDoJogador(Long idJogador) {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarTopJogadores")
	public List<Long> buscarTopJogadores(Integer top) {
		throw new UnsupportedOperationException();
	}

	@Desafio("buscarCorCamisaTimeDeFora")
	public String buscarCorCamisaTimeDeFora(Long timeDaCasa, Long timeDeFora) {
		throw new UnsupportedOperationException();
	}

}
