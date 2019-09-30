package finalAssesment;

import java.util.HashMap;
import java.util.HashSet;

public class ContactOperations implements ContactInterface {
	
	HashSet<Contacts> hs = new HashSet<Contacts>();
	
	HashMap<String , Contacts> hm = new HashMap<String, Contacts>();
	@Override
	public Contacts createContact(String name,long number,String group) {
		Contacts c = new Contacts();
		c.setName(name);
		c.setNumber(number);
		c.setGroup(group);
		return c;
	}
	@Override
	
	public void addContact(String key , Contacts c) {
		hs.add(c);
		hm.put(key, c);
	}
	@Override
	public void showContact() {
		for (Contacts cont : hs) {
			System.out.println(cont);
		}
	}
	@Override
	public void showContactNames() {
		int i = 1;
		for (Contacts cont : hs) {
			
			System.out.println("Contact "+i+" :"+cont.getName());
			i++;
		}
	}
	@Override
	public Contacts searchHere(String key) {
//		System.out.println(hm.get(key));
		return hm.get(key);
	}
	@Override
	public void removeContact(Contacts c) {
//		hm.remove(key);
		hs.remove(c);
		
//		showContact();
		
	}
}
