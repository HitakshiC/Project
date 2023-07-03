package in.gst.domain;



import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@SuppressWarnings("serial")
@NoArgsConstructor@AllArgsConstructor
@Getter@Setter
public class User implements Serializable {
	private String userName;
	private String businessName;
	private String address;
	private String email;
	private String  phone;
	private String gstIN;
	
	@Override
	public String toString() {
		return "User [userName=" + userName + ", businessName=" + businessName + ", address=" + address + ", email="
				+ email + ", phone=" + phone + ", gstIN=" + gstIN + "]";
	}

	
	}
	
	

