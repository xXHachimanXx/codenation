package br.com.codenation.desafioexe;

import java.util.ArrayList;
import java.util.List;

public class DesafioApplication {

	public static List<Integer> fibonacci() {
		List<Integer> lista = new ArrayList<>();
		int f1 = 0, f2 = 1, num = 1;

		// Inicializando vetor
		lista.add(f1);
		lista.add(f2);

		while(num < 350)
		{
			num = f1 + f2;
			f1 = f2;
			f2 = num;
			lista.add(num);
		}

		return lista;
	}

	public static Boolean isFibonacci(Integer a)
	{
		Integer f1 = 0, f2 = 1, num = 1;
		Boolean resp = true;

		if( !a.equals(f1) && !a.equals(f2) )
		{
			while (num < a) {
				num = f1 + f2;
				f1 = f2;
				f2 = num;
			}
			if(!num.equals(a)){ resp = false; }
		}
		return resp;
	}

}

