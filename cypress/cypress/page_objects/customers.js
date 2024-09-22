class Customers {
    btnNewCustomer(){
      cy.xpath("button[@id='button-forms-customer-create']");  
    }
    
    name(){
      return cy.xpath("//input[@id='customerName']");  
    }

    email(){
        return cy.xpath("//input[@id='customerEmail']");  
    }

    company(){
        return cy.xpath("//input[@id='customerCompany']");  
    }

    salary(){
        return cy.xpath("//input[@id='customerSalary']");  
    }

    city(){
        return cy.xpath("//input[@id='customerCity']");  
    }
    
    state(){
        return cy.xpath("//input[@id='customerState']");  
    }

    address(){
        return cy.xpath("//input[@id='customerAddress']");  
    }

    country(){
        return cy.get('#customerCountry');
        

    }
    
    zipcode(){
        return cy.xpath("//input[@id='customerZipCode']");  
    }

    phonenumber(){
        return cy.xpath("//input[@id='customerPhoneNumber']");  
    }

    submit(){
        return cy.xpath("//button[@id='submit']");  
    }

    sucessMsg(){
        return cy.xpath("//div[@id='alert-success']");  
    }
}
export const newCustomer = new Customers();