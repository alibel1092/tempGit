export class MainPage {
     //техническое описание страницы
    
    constructor(page) {
        this.page = page;
        this.signupLink = page.getByRole('link', { name: 'Sign up' });
        }
        //бизнес логика страницы
        async gotoSignup() {
            this.signupLink.click();
    }
        async open(url) {
         await this.page.goto(url);
        }

}