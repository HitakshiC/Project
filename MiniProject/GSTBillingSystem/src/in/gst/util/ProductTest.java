package in.gst.util;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

import in.gst.domain.Products;
import in.gst.main.Test;

public class ProductTest {
	List<Products> pl = new ArrayList<>();
	static Scanner sc = new Scanner(System.in);
	
	public void acceptProduct() throws FileNotFoundException {
		String pathname=Test.retainUser().concat("Product");
		char c;
		do {
			 sc.nextLine();
		System.out.print(" Product :");
		String product = sc.nextLine();
		System.out.print(" HSN :");
		String hsn = sc.nextLine();
		System.out.print(" Price :");
		float price = sc.nextFloat();
		System.out.print(" GST% :");
		float gst = sc.nextFloat();
		pl.add(new Products(product, hsn, price, gst));
		
	
		try {
			ObjectOutputStream o = new ObjectOutputStream(new BufferedOutputStream(new FileOutputStream(pathname)));
			o.writeObject(pl);
			o.close();
			
		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();		}
		System.out.print("\tWant to continue?[Y/N] ");
		String input = sc.next();
		 c = input.charAt(0);
		
		}while(c=='Y'||c=='y');
		
			
		
	}
	@SuppressWarnings("unchecked")
	public void printProduct() throws ClassNotFoundException, IOException {
		Comparator<Products>compare = new Products();
		String pathname=Test.retainUser().concat("Product");
		ObjectInputStream oi= new ObjectInputStream( new FileInputStream(new File(pathname)));
		pl=(List<Products>) oi.readObject();
		if(pl!=null) {
			pl.sort(compare);
			System.out.println("------------------------------------------------------------------------------");
			System.out.printf("%-30s%-20s%-20s%-20s\n","PRODUTS","HSN","PRICE","GST");
			System.out.println("------------------------------------------------------------------------------");
			pl.forEach(System.out::println);
			System.out.println("------------------------------------------------------------------------------");
			oi.close();
		}
	}
	@SuppressWarnings({ "unchecked" })
	public void modifyProduct() throws FileNotFoundException, IOException, ClassNotFoundException {
		String pathname=Test.retainUser().concat("Product");
		ObjectInputStream oi = new ObjectInputStream( new FileInputStream(new File(pathname)));
			List<Products> pl=(List<Products>) oi.readObject();
			oi.close();
			if(pl!=null) {
				sc.nextLine();
				System.out.print(" Enter product to be modified:");
				String s = sc.nextLine();
				int flag =0;
				for (int i =0 ;i<pl.size();i++) {
					if(pl.get(i).getName().contains(s)) {
						try {
							ObjectOutputStream o = new ObjectOutputStream(new BufferedOutputStream(new FileOutputStream(pathname)));
							flag=1; 
							System.out.print(" Enter the Price:");
							pl.get(i).setPrice(sc.nextFloat());
							System.out.print(" Enter the Gst:");
							pl.get(i).setGst(sc.nextFloat());
							o.writeObject(pl);
							o.close();
						} catch (FileNotFoundException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					}
					}
				if(flag==0)
					System.out.println("Product not found.");
				}
				
				}
			
	
	public void deleteproduct() throws IOException, ClassNotFoundException {
		String pathname=Test.retainUser().concat("Product");
		ObjectInputStream oi = new ObjectInputStream( new FileInputStream(new File(pathname)));
			@SuppressWarnings("unchecked")
			List<Products> pl=(List<Products>) oi.readObject();
			oi.close();
			if(pl!=null) {
				sc.nextLine();
				System.out.print(" Enter product to be Deleted:");
				String s = sc.nextLine();
				int flag =0;
				for (int i =0 ;i<pl.size();i++) {
					if(pl.get(i).getName().contains(s)) {
						ObjectOutputStream o = new ObjectOutputStream(new BufferedOutputStream(new FileOutputStream(pathname)));
						flag=1; 
						pl.remove(i);
						o.writeObject(pl);
						o.close();
					}
					}
				if(flag==0)
					System.out.println("Product not found.");
				}
				
		
	}
	
	
	
}
