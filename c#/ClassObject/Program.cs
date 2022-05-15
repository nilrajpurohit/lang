using System;
namespace ClassObject
{
    class Program {
        static void Main(string[] args) {
            var account = new BankAccount("Nil",20000);
            Console.WriteLine($"Account {account.Number} created for {account.Owner} with {account.Balance}");
            
            account.MakeWithdrawal(120, DateTime.Now, "Hammock");
            Console.WriteLine(account.Balance);

            account.MakeWithdrawal(50, DateTime.Now,"Xbox");
            Console.WriteLine(account.Balance);

            try
            {
                var invalidAccount = new BankAccount("Invalid", -5000);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception caught creating account with negative balance !");
                Console.WriteLine(ex.ToString());
            }

            Console.WriteLine(account.GetTransactions());

        }
    }
}