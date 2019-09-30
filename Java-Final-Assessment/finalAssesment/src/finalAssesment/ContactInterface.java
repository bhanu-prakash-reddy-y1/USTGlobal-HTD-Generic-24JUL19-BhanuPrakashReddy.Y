package finalAssesment;

public interface ContactInterface {
	public Contacts createContact(String name,long number,String group);
	public void addContact(String key , Contacts c);
	public void showContact();
	public void showContactNames();
	public Contacts searchHere(String key);
	public void removeContact(Contacts c);

}
