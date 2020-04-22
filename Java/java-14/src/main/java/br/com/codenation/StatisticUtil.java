package br.com.codenation;

import java.util.ArrayList;
import java.util.List;

public class StatisticUtil {
	private static int [] sort(int [] elements) {
		int tamanho = elements.length;
		int aux = 0;

		for(int x = 1; x < tamanho; x++)
		{
			for(int y = 0; y < tamanho-1; y++)
			{
				if(elements[y] > elements[y+1]) {
					// SWAP
					aux = elements[y];
					elements[y] = elements[y + 1];
					elements[y + 1] = aux;
				}
			}
		}

		return elements;
	}

	public static int average(int[] elements) {
		int average = 0;

		if(elements.length > 0) {
			int sum = 0;

			for (int x : elements) {
				sum += x;
			}
			average = sum/elements.length;
		}

		return average;
	}

	public static int mode(int[] elements)
	{
		int mode = elements[0];
		int maior = 0;

		if(elements.length > 1)
		{
			for (int x = 0; x < elements.length; x++)
			{
				int aux = 0;
				for (int y = x; y < elements.length; y++)
				{
					if(elements[y] == elements[x]) { aux++; }
				}

				if(aux > maior){ mode = elements[x]; maior = aux; }
			}
		}

		return mode;
	}

	public static int median(int[] elements)
	{
		// ORDENAR LISTA
		int median = 0;
		elements = sort(elements);

		if(elements.length % 2 == 0)
			median = (elements[elements.length/2] + elements[elements.length/2 - 1]) / 2;
		else
			median = elements[elements.length/2];

		return median;
	}
}