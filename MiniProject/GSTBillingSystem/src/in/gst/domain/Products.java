package in.gst.domain;

import java.io.Serializable;
import java.util.Comparator;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@SuppressWarnings("serial")
@Getter@Setter @NoArgsConstructor@AllArgsConstructor
public class Products implements Serializable,Comparator<Products> {
	private String name;
	private  String hsn;
	private float price;
	private float gst;
	@Override
	public String toString() {
		return String.format("%-30s%-20s%-20.2f%-20.2f",this.name,this.hsn,this.price,this.gst);
	}
	@Override
	public int compare(Products o1, Products o2) {
		
		return o1.getName().compareToIgnoreCase(o2.getName());
	}
	
	
	
	
	
}
