export class ArticleEditorPage {
     //техническое описание страницы
    
    constructor(page) {
        this.page = page;
        this.articleTitle = page.getByRole('textbox', { name: 'title' });
        this.articleDescription = page.getByPlaceholder('What\'s this article about?');
        this.articleBody = page.getByPlaceholder('Write your article (in markdown)');
        this.articleTags = page.getByPlaceholder('Enter tags');
        this.updateButton = page.getByRole('button', { type: 'submit' });
                }
        //бизнес логика страницы
        async CreateArticle(title, description, body, tags) {
            await this.articleTitle.click();
            await this.articleTitle.fill(title);   }

        }
