public class continous
{
	public static void main (String [] args)
	{
		int result=0
		int numbers = ((args.length-1)/2)+1
		for(int i =0 ; i < numbers ; i++)
		{
			 int y = Integer.parseInt(args[i])
			 int x = Integer.parseInt(args[i+1])
		}

	}

	public static int check (first,second,op)
	{
		switch (op){
			case "+":
				return first+second;
			case "-":
				return first-second;
			case "/":
				return first / second;
			default :
				return 0; 
		}
	}
} 