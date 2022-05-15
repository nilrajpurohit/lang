using System;
using Tech;
namespace Example {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Welcome to c# -------");

            Console.WriteLine("1:Variable ---");
            int number = 20;
            string name = "nilesh";
            char x = 'X';
            double numberTwo = 20.20;
            bool isVariable = true;

            Console.WriteLine("2:Concatenation ---");
            Console.WriteLine("number = " + number +" | string = "+name+" | char = "+x+" | double = "+numberTwo+" | boolean = "+isVariable);

            //single line comment
            /* multiline commet
            next line */

            Console.WriteLine("3:User Input ---");
            Console.WriteLine("Enter a number :");
            string numberA = "";
            numberA = Console.ReadLine();
            Console.WriteLine("Number Entered : "+numberA);

            Console.WriteLine("4:Structural Statement ---");
            int a = 3;
            int b = 1;
            int c = 2;
            if (a>b && a>c)
            {
                Console.WriteLine("a is greater !");
            }
            else if (b>a && b>c)
            {
                Console.WriteLine("b is greater !");
            }
            else {
                Console.WriteLine("c is greater !");
            }

            int numberB = 2;
            switch (numberB) {
                case 1:
                    Console.WriteLine("First");
                    break;
                case 2:
                    Console.WriteLine("Second");
                    break;
                case 3:
                    Console.WriteLine("Third");
                    break;
                default:
                    Console.WriteLine("Invalid");
                    break;
            }

            Console.WriteLine("5:Loops ---");
            for (int i = 1; i <= 10; i++) {
                Console.WriteLine(i);
            }

            Console.WriteLine();
            int j = 1;
            while (j <= 5) {
                Console.WriteLine(j);
                j++;
            }

            Console.WriteLine();
            int k = 1;
            do
            {
                Console.WriteLine(k);
                k++;
            }while (k <= 3);

            Console.WriteLine("6:Arrays ---");
            string[] food = { "rice", "pasta", "fruit", "cake" };
            Console.WriteLine(food[3]);

            food[3] = "paneer";
            for (int l = 0; l < food.Length; l++) {
                Console.WriteLine(food[l]);

            }

            Console.WriteLine("7:Functions ---");
            sum(1,2);
            Console.WriteLine(sum1(10.20 , 20.10));

            Console.WriteLine("8:Objects ---");
            Computer comp = new Computer();
            comp.structure = "Mid-Tower";
            comp.cpu = "Intel";
            comp.vga = "Nvidia";
            comp.ramGB = "16";
            comp.hdd = false;
            Console.WriteLine(comp.structure);
            Console.ReadLine();
        }
        static void sum(int a, int b)
        {
            Console.WriteLine("sum of a and b : " + (a + b));
        }

        static double sum1(double a, double b) {
            return (a + b);
        }
    }
}