var assert = require('assert');
const { default: pause } = require('webdriverio/build/commands/browser/pause');
describe('webdriver.io page', () => {
     
    it('should have the right title' , () => {
        browser.url('https://v5.webdriver.io/');
        var title = browser.getTitle();
        assert(title, 'WebdriverIO - WebDriver bindings for Node.js');
    }); 


    it('should demonstrate the addValue command', async ()=> {
    await browser.url('https://v5.webdriver.io/')
    
    let input = await $('#search_input_react')
    await input.addValue('test')
    await browser.pause(4000)
    await input.addValue(123)
    await browser.pause(3000)

    value = await input.getValue()
    assert(value === 'test123') // true

    
})

    it('Should demenstrate setValue command', async () => {
        await browser.url('https://v5.webdriver.io/')
        const elem = $('#search_input_react');
        await elem.setValue('test123');
        browser.pause(2000);
    })

    it('Should demonstrate the click command', async () => { 
        await browser.url('https://v5.webdriver.io/')
        const blogButton = $('[href="/help.html"]')
        await browser.pause(2000);
        await blogButton.click()
        await browser.pause(2000);
        const guideButton = $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]')
        await guideButton.click()
        await browser.pause(2000);
    })
    it('Should demonstrate the getAttribute command', async () => { 
        await browser.url('https://v5.webdriver.io/');
        const input = await $('#search_input_react');
         let attr = await input.getAttribute('title');
         console.log("Title attribute is:" + attr); //outputs: "Search"
        
         await input.setValue('test123');
         attr = await input.getValue('value') // in this section getAttribute('value') is returning null
         console.log("Value attribute is: " + attr);//outputs :test123
         
        

        
    })

   



});

