const URL = 'http://zero.webappsecurity.com';
const searchColumn = '#searchTerm';
const result = '.top_offset';

class searchProsses {
    static visit(){
        cy.visit(URL)
    }
    static searchColumn(){
        cy.get(searchColumn).click()
    }
    static result (){
       return cy.get(result).invoke('text')
    }
}
export default searchProsses;