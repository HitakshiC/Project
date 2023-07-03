package in.gst.domain;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@SuppressWarnings("serial")
@Getter@Setter@NoArgsConstructor@AllArgsConstructor
public class Table implements Serializable{
		private String customer;
		private String Product;
		private String hsn;
		private int quantity;
		private float rate;
		private float gst;
		private float tAmt;
		@Override
		public String toString() {
			return String.format("%-20s%-10s%-20d%-20.2f%-15.2f%-20.2f",this.Product,this.hsn,this.quantity,this.rate,this.gst,this.tAmt);
		}
		
		
		
}
