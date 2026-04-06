import { Page } from '@playwright/test';

export class BlogPage {

constructor(private page: Page){}

async open(){
 await this.page.goto('/')
}

async openSearch(){
 await this.page.locator('input[type="search"]').first().click()
}

async search(term:string){
 await this.page.fill('input[type="search"]',term)
 await this.page.keyboard.press('Enter')
}

async resultsVisible(){
 return this.page.locator('article').count()
}

}