package in.gst.main;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import in.gst.domain.User;

public class Validation {
	static Scanner sc = new Scanner(System.in);
	static User u = new User();

	
	public static String checkemail(String nextLine) {
		if(!Validation.validemail(nextLine)) {
			System.out.println("Re-enter Email with '@' :");
			return Validation.checkemail(sc.nextLine());
		}
		else {
				return nextLine;
		}
	}

	private static boolean validemail(String nextline) {
		Matcher matcher =Pattern.compile("^[A-Za-z0-9+_.-]+@(.+)$",Pattern.CASE_INSENSITIVE).matcher(nextline);
		return matcher.find();
	}

	public static String checkphone(String nextLine) {
		if(!Validation.validphone(nextLine)) {
			System.out.println("Re-enter 10-digit Contact No. :");
			return Validation.checkphone(sc.nextLine());
		}
		else 
			return nextLine;		
	}

	private static boolean validphone(String nextLine) {
		Matcher matcher =Pattern.compile("^((\\(\\d{3}\\))|\\d{3})[- ]?\\d{3}[- ]?\\d{4}$").matcher(nextLine);
		return matcher.find();		
	}

	public static String  checkGSTIN(String nextLine) {
		if(!Validation.validGSTIN(nextLine)) {
			System.out.println("Re-enter Correct GSTIN. :");
			return Validation.checkGSTIN(sc.nextLine());
			}
		else {			
			return nextLine;
		}			
	}

	private static boolean validGSTIN(String nextLine) {
		Matcher matcher =Pattern.compile("^[0-9]{2}[A-Z]{5}[0-9]{4}"+ "[A-Z]{1}[1-9A-Z]{1}"+ "Z[0-9A-Z]{1}$").matcher(nextLine);
		return matcher.find();	
	}

}
