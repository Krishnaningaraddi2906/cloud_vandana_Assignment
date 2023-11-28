package tasks;

import java.util.Arrays;
import java.util.Random;

public class Shuffle {
	public static void main(String[] args) {
		int[] array = { 1, 2, 3, 4, 5, 6, 7 };

		Shuffler(array);
		System.out.println("Shuffled Array is: " + Arrays.toString(array));
	}

	 static void Shuffler(int[] array) {
		int arraysize = array.length;
		Random random = new Random();

		for (int i = arraysize - 1; i > 0; i--) {
			int j = random.nextInt(i + 1);

			int temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
}
