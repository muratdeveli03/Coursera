//Object Creation
var company = new Object();
company.name = "facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company ceo name is:" + company.ceo.firstName);
console.log(company["name"]);
var stockPropName = "stock of company";
company[stockPropName] = 110;
console.log("Company stock is " + company[stockPropName]);
