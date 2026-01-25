export class HomePage {
     //техническое описание страницы
    
    constructor(page, user) {
        this.page = page;
        this.profileName = page.getByRole('link', { name: 'Home' });
        this.userMenu = page.getByText(user.email);
        this.dropdownMenu = page.locator('.dropdown-menu');
        this.profileLink = this.dropdownMenu.getByRole('link', {  name: 'Profile' });
        this.settingsLink = this.dropdownMenu.getByRole('link', {  name: 'Settings' });
        this.logoutLink = this.dropdownMenu.getByRole('link', {  name: 'Logout' });
        this.newArticleLink = page.getByRole('link', {  name: 'New Article' });

                }
        //бизнес логика страницы

            //открыть меню пользователя
        async openUserMenu() {
            await this.userMenu.click();
                    }
            //перейти в профиль пользователя            
        async gotoProfile() {
            await this.openUserMenu();
            await this.profileLink.click();
        }
            //создать новую статью         
        async createNewArticle() {
            await this.openUserMenu();
            await this.newArticleLink.click();
        }
}
