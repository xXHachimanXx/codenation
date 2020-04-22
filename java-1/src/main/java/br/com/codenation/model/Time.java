package br.com.codenation.model;

import br.com.codenation.desafio.exceptions.CapitaoNaoInformadoException;

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
    private final List<Long> jogadoresDoTime = new ArrayList <>();

    public long getIdTime() {
        return idTime;
    }

    public void setIdTime(Long idTime) { this.idTime = idTime; }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
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

    public Long getCapitao() throws CapitaoNaoInformadoException
    {
        if(this.capitao == null) {
            throw new CapitaoNaoInformadoException();
        }
        return capitao;
    }

    public void setCapitao(Long capitao) {
        this.capitao = capitao;
    }

    public List <Long> getJogadoresDoTime() {
        return jogadoresDoTime;
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
