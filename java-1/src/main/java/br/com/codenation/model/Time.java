package br.com.codenation.model;

import br.com.codenation.desafio.exceptions.IdentificadorUtilizadoException;
import br.com.codenation.gerenciadores.GerenciadorTimes;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Time {
    private Long idTime;
    private String nome;
    private LocalDate dataCriacao;
    private String corUniformePrincipal;
    private String corUniformeSecundario;
    private Long capitao;
    private Long melhorJogador;
    private final List<Jogador> jogadoresDoTime;

    public Time(Long idTime, String nome, LocalDate dataCriacao,
                String corUniformePrincipal, String corUniformeSecundario) throws IdentificadorUtilizadoException, NullPointerException
    {
        if(idTime != null && !nome.equals("") && dataCriacao != null &&
                !corUniformePrincipal.equals("") && !corUniformeSecundario.equals(""))
        {
            if(!GerenciadorTimes.timeExiste(idTime)) {
                setIdTime(idTime);
                setNome(nome);
                setDataCriacao(dataCriacao);
                setCorUniformePrincipal(corUniformePrincipal);
                setCorUniformeSecundario(corUniformeSecundario);
                this.jogadoresDoTime = new ArrayList <>();
            }
            else{
                throw new IdentificadorUtilizadoException();
            }
        }else {
            throw new NullPointerException("Campo Inválido");
        }
    }

    public long getIdTime() {
        return idTime;
    }

    private void setIdTime(Long idTime) {
        if(idTime != null) {
            if(!GerenciadorTimes.timeExiste(idTime))
                this.idTime = idTime;
            else
                throw new IdentificadorUtilizadoException();
        }else { throw new NullPointerException("Campo Inválido"); }
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public String getCorUniformePrincipal() {
        return corUniformePrincipal;
    }

    public void setCorUniformePrincipal(String corUniformePrincipal) {
        this.corUniformePrincipal = corUniformePrincipal;
    }

    public String getCorUniformeSecundario() {
        return corUniformeSecundario;
    }

    public void setCorUniformeSecundario(String corUniformeSecundario) {
        this.corUniformeSecundario = corUniformeSecundario;
    }

    public Long getCapitao() {
        return capitao;
    }

    public void setCapitao(Long capitao) {
        this.capitao = capitao;
    }

    public List <Jogador> getJogadoresDoTime() {
        return jogadoresDoTime;
    }
    public void adicionarJogador(Jogador jogador) {
        jogadoresDoTime.add(jogador);
    }

    public Long getMelhorJogador() {
        return melhorJogador;
    }

    public void setMelhorJogador(Long melhorJogador) {
        this.melhorJogador = melhorJogador;
    }

    @Override
    public String toString() {
        return "Time{" +
                "id=" + idTime +
                ", nome='" + nome + '\'' +
                ", dataCriacao=" + dataCriacao +
                ", corUniformePrincipal='" + corUniformePrincipal + '\'' +
                ", corUniformeSecundario='" + corUniformeSecundario + '\'' +
                '}';
    }
}
