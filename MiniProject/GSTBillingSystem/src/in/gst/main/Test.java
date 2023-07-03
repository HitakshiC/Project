package in.gst.main;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;
//import java.util.List;
import java.util.Scanner;


import in.gst.domain.User;

public class Test {
	static Scanner sc = new Scanner(System.in);
	static List<User>ul = new ArrayList<>();
	public int mainMenu() {
		System.out.println("1.Register");
		System.out.println("2.Login");
		System.out.println("0.Exit");
		return sc.nextInt();
	}
	public int productMenu() {
		System.out.println("1.Add Products");
		System.out.println("2.Modify");
		System.out.println("3.Delete Product");
		System.out.println("4.View Product");
		System.out.println("0.Exit");
		return sc.nextInt();
			
	}
	public int subMenu() {
		System.out.println("1. Products");
		System.out.println("2.Create Invoice");
		System.out.println("3.View Invoice");
		System.out.println("0.Logout");
		return sc.nextInt();
			
	}
	public static void acceptRegistration() throws Exception{
		sc.nextLine();
		System.out.println(" Username :");
		String username =sc.nextLine();	   
		System.out.print(" BusinessName :");
		String BusinessName = sc.nextLine();
		/* @SuppressWarnings("unused")
		Scanner scf = new Scanner(new File("Users.txt"));
			while(scf.hasNextLine()) {
				String line =scf.nextLine();
				String [] part = line.split(",");
				String retainUser = part[0];
				if(BusinessName.equals(retainUser)) {
					System.out.println("Alreay exists...");
					return;
				}
			}*/
		System.out.print(" Address :");
		String Address = sc.nextLine();
		System.out.print(" EmailId :");
		String email = Validation.checkemail(sc.nextLine());
		System.out.print(" Contact:");
		String phone = Validation.checkphone(sc.nextLine());
		System.out.print(" GSTIN :");
		String gstIn=Validation.checkGSTIN(sc.nextLine());
		System.out.print("Set Password :");
		String pswd = sc.next();
		System.out.println("Registration Successfully!!!");
				
	
		try {
				ObjectOutputStream o = new ObjectOutputStream(new BufferedOutputStream(new FileOutputStream("Register.txt")));
				User user = new User(username, BusinessName, Address, email, phone, gstIn);
				ul.add(user);
				o.writeObject(ul);
				o.close();
				
			
			FileWriter fw= new FileWriter("Users.txt",true);
			fw.write(BusinessName+", "+pswd+"\n");
			fw.close();
		} catch (IOException e) {
			
			e.printStackTrace();
		}
			
			}
	@SuppressWarnings("unchecked")
	public void userLogin() throws Exception {
		sc.nextLine();
		System.out.print(" Username :");
		String username =sc.nextLine();
		System.out.print(" Password :");
		String pswd =sc.nextLine();
		Scanner scf1 = new Scanner(new File("Users.txt"));
		while(scf1.hasNextLine()) {
			String line =scf1.nextLine();
			String [] part = line.split(",");
			String retainUser = part[0];
			String retainpswd = part[1];
	
			if(username.equalsIgnoreCase(retainUser) && pswd.equals(retainpswd)) {
				System.out.println("------------------------------------------------------------------------------------------");
				
				try {
					ObjectInputStream oi = new ObjectInputStream( new FileInputStream(new File("Register.txt")));
						ul = (List<User>) oi.readObject();
						for(int i=0;i<ul.size();i++) {
							
							if(ul.get(i).getBusinessName().equals(username)) {
								
							System.out.printf("\t\t\t\t\t-----%s-----\n",ul.get(i).getBusinessName());
							System.out.printf("\t\t\t\t%s\n",ul.get(i).getAddress());
					System.out.printf("EmailId: %s\t\tGSTIN: %s\t\tContact :%s\n",ul.get(i).getEmail(),ul.get(i).getGstIN(),ul.get(i).getPhone());
							}
						}
					oi.close();
					return;
				} catch (FileNotFoundException e) {
					
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		System.out.println("Invalid User!!..........Do Registration...");
		Test.acceptRegistration();		
	
}
	public static String retainUser() throws FileNotFoundException {
		Scanner scf1 = new Scanner(new File("Users.txt"));
		while(scf1.hasNextLine()) {
			String line =scf1.nextLine();
			String [] part = line.split(",");
			String retainUser = part[0];
			
		return retainUser;
	}
		return null;	
}
	
	
}
