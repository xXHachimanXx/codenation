package br.com.codenation.calculadora;


public class CalculadoraSalario {

	public long calcularSalarioLiquido(double salarioBase) {
		//Use o Math.round apenas no final do método para arredondar o valor final.
		//Documentação do método: https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html#round-double-
		double salarioLiquido = salarioBase > 0? calcularIRRF(salarioBase) : 0;

		return Math.round(salarioLiquido) < 1039.00? 0 : Math.round(salarioLiquido);
	}
	
	
	//Exemplo de método que pode ser criado para separar melhor as responsábilidades de seu algorítmo
	private double calcularInss(double salarioBase)
	{
		double salarioBrutoINSS = 0;

		if(salarioBase <= 1500.00)
		{
			salarioBrutoINSS = salarioBase - (salarioBase * 0.08);
		}
		else if(salarioBase >= 1500.01 && salarioBase <= 4000.00)
		{
			salarioBrutoINSS = salarioBase - (salarioBase * 0.09D);
		}
		else
		{
			salarioBrutoINSS = salarioBase - (salarioBase * 0.11D);
		}

		return salarioBrutoINSS;
	}

	private double calcularIRRF(double salario)
	{
		double salarioLiquido = calcularInss(salario);

		if(salarioLiquido >= 3000.01 && salarioLiquido <= 6000.00)
		{
			salarioLiquido = salarioLiquido - (salarioLiquido * 0.075D);
		}else if(salarioLiquido > 6000.00)
		{
			salarioLiquido = salarioLiquido - (salarioLiquido * 0.15D);
		}

		return salarioLiquido;
	}

}
/*Dúvidas ou Problemas?
Manda e-mail para o meajuda@codenation.dev que iremos te ajudar! 
*/