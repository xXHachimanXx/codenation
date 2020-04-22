package br.com.codenation;

import java.util.ArrayList;
import java.util.List;

public class StatisticUtil {

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
		int mode = 0;

		if(elements.length > 0)
		{
			for (int x = 0; x < elements.length; x++)
			{
				int maior = 0;
				for (int y = 0; y < elements.length; y++)
				{
					if(elements[y] == elements[x]) { maior++; }
				}

				if(maior > mode){ mode = elements[x]; }
			}
		}

		return mode;
	}

	public static int median(int[] elements)
	{
		// ORDENAR LISTA
		int median = 0;


		if(elements.length % 2 == 0)
			median = (elements[elements.length/2] + elements[elements.length/2 + 1]) / 2;
		else
			median = elements[elements.length/2];

		return median;
	}
}