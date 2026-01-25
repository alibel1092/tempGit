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

            //обновить название статьи
        async UpdateArticle(title) {
            await this.articleTitle.fill(title + '22');
            await this.updateButton.click();
            }

        }
