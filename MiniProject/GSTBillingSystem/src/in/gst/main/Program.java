package in.gst.main;
import in.gst.util.InvoiceTest;
import in.gst.util.ProductTest;

public class Program {
	public static void main(String[] args) {
		System.out.println("\t\t\t\tGST BILLING SYSTEM");	
		int choice;
		Test test = new Test();
		ProductTest pt= new ProductTest();
		InvoiceTest it= new InvoiceTest();
		while(( choice=test.mainMenu())!=0) {
				try {
					switch(choice) {
						case 1:Test.acceptRegistration();
									break;
							case 2:test.userLogin();
									while((choice =test.subMenu())!=0) {
										switch(choice) {
										case 1:
												while((choice = test.productMenu())!=0) {
												switch(choice) {
	
												case 1:pt.acceptProduct();
													break;
												case 2:pt.modifyProduct();
													break;
												case 3:pt.deleteproduct();
													break;
												case 4:pt.printProduct();
													break;													
												}
												}
												break;
										case 2:it.createInvoice();
											break;
										case 3:it.viewInvoice();
											break;
								}}
							break;	
					
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
		}
	}
}



