package in.gst.domain;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@SuppressWarnings("serial")
@Getter@Setter@NoArgsConstructor@AllArgsConstructor
public class Invoice implements Serializable{
	
	private int invoiceNo;
	private String custName;
	private float payment;
	private String date;
	
	@Override
	public String toString() {
		return String.format("%-20d%-20s%-20.2f%-20s\n",this.invoiceNo,this.custName,this.payment,this.date);
	}
	
}
