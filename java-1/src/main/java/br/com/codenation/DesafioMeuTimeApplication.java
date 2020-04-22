package br.com.codenation;

import java.awt.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import br.com.codenation.desafio.exceptions.CapitaoNaoInformadoException;
import br.com.codenation.desafio.exceptions.JogadorNaoEncontradoException;
import br.com.codenation.desafio.exceptions.TimeNaoEncontradoException;
import br.com.codenation.gerenciadores.GerenciadorJogadores;
import br.com.codenation.gerenciadores.GerenciadorTimes;
import br.com.codenation.model.Jogador;
import br.com.codenation.model.Time;
import br.com.codenation.desafio.annotation.Desafio;
import br.com.codenation.desafio.app.MeuTimeInterface;
import br.com.codenation.desafio.exceptions.IdentificadorUtilizadoException;

public class DesafioMeuTimeApplication implements MeuTimeInterface {

	public static final List<Jogador> listaDeJogadores = new ArrayList <>();

	@Desafio("incluirTime")
	public void incluirTime(Long id, String nome, LocalDate dataCriacao, String corUniformePrincipal,
							String corUniformeSecundario) throws IdentificadorUtilizadoException
	{
			Time novoTime = new Time();

			if(!GerenciadorTimes.identificadorDeTimeUtilizado(id))
			{
				novoTime.setIdTime(id);
				novoTime.setNome(nome);
				novoTime.setDataCriacao(dataCriacao);
				novoTime.setCorUniformePrincipal(corUniformePrincipal);
				novoTime.setCorUniformeSecundario(corUniformeSecundario);
			}else{ throw new IdentificadorUtilizadoException(); }

			GerenciadorTimes.listaDeTimes.add(novoTime);
	}

	@Desafio("incluirJogador")
	public void incluirJogador(Long id, Long idTime, String nome, LocalDate dataNascimento, Integer nivelHabilidade,
							   BigDecimal salario) throws IllegalArgumentException, IdentificadorUtilizadoException, TimeNaoEncontradoException
    {
		Jogador novoJogador = new Jogador();

		// Testar nível de habilidade válido
		if(nivelHabilidade < 0 || nivelHabilidade > 100) { throw new IllegalArgumentException(); }
		// Testar se time existe
		if(!GerenciadorTimes.timeExiste(idTime)) { throw new TimeNaoEncontradoException(); }

		if (GerenciadorJogadores.jogadorExiste(id)) { throw new IdentificadorUtilizadoException(); }

		novoJogador.setIdJogador(id);
		novoJogador.setNome(nome);
		novoJogador.setDataNascimento(dataNascimento);
		novoJogador.setNivelHabilidade(nivelHabilidade);
		novoJogador.setSalario(salario);
		novoJogador.setTime(idTime);
		listaDeJogadores.add(novoJogador);
	}

	@Desafio("definirCapitao")
	public void definirCapitao(Long idJogador) throws JogadorNaoEncontradoException
	{
		Jogador capitao = GerenciadorJogadores.buscarJogador(idJogador);

		if(capitao != null) {
			Time t = GerenciadorTimes.buscarTime(capitao.getTime());
			t.setCapitao(idJogador);
			capitao.setIsCapitao(true);
		}
		else{ throw new JogadorNaoEncontradoException(); }

	}

	@Desafio("buscarCapitaoDoTime")
	public Long buscarCapitaoDoTime(Long idTime) throws TimeNaoEncontradoException, CapitaoNaoInformadoException
	{
		Time time = GerenciadorTimes.buscarTime(idTime);
		Long idCapitao = null;

		if(time != null)
		{
			idCapitao = time.getCapitao();
			if(idCapitao == null) { throw new CapitaoNaoInformadoException(); }
		}
		else{ throw new TimeNaoEncontradoException(); }

		return idCapitao;
	}

	@Desafio("buscarNomeJogador")
	public String buscarNomeJogador(Long idJogador) throws JogadorNaoEncontradoException
	{
		String nome = "";
		Jogador jogador = GerenciadorJogadores.buscarJogador(idJogador);

		if(jogador != null)
		{
			nome = jogador.getNome();
		}
		else{ throw new JogadorNaoEncontradoException(); }

		return nome;
	}

	@Desafio("buscarNomeTime")
	public String buscarNomeTime(Long idTime) throws TimeNaoEncontradoException
	{
		String nomeTime = null;
		Time time = GerenciadorTimes.buscarTime(idTime);

		if(time != null)
		{
			nomeTime = time.getNome();
		}
		else{ throw new TimeNaoEncontradoException(); }

		return nomeTime;
	}

	@Desafio("buscarJogadoresDoTime")
	public List<Long> buscarJogadoresDoTime(Long idTime) throws TimeNaoEncontradoException
	{
		List<Long> jogadores;
		Time time = GerenciadorTimes.buscarTime(idTime);

		if(time != null)
		{
			jogadores = time.getJogadoresDoTime();
		}
		else{ throw new TimeNaoEncontradoException(); }

		return jogadores;
	}

	@Desafio("buscarMelhorJogadorDoTime")
	public Long buscarMelhorJogadorDoTime(Long idTime) throws TimeNaoEncontradoException
	{
		Long idMelhorJogador = null;
		Time time = GerenciadorTimes.buscarTime(idTime);

		if(time != null)
		{
			int tamanhoTime = time.getJogadoresDoTime().size();
			Integer maiorIndice = -1;
			Integer indiceAtual = -1;
			Long idJogadorTime = null;

			// Buscar sequencialmente o maior indice de habilidade
			for(int x = 0; x < tamanhoTime; x++) {
				idJogadorTime = time.getJogadoresDoTime().get(x);
				indiceAtual = GerenciadorJogadores.buscarJogador(idJogadorTime).getNivelHabilidade();

				if(indiceAtual > maiorIndice) {
					idMelhorJogador = idJogadorTime;
					maiorIndice = indiceAtual;
				}
			}
		}
		else{ throw new TimeNaoEncontradoException(); }

		return idMelhorJogador;
	}

	@Desafio("buscarJogadorMaisVelho")
	public Long buscarJogadorMaisVelho(Long idTime) throws TimeNaoEncontradoException
	{
		Long idJogadorMaisVelho = null;
		Time time = GerenciadorTimes.buscarTime(idTime);

		if(time != null)
		{
			int tamanhoTime = time.getJogadoresDoTime().size();
			LocalDate dataMaisVelho = null;
			LocalDate dataMaisVelhoAtual;
			Long idJogadorTime = null;

			// Buscar sequencialmente o maior indice de habilidade
			for(int x = 0; x < tamanhoTime; x++) {
				idJogadorTime = time.getJogadoresDoTime().get(x);
				dataMaisVelhoAtual = GerenciadorJogadores.buscarJogador(idJogadorTime).getDataNascimento();

				if(dataMaisVelhoAtual.isBefore(dataMaisVelho)) {
					idJogadorMaisVelho = idJogadorTime;
					dataMaisVelho = dataMaisVelhoAtual;
				}
			}
		}
		else{ throw new TimeNaoEncontradoException(); }


		return idJogadorMaisVelho;
	}

	@Desafio("buscarTimes")
	public List<Long> buscarTimes() {
		List<Long> listaDeIdsDeTimes = new ArrayList <>();
		List<Time> listaDeTimes = GerenciadorTimes.listaDeTimes;

		for (Time time : listaDeTimes) {
			listaDeIdsDeTimes.add(time.getIdTime());
		}

		return listaDeIdsDeTimes;
	}

	@Desafio("buscarJogadorMaiorSalario")
	public Long buscarJogadorMaiorSalario(Long idTime) throws TimeNaoEncontradoException
	{
		Long idJogadorMaiorSalario = null;
		Time time = GerenciadorTimes.buscarTime(idTime);

		if(time != null)
		{
			int tamanhoTime = time.getJogadoresDoTime().size();
			BigDecimal maiorSalario = null;
			BigDecimal maiorSalarioAtual = null;
			Long idJogadorTime = null;

			// Buscar sequencialmente o maior indice de habilidade
			for(int x = 0; x < tamanhoTime; x++) {
				idJogadorTime = time.getJogadoresDoTime().get(x);
				maiorSalarioAtual = GerenciadorJogadores.buscarJogador(idJogadorTime).getSalario();

				if(maiorSalarioAtual.compareTo(maiorSalario) > 0) {
					idJogadorMaiorSalario = idJogadorTime;
					maiorSalario = maiorSalarioAtual;
				}
			}
		}
		else{ throw new TimeNaoEncontradoException(); }

		return idJogadorMaiorSalario;
	}

	@Desafio("buscarSalarioDoJogador")
	public BigDecimal buscarSalarioDoJogador(Long idJogador) throws JogadorNaoEncontradoException
	{
		BigDecimal salario;
		Jogador jogador = GerenciadorJogadores.buscarJogador(idJogador);

		if(jogador != null)
		{
			salario = jogador.getSalario();
		}
		else{ throw new JogadorNaoEncontradoException(); }

		return salario;
	}

	@Desafio("buscarTopJogadores")
	public List<Long> buscarTopJogadores(Integer top) {
		List<Long> idsTopJogadores = new ArrayList <>();
		List<Jogador> copiaJogadores = GerenciadorJogadores.copiarListaDeJogadores();

		for(int x = 0; x < top; x++)
		{
			int tamanhoCopia = copiaJogadores.size();
			Jogador melhorAtual = null;
			Jogador melhorJogador = melhorAtual;
			int indexMelhor = 0;

			for(int y = 0; y < tamanhoCopia; y++)
			{
				melhorAtual = copiaJogadores.get(y);
				if(melhorAtual.getNivelHabilidade() > melhorJogador.getNivelHabilidade()) {
					melhorJogador = melhorAtual;
					indexMelhor = y; // Armazenar endereço do melhor
				}
			}
			idsTopJogadores.add(melhorJogador.getIdJogador()); // Adicionar melhor aos melhores
			copiaJogadores.remove(indexMelhor); // Remover melhor para a próxima busca
		}

		return idsTopJogadores;
	}

	@Desafio("buscarCorCamisaTimeDeFora")
	public String buscarCorCamisaTimeDeFora(Long timeDaCasa, Long timeDeFora) throws TimeNaoEncontradoException
	{
		String camisa = null;

		Time fora = GerenciadorTimes.buscarTime(timeDeFora);
		Time casa = GerenciadorTimes.buscarTime(timeDaCasa);

		if(fora != null && casa != null) {

			if (fora.getCorUniformePrincipal().equals(casa.getCorUniformePrincipal())) {
				camisa = fora.getCorUniformeSecundario();
			} else {
				camisa = fora.getCorUniformePrincipal();
			}
		}else{ throw new TimeNaoEncontradoException(); }

		return camisa;
	}

}
