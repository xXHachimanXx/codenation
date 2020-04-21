package br.com.codenation.model;

import br.com.codenation.desafio.exceptions.IdentificadorUtilizadoException;
import br.com.codenation.gerenciadores.GerenciadorJogadores;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Jogador {
    private Long idJogador;
    private Long time;
    private String nome;
    private LocalDate dataNascimento;
    private Integer nivelHabilidade;
    private BigDecimal salario;

    public Jogador(Long idJogador, Long time, String nome, LocalDate dataNascimento,
                   Integer nivelHabilidade, BigDecimal salario) {
        if(idJogador != null && time != null && !nome.equals("")
                && dataNascimento != null && salario != null)
        {
            if(!GerenciadorJogadores.jogadorExiste(idJogador, time)) {
                setIdJogador(idJogador);
                setTime(time);
                setNome(nome);
                setDataNascimento(dataNascimento);
                setNivelHabilidade(nivelHabilidade);
                setSalario(salario);
            }
            else{
                throw new IdentificadorUtilizadoException();
            }
        }else {
            throw new NullPointerException("Campo Inválido");
        }
    }

    public Long getIdJogador() {
        return idJogador;
    }

    public void setIdJogador(Long idJogador) {
        this.idJogador = idJogador;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public Integer getNivelHabilidade() {
        return nivelHabilidade;
    }

    public void setNivelHabilidade(Integer nivelHabilidade) {
        this.nivelHabilidade = nivelHabilidade;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public void setSalario(BigDecimal salario) {
        this.salario = salario;
    }


    @Override
    public String toString() {
        return "Jogador{" +
                "idJogador=" + idJogador +
                ", time=" + time +
                ", nome='" + nome + '\'' +
                ", dataNascimento=" + dataNascimento +
                ", nivelHabilidade=" + nivelHabilidade +
                ", salario=" + salario +
                '}';
    }
}
