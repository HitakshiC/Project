package in.gst.util;


import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.EOFException;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

import in.gst.domain.Invoice;
import in.gst.domain.Products;
import in.gst.domain.Table;
import in.gst.domain.User;
import in.gst.main.Test;
import in.gst.main.Validation;


public class InvoiceTest {
	static List<User>ul = new ArrayList<>();
	static int invoiceid =000;
	static List<Table> tl = new ArrayList<>();
	List<Products>pl;
	static List<Invoice>il=new ArrayList<>();
	static Scanner sc = new Scanner(System.in );
	
	@SuppressWarnings("unchecked")
	public void createInvoice() throws IOException, ClassNotFoundException,EOFException {
		Date lt = new Date();
		SimpleDateFormat sdf =new SimpleDateFormat("dd MMM yyyy hh:mm aa");
		String date = sdf.format(lt);


			
		System.out.print("Customer Name: ");
		String cust = sc.nextLine();
		System.out.print("Address: ");
		String add = sc.nextLine();
		System.out.print("Contact: ");
		String ph = Validation.checkphone(sc.nextLine());
		System.out.print("EmailId: ");
		String eid= Validation.checkemail(sc.nextLine());
		
		
		InvoiceTest.input(cust);
		System.out.println("--------------------------------------------------------------------------------------------------------------------");
		try {
			ObjectInputStream oi = new ObjectInputStream( new FileInputStream(new File("Register.txt")));
				
				
					ul =  (List<User>) oi.readObject();
					for(int i=0;i<ul.size();i++) {
					System.out.printf("\t\t\t\t\t-----%s-----\n",ul.get(i).getBusinessName());
					System.out.printf("\t\t\t\t%s\n",ul.get(i).getAddress());
					System.out.printf("EmailId: %s\t\tGSTIN: %s\t\tContact :%s\n",ul.get(i).getEmail(),ul.get(i).getGstIN(),ul.get(i).getPhone());
					}} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		int invoiceno=InvoiceTest.getinvoiceno();
		System.out.printf("Invoice No: %d\t\t\t\t\t\t\t\t\t\t\t\tDate: %s\n",invoiceno,date);
		System.out.println("Invoice to:");
		System.out.printf("Customer Name: %s\n",cust);
		System.out.printf("Address: %s\n",add);
		System.out.printf("Contact: %s\n",ph);
		System.out.printf("EmailId: %s\n",eid);
		System.out.println("--------------------------------------------------------------------------------------------------------------------");
		System.out.printf("%-20s%-10s%-20s%-20s%-15s%-20s\n","Product","HSN","Quantity","Rate","GST","Total Amount");
		System.out.println("--------------------------------------------------------------------------------------------------------------------");
		
		String pathname1=Test.retainUser().concat("Invoice");
		ObjectInputStream oi = new ObjectInputStream( new FileInputStream(new File(pathname1)));
		tl=(List<Table>) oi.readObject();
		if(tl!=null) {
			for(int i=0;i<tl.size();i++) {
				if(tl.get(i).getCustomer().equals(cust)) {
					tl.forEach(System.out::println);
			}
			}
		
		}
		
		float totalamount=0;
		ObjectInputStream o = new ObjectInputStream( new FileInputStream(new File(pathname1)));
		List<Table> tl=(List<Table>) o.readObject();
		if(tl!=null) {
			for(int i=0;i<tl.size();i++) {
				if(tl.get(i).getCustomer().equals(cust)) {
					totalamount+=tl.get(i).getTAmt();
				}
			}
		}
		o.close();
		System.out.printf("\t\t\t\t\t\t\t\t\t\t\tTotal Amount :%-6.2f\n",totalamount);
		
		String setname=Test.retainUser().concat("ViewInvoice");
		ObjectOutputStream o1 = new ObjectOutputStream(new BufferedOutputStream(new FileOutputStream(setname)));
		il.add(new Invoice(invoiceno, cust, totalamount, date));
		o1.writeObject(il);
		o1.close();
		
	}
	
			
	private static void input(String cust) throws IOException, ClassNotFoundException {
		String pathname=Test.retainUser().concat("Product");
		char c;
		do {
			sc.nextLine();
		System.out.print(" Product :");
		String product = sc.nextLine();
		ObjectInputStream oi = new ObjectInputStream( new FileInputStream(new File(pathname)));
		@SuppressWarnings("unchecked")
		List<Products> pl=(List<Products>) oi.readObject();
		oi.close();
		int flag =0;
		for (int i =0 ;i<pl.size();i++) {
			if(pl.get(i).getName().contains(product)) {
				flag =1;
				System.out.print("Quantity:");
				int quant = sc.nextInt();
				String hsn = pl.get(i).getHsn();
				float price = pl.get(i).getPrice();
				float gst = pl.get(i).getGst();
				float tamt=InvoiceTest.calculate(price,quant,gst);
				tl.add( new Table(cust, product, hsn, quant, price, gst, tamt));
				String pathname1=Test.retainUser().concat("Invoice");
				try {
					ObjectOutputStream o = new ObjectOutputStream(new BufferedOutputStream(new FileOutputStream(pathname1)));
				
					o.writeObject(tl);
					o.close();
				} catch (FileNotFoundException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			}
		if(flag==0)
			System.out.println("Not found");
		
		System.out.print("\tWant to continue?[Y/N] ");
		String input = sc.next();
		 c = input.charAt(0);
		}while(c=='Y'||c=='y');
		
	
		
	}


	private static float calculate (float price, int quant, float gst) {
		float amt =( (quant*price*gst)/100)+price;
		return amt;
	}


	@SuppressWarnings({ })
	public static int getinvoiceno() throws FileNotFoundException, IOException, ClassNotFoundException {
				return ++invoiceid ;
	}


	@SuppressWarnings("unchecked")
	public void viewInvoice() throws IOException, ClassNotFoundException {
		String setname=Test.retainUser().concat("ViewInvoice");
		ObjectInputStream o = new ObjectInputStream(new BufferedInputStream(new FileInputStream(setname)));
		il=(List<Invoice>) o.readObject();
		if(il!=null) {
			System.out.println("------------------------------------------------------------------------------");
			System.out.printf("%-20s%-20s%-20s%-20s\n","Invoice","Name","Payment","Date");
			System.out.println("------------------------------------------------------------------------------");			
				
				il.forEach(System.out::println);
			System.out.println("------------------------------------------------------------------------------");
		}
		o.close();
	}
	
	
}
